import type { AppSpec, AppId, PageSpec, PreviewState } from './types.js';
import { APPS } from './data.js';
import { renderPhone, renderSidebar, renderInspector } from './render.js';

const root: HTMLElement = document.getElementById('app') as HTMLElement;
const state: PreviewState = {
  appId: 'lightbearing',
  pageIndex: 0,
  deviceWidth: 390,
  light: false,
  status: 'normal',
  activeTab: 0,
  sheet: false,
  toast: ''
};
function currentApp(): AppSpec {
  return APPS.find((app: AppSpec) => app.id === state.appId) || APPS[0];
}
function currentPage(): PageSpec {
  const app: AppSpec = currentApp();
  return app.pages[state.pageIndex] || app.pages[0];
}
function option(value: string, label: string, selected: boolean): string {
  return '<option value="' + value + '" ' + (selected ? 'selected' : '') + '>' + label + '</option>';
}
function render(): void {
  const app: AppSpec = currentApp();
  const page: PageSpec = currentPage();
  const glow: string = app.id==='lightbearing' ? 'rgba(255,188,107,.17)' : app.id==='framemori' ?
   'rgba(255,148,113,.16)' : app.id==='voxcarve' ? 'rgba(175,157,255,.18)' : 'rgba(179,240,124,.16)';
  document.body.dataset.theme = state.light ? 'light' : 'dark';
  const toolbar: string =
    '<div class="stage-head"><div><h1>' + app.cnName + ' · ' + page.title + '</h1><p>' +
    app.name + ' / ' + page.id + ' · HTML + TypeScript 高保真交互设计稿</p></div><div class="controls">' +
    '<select class="select" aria-label="手机宽度" data-control="width">' +
      option('360','360 vp',state.deviceWidth===360) +
      option('390','390 vp',state.deviceWidth===390) +
      option('430','430 vp',state.deviceWidth===430) +
    '</select><select class="select" aria-label="页面状态" data-control="status">' +
      option('normal','正常态',state.status==='normal')+
      option('empty','空状态',state.status==='empty')+
      option('loading','加载中',state.status==='loading')+
      option('error','错误态',state.status==='error')+
    '</select><button class="toolbar-btn" data-act="theme">' + (state.light ? '☾ 深色' : '☼ 浅色') + '</button></div></div>';
  root.innerHTML = '<main class="workspace" style="--accent:' + app.primary + ';--accent2:' +
    app.secondary + ';--glow:' + glow + '">' +
    renderSidebar(APPS,state) + '<section class="stage">' + toolbar +
    '<div class="stage-content"><div class="phone" style="--phone-width:' + state.deviceWidth + 'px">' +
    renderPhone(app,page,state) + '</div></div>' +
    '<p class="footer-hint">演示视觉与交互层，不展示真实日轨/地图/音频识别/电脑控制结果　·　键盘 ← → 可切换页面</p>' +
    '</section>' + renderInspector(app,page) + '</main>';
}
function showToast(message: string): void {
  const old: HTMLElement | null = document.querySelector<HTMLElement>('.toast');
  if (old) old.remove();
  const toast: HTMLDivElement = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2800);
}
document.addEventListener('click', (event: MouseEvent) => {
  const target: EventTarget | null = event.target;
  if (!(target instanceof Element)) return;
  const element: HTMLElement | null = target.closest<HTMLElement>('[data-act]');
  if (!element) return;
  const act: string = element.dataset.act || '';
  if (act==='app') {
    const nextApp: string = element.dataset.app || '';
    if (nextApp==='lightbearing'||nextApp==='framemori'||nextApp==='voxcarve'||nextApp==='macroloom') {
      state.appId=nextApp; state.pageIndex=0; state.activeTab=0; state.status='normal'; state.sheet=false; render();
    }
  } else if(act==='page') {
    const index: number = Number(element.dataset.index);
    if(Number.isInteger(index) && index>=0 && index<currentApp().pages.length) {
      state.pageIndex=index;state.activeTab=0;state.status='normal';state.sheet=false;render();
    }
  } else if(act==='next'||act==='prev') {
    const total: number = currentApp().pages.length;
    state.pageIndex=(state.pageIndex + (act==='next'?1:-1)+total)%total;
    state.activeTab=0;state.status='normal';state.sheet=false;render();
  } else if(act==='sheet') {
    state.sheet=true; render();
  } else if(act==='close-sheet') {
    state.sheet=false; render();
  } else if(act==='normal') {
    state.status='normal';render();
  } else if(act==='theme') {
    state.light=!state.light;render();
  } else if(act==='tab') {
    state.activeTab=Number(element.dataset.index)||0;render();
  } else if(act==='toggle') {
    const on: boolean = element.classList.toggle('on');
    element.setAttribute('aria-pressed',on?'true':'false');
  } else if(act==='demo') {
    showToast((element.dataset.label||'控件')+'：仅展示交互反馈，不执行实际系统功能');
  }
});
document.addEventListener('change', (event: Event) => {
  const element: EventTarget | null = event.target;
  if (!(element instanceof HTMLSelectElement)) return;
  if (element.dataset.control==='width') {
    const value: number = Number(element.value);
    if(value===360||value===390||value===430){state.deviceWidth=value;render();}
  } else if(element.dataset.control==='status') {
    const next: string=element.value;
    if(next==='normal'||next==='empty'||next==='loading'||next==='error'){state.status=next;render();}
  }
});
document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
  if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
    const delta: number=event.key==='ArrowRight'?1:-1;
    const total: number=currentApp().pages.length;
    state.pageIndex=(state.pageIndex+delta+total)%total;
    state.status='normal';state.activeTab=0;render();
  }
});
render();
