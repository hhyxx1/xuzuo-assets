import { APPS } from './data.js';
import { renderPhone, renderSidebar, renderInspector } from './render.js';

const root = document.getElementById('app');
const state = {
  appId: 'lightbearing',
  pageIndex: 0,
  deviceWidth: 390,
  light: false,
  status: 'normal',
  activeTab: 0,
  sheet: false,
  toast: ''
};
function currentApp() {
  return APPS.find((app) => app.id === state.appId) || APPS[0];
}
function currentPage() {
  const app = currentApp();
  return app.pages[state.pageIndex] || app.pages[0];
}
function option(value, label, selected) {
  return '<option value="' + value + '" ' + (selected ? 'selected' : '') + '>' + label + '</option>';
}
function render() {
  const app = currentApp();
  const page = currentPage();
  const glow = app.id==='lightbearing' ? 'rgba(255,188,107,.17)' : app.id==='framemori' ?
   'rgba(255,148,113,.16)' : app.id==='voxcarve' ? 'rgba(175,157,255,.18)' : 'rgba(179,240,124,.16)';
  document.body.dataset.theme = state.light ? 'light' : 'dark';
  const toolbar =
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
function showToast(message): void {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2800);
}
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const element = target.closest('[data-act]');
  if (!element) return;
  const act = element.dataset.act || '';
  if (act==='app') {
    const nextApp = element.dataset.app || '';
    if (nextApp==='lightbearing'||nextApp==='framemori'||nextApp==='voxcarve'||nextApp==='macroloom') {
      state.appId=nextApp; state.pageIndex=0; state.activeTab=0; state.status='normal'; state.sheet=false; render();
    }
  } else if(act==='page') {
    const index = Number(element.dataset.index);
    if(Number.isInteger(index) && index>=0 && index<currentApp().pages.length) {
      state.pageIndex=index;state.activeTab=0;state.status='normal';state.sheet=false;render();
    }
  } else if(act==='next'||act==='prev') {
    const total = currentApp().pages.length;
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
    const on = element.classList.toggle('on');
    element.setAttribute('aria-pressed',on?'true':'false');
  } else if(act==='demo') {
    showToast((element.dataset.label||'控件')+'：仅展示交互反馈，不执行实际系统功能');
  }
});
document.addEventListener('change', (event) => {
  const element = event.target;
  if (!(element instanceof HTMLSelectElement)) return;
  if (element.dataset.control==='width') {
    const value = Number(element.value);
    if(value===360||value===390||value===430){state.deviceWidth=value;render();}
  } else if(element.dataset.control==='status') {
    const next=element.value;
    if(next==='normal'||next==='empty'||next==='loading'||next==='error'){state.status=next;render();}
  }
});
document.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
  if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
    const delta=event.key==='ArrowRight'?1:-1;
    const total=currentApp().pages.length;
    state.pageIndex=(state.pageIndex+delta+total)%total;
    state.status='normal';state.activeTab=0;render();
  }
});
render();
