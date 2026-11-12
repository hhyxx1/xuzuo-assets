#!/usr/bin/env node
/**
 * Xuzuo design kit audit. Node 18+; no extra packages. Run from repo root:
 *   node design/tools/check-kit.mjs
 * For a browser preview, open design/02-page-designs/preview/index.html locally.
 */
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,dirname,resolve} from 'node:path';
const root=process.cwd(),issues=[];
const read=p=>readFileSync(join(root,p),'utf8');
const assetManifest=JSON.parse(read('design/04-assets/manifests/assets.json'));
const pageManifest=JSON.parse(read('design/02-page-designs/page-manifest.json'));
function assert(v,msg){if(!v)issues.push(msg);}
function validateSVG(rel){
 const data=read(rel);
 assert(/^<svg\b/.test(data.trimStart()),rel+': missing SVG root');
 assert(/<\/svg>\s*$/.test(data),rel+': missing closing svg');
 assert(/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(data),rel+': missing XML SVG namespace');
 const tags=data.match(/<\/?[A-Za-z][^>]*>/g)||[];
 const opens=new Map();for(const m of tags){const match=m.match(/^<(\/?)([A-Za-z][\w-]*)/);if(!match)continue;const name=match[2];if(m.startsWith('</'))opens.set(name,(opens.get(name)||0)-1);else if(!m.endsWith('/>'))opens.set(name,(opens.get(name)||0)+1);}
 for(const [name,num] of opens)assert(num===0,rel+': unmatched <'+name+'> tags: '+num);
}
const actualAssets=assetManifest.assets.map(a=>a.path);
assert(actualAssets.length===new Set(actualAssets).size,'duplicate asset paths');
for(const a of assetManifest.assets){assert(existsSync(join(root,a.path)),a.path+': missing');if(existsSync(join(root,a.path)))validateSVG(a.path);}
for(const p of pageManifest.pages){assert(existsSync(join(root,p.designSvg)),p.designSvg+': missing');assert(existsSync(join(root,p.specMarkdown)),p.specMarkdown+': missing');if(existsSync(join(root,p.designSvg)))validateSVG(p.designSvg);}
assert(pageManifest.pages.length===42,'expected exactly 42 business screens, found '+pageManifest.pages.length);
for(const [app,n] of Object.entries({lightbearing:12,framemori:10,voxcarve:10,macroloom:10})){assert(pageManifest.pages.filter(p=>p.app===app).length===n,app+': expected '+n+' screens');}
assert(!assetManifest.assets.some(a=>a.app==='storopix'),'StoroPix must remain visually independent');
function walk(p){let out=[];for(const e of readdirSync(join(root,p),{withFileTypes:true})){const rel=join(p,e.name);if(e.isDirectory())out=out.concat(walk(rel));else out.push(rel)}return out;}
const markdown=walk('design').filter(p=>p.endsWith('.md'));
for(const path of markdown){
 const s=read(path);for(const m of s.matchAll(/\]\(([^)]+)\)/g)){const raw=m[1].split('#')[0];if(!raw||/^(https?:|mailto:)/.test(raw))continue;try{assert(existsSync(resolve(root,dirname(path),decodeURIComponent(raw))),path+': missing relative link '+raw)}catch(e){issues.push(path+': unparseable link '+raw)}}
}
const values=assetManifest.assets.map(a=>a.path+': '+createHash('sha256').update(readFileSync(join(root,a.path))).digest('hex'));
if(issues.length){console.error('FAIL '+issues.length+' issue(s):\n'+issues.join('\n'));process.exitCode=1}
else console.log('PASS: '+pageManifest.pages.length+' pages, '+assetManifest.assets.length+' independent assets, '+markdown.length+' design MD docs, no broken local links.');
console.log('SHA256 for asset source files (first 4):\n'+values.slice(0,4).join('\n'));
