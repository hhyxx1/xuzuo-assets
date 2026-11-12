
function h(value) {
  return String(value ?? '').replace(/[&<>"']/g, (x) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x] || x));
}
function icon(i) {
  const icons = ['◈','◉','⌁','▣','✦','◎','⊞','⌘','◌','▤','⌖','⚙'];
  return icons[i % icons.length];
}
function title(b) {
  return '<div class="panel-title"><span>' + h(b.title) + '</span>' + (b.subtitle ? '<small>' + h(b.subtitle) + '</small>' : '') + '</div>';
}
function row(text, subtitle, index) {
  return '<div class="list-row"><span class="row-icon">' + icon(index) + '</span><span class="copy"><strong>' +
    h(text) + '</strong>' + (subtitle ? '<small>' + h(subtitle) + '</small>' : '') + '</span><span class="chevron">›</span></div>';
}
function chartSvg() {
  return '<svg viewBox="0 0 344 150" role="img" aria-label="示例太阳高度或媒体走势曲线；不是实时计算结果">' +
    '<defs><linearGradient id="wave-fill" x1="0" y1="0" x2="0" y2="1"><stop stop-color="currentColor" stop-opacity=".3"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs>' +
    '<line class="grid" x1="10" y1="124" x2="334" y2="124"/><line class="grid" x1="10" y1="83" x2="334" y2="83"/><line class="grid" x1="10" y1="42" x2="334" y2="42"/>' +
    '<path d="M 10 124 C 62 102 75 60 124 43 S 214 28 253 63 S 310 114 334 124 L334 124 L10 124 Z" fill="url(#wave-fill)" style="color:var(--accent)"/>' +
    '<path class="line" d="M 10 124 C 62 102 75 60 124 43 S 214 28 253 63 S 310 114 334 124"/>' +
    '<circle cx="253" cy="63" r="6" fill="var(--accent)" stroke="#fff" stroke-width="2"/>' +
    '<text x="12" y="22" font-size="9" fill="#98b5c2">90°</text><text x="12" y="76" font-size="9" fill="#98b5c2">45°</text><text x="12" y="141" font-size="9" fill="#98b5c2">0°</text></svg>';
}
function renderBlock(b, app, page, index, activeTab) {
  const items = b.items || [];
  const values = b.values || [];
  const shell = '<section class="panel panel-pad" data-block="' + h(b.kind) + '">' + title(b);
  switch (b.kind) {
    case 'hero':
      return '<section class="hero panel"><span class="kicker">' + h(b.subtitle || app.name) +
        '</span><h3>' + h(b.title) + '</h3><p>' + h(items.join(' · ')) +
        '</p><button class="hero-btn" data-act="sheet">' + h(b.action || '开始探索') + '　↗</button></section>';
    case 'metrics':
      return shell + '<div class="metrics">' + items.map((it, i) =>
        '<div class="metric"><label>' + h(it) + '</label><strong>' + h(values[i] || '—') +
        '</strong><small>' + (i % 2 ? h(app.secondary) : h(app.primary)) + ' · 演示</small></div>').join('') + '</div></section>';
    case 'chart':
      return shell + '<div class="chart">' + chartSvg() + '<div class="chart-labels">' +
        (items.length ? items : ['06:00','09:00','12:00','15:00','18:00']).map((x) =>
          '<span>' + h(x) + '</span>').join('') +
        '</div><div class="demo-stamp">曲线结构演示 · 后续由真实算法/音频数据驱动</div></div></section>';
    case 'timeline':
      return shell + '<div class="timeline"><div class="bar"><i class="tick"></i></div></div>' +
        '<div class="timeline-labels"><span>' + h(items[0] || '开始') + '</span><span>' +
        h(items[items.length-1] || '结束') + '</span></div>' +
        '<div class="list" style="margin-top:13px">' + items.slice(0,6).map((it,i) =>
        '<div class="settings-row"><span>' + h(icon(i)) + '　' + h(it) + '</span><small>' +
        (i===2?'● 当前选择':'○') + '</small></div>').join('') + '</div></section>';
    case 'list':
      return shell + '<div class="list">' + items.map((it,i) =>
         row(it,values[i] || '',i + index)).join('') + '</div>' +
         (b.action?'<button class="secondary" data-act="sheet" style="margin-top:12px">' + h(b.action) + '</button>':'') + '</section>';
    case 'grid':
    case 'deck':
      return shell + '<div class="' + (b.kind === 'deck' ? 'grid3':'grid2') + '">' +
        items.map((it,i) => '<button class="tile" data-act="demo" data-label="' +
        h(it) + '"><span class="glyph">' + icon(i+index) + '</span>' + h(it) + '</button>').join('') +
        '</div><p class="muted" style="font-size:10px;margin-bottom:0">按钮可点击；这里不执行真实设备或媒体操作。</p></section>';
    case 'form':
      return shell + items.map((it,i) => '<div class="field"><label for="field-' + h(page.id) + '-' + i + '">' +
        h(it) + '</label><input id="field-' + h(page.id) + '-' + i + '" value="' + h(values[i] || '') +
        '" placeholder="请输入' + h(it) + '"></div>').join('') +
        '<button class="primary" data-act="sheet">预览本页操作流程　↗</button></section>';
    case 'calendar': {
      const week = ['一','二','三','四','五','六','日'];
      const cells = week.map((x)=>'<div class="day weekday">周' + x + '</div>').join('') +
        Array.from({length:35},(_,i)=>{
         const date = i-5; return date>0 && date<=30 ?
         '<button class="day ' + (date===20?'selected':'') + '" data-act="demo" data-label="11 月 '+date+' 日"><b>'+date+'</b><em>'+ (date%3===0?'黄金':date%4===0?'蓝调':'·')+'</em></button>' :
         '<div class="day" style="opacity:.2">·</div>';
        }).join('');
      return shell + '<div class="calendar">' + cells + '</div><p class="muted" style="font-size:10px">月历结构演示；真实极昼、缺失日期、时区异常须由业务逻辑提供。</p></section>';
    }
    case 'camera':
      return shell + '<div class="camera-viewport" role="img" aria-label="取景构图示意：此处替换为真实相机预览或许可摄影素材">' +
        '<span class="frame-figure">✦</span></div><div class="action-row" style="margin-top:13px"><button class="secondary" data-act="demo" data-label="上一帧">◀</button>' +
        '<button class="primary" data-act="demo" data-label="采集/播放模拟">◎　取景/播放演示</button><button class="secondary" data-act="demo" data-label="下一帧">▶</button></div>' +
        '<div class="demo-stamp">视觉占位 · 不调用真实相机或播放器</div></section>';
    case 'filmstrip':
      return shell + '<div class="filmstrip">' + (items.length?items:['01','02','03','04','05','06','07']).map((x,i) =>
        '<button class="frame '+(i===3?'selected':'')+'" data-act="demo" data-label="第 '+h(x)+' 帧">◈</button>').join('') +
        '</div><p class="muted" style="font-size:10px;margin:8px 0 0">可在组件层复用帧缩略图与选中边框。</p></section>';
    case 'waveform':
      return shell + '<div class="waveform" role="img" aria-label="用于页面布局的示意波形，不是录音波形">' +
        Array.from({length:50},(_,i)=>{
          const v = Math.round(8+58*Math.abs(Math.sin(i*1.83)*Math.cos(i*.49)));
          return '<i style="height:' + v + '%"></i>';
        }).join('') + '</div><div class="timeline-labels" style="margin-top:8px"><span>00:00</span><span>00:15</span><span>00:30</span><span>00:45</span></div>' +
        '<div class="action-row" style="margin-top:13px"><button class="secondary" data-act="demo" data-label="播放">▶　试听演示</button>' +
        '<button class="secondary" data-act="demo" data-label="选择片段">⌁　选择区间</button></div></section>';
    case 'map':
      return shell + '<div class="map" role="img" aria-label="地图图层示意，不是真实地图服务"><span class="pin">⌖</span><span class="disclaimer">地图视觉占位 · 未接入地理服务</span></div>' +
        '<div class="action-row" style="margin-top:12px"><button class="secondary" data-act="demo" data-label="地图定位">◎ 定位</button>' +
        '<button class="secondary" data-act="demo" data-label="切换图层">▧ 图层</button></div></section>';
    case 'compass':
      return shell + '<div class="compass" role="img" aria-label="演示朝向，不代表传感器实测数据"><span class="n">N</span><span class="e">E</span><span class="s">S</span><span class="w">W</span></div>' +
        '<div class="metrics"><div class="metric"><label>示例方位角</label><strong>238.6°</strong><small>西南方向</small></div>' +
        '<div class="metric"><label>示例高度角</label><strong>12.4°</strong><small>依据真实数据替换</small></div></div></section>';
    case 'settings':
      return shell + items.map((it,i) =>
        '<div class="settings-row"><span>' + h(it) + '</span>' +
        (i%3===2 ? '<button class="toggle on" data-act="toggle" aria-label="切换' + h(it) + '" aria-pressed="true"></button>':
        '<small>' + h(values[i] || '选择') + '　›</small>') + '</div>').join('') + '</section>';
    case 'progress':
      return shell + '<p class="muted" style="font-size:12px">以下为状态演示，不执行真实处理</p><div class="progress"><span style="width:' +
        h(values[0] || '38') + '%"></span></div><div class="list" style="margin-top:14px">' +
        items.map((x,i)=>'<div class="settings-row"><span>'+h(x)+'</span><small>'+(i===0?'✓':i===1?'进行中':'待处理')+'</small></div>').join('') +
        '</div><button class="secondary" style="margin-top:10px" data-act="demo" data-label="取消演示任务">停止演示</button></section>';
    case 'checklist':
      return shell + '<div class="list">' + items.map((it,i) =>
        '<label class="settings-row" style="cursor:pointer"><span><input type="checkbox" ' + (i<2?'checked ':'') + '>　' +
        h(it) + '</span></label>').join('') + '</div></section>';
    case 'export':
      return shell + '<div class="grid2">' + items.map((it,i) =>
        '<button class="tile '+(i===0?'selected':'')+'" data-act="demo" data-label="'+h(it)+'"><span class="glyph">'+icon(i)+'</span><strong>'+h(it)+'</strong><small class="muted">'+h(values[i] || '导出格式')+'</small></button>').join('') +
        '</div><button class="primary" style="margin-top:12px" data-act="sheet">查看导出规格及验证要求</button></section>';
    case 'pair':
      return shell + '<div style="padding:24px;text-align:center;background:linear-gradient(145deg,#0b2031,#234d5d);border-radius:15px">' +
        '<div style="font-size:60px">▣　⌁　▯</div><p style="font-size:12px">在 Windows Agent 端生成配对码</p>' +
        '<div style="font-size:31px;letter-spacing:.28em;color:var(--accent);font-weight:800">847296</div><small class="muted">示例配对码 · 不可实际连接</small></div>' +
        '<button class="primary" style="margin-top:13px" data-act="sheet">连接流程预览</button></section>';
    case 'tabs':
      return shell + '<div class="pillbar">' + items.map((it,i) =>
        '<button class="' + (i===activeTab?'active':'') + '" data-act="tab" data-index="' + i + '">' + h(it) + '</button>').join('') +
        '</div><p class="muted" style="font-size:10px">切换分段控件会更新选中态，业务数据需要在 ArkUI 中接入。</p></section>';
    case 'editor':
      return shell + items.map((it,i) =>
        '<div class="field"><label>'+h(it)+'</label><input type="range" min="-100" max="100" value="'+h(values[i] || '0') +
        '" aria-label="'+h(it)+'"></div>').join('') + '</section>';
    default:
      return shell + '<p class="muted">组件设计待补充</p></section>';
  }
}
function renderBody(app, page, state) {
  if(state.status==='loading') return '<div class="screen-body"><div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div><p class="muted">Loading 状态 · 任务可取消与超时处理应由 ArkUI 实现</p></div>';
  if(state.status==='error') return '<div class="empty"><span class="illus">⚠</span><b>无法加载此页面的数据</b><p>这里演示明确错误、恢复建议和重试操作。不显示伪造的成功结果。</p><button class="primary" data-act="normal">重试预览</button></div>';
  if(state.status==='empty') return '<div class="empty"><span class="illus">◇</span><b>还没有任何内容</b><p>请创建第一项内容。空状态视觉素材以后按提示词补图，而不是把整个 UI 变成静态图片。</p><button class="primary" data-act="normal">返回正常页面</button></div>';
  return '<div class="screen-body">' + page.blocks.map((b,i)=>renderBlock(b,app,page,i,state.activeTab)).join('') + '</div>';
}
export function renderPhone(app, page, state) {
 const list = app.pages;
 const index = list.findIndex((x)=>x.id===page.id);
 const navIndexes = [0,1,2,3];
 const shortLabels = app.id==='lightbearing' ? ['首页','轨迹','寻光','机位'] :
  app.id==='framemori' ? ['项目','拍摄','时间轴','单帧'] :
  app.id==='voxcarve' ? ['项目','导入','文字稿','音轨'] : ['首页','配对','面板','编辑'];
 return '<div class="phone-top">08:36　HarmonyOS · UI Preview</div><div class="app-surface">' +
  '<header class="app-header"><div><div class="eyebrow">'+h(app.cnName)+' · '+h(app.name.toUpperCase())+'</div><h2>'+h(page.title)+'</h2></div>' +
  '<div class="app-top-actions"><button class="app-action" data-act="prev" aria-label="上一页">‹</button>' +
  '<button class="app-action" data-act="next" aria-label="下一页">›</button><button class="app-action" data-act="sheet" aria-label="更多操作">⋯</button></div></header>' +
  '<div class="app-subline">'+h(page.subtitle)+'</div>' + renderBody(app,page,state) +
  '<nav class="bottom-nav">' + navIndexes.map((i)=>'<button class="'+(index===i?'active':'')+'" data-act="page" data-index="'+i+'" aria-label="'+h(shortLabels[i])+'">' +
  '<span>'+icon(i)+'</span>'+h(shortLabels[i])+'</button>').join('') + '</nav></div>' +
  (state.sheet ? '<div class="sheet-backdrop" data-act="close-sheet"><div class="sheet" role="dialog" aria-label="设计预览说明" onclick="event.stopPropagation()"><h3>交互预览 · '+h(page.title)+'</h3>' +
  '<p>此处只展示交互结构与状态，并不访问相机、定位、音频转写、地图服务、Windows Agent 或真实天文计算。正式开发时，将 UI 绑定到 ArkTS 业务接口。</p>' +
  '<button class="primary" data-act="close-sheet">明白了</button></div></div>' : '');
}
export function renderSidebar(apps, state) {
 const app = apps.find((x)=>x.id===state.appId) || apps[0];
 return '<aside class="sidebar"><div class="brand"><span class="mark">X</span><span><strong>序作 Studio</strong><small>HARMONYOS · TYPESCRIPT DESIGN</small></span></div>' +
  '<div class="section-caption">同风格四款 · 选择应用</div><div class="apps-strip">' +
  apps.map((a)=>'<button class="app-choice '+(a.id===state.appId?'active':'')+'" data-act="app" data-app="'+h(a.id)+'" style="--app-accent:'+h(a.primary)+'">' +
  '<span class="app-symbol">'+h(a.symbol)+'</span><span><strong>'+h(a.cnName)+' / '+h(a.name)+'</strong><small>'+h(a.tagline)+'</small></span></button>').join('') +
  '</div><div class="section-caption">'+h(app.name)+' · '+app.pages.length+' 个页面</div><div class="screen-nav">' +
  app.pages.map((p,i)=>'<button class="screen-link '+(i===state.pageIndex?'active':'')+'" data-act="page" data-index="'+i+'"><span class="num">'+String(i+1).padStart(2,'0')+'</span>'+h(p.title)+'</button>').join('') +
  '</div><div class="sidebar-bottom">共 42 个独立业务页面<br>代码：TypeScript · 组件可复用<br>StoroPix：视觉独立，不在本套设计内</div></aside>';
}
export function renderInspector(app, page) {
 const kinds = Array.from(new Set(page.blocks.map((b)=>b.kind)));
 return '<aside class="inspector"><h3>DESIGN INSPECTOR</h3><p>设计稿源模型：TypeScript<br>目标实现：HarmonyOS 7 · API 26</p>' +
 '<div class="inspector-box"><h4>当前页面 · '+h(page.title)+'</h4><p>'+h(page.description)+'</p><div class="demo-stamp">页面编号：'+h(app.id+'/'+page.id)+'</div></div>' +
 '<div class="inspector-box"><h4>统一视觉系统</h4><div class="swatches">' +
 ['#0B1622','#152836','#1C3546',app.primary,app.secondary].map((s)=>'<span class="swatch" title="'+s+'" style="background:'+s+'"></span>').join('') +
 '</div><p>基础 4vp 间距系统 · 12–20vp 圆角 · 48vp 触控目标。</p></div>' +
 '<div class="inspector-box"><h4>本页可复用组件</h4><ul class="spec-list">'+kinds.map((k)=>'<li>'+h(k)+'</li>').join('')+'</ul></div>' +
 '<div class="inspector-box"><h4>交互状态覆盖</h4>'+['Normal / Empty / Loading / Error','点击反馈与可取消路径','通用导航与组件外观','弱网与设备不可用降级'].map((x)=>'<div class="note">'+h(x)+'</div>').join('')+'</div>' +
 '<div class="inspector-box"><h4>ArkTS 迁移提醒</h4><p>页面模型、状态和事件接口按静态类型组织；本 HTML 的 DOM、CSS、SVG 是预览适配层，不能直接作为原生 .ets 编译。真正 UI 应用 ArkUI 的 @Component、@State 或新状态管理方式逐项重建。</p></div>' +
 '</aside>';
}
