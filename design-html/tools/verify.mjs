import { APPS } from '../dist/data.js';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const expected = {lightbearing:12,framemori:10,voxcarve:10,macroloom:10};
let total=0;
for(const app of APPS){
  if(app.pages.length!==expected[app.id])throw new Error('Unexpected screen count: '+app.id);
  const seen=new Set();
  for(const p of app.pages){
    if(seen.has(p.id))throw new Error('Duplicate page id: '+app.id+'/'+p.id);
    seen.add(p.id);total++;
    if(!p.blocks.length || p.blocks.some(b=>!b.kind||!b.title))throw new Error('Empty content block');
    const ref=resolve('docs/pages/'+app.id+'/'+String(app.pages.indexOf(p)+1).padStart(2,'0')+'-'+p.id+'.md');
    if(!existsSync(ref))throw new Error('Missing page spec: '+ref);
  }
}
if(total!==42)throw new Error('Expected 42 pages, got '+total);
const html=readFileSync('index.html','utf8');
for(const required of ['dist/main.js','styles.css']){
  if(!html.includes(required))throw new Error('Missing HTML reference '+required);
}
console.log('PASS 42/42 pages; unique ids, nonempty blocks, page specs and HTML links');
