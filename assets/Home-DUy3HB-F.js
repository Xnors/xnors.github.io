var He=Object.defineProperty;var je=(s,t,e)=>t in s?He(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var S=(s,t,e)=>je(s,typeof t!="symbol"?t+"":t,e);import{a as H,_ as ee}from"./_plugin-vue_export-helper-C5sZm8X9.js";import{r as Y,o as ge,c as F,a as u,b as $e,u as _e,d as C,w as L,e as re,f as M,g as G,h as ke,i as Ze,v as Ie,t as U,F as Ee,j as Ue,n as Oe,k as Qe}from"./index-BWrRLrIL.js";async function Ve(){const s=localStorage.getItem("refreshToken");if(!s)return!1;try{const t=await H.post("/token/refresh/",{refresh:s});return t.data.access?(localStorage.setItem("accessToken",t.data.access),!0):!1}catch(t){return console.error("刷新 Token 失败",t),clearAuthData(),!1}}const We=async()=>{if(!localStorage.getItem("accessToken"))return!1;try{return(await H.get("/islogin/")).data.is_login===!0}catch(t){if(console.error("登录状态检查失败",t),t.response&&t.response.status===401&&await Ve())try{return(await H.get("/islogin/")).data.is_login===!0}catch(o){return console.error("重试登录状态检查失败",o),clearAuthData(),!1}return clearAuthData(),!1}},Ye={class:"nav-container"},Je={class:"nav-links"},Ge={key:0},Xe={__name:"TopNav",setup(s){let t=Y(!1);return ge(async()=>{t.value=await We(),t.value?(console.log("用户已登录"),H.get("/space/").then(e=>{console.log("用户信息: ",e.data)}).catch(e=>{console.log(e)})):console.log("用户未登录")}),window.addEventListener("scroll",()=>{const e=document.querySelector("nav");window.pageYOffset>100?(e.style.background="rgba(10, 10, 10, 0.5)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.5)"):(e.style.background="rgba(10, 10, 10, 0.1)",e.style.boxShadow="none")}),(e,o)=>{const i=re("router-link");return M(),F("nav",null,[u("div",Ye,[o[4]||(o[4]=u("div",{class:"logo"},"Xnors Studio",-1)),u("ul",Je,[o[1]||(o[1]=u("li",null,[u("a",{href:"#services"},"服务")],-1)),o[2]||(o[2]=u("li",null,[u("a",{href:"#team"},"团队")],-1)),o[3]||(o[3]=u("li",null,[u("a",{href:"#contact"},"联系")],-1)),_e(t)?$e("",!0):(M(),F("li",Ge,[C(i,{to:"login"},{default:L(()=>[...o[0]||(o[0]=[G("注册/登录",-1)])]),_:1})]))])])])}}},Ke=ee(Xe,[["__scopeId","data-v-fa1d78a7"]]),Re={},et={class:"hero"};function tt(s,t){return M(),F("section",et,[...t[0]||(t[0]=[u("div",{class:"hero-content"},[u("h1",{class:"xnors-logo"},"异或 · 工作室"),u("p",{class:"tagline"},"求同存异")],-1)])])}const ot=ee(Re,[["render",tt],["__scopeId","data-v-675bd003"]]),st={},rt={class:"services",id:"services"};function nt(s,t){return M(),F("section",rt,[...t[0]||(t[0]=[ke('<div class="container"><h2 class="section-title fade-in">我们的服务</h2><div class="services-grid"><div class="service-detail-card fade-in"><div class="service-detail-icon">🕷️</div><h3>爬虫开发</h3><p> 定制化爬虫解决方案，支持反爬虫策略，高效稳定地采集各类网站数据。 </p><div class="tech-tags"><span class="tech-tag">Python</span><span class="tech-tag">Scrapy</span><span class="tech-tag">Selenium</span></div></div><div class="service-detail-card fade-in"><div class="service-detail-icon">📊</div><h3>数据分析</h3><p>从原始数据中提取有价值的信息，提供可视化报告和决策支持。</p><div class="tech-tags"><span class="tech-tag">Pandas</span><span class="tech-tag">NumPy</span><span class="tech-tag">Matplotlib</span></div></div><div class="service-detail-card fade-in"><div class="service-detail-icon">🌐</div><h3>网页制作</h3><p>响应式网站设计，注重用户体验，打造现代化的网络形象。</p><div class="tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">CSS3</span><span class="tech-tag">JavaScript</span></div></div><div class="service-detail-card fade-in"><div class="service-detail-icon">⚙️</div><h3>后端开发</h3><p>构建高性能、可扩展的服务器架构，确保系统稳定运行。</p><div class="tech-tags"><span class="tech-tag">Node.js</span><span class="tech-tag">Django</span><span class="tech-tag">MySQL</span></div></div></div></div>',1)])])}const it=ee(st,[["render",nt]]),at="/assets/fexcode-DMOrT1gv.jpg",lt="/assets/skymaozi-nhs1gBWB.jpg",ct="/assets/codeseed-DQNZieAx.jpg",dt="/assets/xmtm-CuJgfDVO.jpg",pt="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABpAGoDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAgMEBQYHCAEACf/EADcQAAECBQMCBQEGBQUBAAAAAAECAwAEBQYREiExB0ETIlFhoXEIFBUygZEWUnKxwSMkQ9Hw8f/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAQIDAAb/xAAhEQACAgIDAAMBAQAAAAAAAAAAAQIRAyEEEjETIkEUUf/aAAwDAQACEQMRAD8AnvRDqNIz0nLEPDBAQd874jQdKqaV6FIWFAnO3EfJ3oF1PeoNyolX31eE6dSEk7Z4zH0c6VXJ+J01BUrJKdQ39yYU5V0bTGEE2rQtvg66gtXqrPwIqHrG6G7MnM7gpAxFuXl5prPrg/AinOtY8S0JhpG6yB7xGGSi02dki5qpN0jBFMpi63e6pVpOVOuqBUBxviLsluhsyy0lbatSiN/p6cxW9j0qsyd7zH3WnPPu+KVBaU5CRmNYWnUHUS7aZ5QZeOApOQR/aDMmZNaRlDGm7opV6wJ+mjCmFHHcDt2+Ib1U6Yad8MsqJ9Y1u1LUyfwlxbKyRjkGG+d6f0xx4uBhBJ3yOPSAnk7pdpPYV0MwsUKbIKgwcQcimlG6xue3pGh6laMpKyx0aB5TtxFJ3etm31rW6RgqOMRZNSdIpKPVWM6acCo4G8BMk2y4CvHvEfneocs0lWlYH1iJ1nqUFAhC9/b/AOQSsbS2Dt36WS/Psy+AFgBOe8N5uFGT/uD+8VBM3jNTedDhOfSEP4jPnfxDvF3FkaItJVldMqcu+w5ocbWkg+2cYj6l/Zrnl1C3JeYWrJLYBBPzHyNl5oOzbJJONaR8iPp50Xv6nWXacsJxQSQhOlIIzxn0ivMxNtNItgmlpl/XW8l2YBBz2ydhsBDGqzGrwknUTKcyeAVKI787b7xTc91RqXU6+JC36M0pKJ14MlYySEkjUduNt+Y1NWW5WiNStBp4H3SUZDbro3K1gDJ/fJ5OOITSlKNsPj1k/aozzcq6VZTMxJUqQaFRUCPEAGUp9ScfEUzUpyeqfjIl3MvE41I2GfeJ11pnJh6eXKy4LXiKKVuo/Nj0z9YRSNttUeiypCSNRB1K5P0gf5ZP9NlCK8FfTizZ6mrRN1GddKSArSTt/eJndVyOUyTBYVqAHMN05UESVD17kgbbxCLnr6n6cg6sDHHEaxkiaQirfUOdDiRrykxXV5TBuZhRcURj07Q5PTLU4hRK8EcQyVd0Nyqwg6fKTBWC5SMskai2VjUrWWchKuDyTvDem1SUkq3x+v8AmDJ+4HxPFpB21HPeFDdYcKCD/eHyhpCi9CWVozbS8ad8w6iQR/JDe1Olbil+hhZ+I+/zEOJKor7pj0+XccyioTAxItKx/Urkd/SNFsTADKfFUSjHlGT5R2HvgRBrELFPtOSAwgYCyPU+8OE9caGmlaFhWAT+sGtJraBla8Zq/wCxzIyj15Vapka3peUKWVnhK1bZHviNL3PLppVvKm0ZceWkMttj8zjh5I9oxx9ii7kuTdbJXjUlKee+Y13WaomadK0LB8FjSgE8KPJHoc7x5bmJRbS/WNMO6KWuOylVCcl2FKCl6g48rGcnnHP6QG8qQhCJaUQnCykaYmKJxtmdbYX51BWFHuTyfkxAupFzCRfedQoamhpB9O0LYR/0YoaLwLcpRW5YLCnQAFEdjzFZXG4EyQQo48sKazW1zEgt4vayTkmK7ue4i5jDu2AMfpBUYEjZMVVbDy0J/LnbfiCZ+oFyUypWVEEbfTMR+ang4vOckn1hNPzx+7FAVgEHJHOMYgrF9ZWVkri0RKeqDUm3MTKyAdRCQdsnHAEGUua+8MB1zKcpCtMO/VWmUK1LRpEulQdqc0A+oE5KAR6dtormnXCG0oaKiUjbJPb94fwdpN+CPIurdFgNPtOpLbKSpxXxAPuMx/N8QfblVlDLLLaUhRHmJ3J/7gpdwy4WoeIjYxemZJuiOSlzvS9GaY1kaUgw2puh5ailSjjPrCD/AIEjPIhrfd0u4T6RsU0ae+x5dS5G9JyULuluYQClPvzmNmqvNbbrSFrAUtZCt+43zHzc6F3B/DvUemPLXpadUG1HgDJjdt605bS5F+UWSlSQs49wN/8AMed5sG5UNOO1Q6t3q1/E2XHAElRUd+B6xVXUy60TlMqL6XMhbpSk+2YZZqpuN3DNIWtQW0gg57jjH+Yglz1cOUZxsLyrxiSPQZhakqGOg9dxFdOU3qO49eIg1dqB8TGomFTU5hlYKsk5iMVF9bj5JMEpJErfgJM4dZJO0GJmQ4halnygAb+nEIUMLfcAG5JEHXbJro1rLdX5VqVpHbfGR8QRBJtJFZPrF2Vjc9WmaxWJh+ZcLigdCQTkJSNgB+gENqFlPBgtaisk5JPOfaAgnOIdQ+saEmRpt0PEpX35JlTaFbK75hAqadUonxjucQVpGMmObRezEkpJCB/TDM4dDxUd94dyoeED7Qyzudo0RkxwlquZNbb7SiHWlBYIHGD6xv3ol1Np/UygU8qfCp1tsMutFWSFAkDA+gEfOlKsJwCdX12/aJV046hVLpxc8lVpB4t+E6FON52WM4OR9IC5GLugzDNRezdHUy2vw+pzUyw2NK06Tp3wYoSry7rgdQUlK9RUoH9x8Rp2i9R7a6j0BmdZmmiZpIU42rlCsYV8gxWtwWVLz866JVQUgKPmEIvjcW7Q3g06KImA6DgbQhclXXl7Ji4HOmbrZJW3tnb3jgsdiVOpaU4HPqInXgZCDf4QW27ccW6lakajkY25OcYhj+0TPMyX4bSGj/qoT4rwHY8AY+mIu8Lp1sUhyr1FxuWkZYFSEqxqWrfGB9frGRL5ud277lnak4TpdWdIPZOdh+0F8eNytg3KajGvwjmMbR4cwYoAkkbAniPAYhwIQC8gQXmDHTzBWqOOpEjXsMe0Nc3hWYdXxgbdjDYtlSySI2egcQE47QIKBTkQJ9BQSeRBOTpjjRa8H2g3jVraz+Hzi2AeU5yItnpH10m5e6KfLV2bKpF54JccVwgE8mKI14J2jocIGBtnn3gPLijO9BOPNKDTPrH1Al6FTrNYmmFtpVMpCmnMjCk45BjI3Unqmae4qUouhxY2W4dxnHbeKLV1guiYpMpTn6m8/KyqdDKFqJ0jJOPfmGdy6pl8ZWRqOSSYXfyNSuxquauo53bd9VuBSUT8446lJ8recJH6d4jBOTmPTM6t90qMACyrcwxxY1FWL8uV5GCjhOI54gB3gDrgwMd42BdUccOIKgfhk75jug/+ETRxJHdue8N77wQDjY94cJjgQyzff6xvIxEzzxXkDmCdUdPMBjBvZc8TiPR6PRQ4GFbR7VAI9HE2D1QIK2gqBDiJR1oEVnO8BUSTkxxUc7RYgXNJykCDPDgLH5YNixc//9k=",ht="/assets/Narci-B-P0n0y2.jpg",ut="/assets/baichuanbyte-Dx--U616.jpg",te={CSSStyleSheet:!0,CSSContainer:CSS.supports("container-type","size")};try{new CSSStyleSheet}catch{te.CSSStyleSheet=!1}const mt=(s,t)=>{for(const e of t){if(!te.CSSStyleSheet){const i=document.createElement("style");i.textContent=e,s.insertBefore(i,s.firstChild);continue}const o=new CSSStyleSheet;o.replaceSync(e),s.adoptedStyleSheets=[...s.adoptedStyleSheets,o]}},w=s=>{const t={},e={};for(const o in s){let i=s[o];const n={key:o,sync:!0,types:[]};o.startsWith("$")&&(n.key=o.slice(1),n.sync=!1),Array.isArray(i)&&(n.types=i,i=n.types[0]),t[n.key]=i,e[n.key]={sync:n.sync,def:i,to:l=>{switch(typeof i){case"string":const a=String(l);return n.types.length>0?n.types.includes(a)?a:n.types[0]:a;case"number":const c=Number(l);return isNaN(c)?i:c;case"boolean":return typeof l=="boolean"?l:l==="true"}}}}return Object.defineProperty(t,"$meta",{value:e}),t},oe=s=>s,gt=`
:host{
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
*{
  outline: none;
}
`,b=s=>{var i;const t={observedAttributes:[],upperPropKeys:{},metaProps:((i=s.props)==null?void 0:i.$meta)??{},events:[]};for(const n in t.metaProps??{}){const l=n.toLowerCase();t.observedAttributes.push(l),t.upperPropKeys[l]=n}for(const n in s.events){const l=`on${n}`;t.observedAttributes.push(l),!(l in HTMLElement.prototype)&&t.events.push(l)}const e=new Map;class o extends HTMLElement{static define(l){customElements.define(l,this)}constructor(){var f;super();const l=this.attachShadow({mode:"open"});l.innerHTML=s.template??"",mt(l,[gt,...s.style?Array.isArray(s.style)?s.style:[s.style]:[]]);const a={...s.props};let c;const d={};for(const m in a){const g=this[m];g!==void 0&&(d[m]=g),Object.defineProperty(this,m,{configurable:!0,get:()=>{var h;const p=c==null?void 0:c[m];return!p||typeof p=="function"||!p.get?a[m]:(h=p.get)==null?void 0:h.call(p,a[m])},set:p=>{var $;const h=t.metaProps[m],y=p===void 0?h.def:h.to(p);if(h.sync){const k=m.toLowerCase(),E=this.getAttribute(k),T=String(y);if(y===h.def&&E!==null)return this.removeAttribute(k);if(y!==h.def&&E!==T)return this.setAttribute(k,T)}if(y===this[m])return;const v=a[m];a[m]=y;const x=c==null?void 0:c[m];if(x)try{typeof x=="function"?x(y,v):($=x.set)==null||$.call(x,y,v)}catch(k){throw a[m]=v,k}}})}const r={};for(const m of t.events){const g=m;typeof this[g]=="function"&&(r[m]=this[g]),Object.defineProperty(this,m,{configurable:!0,get:()=>r[m]??null,set:p=>r[m]=typeof p=="function"?p:void 0}),this.addEventListener(m.slice(2),p=>r[m]&&r[m].bind(this)(p))}c=(f=s.setup)==null?void 0:f.call(this,l);for(const m in(c==null?void 0:c.expose)??{})Object.defineProperty(this,m,{get:()=>{var g;return(g=c==null?void 0:c.expose)==null?void 0:g[m]}});for(const m in d)this[m]=d[m];this.connectedCallback=this.disconnectedCallback=this.adoptedCallback=this.attributeChangedCallback=void 0,e.set(this,c)}connectedCallback(){var l,a;(a=(l=e.get(this))==null?void 0:l.onMounted)==null||a.call(l)}disconnectedCallback(){var l,a;(a=(l=e.get(this))==null?void 0:l.onUnmounted)==null||a.call(l)}adoptedCallback(){var l,a;(a=(l=e.get(this))==null?void 0:l.onAdopted)==null||a.call(l)}attributeChangedCallback(l,a,c){if(t.events.includes(l))return this[l]=c?new Function("event",c):null;this[t.upperPropKeys[l]]=c??void 0}}S(o,"observedAttributes",t.observedAttributes);for(const n in s.methods)o[n]=s.methods[n];return o},ft="s-alert",vt=w({type:["info","success","warning","error"]}),xt=`
:host{
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  line-height: 22px;
  font-size: .875rem;
  font-weight: 500;
  min-height: 48px;
  box-sizing: border-box;
  border-radius: 4px;
  color: var(--s-color-on-secondary-container, #354A53);
  background: var(--s-color-secondary-container, #CFE6F1);
}
:host([type=success]){
  color: var(--s-color-on-success-container, #002111);
  background: var(--s-color-success-container, #92f7bc);
}
:host([type=warning]){
  color: var(--s-color-on-warning-container, #221b00);
  background: var(--s-color-warning-container, #ffe169);
}
:host([type=error]){
  color: var(--s-color-on-error-container, #93000A);
  background: var(--s-color-error-container, #FFDAD6);
}
svg{
  width: 24px;
  height: 24px;
  fill: currentColor;
  margin-right: 8px;
  margin-left: -2px;
  box-sizing: border-box;
  flex-shrink: 0;
  display: none;
}
.text{
  flex-grow: 1;
  min-width: 0;
}
:host(:not([type])) .info,
:host([type=success]) .success,
:host([type=warning]) .warning,
:host([type=error]) .error{
  display: block;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-right: 8px;
  margin-left: -2px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-right: -2px;
  margin-left: 8px;
}
::slotted(:is(svg, s-icon)){
  fill: currentColor;
  color: currentColor;
  width: 24px;
  height: 24px;
}
::slotted(:is(s-button[slot=end], s-icon-button[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
  color: currentColor;
}
::slotted(s-button[slot=end]){
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: .8125rem;
}
::slotted(s-icon-button[slot=end]){
  width: 32px;
  padding: 5px;
}
`,bt=`
<slot name="start">
  <svg viewBox="0 0 24 24" class="info">
    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="success">
    <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="warning">
    <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
  </svg>
  <svg viewBox="0 0 24 24" class="error">
    <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
  </svg>
</slot>
<div class="text" part="text"><slot></slot></div>
<slot name="end"></slot>
`;class yt extends b({style:xt,template:bt,props:vt}){}yt.define(ft);const wt="s-appbar",$t=`
:host{
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
  container-name: s-appbar;
  container-type: inline-size;
  background: var(--s-color-surface-container, #ECEEF0);
}
::slotted([slot=navigation]){
  margin-left: 4px;
  flex-shrink: 0;
}
::slotted([slot=logo]){
  margin-left: 12px;
  height: 32px;
  color: var(--s-color-primary, #006782);
  fill: currentColor;
  flex-shrink: 0;
}
::slotted([slot=headline]){
  font-size: 1.5rem;
  font-weight: bold;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 12px;
  color: var(--s-color-primary, #006782);
}
.view{
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 64px;
  max-height: 100%;
  justify-content: flex-end;
}
.view.s-laptop{
  height: 56px;
}
.view.s-tablet ::slotted(s-search[slot=search]){
  width: auto;
  flex-grow: 1;
}
::slotted([slot=action]){
  margin: 0 4px;
  flex-shrink: 0;
}
::slotted(s-search[slot=search]){
  flex-shrink: 0;
  margin: 0 4px 0 8px;
}
@container s-appbar (max-width: 1024px){
  .view{
    height: 56px;
  }
}
@container s-appbar (max-width: 768px){
  ::slotted(s-search[slot=search]){
    width: auto;
    flex-grow: 1;
  }
}
`,kt=`
<slot name="start"></slot>
<slot name="navigation"></slot>
<slot name="logo"></slot>
<slot name="headline"></slot>
<div class="view" part="view">
  <slot></slot>
  <slot name="search"></slot>
</div>
<slot name="action"></slot>
<slot name="end"></slot>
`;class Et extends b({style:$t,template:kt,setup(t){const e=t.querySelector(".view");te.CSSContainer||new ResizeObserver(()=>{e.classList.toggle("s-laptop",this.offsetWidth<=1024),e.classList.toggle("s-tablet",this.offsetWidth<=768)}).observe(this)}}){}Et.define(wt);const Ct="s-avatar",St=w({$src:""}),qt=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  width: 40px;
  border-radius: 50%;
  color: var(--s-color-on-tertiary, #ffffff);
  background: var(--s-color-tertiary, #5C5B7E);
}
::slotted(:is(svg, s-icon)){
  color: currentColor;
  fill: currentColor;
  width: 24px;
}
::slotted([slot=badge]){
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 0 2px var(--s-color-surface, #F8F9FB);
  color: var(--s-color-on-success, #ffffff);
  background: var(--s-color-success, #006d43);
}
img{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
  inset: 0;
}
`,At=`
<slot></slot>
<slot name="badge"></slot>
`;class Tt extends b({style:qt,template:At,props:St,setup(t){const e=document.createElement("img");return{src:o=>{e.src=o,e.onload=()=>{this.dispatchEvent(new Event("load")),t.insertBefore(e,t.children[0])},e.onerror=()=>{this.dispatchEvent(new ErrorEvent("error")),e.isConnected&&t.removeChild(e)}}}}}){}Tt.define(Ct);const Ft="s-badge",Mt=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  font-size: .625rem;
  vertical-align: middle;
  box-sizing: border-box;
  background: var(--s-color-error, #BA1A1A);
  color: var(--s-color-on-error, #ffffff);
}
:host(:not(:empty)) .text{
  height: 16px;
  padding: 0 5px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: inherit;
  color: inherit;
  box-shadow: inherit;
  border-radius: 8px;
}
`,zt=`
<slot class="text" part="text"></slot>
`;class Lt extends b({style:Mt,template:zt}){}Lt.define(Ft);const z=s=>{const t=s.trim().match(/^([\d\.]+)(s|ms)$/);if(!t)throw new Error;const e=Number(t[1]);return t[2]==="s"?e*1e3:e},Bt="s-bottom-sheet",Dt=w({showed:!1,disabledGesture:!1}),Nt=oe({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),Pt=`
:host{
  display: inline-block;
  vertical-align: middle;
}
dialog{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  outline: none;
  justify-content: center;
  align-items: flex-end;
  color: inherit;
  overflow: hidden;
}
dialog::backdrop{
  background: none;
}
dialog[open]{
  display: flex;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
dialog.show .scrim{
  opacity: 1;
}
.container{
  outline: none;
  position: relative;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding-bottom: env(safe-area-inset-bottom);
  max-width: 425px;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container-low, #F2F4F5);
}
.indicator{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}
.indicator::before{
  content: '';
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background: var(--s-color-outline, #70787D);
  opacity: .4;
}
::slotted([slot=text]){
  padding: 24px;
  line-height: 22px;
}
::slotted(:not([slot])){
  overscroll-behavior: none;
}
@media (max-width: 768px){
  .container{
    max-width: 768px;
  }
}
`,Ht=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <div class="container" part="container">
    <div class="indicator" part="indicator"></div>
    <slot name="text"></slot>
    <slot id="view"></slot>
  </div>
</dialog>
`,jt=s=>{let t=document.body;const e=document.body.firstElementChild;e&&e.tagName==="S-PAGE"&&(t=e);const o=new Ce,i=document.createElement("div");return i.slot="text",typeof s=="function"||s instanceof HTMLElement?s instanceof HTMLElement?o.appendChild(s):s(o):typeof s=="string"?(i.textContent=s,o.appendChild(i)):(s.root&&(t=s.root),s.disabledGesture&&(o.disabledGesture=s.disabledGesture),typeof s.view=="string"&&(i.textContent=s.view,o.appendChild(i)),s.view instanceof HTMLElement&&o.appendChild(s.view),typeof s.view=="function"&&s.view(o)),o.addEventListener("closed",()=>t.removeChild(o)),o.showed=!0,t.appendChild(o),o};class Ce extends b({style:Pt,template:Ht,props:Dt,events:Nt,methods:{builder:jt},setup(t){const e=t.querySelector("dialog"),o=t.querySelector(".container"),i=t.querySelector(".scrim"),n=t.querySelector(".indicator"),l=getComputedStyle(this);let a=null;const c=()=>{const g=l.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",p=l.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:g,duration:z(p)}};t.querySelector("#view").onslotchange=g=>{a=g.target.assignedElements()[0]??null},t.querySelector("slot[name=trigger]").onclick=()=>{this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}}))||(this.showed=!0)};const d=g=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:g}}))||(this.showed=!1)};i.onclick=()=>d("SCRIM");let r=null;o.addEventListener("touchmove",g=>{const p=g.target;if(this.disabledGesture)return;const h=g.touches[0];if(!r)return r={y:h.pageY,x:h.pageX,disabled:!1,top:0,h:o.offsetHeight,now:Date.now()};if(r.disabled)return;const y=h.pageY-r.y,v=h.pageX-r.x;if(r.top=Math.min(r.h,Math.max(0,y)),p!==n&&a&&a.scrollTop>0||Math.abs(y)<Math.abs(v))return r.disabled=!0;o.style.transform=`translateY(${r.top}px)`},{passive:!1}),o.ontouchend=()=>{if(!r||r.disabled)return r=null;const g=Date.now()-r.now>300?r.h/3:20;if(r.top>g){if(!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:"GESTURE"}})))return;this.showed=!1}else o.animate({transform:[o.style.transform,"translateY(0)"]},c()),o.style.removeProperty("transform");r=null};const f=()=>{if(!this.isConnected||e.open)return;e.showModal(),e.classList.add("show");const g=c();i.animate({opacity:[0,1]},g),o.animate({transform:["translateY(100%)","translateY(0)"],opacity:[0,1]},g).finished.then(()=>this.dispatchEvent(new Event("showed")))},m=()=>{if(!this.isConnected||!e.open)return;e.classList.remove("show");const g=c(),p=o.style.transform;i.animate({opacity:[1,0]},g),o.animate({transform:[p===""?"translateY(0)":p,"translateY(100%)"],opacity:[1,0]},g).finished.then(()=>{e.close(),p&&o.style.removeProperty("transform"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!e.open&&f(),showed:g=>g?f():m()}}}){}Ce.define(Bt);const A={mobileS:matchMedia("(max-width: 320px)"),mobileM:matchMedia("(max-width: 375px)"),mobileL:matchMedia("(max-width: 425px)"),tablet:matchMedia("(max-width: 768px)"),laptop:matchMedia("(max-width: 1024px)"),laptopL:matchMedia("(max-width: 1440px)"),pointerCoarse:matchMedia("(pointer: coarse)"),pointerFine:matchMedia("(pointer: fine)")},_t="s-ripple",Zt=w({centered:!1,attached:!1}),It=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}
:host([attached=true]),
.container,
.container::before,
.ripple{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
}
.container{
  overflow: hidden;
}
.container::before{
  content: '';
  opacity: 0;
  background: var(--ripple-color, currentColor);
  transition: opacity var(--s-motion-duration-short4, 100ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.container.hover::before{
  opacity: var(--ripple-hover-opacity, .12);
}
.ripple{
  opacity: 0;
  border-radius: 50%;
  background: currentColor;
  filter: blur(12px) opacity(var(--ripple-opacity, .18));
}
`,Ut=`
<slot></slot>
<div class="container" part="container">
  <div class="ripple"></div>
</div>
`;class Z extends b({style:It,template:Ut,props:Zt,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".ripple"),i=getComputedStyle(this),n=()=>{const g=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",p=i.getPropertyValue("--s-motion-duration-long4")||"600ms",h=i.getPropertyValue("--s-motion-duration-short4")||"200ms";return{easing:g,duration:z(p),shortDuration:z(h)}},l=()=>A.pointerFine.matches&&e.classList.add("hover"),a=()=>A.pointerFine.matches&&e.classList.remove("hover"),c={parentNode:null,pressed:!1},d=g=>{const{offsetWidth:p,offsetHeight:h}=this;let y=Math.sqrt(p**2+h**2);const v={x:"50%",y:"50%"};if(!this.centered){const{left:j,top:se}=this.getBoundingClientRect(),W=g.clientX-j,ve=g.clientY-se,xe=h/2,be=p/2,Ne=(Math.abs(xe-ve)+xe)*2,Pe=(Math.abs(be-W)+be)*2;y=Math.sqrt(Ne**2+Pe**2),v.x=`${W}px`,v.y=`${ve}px`}let x=o,$=()=>{};c.pressed?(x=o.cloneNode(),e.appendChild(x),$=()=>x.remove()):(c.pressed=!0,$=()=>c.pressed=!1);const k=c.parentNode??this,E=n();k.setAttribute("pressed","");const T=x.animate({opacity:[1,1],width:[`${y}px`,`${y}px`],height:[`${y}px`,`${y}px`],transform:["translate(-50%, -50%) scale(0)","translate(-50%, -50%) scale(1)"],left:[v.x,v.x],top:[v.y,v.y]},{...E,fill:"forwards"});return()=>{k.removeAttribute("pressed");const j=Number(T.currentTime),se=E.duration-E.shortDuration,W=j>se?E.shortDuration:E.duration-j;x.animate({opacity:[1,0]},{duration:W,easing:E.easing,fill:"forwards"}).finished.then($)}},r=async g=>{if(g.button!==0)return;const p={};if(g.pointerType==="mouse"){document.addEventListener("pointerup",d(g),{once:!0});return}let h;p.timer=setTimeout(()=>{h=d(g),document.removeEventListener("touchmove",y),p.upper&&h()},50),document.addEventListener("touchend",()=>{if(!h)return p.upper=!0;h()},{once:!0});const y=()=>clearTimeout(p.timer);document.addEventListener("touchmove",y,{once:!0})},f=g=>{g.addEventListener("mouseenter",l),g.addEventListener("mouseleave",a),g.addEventListener("wheel",a,{passive:!0}),g.addEventListener("pointerdown",r)},m=()=>{c.parentNode&&(c.parentNode.removeEventListener("mouseenter",l),c.parentNode.removeEventListener("mouseleave",a),c.parentNode.removeEventListener("wheel",a),c.parentNode.removeEventListener("pointerdown",r),c.parentNode=null)};return f(this),{onMounted:()=>{this.attached&&this.parentNode&&(c.parentNode=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode,f(c.parentNode))},onUnmounted:()=>this.attached&&m(),attached:g=>{if(!this.isConnected)return;if(!g)return m();const p=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;f(p)}}}}){}Z.define(_t);const Ot="s-button",Qt=w({disabled:!1,type:["filled","elevated","filled-tonal","outlined","text"]}),Vt=`
:host{
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  vertical-align: middle;
  border-radius: 20px;
  padding: 0 24px;
  height: 40px;
  text-transform: capitalize;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  max-width: -moz-available;
  max-width: -webkit-fill-available;
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
  transition: box-shadow var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  overflow: hidden;
}
:host([disabled=true]){
  pointer-events: none !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
:host([type=elevated]){
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-primary, #006782);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][disabled=true]){
  box-shadow: none !important;
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #70787D);
  background: none;
  color: var(--s-color-primary, #006782);
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([type=text]){
  background: none;
  color: var(--s-color-primary, #006782);
  padding: 0 16px;
}
:host([type=text][disabled=true]){
  background: none !important;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg, s-icon, s-circular-progress)){
  fill: currentColor;
  color: currentColor;
  width: 20px;
  height: 20px;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-right: 4px;
  margin-left: -8px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-right: -8px;
  margin-left: 4px;
}
::slotted(s-circular-progress[slot=start]){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(s-circular-progress[slot=end]){
  margin-left: 8px;
  margin-right: -8px;
}
:host([type=text]) ::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: -4px;
  margin-right: 4px;
}
:host([type=text]) ::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-left: 4px;
  margin-right: -4px;
}
:host(:not([type])[pressed]){
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=elevated][pressed]){
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
@media (pointer: fine){
  :host(:not([type]):hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([type=elevated]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
  :host([type=outlined][disabled=true]){
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,Wt=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class Yt extends b({style:Vt,template:Wt,props:Qt}){}Yt.define(Ot);const Jt="s-card",Gt=w({type:["elevated","filled","outlined"],clickable:!1}),Xt=`
:host{
  display: inline-block;
  vertical-align: middle;
  border-radius: 12px;
  position: relative;
  font-size: .875rem;
  box-sizing: border-box;
  max-width: 280px;
  overflow: hidden;
  color: var(--s-color-on-surface, #191C1E);
  background: var(--s-color-surface-container-low, #F2F4F5);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([type=filled]){
  box-shadow: none;
  background: var(--s-color-surface-container-highest, #E1E3E4);
}
:host([type=outlined]){
  box-shadow: none;
  background: var(--s-color-surface, #F8F9FB);
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host([clickable=true]){
  cursor: pointer;
  transition: box-shadow var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([clickable=true]) .ripple{
  display: block;
}
.action{
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 0 16px;
}
.ripple{
  display: none;
  border-radius: 0;
}
::slotted([slot=image]){
  display: block;
  max-height: 160px;
  min-height: 96px;
  width: 100%;
  object-fit: cover;
  background: var(--s-color-surface-container, #ECEEF0);
}
::slotted([slot=headline]){
  font-size: 1.375rem;
  line-height: 22px;
  margin: 12px 16px;
}
::slotted([slot=subhead]){
  font-size: 1rem;
  margin: -8px 16px 12px 16px;
}
::slotted([slot=text]){
  line-height: 22px;
  margin: 12px 16px;
  color: var(--s-color-on-surface-variant, #40484C);
}
::slotted(s-button[slot=action]){
  margin-bottom: 16px;
}
::slotted([slot=headline]+[slot=subhead]){
  background: red;
}
@media (pointer: fine){
  :host([clickable=true][type=filled]:hover),
  :host([clickable=true][type=outlined]:hover){
    box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  }
  :host([clickable=true]:hover){
    box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  }
}
`,Kt=`
<slot name="start"></slot>
<slot name="image"></slot>
<slot name="headline"></slot>
<slot name="subhead"></slot>
<slot name="text"></slot>
<slot></slot>
<div class="action" part="action">
  <slot name="action"></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class Rt extends b({style:Xt,template:Kt,props:Gt,setup(t){const e=t.querySelector("slot[name=action]");e.onpointerdown=o=>o.stopPropagation()}}){}Rt.define(Jt);class V{constructor(t){S(this,"list",[]);S(this,"select");S(this,"selectValue");S(this,"flag",!1);const{context:e}=t;e.addEventListener(`${e.tagName.toLocaleLowerCase()}:select`,o=>{var n,l;if(o.stopPropagation(),!(o.target instanceof t.class))return;let i;this.flag=!0,o.target.selected=!0,this.list.forEach(a=>{a!==o.target&&(a.selected&&(i=a),a.selected=!1)}),this.select=o.target,this.flag=!1,e.dispatchEvent(new Event("change")),(n=this.onUpdate)==null||n.call(this,i),(l=this.onSelect)==null||l.call(this)}),e.addEventListener(`${e.tagName.toLocaleLowerCase()}:update`,o=>{var n;if(o.stopPropagation(),this.flag||this.list.length===0||!(o.target instanceof t.class))return;this.flag=!0;let i;o.target.selected?(this.select=o.target,this.list.forEach(l=>{l!==o.target&&(l.selected&&(i=l),l.selected=!1)})):delete this.select,this.flag=!1,(n=this.onUpdate)==null||n.call(this,i)}),t.slot.addEventListener("slotchange",()=>{var o,i;this.flag=!0,delete this.select,this.list=t.slot.assignedElements().filter(n=>{if(n instanceof t.class){if(this.selectValue!==void 0)n.value===this.selectValue?(this.select=n,n.selected=!0):n.selected=!1;else{if(!this.select&&n.selected)return this.select=n,!0;this.select&&(n.selected=!1)}return!0}}),this.flag=!1,(o=this.onSlotChange)==null||o.call(this),(i=this.onUpdate)==null||i.call(this)})}get value(){var t;return((t=this.list[this.list.indexOf(this.select)])==null?void 0:t.value)??""}set value(t){var e;this.selectValue=t,this.list.length!==0&&(this.flag=!0,this.list.forEach(o=>{if(o.value===t){o.selected=!0,this.select=o;return}o.selected=!1}),(e=this.onUpdate)==null||e.call(this),this.flag=!1)}get selectedIndex(){return this.list.indexOf(this.select)}}const X="s-carousel",eo=w({$value:"",$autoplay:!1,$duration:4e3}),to=`
:host{
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 2;
  -webkit-aspect-ratio: 2;
}
.container{
  display: flex;
  justify-content: flex-start;
  height: 100%;
  min-width: 100%;
  transition: transform var(--s-motion-duration-long4, 600ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.track{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  padding: 12px 0;
}
.track .indicator{
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: white;
  opacity: .3;
  flex-shrink: 0;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
.track .indicator.checked{
  opacity: 1;
}
`,oo=`
<div class="container" part="container">
  <slot></slot>
</div>
<div class="track"></div>
`;class Se extends b({style:to,template:oo,props:eo,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".track"),i=t.querySelector("slot"),n=new V({context:this,class:qe,slot:i});let l=-1;n.onUpdate=()=>{o.childNodes.forEach(d=>d.classList.remove("checked")),e.style.transform=`translateX(${-n.selectedIndex*100}%)`,n.selectedIndex!==-1&&(o.childNodes[n.selectedIndex].classList.add("checked"),a())};const a=()=>{!this.autoplay||n.list.length===0||!this.isConnected||(c(),l=setTimeout(()=>{let d=n.selectedIndex+1;d>=n.list.length&&(d=0),n.list[d].selected=!0,this.dispatchEvent(new Event("change"))},this.duration))},c=()=>clearInterval(l);return n.onSlotChange=()=>{o.innerHTML="";const d=document.createDocumentFragment();n.list.forEach(r=>{const f=document.createElement("div");f.className="indicator",f.addEventListener("click",()=>r.dispatchEvent(new Event(`${X}:select`,{bubbles:!0}))),d.appendChild(f)}),o.appendChild(d)},e.onpointerdown=d=>{if(n.list.length<=1)return;c();const r=d.pageX,f=d.pageY,m=e.offsetWidth,g=n.list[n.selectedIndex-1],p=n.list[n.selectedIndex+1],h={now:0,left:0,next:void 0},y=$=>{const k=$ instanceof TouchEvent?$.touches[0]:$,E=k.pageX-r,T=k.pageY-f;if($ instanceof TouchEvent&&Math.abs(E)<Math.abs(T)&&!h.next)return v();if(h.left=E,h.now===0&&(h.now=Date.now()),g&&(h.left=Math.min(h.left,m)),p&&(h.left=Math.max(h.left,m*-1)),(!g&&h.left>0||!p&&h.left<0)&&(h.left=h.left*.2),h.left<0&&p||h.left>0&&g){const D=Math.abs(h.left)/m*.05;n.select.style.transition="none",n.select.style.transform=`scale(${.05-D+.95})`,h.next=h.left<0?p:g,h.next.style.transition="none",h.next.style.transform=`scale(${D+.95})`}e.style.transition="none",e.style.pointerEvents="none",e.style.transform=`translateX(calc(${-n.selectedIndex*100}% + ${h.left}px))`,$.cancelable&&$.preventDefault()},v=()=>{var E,T,D;document.removeEventListener(x.up,v),document.removeEventListener(x.move,y),e.style.removeProperty("pointer-events"),e.style.removeProperty("transition"),n.select.style.removeProperty("transition"),n.select.style.removeProperty("transform"),(E=h.next)==null||E.style.removeProperty("transition"),(T=h.next)==null||T.style.removeProperty("transform");const $=n.selectedIndex;if(!($===0&&h.left>0||$===n.list.length-1&&h.left<0)){const j=Date.now()-h.now>300?m/2:20;if(Math.abs(h.left)>j){(D=h.next)==null||D.dispatchEvent(new Event(`${X}:select`,{bubbles:!0}));return}}e.style.transform=`translateX(${-n.selectedIndex*100}%)`,a()},x={move:A.pointerCoarse.matches?"touchmove":"pointermove",up:A.pointerCoarse.matches?"touchend":"pointerup"};document.addEventListener(x.move,y,{passive:!1}),document.addEventListener(x.up,v)},{expose:{get options(){return n.list},get selectedIndex(){return n.selectedIndex},togglePrevious:()=>{const d=n.list[n.selectedIndex-1];d&&(d.selected=!0)},toggleNext:()=>{const d=n.list[n.selectedIndex+1];d&&(d.selected=!0)}},onMounted:a,onUnmounted:c,value:{get:()=>n.value,set:d=>{n.value=d,a()}},autoplay:a}}}){}const so="s-carousel-item",ro=w({selected:!1,$value:""}),no=`
:host{
  user-drag: none;
  -webkit-user-drag: none;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: var(--s-color-surface-container-high, #E7E8EA);
  transform: scale(.95);
  transition: transform var(--s-motion-duration-long4, 600ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  background-repeat: round;
}
:host([selected=true]){
  transform: scale(1);
}
`,io="<slot></slot>";class qe extends b({style:no,template:io,props:ro,setup(){return{selected:()=>{this.parentNode instanceof Se&&this.dispatchEvent(new Event(`${X}:update`,{bubbles:!0}))}}}}){}Se.define(X);qe.define(so);const ao="s-checkbox",lo=w({disabled:!1,checked:!1,indeterminate:!1}),co=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  position: relative;
  height: 40px;
  color: var(--s-color-on-surface-variant, #40484C);
}
:host([checked=true]){
  color: var(--s-color-primary, #006782);
}
:host([disabled=true]){
  pointer-events: none;
}
.container{
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
:host([disabled=true]) .container{
  color: var(--s-color-on-surface, #191C1E) !important;
  opacity: .38 !important;
}
.unchecked,
.checked,
.indeterminate{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.checked,
.indeterminate{
  position: absolute;
  transform: scale(.5);
  opacity: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([indeterminate=true]) .unchecked{
  opacity: 0;
}
:host([checked=true]:not([indeterminate=true])) .checked,
:host([indeterminate=true]) .indeterminate{
  opacity: 1;
  transform: scale(1);
}
.ripple{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  height: 100%;
  width: auto;
  border-radius: 50%;
}
svg,
::slotted(:is([slot=checked], [slot=unchecked], [slot=indeterminate])){
  color: currentColor;
  fill: currentColor;
  width: 60%;
  height: 60%;
}
`,po=`
<div class="container" part="container">
  <slot class="unchecked" name="unchecked">
    <svg viewBox="0 -960 960 960">
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"></path>
    </svg>
  </slot>
  <slot class="checked" name="checked">
    <svg viewBox="0 -960 960 960">
      <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
    </svg>
  </slot>
  <slot class="indeterminate" name="indeterminate">
    <svg viewBox="0 -960 960 960">
      <path d="M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
    </svg>
  </slot>
</div>
<slot></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class ho extends b({style:co,template:po,props:lo,setup(){this.addEventListener("click",()=>{this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}ho.define(ao);const uo="s-chip",mo=w({type:["filled","outlined"],$value:"",checked:!1,disabled:!1,clickable:!1}),go=`
:host{
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  padding: 0 16px;
  height: 32px;
  border-radius: 16px;
  box-sizing: border-box;
  font-size: .8125rem;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  background: var(--s-color-surface-container-high, #E7E8EA);
  color: var(--s-color-on-surface, #191C1E);
  transition-property: color, background-color, box-shadow;
  transition-timing-function: var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([disabled=true]){
  pointer-events: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
  background: color-mix(in srgb, var(--s-color-surface-container-high, #E7E8EA) 38%, transparent) !important;
}
:host([checked=true]){
  border: none;
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-primary, #006782);
}
:host([type=outlined]){
  background: none;
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host([type=outlined][checked=true]){
  border-color: var(--s-color-primary, #006782);
}
::slotted(:is(s-icon, svg)){
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: currentColor;
  color: currentColor;
}
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
}
::slotted(s-avatar){
  width: 24px;
  height: 24px;
  font-size: .75rem;
}
::slotted(s-avatar[slot=start]){
  margin-left: -12px;
  margin-right: 8px;
}
::slotted(s-icon-button[slot=action]){
  margin: 0 -12px 0 8px;
  width: 24px;
  height: 24px;
  padding: 3px;
  color: currentColor;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}
:host(:not([clickable=true])) .ripple{
  display: none;
}
@supports not (color: color-mix()){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,fo=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<slot name="action"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class vo extends b({style:go,template:fo,props:mo,setup(t){const e=t.querySelector("slot[name=action]");e.onclick=o=>o.stopPropagation(),e.onpointerdown=o=>o.stopPropagation(),this.addEventListener("click",()=>{this.clickable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))})}}){}vo.define(uo);const xo="s-circular-progress",bo=w({indeterminate:!1,animated:!1,$max:100,$value:0}),yo=`
:host{
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 48px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  color: var(--s-color-primary, #006782);
}
:host([animated=true]) .known .block{
  transition-duration: var(--s-motion-duration-medium4, 400ms);
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-name: stroke-dashoffset, transform;
}
:host([indeterminate=true]) .known,
.unknown{
  display: none;
}
:host([indeterminate=true]) .unknown,
.known{
  display: block;
}
.container{
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: relative;
}
svg{
  height: inherit;
  width: inherit;
  stroke: currentColor;
}
circle{
  stroke-linecap: round;
  fill: none;
  stroke-dasharray: var(--dasharray);
}
.track{
  stroke: var(--s-color-secondary-container, #CFE6F1);
}
.unknown{
  animation: rotate 1568ms linear infinite;
}
@keyframes stroke{
  0% { stroke-dashoffset: var(--dasharray) }
  50% { stroke-dashoffset: calc(var(--dasharray) / 4) }
  100% { stroke-dashoffset: var(--dasharray) }
}
@keyframes stroke-rotate{
  0% { transform: rotate(0deg) }
  12.5% { transform: rotate(0deg) }
  25% {transform: rotate(270deg)}
  37.5% {transform: rotate(270deg)}
  50% {transform: rotate(540deg)}
  62.5% {transform: rotate(540deg)}
  75% {transform: rotate(810deg)}
  87.5% {transform: rotate(810deg)}
  100% { transform: rotate(1080deg) }
  100% { transform: rotate(1080deg) }
}
@keyframes rotate{
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
`,q=48,N=4,P=(q-N)*Math.PI,wo=`
<div class="container known">
  <svg viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${P}px;">
    <circle class="track block" cx="${q/2}" cy="${q/2}" r="${(q-N)/2}" style="stroke-width: ${N}px" />
    <circle class="indicator block" cx="${q/2}" cy="${q/2}" r="${(q-N)/2}" style="stroke-dashoffset: ${P}px;stroke-width: ${N}px" />
  </svg>
</div>
<div class="container unknown">
  <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${P}px;">
    <circle transform="rotate(-90, ${q/2}, ${q/2})" cx="${q/2}" cy="${q/2}" r=" ${(q-N)/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${N}px"></circle>
  </svg>
</div>
`;class $o extends b({style:yo,template:wo,props:bo,setup(t){const e=t.querySelector(".known .track"),o=t.querySelector(".known .indicator"),i=()=>{const n=Math.min(this.value,this.max)/this.max*100,l=P-P*(n/100),a=n/100*360;e.style.strokeDashoffset=`${n===0?0:Math.min(P+16-l,P)}px`,e.setAttribute("transform",`rotate(${a+20}, ${q/2}, ${q/2})`),o.style.strokeDashoffset=`${l}px`};return{max:i,value:i}}}){}$o.define(xo);const K=(s,t="yyyy-MM-dd")=>{typeof s=="string"&&(s=new Date(s));const e=s.getFullYear(),o=s.getMonth()+1,i=s.getDate();return t.replace("yyyy",e.toString()).replace("MM",o.toString().padStart(2,"0")).replace("dd",i.toString().padStart(2,"0"))};class ko{constructor(t){S(this,"list");S(this,"locale",navigator.language);S(this,"updates",new Map);this.list=t}getItem(t){if(t=t||this.locale,t in this.list)return this.list[t];const[e]=t.split("-");return e in this.list?this.list[e]:this.list.zh}addItem(t,e){if(this.list[t])throw new Error(`Locale ${t} already exists`);this.list[t]=e}setLocale(t){this.locale=t??navigator.language,this.updates.forEach(e=>e())}}const B=new ko({});B.list={zh:{display:s=>`${s.getFullYear()}年${s.getMonth()+1}月${s.getDate()}日 星期${B.list.zh.displayWeeks[s.getDay()]}`,displayMonth:s=>`${s.getFullYear()}年`,displayWeeks:["日","一","二","三","四","五","六"]},en:{display:s=>`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][s.getDay()]}, Jan ${s.getDate()}`,displayMonth:s=>`${["January","February","March","April","May","June","July","August","September","October","November","December"][s.getMonth()]} ${s.getFullYear()}`,displayWeeks:["S","M","T","W","T","F","S"]}};const Eo="s-date",Co=w({$value:"",$locale:"",$max:"2099-12-31",$min:"1900-01-01"}),So=`
:host{
  display: inline-block;
  vertical-align: middle;
  border-radius: 8px;
  font-size: .875rem;
  max-width: 360px;
  overflow: hidden;
  box-sizing: border-box;
  border: solid 1px var(--s-color-surface-variant, #DCE4E8);
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-on-surface, #191C1E);
}
.button,
.icon-button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  font-size: .8125rem;
  color: var(--s-color-on-surface-variant, #40484C);
}
.icon-button{
  width: 36px;
  border-radius: 50%;
}
.button{
  border-radius: 18px;
  height: 36px;
  padding: 0 12px;
}
svg{
  width: 24px;
  fill: currentColor;
  box-sizing: border-box;
}
.header{
  padding: 24px 24px 16px 24px;
  font-size: 1.25rem;
  border-bottom: solid 1px var(--s-color-surface-variant, #DCE4E8);
  background: var(--s-color-surface-container, #ECEEF0);
}
.container{
  display: flex;
  flex-direction: column;
  position: relative;
}
.action{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.action>.year>svg{
  margin: 0 -8px 0 2px;
  padding: 1px;
}
.action>.toggle{
  display: flex;
}
.years{
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  gap: 4px;
  column-gap: 6px;
  padding: 0 16px 16px 16px;
  margin-top: -12px;
  max-height: 280px;
  counter-reset: year-counter 1899;
}
.years>.item{
  counter-increment: year-counter;
  flex-grow: 1;
}
.years>.item::before{
  content: counter(year-counter);
}
.weeks{
  display: flex;
  padding: 0 16px;
  font-size: .8125rem;
  color: var(--s-color-outline, #70787D);
}
.weeks>.item,
.days>.item{
  width: calc(100% / 7);
  display: inline-flex;
  justify-content: center;
}
.days{
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
}
.days>.overflow~.item{
  display: none;
}
.days>.item>s-ripple{
  margin: 2px;
}
.days>.checked>s-ripple,
.years>.checked{
  pointer-events: none;
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
.container:not(.show-years) .years,
.show-years :is(.weeks, .days, .action>.toggle){
  display: none;
}
`,I={years:[],weeks:[],days:[]};for(let s=0;s<200;s++)s<7&&I.weeks.push('<div class="item"></div>'),s<31&&I.days.push(`<div class="item"><s-ripple class="icon-button">${s+1}</s-ripple></div>`),I.years.push('<s-ripple class="button item"></s-ripple>');const qo=`
<div class="header" part="header">
  <slot name="headline"></slot>
  <span></span>
</div>
<div class="container" part="container">
  <div class="action">
    <s-ripple class="button year" slot="trigger">
      <span></span>
      <svg viewBox="0 -960 960 960">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
    </s-ripple>
    <div class="toggle">
      <s-ripple class="icon-button prev" part="prev-button">
        <svg viewBox="0 -960 960 960">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="icon-button next" part="next-button">
        <svg viewBox="0 -960 960 960">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path>
        </svg>
      </s-ripple>
    </div>
  </div>
  <s-scroll-view class="years">${I.years.join("")}</s-scroll-view>
  <div class="weeks">${I.weeks.join("")}</div>
  <div class="days">${I.days.join("")}</div>
</div>
`;class Ao{constructor(t,e,o){S(this,"yearSelect");S(this,"daySelect");S(this,"dayOverflow");S(this,"date");S(this,"min");S(this,"max");this.date=typeof t=="string"?new Date(t):t,this.min=new Date(e),this.max=new Date(o)}}const ye=(s,t)=>{const e=new Date(s,t+1,1);return e.setDate(e.getDate()-1),e.getDate()},To=(s,t)=>{B.addItem(s,t)},Fo=s=>{B.setLocale(s)};class Mo extends b({style:So,template:qo,props:Co,methods:{addLocale:To,setLocale:Fo},setup(t){const e=t.querySelector(".container"),o=t.querySelector(".header>span"),i=t.querySelector(".action>.year"),n=t.querySelector(".action>.toggle>.prev"),l=t.querySelector(".action>.toggle>.next"),a=t.querySelector(".years"),c=t.querySelector(".weeks"),d=t.querySelector(".days"),r=new Ao(this.value||new Date,this.min,this.max),f=()=>{const v=B.getItem(this.locale).display;o.textContent=v(r.date);const x=B.getItem(this.locale).displayMonth;i.children[0].textContent=x(r.date)},m=()=>{const v=B.getItem(this.locale).displayWeeks;c.childNodes.forEach((x,$)=>x.textContent=v[$])},g=()=>{var $,k,E;const v=new Date(r.date.getFullYear(),r.date.getMonth(),1).getDay();d.children[0].setAttribute("style",`margin-left: calc((100% / 7) * ${v})`);const x=new Date(r.date.getFullYear(),r.date.getMonth()+1,0).getDate();($=r.dayOverflow)==null||$.classList.remove("overflow"),r.dayOverflow=d.children[x-1],r.dayOverflow.classList.add("overflow"),(k=r.yearSelect)==null||k.classList.remove("checked"),r.yearSelect=a.children[r.date.getFullYear()-r.min.getFullYear()],r.yearSelect.classList.add("checked"),(E=r.daySelect)==null||E.classList.remove("checked"),r.daySelect=d.children[r.date.getDate()-1],r.daySelect.classList.add("checked"),e.style.removeProperty("height")},p=()=>{const v=r.max.getFullYear()-r.min.getFullYear();a.innerHTML="",a.style.counterReset=`year-counter ${r.min.getFullYear()-1}`;const x=document.createDocumentFragment();for(let $=0;$<=v;$++){const k=new Z;k.classList.add("button","item"),x.appendChild(k)}a.appendChild(x),g()},h=(v,x,$)=>{this.value=K(new Date(v,x,$)),this.dispatchEvent(new Event("change"))};i.onclick=()=>{const v=e.offsetHeight;if(e.classList.toggle("show-years"),e.classList.contains("show-years")){e.style.height=`${v}px`,r.yearSelect&&a.scrollTo({top:r.yearSelect.offsetTop-a.offsetHeight/2+r.yearSelect.offsetHeight/2});return}},n.onclick=()=>{const v=ye(r.date.getFullYear(),r.date.getMonth()-1),x=Math.min(r.date.getDate(),v);h(r.date.getFullYear(),r.date.getMonth()-1,x)},l.onclick=()=>{const v=ye(r.date.getFullYear(),r.date.getMonth()+1),x=Math.min(r.date.getDate(),v);h(r.date.getFullYear(),r.date.getMonth()+1,x)},a.onclick=v=>{if(!(v.target instanceof Z))return;e.classList.remove("show-years");const x=Array.from(a.children).indexOf(v.target)+r.min.getFullYear();h(x,r.date.getMonth(),r.date.getDate())},d.onclick=v=>{if(!(v.target instanceof Z))return;const x=Array.from(d.children).indexOf(v.target.parentElement)+1;h(r.date.getFullYear(),r.date.getMonth(),x)};const y=()=>{f(),m()};return g(),y(),{onMounted:()=>B.updates.set(this,y),onUnmounted:()=>B.updates.delete(this),min:v=>{const x=new Date(v);if(isNaN(x.getTime())||x.getTime()>r.date.getTime())throw Error("invalid min date");r.min=x,p()},max:v=>{const x=new Date(v);if(isNaN(x.getTime())||x.getTime()<r.date.getTime())throw Error("invalid max date");r.max=x,p()},value:{get:()=>K(r.date),set:v=>{const x=new Date(v);if(isNaN(x.getTime())||x.getTime()<r.min.getTime()||x.getTime()>r.max.getTime())throw Error("invalid date");r.date=x,f(),g()}},locale:y}}}){}Mo.define(Eo);const zo="s-date-picker",ne=w({$value:"",$min:"",$max:"",$label:"",$positiveText:"确定",$negativeText:"取消",$format:"yyyy-MM-dd",$locale:""}),Lo=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --date-picker-border-radius: 4px;
  --date-picker-border-color: var(--s-color-outline, #70787D);
  --date-picker-border-width: 1px;
  --date-picker-padding: 16px;
  --date-picker-height: 48px;
}
s-dialog{
  display: block;
}
.field{
  --field-border-radius: var(--date-picker-border-radius);
  --field-border-color: var(--date-picker-border-color);
  --field-border-width: var(--date-picker-border-width);
  --field-padding: var(--date-picker-padding);
  height: var(--date-picker-height);
  position: relative;
  cursor: pointer;
}
.view{
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  padding: 0 var(--date-picker-padding);
}
svg{
  width: 24px;
  height: 24px;
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-left: min(0px, calc((var(--date-picker-padding) * -1) + 12px));
  margin-right: max(0px, calc(var(--date-picker-padding) - 4px));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.ripple{
  border-radius: var(--date-picker-border-radius);
}
.date{
  border: none;
  width: 360px;
  border-radius: 0;
}
.positive,
.negative{
  border-radius: 20px;
}
`,Bo=`
<s-dialog part="dialog">
  <slot name="trigger" slot="trigger">
    <s-field class="field" fixed="false" part="field">
      <div class="label" part="label" slot="label"></div>
      <div class="view"></div>
      <svg viewBox="0 -960 960 960" slot="end">
        <path d="M320-400q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm160 0q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm160 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"></path>
      </svg>
      <s-ripple slot="custom" class="ripple" attached="true"></s-ripple>
    </s-field>
  </slot>
  <s-date class="date" part="date"></s-date>
  <s-ripple class="negative" slot="action" part="negative">${ne.negativeText}</s-ripple>
  <s-ripple class="positive" slot="action" part="positive">${ne.positiveText}</s-ripple>
</s-dialog>
`;class Do extends b({style:Lo,template:Bo,props:ne,setup(t){const e=t.querySelector("s-dialog"),o=t.querySelector("s-date"),i=t.querySelector(".negative"),n=t.querySelector(".positive"),l=t.querySelector("s-field"),a=t.querySelector(".label"),c=t.querySelector(".view"),d={date:""};return e.addEventListener("show",()=>{l.fixed=!0,l.focused=!0,d.date||(c.textContent=this.label,c.style.opacity="0")}),e.onclose=()=>{l.focused=!1,d.date||(l.fixed=!1)},n.onclick=()=>{this.value=o.value,c.style.removeProperty("opacity"),this.dispatchEvent(new Event("change"))},{value:{get:()=>d.date,set:r=>{if(d.date=r,r===""){o.value=K(new Date),l.fixed=!1,c.textContent="";return}l.fixed=!0,c.textContent=K(r,this.format),o.value=r}},locale:{get:()=>o.locale,set:r=>o.locale=r},min:{get:()=>o.min,set:r=>o.min=r},max:{get:()=>o.max,set:r=>o.max=r},label:r=>a.textContent=r,positiveText:r=>n.textContent=r,negativeText:r=>i.textContent=r}}}){}Do.define(zo);const No="s-scroll-view",Po=`
:host{
  display: block;
  overflow: auto;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    background: transparent;
    width: 6px;
    height: 6px;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #C0C8CC);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #C0C8CC) transparent;
    }
  }
}
`,Ho="<slot></slot>";class jo extends b({style:Po,template:Ho}){}jo.define(No);const _o="s-dialog",Zo=w({showed:!1,size:["standard","full"]}),Io=oe({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),Uo=`
:host{
  display: inline-block;
  vertical-align: middle;
}
dialog{
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  outline: none;
  color: inherit;
}
dialog::backdrop{
  background: none;
}
.wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  pointer-events: none;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
dialog.show .scrim{
  opacity: 1;
}
.container,
::slotted([slot=custom]){
  max-width: calc(100% - 48px);
  max-height: calc(100% - 48px);
  pointer-events: auto;
  position: relative;
  border-radius: 28px;
  display: flex;
  outline: none;
  flex-direction: column;
  overflow: hidden;
  transition-timing-function: ease-out;
  box-shadow: var(--s-elevation-level5, 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container-high, #E7E8EA);
}
:host([size=full]) .container{
  width: 100%;
  height: 100%;
  border-radius: 0;
  max-width: none;
  max-height: none;
}
:host([size=full]) ::slotted(:is([slot=text],:not([slot]))){
  max-width: 100%;
  width: auto;
}
::slotted([slot=headline]){
  padding: 24px 24px 0 24px;
  font-size: 1.5rem;
  line-height: 22px;
  font-weight: 600;
  color: var(--s-color-on-surface, #191C1E);
  flex-shrink: 0;
}
.text{
  user-select: text;
  -webkit-user-select: text;
  flex-grow: 1;
}
::slotted([slot=text]){
  margin: 16px 24px;
  max-width: calc(100% - 48px);
  line-height: 22px;
}
::slotted(:is(:not([slot]), [slot=text])){
  width: 375px;
}
::slotted(:not([slot])){
  max-width: 100%;
}
.action{
  display: flex;
  justify-content: flex-end;
  padding: 0 14px;
  flex-shrink: 0;
}
::slotted([slot=action]){
  min-width: 72px;
  margin: 16px 2px;
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  color: var(--s-color-primary, #006782);
  box-sizing: border-box;
  height: 40px;
  font-size: .875rem;
  cursor: pointer;
}
`,Oo=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <slot name="custom" class="wrapper" part="wrapper">
    <div class="container" part="container">
      <slot name="headline"></slot>
      <s-scroll-view class="text" part="view">
        <slot></slot>
        <slot name="text"></slot>
      </s-scroll-view>
      <div class="action" part="action">
        <slot name="action"></slot>
      </div>
    </div>
  </slot>
</dialog>
`,Qo=s=>{let t=document.body;const e=new Ae,o=document.body.firstElementChild;if(o&&o.tagName==="S-PAGE"&&(t=o),typeof s=="string"){const i=document.createElement("div");i.slot="text",i.textContent=s,e.appendChild(i)}else{if(s.root&&(t=s.root),s.headline){const n=document.createElement("div");n.slot="headline",n.textContent=s.headline,e.appendChild(n)}if(s.text){const n=document.createElement("div");n.slot="text",n.textContent=s.text,e.appendChild(n)}s.view&&(typeof s.view=="function"?s.view(e):e.appendChild(s.view));const i=s.actions??[];for(const n of Array.isArray(i)?i:[i]){const l=document.createElement("s-button");l.slot="action",l.type="text",l.textContent=n.text,n.click&&(l.onclick=n.click),e.appendChild(l)}}return e.showed=!0,e.addEventListener("closed",()=>t.removeChild(e)),t.appendChild(e),e};class Ae extends b({style:Uo,template:Oo,props:Zo,events:Io,methods:{builder:Qo},setup(t){const e=t.querySelector("dialog"),o=t.querySelector(".scrim"),i=t.querySelector(".wrapper"),n=getComputedStyle(this),l=()=>{const r=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",f=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:r,duration:z(f)}};t.querySelector("slot[name=trigger]").onclick=()=>{if(this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}})))return console.log("拒绝");this.showed=!0};const a=r=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:r}}))||(this.showed=!1)};t.querySelector(".scrim").onclick=()=>a("SCRIM"),t.querySelector("slot[name=action]").onclick=()=>a("ACTION");const c=()=>{if(!this.isConnected||e.open)return;const r=l();e.showModal(),e.classList.add("show"),o.animate({opacity:[0,1]},r),i.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},r).addEventListener("finish",()=>this.dispatchEvent(new Event("showed")))},d=()=>{if(!this.isConnected||!e.open)return;const r=l();o.animate({opacity:[1,0]},r),i.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},r).addEventListener("finish",()=>{e.close(),e.classList.remove("show"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!e.open&&c(),showed:r=>r?c():d()}}}){}Ae.define(_o);const Vo="s-divider",Wo=`
:host{
  display: flex;
  align-items: center;
  margin: 0 16px;
  gap: 8px;
  font-size: .75rem;
  color: var(--s-color-outline, #70787D);
 }
:host::before,
:host::after{
  content: '';
  flex-grow: 1;
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
:host(:empty){
  gap: 0;
}
`,Yo="<slot></slot>";class Jo extends b({style:Wo,template:Yo}){}Jo.define(Vo);const Go="s-drawer",Xo=`
:host{
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  container-name: s-drawer;
  container-type: inline-size;
}
.start,
.end{
  flex-shrink: 0;
  height: 100%;
  display: none;
  overflow: hidden;
}
.start{
  order: -1;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  backdrop-filter: saturate(180%) blur(2px);
  pointer-events: none;
}
.scrim::before{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  opacity: .75;
  background: var(--s-color-scrim, #000000);
}
.view{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0;
  height: 100%;
  position: relative;
}
::slotted(:is([slot=start], [slot=end])){
  width: 280px;
  border-width: 1px;
  height: 100%;
  box-sizing: border-box;
  pointer-events: auto;
  position: relative;
  background: var(--s-color-surface-container-low, #F2F4F5);
  border-color: var(--s-color-surface-variant, #DCE4E8);
}
::slotted([slot=start]){
  border-right-style: solid;
}
::slotted([slot=end]){
  border-left-style: solid;
}
::slotted(s-scroll-view:not([slot])){
  flex-grow: 1;
}
.start.show,
.end.show{
  display: block;
}
.scrim.s-laptop{
  display: block;
  z-index: 3;
}
.scrim.s-laptop.show-laptop{
  opacity: 1;
  pointer-events: auto;
}
.start.s-laptop,
.end.s-laptop{
  position: absolute;
  z-index: 3;
  max-width: 75%;
  display: none;
}
.end.s-laptop{
  left: auto;
  right: 0;
}
.start.s-laptop.show,
.end.s-laptop.show{
  display: none;
}
.start.s-laptop.show-laptop,
.end.s-laptop.show-laptop{
  display: block;
}
.s-laptop ::slotted(:is([slot=start], [slot=end])){
  border-left-style: none;
  border-right-style: none;
  box-shadow: var(--s-elevation-level-3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
}
@container s-drawer (max-width: 1024px){
  .scrim{
    display: block;
    z-index: 3;
  }
  .scrim.show-laptop{
    opacity: 1;
    pointer-events: auto;
  }
  .start,
  .end{
    position: absolute;
    z-index: 3;
    max-width: 75%;
    display: none;
  }
  .end{
    left: auto;
    right: 0;
  }
  .start.show,
  .end.show{
    display: none;
  }
  .start.show-laptop,
  .end.show-laptop{
    display: block;
  }
  ::slotted(:is([slot=start], [slot=end])){
    border-left-style: none;
    border-right-style: none;
    box-shadow: var(--s-elevation-level-3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  }
}
`,Ko=`
<slot class="view" part="view"></slot>
<div class="scrim" part="scrim show"></div>
<slot name="start" class="start show" part="start"></slot>
<slot name="end" class="end show" part="end"></slot>
`;class Ro extends b({style:Xo,template:Ko,setup(t){const e=t.querySelector(".scrim"),o={start:t.querySelector(".start"),end:t.querySelector(".end")},i=getComputedStyle(this),n=()=>{const m=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",g=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:m,duration:z(g)}},l=(m="start")=>o[m],a=m=>m??this.offsetWidth<=1024?"show-laptop":"show",c=(m="start")=>({start:-1,end:1})[m],d=(m,g)=>{const p=l(m),h=a(g);if(p.classList.contains(h))return;const y=c(m),v=n();p.classList.add(h),e.classList.add(h);const x=this.offsetWidth<=1024?{transform:[`translateX(${p.offsetWidth*y}px)`,"translateX(0)"]}:{width:["0",p.offsetWidth+"px"]};this.offsetWidth<=1024&&e.animate({opacity:[0,1]},v),p.animate(x,v)},r=(m,g)=>{const p=l(m),h=a(g);if(!p.classList.contains(h))return;const y=c(m),v=n(),x={...this.offsetWidth<=1024?{transform:["translateX(0)",`translateX(${p.offsetWidth*y}px)`]}:{width:[p.offsetWidth+"px","0px"]}};p.style.display="block",p.animate(x,v).finished.then(()=>p.style.removeProperty("display")),this.offsetWidth<=1024&&e.animate({opacity:[1,0]},v),p.classList.remove(h),e.classList.remove(h)},f=(m,g)=>{const p=l(m),h=a(g);p.classList.contains(h)?r(m,g):d(m,g)};return e.addEventListener("click",()=>{r("start",!0),r("end",!0)}),te.CSSContainer||new ResizeObserver(()=>{e.classList.toggle("s-laptop",this.offsetWidth<=1024),o.start.classList.toggle("s-laptop",this.offsetWidth<=1024),o.end.classList.toggle("s-laptop",this.offsetWidth<=1024)}).observe(this),{expose:{show:d,close:r,toggle:f}}}}){}Ro.define(Go);const es="s-empty",ts=`
:host{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 48px 16px;
  gap: 12px;
  font-size: .75rem;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--s-color-outline, #70787D);
}
.shadow{
  fill: var(--s-color-surface-container-high, #E7E8EA);
}
.box{
  fill: var(--s-color-surface-container-highest, #E1E3E4);
}
.border{
  stroke: var(--s-color-outline, #70787D);
}
::slotted(:is(svg, s-icon)){
  color: currentColor;
  fill: currentColor;
  width: 40px;
}
`,os=`
<slot name="icon">
  <svg width="64" height="41" viewBox="0 0 64 41">
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <ellipse cx="32" cy="33" rx="32" ry="7" class="shadow"></ellipse>
      <g fill-rule="nonzero" class="border">
        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
        <path class="box" d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"></path>
      </g>
    </g>
  </svg>
</slot>
<slot></slot>`;class ss extends b({style:ts,template:os}){}ss.define(es);const rs="s-fab",ns=w({hidden:!1,disabled:!1}),is=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 48px;
  font-size: .875rem;
  border-radius: 28px;
  font-weight: 500;
  white-space: nowrap;
  text-transform: capitalize;
  padding: 0 24px;
  transition-property: box-shadow, transform;
  transition-duration: var(--s-motion-duration-short4, 200ms);
  transition-timing-function: var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  background: var(--s-color-primary-container, #BAEAFF);
  color: var(--s-color-on-primary-container, #004D62);
}
:host([disabled=true]){
  pointer-events: none;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
:host([hidden=true]){
  transform: scale(0);
  pointer-events: none;
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(:is(svg, s-icon)){
  width: 24px;
  height: 24px;
  fill: currentColor;
  color: currentColor;
}
::slotted(:is(svg, s-icon):not([slot])){
  margin: 16px -8px;
}
::slotted(:is(svg[slot=start], s-icon[slot=start])){
  margin-left: -8px;
  margin-right: 8px;
}
::slotted(:is(svg[slot=end], s-icon[slot=end])){
  margin-left: 8px;
  margin-right: -8px;
}
:host([pressed]){
  box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
}
@media (pointer: fine){
  :host(:hover){
    box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  }
}
@supports not (color: color-mix()){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
}
`,as=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class ls extends b({style:is,template:as,props:ns}){}ls.define(rs);const cs="s-icon-button",ds=w({disabled:!1,type:["standard","filled","filled-tonal","outlined"]}),ps=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  color: var(--s-color-on-surface-variant, #40484C);
  position: relative;
  box-sizing: border-box;
}
:host([disabled=true]){
  pointer-events: none !important;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([type=filled]){
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=filled]) ::slotted([slot=badge]){
  box-shadow: 0 0 0 2px var(--s-color-surface, #F8F9FB);
}
:host([type=filled-tonal]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
:host([type=outlined]){
  border: solid 1px var(--s-color-outline, #70787D)
}
:host([type=outlined][disabled=true]){
  background: none !important;
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
::slotted(:not([slot=badge])){
  color: inherit;
}
::slotted(svg){
  width: 24px;
  height: 24px;
  fill: currentColor;
}
::slotted([slot=badge]){
  position: absolute;
  right: 4px;
  top: 0;
  flex-shrink: 0;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
    color: var(--s-color-outline, #70787D) !important;
  }
  :host([type=outlined][disabled=true]){
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
}
`,hs=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
<slot name="badge"></slot>
`;class us extends b({style:ps,template:hs,props:ds}){}us.define(cs);const O={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},ms="s-icon",gs=w({name:Object.keys(O),$src:""}),fs=`
:host{
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 24px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  fill: currentColor;
  box-sizing: border-box;
  color: var(--s-color-on-surface-variant, #40484C);
}
svg,
img{
  width: 100%;
  height: 100%;
}
::slotted(*){
  width: 100%;
  height: 100%;
}
`,vs="<slot></slot>";class xs extends b({style:fs,template:vs,props:gs,setup(t){const e=t.querySelector("slot"),o=document.createElement("img"),i=(n=O.none,l="")=>`<svg viewBox="0 -960 960 960"><path d="${n}" transform="${l}"></path></svg>`;return{name:n=>{const l=O[n];if(typeof l=="string")return e.innerHTML=i(l);const a=l.name;typeof O[a]=="string"&&(e.innerHTML=i(O[a],`rotate(${l.angle} 480 -480)`))},src:async()=>{try{const n=new URL(this.src,location.href);if(n.pathname.endsWith(".svg")){const a=await(await fetch(n.href)).text(),c=document.createElement("template");c.innerHTML=a;const d=c.content.childNodes[0];if(!(d instanceof SVGElement))throw new Error("Invalid SVG");e.innerHTML="",e.appendChild(d),this.dispatchEvent(new Event("load"))}else o.src=n.href,o.onload=()=>{e.innerHTML="",e.appendChild(o),this.dispatchEvent(new Event("load"))},o.onerror=()=>this.dispatchEvent(new ErrorEvent("error"))}catch{this.dispatchEvent(new ErrorEvent("error"))}}}}}){}xs.define(ms);const bs="s-linear-progress",ys=w({indeterminate:!1,animated:!1,$max:100,$value:0}),ws=`
:host{
  display: block;
  height: 4px;
  color: var(--s-color-primary, #006782);
  border-radius: 2px;
  overflow: hidden;
}
:host([animated=true]) .known>.block{
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([indeterminate=true]) .known,
.unknown{
  display: none;
}
:host([indeterminate=true]) .unknown,
.known{
  display: flex;
}
.container{
  height: 100%;
  border-radius: inherit;
  position: relative;
}
.block{
  position: absolute;
  height: 100%;
  border-radius: inherit;
  width: 100%;
  left: 0;
  top: 0;
}
.track{
  background: var(--s-color-secondary-container, #CFE6F1);
}
.indicator{
  background: currentColor;
}
.indicator-dot{
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  background: currentColor;
  border-radius: inherit;
}
@keyframes unknown{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(150%);
  }
}
.unknown{
  justify-content: flex-end;
  gap: 4px;
  animation: unknown 2s linear infinite;
}
.unknown .block{
  position: static;
  flex-grow: 1;
  width: 100%;
  flex-shrink: 0;
}
.unknown .indicator{
  width: 50%;
}
`,$s=`
<div class="container known" part="container">
  <div class="track block" style="transform: translateX(0%)" part="track"></div>
  <div class="indicator-dot" part="indicator-dot"></div>
  <div class="indicator block" style="transform: translateX(-100%)" part="indicator"></div>
</div>
<div class="container unknown" part="container">
  <div class="track block" part="track"></div>
  <div class="indicator block" part="indicator"></div>
  <div class="track block" part="indicator"></div>
</div>
`;class ks extends b({style:ws,template:$s,props:ys,setup(t){const e=t.querySelector(".known>.track"),o=t.querySelector(".known>.indicator"),i=()=>{const n=Math.min(this.value,this.max)/this.max*100;e.style.transform=`translateX(calc(${n}% + ${n===0?0:4}px))`,o.style.transform=`translateX(${n-100}%)`};return{max:i,value:i}}}){}ks.define(bs);const Es="s-menu",Cs=`
:host{
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  padding: 4px 0;
  background: var(--s-color-surface-container-low, #F2F4F5);
}
:host(:nth-of-type(n+2)){
  border-top: solid 1px var(--s-color-surface-variant, #DCE4E8);
}
::slotted([slot=label]){
  display: flex;
  align-items: center;
  height: 44px;
  margin: -4px 20px;
  font-size: .75rem;
  color: var(--s-color-on-surface-variant, #40484C);
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
}
`,Ss=`
<slot name="label"></slot>
<slot></slot>
`;class qs extends b({style:Cs,template:Ss}){}const As="s-menu-item",Te=w({checked:!1,folded:!0}),Ts=`
:host{
  display: flex;
  flex-direction: column;
  margin: 4px 8px 4px 0;
  color: var(--s-color-on-surface, #191C1E);
}
.container{
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 0 24px 24px 0;
  padding: 0 20px;
  flex-shrink: 0;
}
:host([checked=true]) .container{
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.toggle-icon{
  width: 24px;
  height: 24px;
  display: none;
  margin-right: -8px;
  margin-left: 12px;
  transform: rotate(-90deg);
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.show-menu .toggle-icon{
  display: block;
}
:host([folded=false]) .toggle-icon{
  transform: rotate(0deg);
}
.fold{
  flex-shrink: 0;
}
.show-menu+.fold{
  margin: 0 -8px 0 0;
}
.menu{
  display: block;
  padding-top: 8px;
}
::slotted(:is(svg, s-icon)){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  height: 24px;
  width: 24px;
}
:host([checked=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 12px;
}
::slotted([slot=end]){
  margin-right: -8px;
  margin-left: 12px;
}
::slotted([slot=menu]){
  background: var(--s-color-surface-container-high, #E7E8EA);
}
`,Fs=`
<s-ripple class="container" part="container">
  <slot name="start"></slot>
  <div class="text" part="text">
    <slot></slot>
  </div>
  <slot name="end">
    <svg viewBox="0 -960 960 960" class="toggle-icon">
      <path d="M480-360 280-560h400L480-360Z"></path>
    </svg>
  </slot>
</s-ripple>
<s-fold class="fold" part="fold" folded="${Te.folded}">
  <slot name="menu" class="menu"></slot>
</s-fold>
`;class Ms extends b({style:Ts,template:Fs,props:Te,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".fold"),i=t.querySelector("slot[name=menu]");return o.onclick=n=>n.stopPropagation(),i.onslotchange=()=>e.classList[i.assignedElements().length>0?"add":"remove"]("show-menu"),e.onclick=()=>{e.classList.contains("show-menu")&&(this.folded=!this.folded)},{folded:n=>o.folded=n}}}){}qs.define(Es);Ms.define(As);const ie="s-navigation",zs=w({mode:["bottom","rail"],$value:""}),Ls=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--s-color-surface, #F8F9FB);
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  position: relative;
  padding-bottom: env(safe-area-inset-bottom);
}
:host([mode=rail]){
  flex-direction: column;
  justify-content: flex-start;
  width: 80px;
  box-shadow: none;
  height: 100%;
  background: none;
  padding-bottom: 0;
}
::slotted(s-navigation-item){
  height: 64px;
}
:host([mode=rail]) ::slotted(s-navigation-item){
  height: 72px;
}
:host([mode=rail]) ::slotted(s-icon-button[slot=start]){
  width: 56px;
  height: 56px;
  margin: 16px 0 8px 0;
  border-radius: 12px;
}
:host([mode=rail]) ::slotted([slot=end]){
  flex-grow: 1;
}
`,Bs=`
<slot name="start"></slot>
<slot id="slot"></slot>
<slot name="end"></slot>
`;class ae extends b({style:Ls,template:Bs,props:zs,setup(t){const e=t.querySelector("#slot"),o=new V({context:this,class:Fe,slot:e});return{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:i=>o.value=i}}}}){}const Ds="s-navigation-item",Ns=w({selected:!1,$value:""}),Ps=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  font-size: .75rem;
  font-weight: 500;
  box-sizing: border-box;
  width: 100%;
  max-width: 80px;
  text-transform: capitalize;
  transition: color var(--s-motion-duration-short4, 400ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  color: var(--s-color-primary, #006782);
}
.icon{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 48px;
  border-radius: 14px;
  transition: background-color var(--s-motion-duration-short4, 400ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([selected=true]) .icon{
  background: var(--s-color-secondary-container, #CFE6F1);
}
::slotted(*){
  flex-shrink: 0;
}
::slotted(svg){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  width: 24px;
  height: 24px;
}
:host([selected=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot=badge]){
  position: absolute;
  right: 4px;
  top: 0;
}
::slotted([slot=text]){
  margin-top: 4px;
}
`,Hs=`
<s-ripple attached="true" class="icon" part="icon">
  <slot name="icon"></slot>
  <slot name="badge"></slot>
</s-ripple>
<slot name="text"></slot>
`;class Fe extends b({style:Ps,template:Hs,props:Ns,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof ae&&this.dispatchEvent(new Event(`${ie}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof ae&&this.dispatchEvent(new Event(`${ie}:update`,{bubbles:!0}))}}}}){}ae.define(ie);Fe.define(Ds);const js="s-field",_s=w({focused:!1,fixed:!0}),Zs=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --field-padding: 16px;
  --field-padding-top: var(--field-padding);
  --field-padding-bottom: var(--field-padding);
  --field-padding-left: var(--field-padding);
  --field-padding-right: var(--field-padding);
  --field-border-radius: 4px;
  --field-border-width: 1px;
  --field-focused-border-width: 2px;
  --field-border-color: var(--s-color-outline, #70787D);
}
.container{
  display: flex;
  height: 100%;
  min-height: inherit;
}
.line{
  position: relative;
}
.line::before,
.line::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-width: var(--field-border-width);
  border-color: var(--field-border-color);
  pointer-events: none;
}
.line::after{
  border-width: var(--field-focused-border-width);
  border-color: var(--s-color-primary, #006782);
  opacity: 0;
  transition: opacity .2s ease-out;
}
:host([focused=true]) .line::after{
  opacity: 1;
}
.start,
.end{
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: var(--field-border-radius);
}
.start::before,
.end::before,
.start::after,
.end::after{
  border-top-style: solid;
  border-bottom-style: solid;
}
.start::before,
.start::after{
  border-left-style: solid;
  border-top-left-radius: var(--field-border-radius);
  border-bottom-left-radius: var(--field-border-radius);
}
.end::before,
.end::after{
  border-right-style: solid;
  border-top-right-radius: var(--field-border-radius);
  border-bottom-right-radius: var(--field-border-radius);
  left: auto;
  right: 0;
}
.box{
  display: grid;
  grid-template-areas: "a" "a";
  flex-grow: 1;
}
.box::before,
.box::after{
  border-bottom-style: solid;
}
.top,
.view{
  height: 100%;
  display: flex;
  grid-area: a;
  position: relative;
  box-sizing: border-box;
  margin-left: calc(var(--field-border-radius) * -1);
  margin-right: calc(var(--field-border-radius) * -1);
}
.view{
  align-items: center;
}
.top{
  pointer-events: none;
}
.top>.left::before,
.top>.right::before,
.top>.left::after,
.top>.right::after{
  border-top-style: solid;
}
.top>.left{
  width: calc(var(--field-padding-left) - var(--field-border-radius) - 4px);
  margin-left: max(4px, var(--field-border-radius));
  margin-right: min(4px, calc(var(--field-padding-left) - var(--field-border-radius)));
  flex-shrink: 0;
}
:host([fixed=false]) .top>.left{
  width: calc(var(--field-padding-left) - var(--field-border-radius));
  margin-right: 0;
}
.top>.right{
  flex-grow: 1;
  width: calc(var(--field-padding-right) - var(--field-border-radius) - 4px);
  margin-left: min(4px, calc(var(--field-padding-right) - var(--field-border-radius)));
  margin-right: max(4px, var(--field-border-radius));
}
:host([fixed=false]) .top>.right{
  width: calc(var(--field-padding-left) - var(--field-border-radius));
  margin-left: 0;
}
.label{
  display: block;
  height: 100%;
  flex-shrink: 0;
}
.label>.line::before,
.label>.line::after,
:host([fixed=false]) .label::before,
:host([fixed=false]) .label::after{
  border-top-style: solid;
}
.label>.line::before,
.label>.line::after{
  transform: translateX(-50%);
  width: min(calc(var(--field-padding-right) - var(--field-border-radius)), 8px);
}
::slotted([slot=label]){
  display: flex;
  align-items: center;
  height: 100%;
  font-size: .75rem;
  align-items: center;
  transform: translateY(-50%);
  color: var(--field-border-color);
  transition: transform .2s ease-out, font-size .2s ease-out;
  box-sizing: border-box;
  position: relative;
}
:host([fixed=false]) ::slotted([slot=label]),
::slotted([slot=label]:empty){
  font-size: inherit;
  transform: translateY(0);
}
::slotted([slot=label]:empty)::before,
::slotted([slot=label]:empty)::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
  width: min(calc(var(--field-padding-right) - var(--field-border-radius)), 8px);
  border-top: solid var(--field-border-width); var(--field-border-color);
}
::slotted([slot=label]:empty)::after{
  opacity: 0;
  border-width: var(--field-focused-border-width);
  transition: opacity .2s ease-out;
  border-color: var(--s-color-primary, #006782);
}
:host([focused=true]) ::slotted([slot=label]:empty)::after{
  opacity: 1;
}
:host([focused=true]) ::slotted([slot=label]){
  color: var(--s-color-primary, #006782);
}
::slotted(:not([slot])){
  padding-left: var(--field-padding-left);
  padding-right: var(--field-padding-right);
  padding-top: var(--field-padding-top);
  padding-bottom: var(--field-padding-bottom);
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}
`,Is=`
<div class="container" part="container">
  <div class="start line" part="start">
    <slot name="start"></slot>
  </div>
  <div class="box line" part="box">
    <slot class="view"></slot>
    <div class="top" part="top">
      <div class="line left"></div>
      <slot name="label" class="label line">
        <div class="line"></div>
      </slot>
      <div class="line right"></div>
    </div>
  </div>
  <div class="end line" part="end">
    <slot name="end"></slot>
  </div>
  <slot name="custom"></slot>
</div>
`;class Us extends b({style:Zs,template:Is,props:_s}){}Us.define(js);const Os="s-fold",Qs=w({folded:!1}),Vs=`
:host{
  display: block;
}
.container{
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  transition: grid-template-rows var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
}
:host([folded=true]) .container{
  grid-template-rows: 0fr;
}
.view{
  display: block;
  min-height: 0;
  overflow: hidden;
}
`,Ws=`
<slot name="trigger"></slot>
<div class="container" part="container">
  <slot class="view" part="view"></slot>
</div>
`;class Ys extends b({style:Vs,template:Ws,props:Qs,setup(t){t.querySelector("slot[name=trigger]").onclick=()=>this.folded=!this.folded}}){}Ys.define(Os);const Js="s-page",Gs=w({theme:["light","auto","dark"]}),Xs=`
:host{
  display: flow-root;
  height: 100%;
  font-family: Roboto, system-ui;
  color: var(--s-color-on-background);
  background: var(--s-color-background);
  --s-color-scrim: #000000;
  --s-color-primary: #006782;
  --s-color-on-primary: #ffffff;
  --s-color-primary-container: #BAEAFF;
  --s-color-on-primary-container: #004D62;
  --s-color-secondary: #4C616B;
  --s-color-on-secondary: #ffffff;
  --s-color-secondary-container: #CFE6F1;
  --s-color-on-secondary-container: #354A53;
  --s-color-tertiary: #5C5B7E;
  --s-color-on-tertiary: #ffffff;
  --s-color-tertiary-container: #E2DFFF;
  --s-color-on-tertiary-container: #444465;
  --s-color-error: #BA1A1A;
  --s-color-on-error: #ffffff;
  --s-color-error-container: #FFDAD6;
  --s-color-on-error-container: #93000A;
  --s-color-background: #F8F9FB;
  --s-color-on-background: #191C1E;
  --s-color-outline: #70787D;
  --s-color-outline-variant: #C0C8CC;
  --s-color-surface: #F8F9FB;
  --s-color-on-surface: #191C1E;
  --s-color-surface-variant: #DCE4E8;
  --s-color-on-surface-variant: #40484C;
  --s-color-inverse-surface: #2E3132;
  --s-color-inverse-on-surface: #EFF1F3;
  --s-color-inverse-primary: #60D4FE;
  --s-color-surface-container: #ECEEF0;
  --s-color-surface-container-high: #E7E8EA;
  --s-color-surface-container-highest: #E1E3E4;
  --s-color-surface-container-low: #F2F4F5;
  --s-color-surface-container-lowest: #FFFFFF;
  --s-color-success: #006d43;
  --s-color-on-success: #ffffff;
  --s-color-success-container: #92f7bc;
  --s-color-on-success-container: #002111;
  --s-color-warning: #6f5d00;
  --s-color-on-warning: #ffffff;
  --s-color-warning-container: #ffe169;
  --s-color-on-warning-container: #221b00;
  --s-color-dark-primary: #60D4FE;
  --s-color-dark-on-primary: #003545;
  --s-color-dark-primary-container: #004D62;
  --s-color-dark-on-primary-container: #BAEAFF;
  --s-color-dark-secondary: #B4CAD5;
  --s-color-dark-on-secondary: #1E333C;
  --s-color-dark-secondary-container: #354A53;
  --s-color-dark-on-secondary-container: #CFE6F1;
  --s-color-dark-tertiary: #C4C3EA;
  --s-color-dark-on-tertiary: #2D2D4D;
  --s-color-dark-tertiary-container: #444465;
  --s-color-dark-on-tertiary-container: #E2DFFF;
  --s-color-dark-error: #FFB4AB;
  --s-color-dark-on-error: #690005;
  --s-color-dark-error-container: #93000A;
  --s-color-dark-on-error-container: #FFDAD6;
  --s-color-dark-background: #111415;
  --s-color-dark-on-background: #E1E3E4;
  --s-color-dark-outline: #8A9296;
  --s-color-dark-outline-variant: #40484C;
  --s-color-dark-surface: #111415;
  --s-color-dark-on-surface: #E1E3E4;
  --s-color-dark-surface-variant: #40484C;
  --s-color-dark-on-surface-variant: #C0C8CC;
  --s-color-dark-inverse-surface: #E1E3E4;
  --s-color-dark-inverse-on-surface: #2E3132;
  --s-color-dark-inverse-primary: #006782;
  --s-color-dark-surface-container: #1D2022;
  --s-color-dark-surface-container-high: #272A2C;
  --s-color-dark-surface-container-highest: #323537;
  --s-color-dark-surface-container-low: #191C1E;
  --s-color-dark-surface-container-lowest: #0C0F10;
  --s-color-dark-success: #76daa1;
  --s-color-dark-on-success: #003920;
  --s-color-dark-success-container: #005231;
  --s-color-dark-on-success-container: #92f7bc;
  --s-color-dark-warning: #e2c54b;
  --s-color-dark-on-warning: #3a3000;
  --s-color-dark-warning-container: #544600;
  --s-color-dark-on-warning-container: #ffe169;
  --s-elevation-level1: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  --s-elevation-level2: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
  --s-elevation-level3: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  --s-elevation-level4: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);
  --s-elevation-level5: 0 10px 14px -6px rgba(0, 0, 0, .2), 0 22px 35px 3px rgba(0, 0, 0, .14), 0 8px 42px 7px rgba(0, 0, 0, .12);
  --s-motion-duration-Short1: 50ms;
  --s-motion-duration-short2: 100ms;
  --s-motion-duration-short3: 150ms;
  --s-motion-duration-short4: 200ms;
  --s-motion-duration-medium1: 250ms;
  --s-motion-duration-medium2: 300ms;
  --s-motion-duration-medium3: 350ms;
  --s-motion-duration-medium4: 400ms;
  --s-motion-duration-long1: 450ms;
  --s-motion-duration-long2: 500ms;
  --s-motion-duration-long3: 550ms;
  --s-motion-duration-long4: 600ms;
  --s-motion-duration-extra-long1: 700ms;
  --s-motion-duration-extra-long2: 800ms;
  --s-motion-duration-extra-long3: 900ms;
  --s-motion-duration-extra-long4: 1000ms;
  --s-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1.0);
  --s-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1.0);
  --s-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --s-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1.0);
  --s-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --s-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
}
:host([dark]){
  --s-color-primary: var(--s-color-dark-primary) !important;
  --s-color-on-primary: var(--s-color-dark-on-primary) !important;
  --s-color-primary-container: var(--s-color-dark-primary-container) !important;
  --s-color-on-primary-container: var(--s-color-dark-on-primary-container) !important;
  --s-color-secondary: var(--s-color-dark-secondary) !important;
  --s-color-on-secondary: var(--s-color-dark-on-secondary) !important;
  --s-color-secondary-container: var(--s-color-dark-secondary-container) !important;
  --s-color-on-secondary-container: var(--s-color-dark-on-secondary-container) !important;
  --s-color-tertiary: var(--s-color-dark-tertiary) !important;
  --s-color-on-tertiary: var(--s-color-dark-on-tertiary) !important;
  --s-color-tertiary-container: var(--s-color-dark-tertiary-container) !important;
  --s-color-on-tertiary-container: var(--s-color-dark-on-tertiary-container) !important;
  --s-color-error: var(--s-color-dark-error) !important;
  --s-color-on-error: var(--s-color-dark-on-error) !important;
  --s-color-error-container: var(--s-color-dark-error-container) !important;
  --s-color-on-error-container: var(--s-color-dark-on-error-container) !important;
  --s-color-background: var(--s-color-dark-background) !important;
  --s-color-on-background: var(--s-color-dark-on-background) !important;
  --s-color-outline: var(--s-color-dark-outline) !important;
  --s-color-outline-variant: var(--s-color-dark-outline-variant) !important;
  --s-color-surface: var(--s-color-dark-surface) !important;
  --s-color-on-surface: var(--s-color-dark-on-surface) !important;
  --s-color-surface-variant: var(--s-color-dark-surface-variant) !important;
  --s-color-on-surface-variant: var(--s-color-dark-on-surface-variant) !important;
  --s-color-inverse-surface: var(--s-color-dark-inverse-surface) !important;
  --s-color-inverse-on-surface: var(--s-color-dark-inverse-on-surface) !important;
  --s-color-inverse-primary: var(--s-color-dark-inverse-primary) !important;
  --s-color-surface-container: var(--s-color-dark-surface-container) !important;
  --s-color-surface-container-high: var(--s-color-dark-surface-container-high) !important;
  --s-color-surface-container-highest: var(--s-color-dark-surface-container-highest) !important;
  --s-color-surface-container-low: var(--s-color-dark-surface-container-low) !important;
  --s-color-surface-container-lowest: var(--s-color-dark-surface-container-lowest) !important;
  --s-color-success: var(--s-color-dark-success) !important;
  --s-color-on-success: var(--s-color-dark-on-success) !important;
  --s-color-success-container: var(--s-color-dark-success-container) !important;
  --s-color-on-success-container: var(--s-color-dark-on-success-container) !important;
  --s-color-warning: var(--s-color-dark-warning) !important;
  --s-color-on-warning: var(--s-color-dark-on-warning) !important;
  --s-color-warning-container: var(--s-color-dark-warning-container) !important;
  --s-color-on-warning-container: var(--s-color-dark-on-warning-container) !important;
}
`,Ks="<slot></slot>",le=document.createElement("style");le.textContent="::view-transition-old(root),::view-transition-new(root) { animation: none; mix-blend-mode: normal}";class Rs extends b({style:Xs,template:Ks,props:Gs,setup(){const t=getComputedStyle(this),e=matchMedia("(prefers-color-scheme: dark)"),o=()=>{const l=t.getPropertyValue("--s-motion-easing-standard-accelerate")||"cubic-bezier(0.3, 0, 1, 1)",a=t.getPropertyValue("--s-motion-duration-long4")||"600ms";return{easing:l,duration:z(a)}},i=()=>this.theme==="auto"?e.matches:this.theme==="dark";return{expose:{toggle:(l,a)=>new Promise(c=>{if(this.theme===l)return;const d=e.matches,r=v=>v==="auto"?d?"dark":"light":v,f=r(this.theme),m=r(l);if(f===m||!document.startViewTransition)return this.theme=l,c();const g=innerWidth,p=innerHeight,h={clipPath:[`circle(0px at 50% ${p/2}px)`,`circle(${Math.sqrt(g**2+p**2)/2}px at 50% ${p/2}px)`]};if(a&&a.isConnected){const{left:v,top:x}=a.getBoundingClientRect(),$=v+a.offsetWidth/2,k=x+a.offsetHeight/2,E=Math.max(g-$,$),T=Math.max(p-k,k),D=Math.sqrt(E**2+T**2);h.clipPath[0]=`circle(0px at ${$}px ${k}px)`,h.clipPath[1]=`circle(${D}px at ${$}px ${k}px)`}const y=document.startViewTransition(()=>{this.theme=l,document.head.appendChild(le)});y.ready.then(async()=>{const v=document.documentElement.animate(h,{...o(),pseudoElement:"::view-transition-new(root)"});c(v),await y.finished,le.remove()})}),get isDark(){return i()}},theme:l=>{if(l==="light")return this.removeAttribute("dark");if(l==="dark")return this.setAttribute("dark","");const a=()=>{e.matches?this.setAttribute("dark",""):this.removeAttribute("dark"),this.dispatchEvent(new Event("change"))};e.onchange=a,a()}}}}){}Rs.define(Js);const er="s-pagination",tr=w({$value:1,$total:20,$count:20,type:["standard","outlined"]}),or=`
:host{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  border-radius: 18px;
  gap: 4px;
  color: var(--s-color-on-surface, #191C1E);
}
:host([type=outlined]) :is(.icon-button, .button){
  border-width: 1px;
  border-color: var(--s-color-outline-variant, #C0C8CC);
  border-style: solid;
}
.container{
  display: flex;
  flex-wrap: wrap;
  gap: inherit;
  height: 100%;
  border-radius: inherit;
  justify-content: space-evenly;
}
.icon-button,
.button{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 36px;
}
.icon-button{
  border-radius: inherit;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
}
.button{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  padding: 0 8px;
  border-radius: inherit;
  box-sizing: border-box;
}
.checked{
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
  border-color: var(--s-color-secondary, #4C616B) !important;
}
.disabled{
  pointer-events: none;
  opacity: .38;
}
.text{
  pointer-events: none;
  border: none !important;
}
svg{
  width: 24px;
  height: 24px;
  padding: 1px;
  box-sizing: border-box;
  fill: var(--s-color-on-surface-variant, #40484C);
}
`,sr=`
<s-ripple class="prev icon-button disabled" part="prev">
  <svg viewBox="0 -960 960 960">
    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path>
  </svg>
</s-ripple>
<div class="container">
  <s-ripple class="button checked">1</s-ripple>
</div>
<s-ripple class="next icon-button disabled" part="next">
  <svg viewBox="0 -960 960 960">
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path>
  </svg>
</s-ripple>
`;class rr extends b({style:or,template:sr,props:tr,setup(t){const e=t.querySelector(".prev"),o=t.querySelector(".next"),i=t.querySelector(".container"),n=()=>this.dispatchEvent(new Event("change")),l=()=>{const c=Math.ceil(this.total/this.count);let d=Math.max(Math.min(c-7,Math.max(0,this.value-4)),0);if(i.childNodes.forEach(r=>{d++;const f=r;f.textContent=d.toString(),f.classList.toggle("checked",this.value===d),f.classList.remove("text")}),e.classList.toggle("disabled",this.value===1),o.classList.toggle("disabled",this.value===c),c>7){if(this.value>=5){i.childNodes.item(0).textContent="1";const r=i.childNodes.item(1);r.textContent="...",r.classList.add("text")}if(this.value<=c-4){i.childNodes.item(i.childNodes.length-1).textContent=c.toString();const r=i.childNodes.item(i.childNodes.length-2);r.textContent="...",r.classList.add("text")}}},a=()=>{const c=Math.ceil(this.total/this.count),d=Math.min(c,7),r=document.createDocumentFragment();for(let f=1;f<=d;f++){const m=new Z;m.classList.add("button"),r.appendChild(m)}i.innerHTML="",i.appendChild(r),l()};return i.onclick=c=>{if(!(c.target instanceof Z))return;const d=Number(c.target.textContent);d!==this.value&&(this.value=d,n())},e.onclick=()=>{const c=Math.max(this.value-1,1);c!==this.value&&(this.value=c,n())},o.onclick=()=>{const c=Math.min(this.value+1,Math.ceil(this.total/this.count));c!==this.value&&(this.value=c,n())},{total:a,value:l}}}){}rr.define(er);const ce="s-picker",nr=w({disabled:!1,$label:"",$value:""}),ir=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
  --picker-border-radius: 4px;
  --picker-border-color: var(--s-color-outline, #70787D);
  --picker-border-width: 1px;
  --picker-padding: 16px;
  --picker-height: 48px;
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
.popup{
  display: block;
  cursor: pointer;
  position: relative;
}
.ripple{
  border-radius: var(--picker-border-radius);
}
.field{
  --field-border-radius: var(--picker-border-radius);
  --field-border-color: var(--picker-border-color);
  --field-border-width: var(--picker-border-width);
  --field-padding: var(--picker-padding);
  height: var(--picker-height);
  width: 100%;
  position: relative;
}
.view{
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  padding: 0 var(--picker-padding);
}
svg{
  width: 24px;
  height: 24px;
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  margin-left: min(0px, calc((var(--picker-padding) * -1) + 4px));
  margin-right: max(0px, calc(var(--picker-padding) - 12px));
  fill: var(--s-color-on-surface-variant, #40484C);
}
.container{
  max-height: 408px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  padding: 4px 0;
  gap: 4px;
}
`,ar=`
<s-popup class="popup">
  <slot name="trigger" slot="trigger">
    <s-field fixed="false" class="field" part="field">
      <div class="label" slot="label"></div>
      <div class="view"></div>
      <svg viewBox="0 -960 960 960" slot="end">
        <path d="M480-360 280-560h400L480-360Z"></path>
      </svg>
      <s-ripple slot="custom" class="ripple" attached="true"></s-ripple>
    </s-field>
  </slot>
  <s-scroll-view class="container" part="container">
    <slot id="slot"></slot>
  </s-scroll-view>
</s-popup>
`;class de extends b({style:ir,template:ar,props:nr,setup(t){const e=t.querySelector(".popup"),o=t.querySelector(".field"),i=t.querySelector(".label"),n=t.querySelector(".view"),l=t.querySelector("#slot"),a=t.querySelector(".container"),c=new V({context:this,class:Me,slot:l});return e.addEventListener("show",()=>{o.focused=!0,o.fixed=!0,c.select||(n.textContent=this.label,n.style.opacity="0"),a.style.minWidth=`${this.offsetWidth}px`,c.select&&a.scrollTo({top:c.select.offsetTop-a.offsetTop-(a.offsetHeight/2-c.select.offsetHeight/2)})}),e.onclose=()=>{o.focused=!1,!c.select&&(o.fixed=!1)},e.addEventListener("closed",()=>a.style.removeProperty("min-width")),c.onUpdate=()=>{if(!c.select){o.fixed=!1,n.textContent="";return}o.fixed=!0,n.style.removeProperty("opacity"),n.textContent=c.select.textContent},c.onSelect=()=>e.close(),{expose:{get options(){return c.list},get selectedIndex(){return c.selectedIndex},get show(){return e.show},get toggle(){return e.toggle},get close(){return e.close}},label:d=>i.textContent=d,value:{get:()=>c.value,set:d=>c.value=d}}}}){}const lr="s-picker-item",cr=w({selected:!1,$value:""}),dr=`
:host{
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 4px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  flex-shrink: 0;
  padding: 0 12px;
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  background: var(--s-color-secondary-container, #CFE6F1);
  color: var(--s-color-on-secondary-container, #354A53);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
::slotted(:is(svg, s-icon)){
  color: var(--s-color-on-surface-variant, #40484C);
  fill: currentColor;
  height: 24px;
  width: 24px;
}
:host([selected=true]) ::slotted(:is(svg, s-icon)){
  color: currentColor;
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 8px;
}
::slotted([slot=end]){
  margin-left: 8px;
  margin-right: -4px;
}
`,pr=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple part="ripple" attached="true" ></s-ripple>
`;class Me extends b({style:dr,template:pr,props:cr,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof de&&this.dispatchEvent(new Event(`${ce}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof de&&this.dispatchEvent(new Event(`${ce}:update`,{bubbles:!0}))}}}}){}de.define(ce);Me.define(lr);const hr="s-popup",ur=w({align:["center","left","right"]}),mr=oe({show:Event,showed:Event,closed:Event}),gr=`
:host{
  display: inline-block;
  vertical-align: middle;
  text-align: left;
}
dialog{
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  max-width: none;
  max-height: none;
  position: relative;
  overflow: hidden;
  color: inherit;
  outline: none;
}
dialog::backdrop{
  background: none;
}
.scrim{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.container{
  display: block;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  width: fit-content;
  height: fit-content;
  outline: none;
}
::slotted(:not([slot])){
  border-radius: 4px;
  max-width: inherit;
  max-height: inherit;
  box-shadow: var(--s-elevation-level2, 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12));
  background: var(--s-color-surface-container, #ECEEF0);
}
`,fr=`
<slot name="trigger"></slot>
<dialog class="popup" part="popup">
  <div class="scrim" part="scrim"></div>
  <slot class="container" part="container"></slot>
</dialog>
`,vr=(s,t,e,o)=>{const i={top:0,left:0,origin:[]},n=o==="center",l=n?s.top+s.height:s.top,a=n?s.top-e:s.top-e+s.height;if(l+e<=innerHeight)i.top=l,i.origin[1]="top";else if(a>=0)i.top=a,i.origin[1]="bottom";else{const c=(innerHeight-e)/2;i.top=c,i.origin[1]=`${s.top+s.height/2-c}px`}if(n)i.left=s.left-(t-s.width)/2,i.origin[0]="center",i.left<0?(i.left=s.left,i.origin[0]=`${s.width/2}px`):i.left+t>innerWidth&&(i.left=s.left+s.width-t,i.origin[0]=`${t-s.width+s.width/2}px`);else{const c=f=>{i.left=s.left-t,i.origin[0]="right",i.left<0&&f&&f()},d=f=>{i.left=s.left+s.width,i.origin[0]="left",i.left+t>innerWidth&&f&&f()},r=()=>{const f=(innerWidth-t)/2;i.left=f,i.origin[0]=`${s.left+s.width/2-f}px`};o==="left"?c(()=>d(r)):d(()=>c(r))}return i};class xr extends b({style:gr,template:fr,props:ur,events:mr,setup(t){const e=t.querySelector("dialog"),o=t.querySelector(".container"),i=getComputedStyle(this),n=()=>{const d=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",r=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:d,duration:z(r)}},l=d=>{var p;if(!this.isConnected||e.open)return;const r={top:0,left:0,origin:[]};if(e.showModal(),!this.dispatchEvent(new Event("show",{cancelable:!0})))return e.close();o.style.maxHeight=`${innerHeight}px`,o.style.maxWidth=`${innerWidth}px`;const f=o.offsetWidth,m=o.offsetHeight;if(!d||d instanceof HTMLElement){const y=(d??this).getBoundingClientRect(),v=vr(y,f,m,this.align);r.top=v.top,r.left=v.left,r.origin=v.origin}else r.top=d.y,r.left=d.x,r.origin=((p=d.origin)==null?void 0:p.split(" "))??["left","top"],d.x+f>innerWidth&&(r.left=d.x-f,r.origin[0]="right"),d.y+m>innerHeight&&(r.top=d.y-m,r.origin[1]="bottom");o.style.transformOrigin=r.origin.join(" "),o.style.top=`${r.top}px`,o.style.left=`${r.left}px`;const g=o.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},n());this.setAttribute("showed",""),g.finished.then(()=>this.dispatchEvent(new Event("showed")))},a=()=>{if(!this.isConnected||!e.open||o.getAnimations().length>0||!this.dispatchEvent(new Event("close",{cancelable:!0})))return;const d=o.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},n());this.removeAttribute("showed"),d.finished.then(()=>{e.close(),this.dispatchEvent(new Event("closed"))})},c=d=>e.open?a():l(d);return t.querySelector("slot[name=trigger]").addEventListener("click",()=>l()),t.querySelector(".scrim").addEventListener("pointerdown",a),{expose:{show:l,toggle:c,close:a},onMounted:()=>addEventListener("resize",a),onUnmounted:()=>removeEventListener("resize",a)}}}){}xr.define(hr);const fe="s-popup-menu",br=w({group:["","start","end"]}),yr=`
:host{
  display: inline-block;
  vertical-align: middle;
  font-size: .875rem;
}
.popup{
  display: block;
}
.container{
  box-sizing: border-box;
  padding: 4px 0;
  max-width: 224px;
  min-height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
::slotted(s-popup-menu[group=start]){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
  margin-top: 4px;
  padding-top: 4px;
}
::slotted(s-popup-menu[group=end]){
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  margin-bottom: 4px;
  padding-bottom: 4px;
}
`,wr=`
<s-popup class="popup">
  <slot slot="trigger" name="trigger"></slot>
  <s-scroll-view class="container" part="container">
    <slot></slot>
  </s-scroll-view>
</s-popup>
`;class R extends b({style:yr,template:wr,props:br,setup(t){const e=t.querySelector(".popup"),o=t.querySelector("slot[name=trigger]");return o.onclick=i=>{i.stopPropagation(),e.show()},this.addEventListener(`${fe}:click`,i=>{i.stopPropagation(),e.close()}),e.onclose=i=>{const n=i.target;if(n.parentNode instanceof ShadowRoot){const l=n.parentNode.host;l.parentNode instanceof R&&l.parentNode.close()}},{onMounted:()=>{this.parentNode instanceof R&&e.setAttribute("align","right")},expose:{get show(){return e.show},get toggle(){return e.toggle},get close(){return e.close}}}}}){}const $r="s-popup-menu-item",kr=`
:host{
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0 4px;
  padding: 0 12px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  color: var(--s-color-on-surface, #191C1E);
}
.text{
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
::slotted(:is(svg, s-icon)){
  fill: currentColor;
  height: 24px;
  width: 24px;
  color: var(--s-color-on-surface-variant, #40484C);
}
::slotted([slot]){
  flex-shrink: 0;
}
::slotted([slot=start]){
  margin-left: -4px;
  margin-right: 8px;
}
::slotted([slot=end]){
  margin-left: 8px;
  margin-right: -6px;
}
`,Er=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true"></s-ripple>
`;class Cr extends b({style:kr,template:Er,setup(){this.addEventListener("click",()=>this.dispatchEvent(new Event(`${fe}:click`,{bubbles:!0})))}}){}R.define(fe);Cr.define($r);const Sr="s-radio-button",qr=w({disabled:!1,checked:!1,name:"",$value:""}),Ar=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 40px;
  color: var(--s-color-on-surface-variant, #40484C);
}
:host([checked=true]){
  color: var(--s-color-primary, #006782);
}
:host([disabled=true]){
  pointer-events: none;
}
.container{
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
:host([disabled=true]) .container{
  color: var(--s-color-on-surface, #191C1E) !important;
  opacity: .38 !important;
}
.unchecked,
.checked{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.checked{
  position: absolute;
  transform: scale(.5);
  opacity: 0;
  transition-property: transform, opacity;
  transition-timing-function: var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  transition-duration: var(--s-motion-duration-short4, 200ms);
}
:host([checked=true]:not([indeterminate=true])) .checked{
  opacity: 1;
  transform: scale(1);
}
.dot{
  width: 60%;
  height: 60%;
  transform: scale(0.4);
  background: currentColor;
  border-radius: 50%;
}
.ripple{
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  height: 100%;
  width: auto;
  border-radius: 50%;
}
svg,
::slotted(:is([slot=checked], [slot=unchecked])){
  color: currentColor;
  fill: currentColor;
  width: 60%;
  height: 60%;
}
`,Tr=`
<div class="container" part="container">
  <slot class="unchecked" name="unchecked">
    <svg viewBox="0 -960 960 960">
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
    </svg>
  </slot>
  <slot class="checked" name="checked">
    <div class="dot"></div>
  </slot>
</div>
<slot></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class Fr extends b({style:Ar,template:Tr,props:qr,setup(){this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(t=>{t!==this&&(t.checked=!1)}),this.dispatchEvent(new Event("change"))})}}){}Fr.define(Sr);const Mr="s-rate",Q=w({readOnly:!1,$max:10,$min:0,$value:5,$step:1}),zr=`
:host{
  display: inline-flex;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  font-size: 24px;
  width: calc(1em * 5);
  height: 1em;
}
.track{
  width: 100%;
  display: flex;
}
.track svg,
::slotted([slot=track]){
  fill: var(--s-color-secondary-container, #CFE6F1);
  filter: drop-shadow(1em 0 0 var(--s-color-secondary-container, #CFE6F1)) drop-shadow(2em 0 0 var(--s-color-secondary-container, #CFE6F1)) drop-shadow(3em 0 0 var(--s-color-secondary-container, #CFE6F1));
}
.indicator{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 50%;
  overflow: hidden;
  display: flex;
}
.indicator svg,
::slotted([slot=indicator]){
  fill: var(--s-color-primary, #006782);
  filter: drop-shadow(1em 0 0 var(--s-color-primary, #006782)) drop-shadow(2em 0 0 var(--s-color-primary, #006782)) drop-shadow(3em 0 0 var(--s-color-primary, #006782)) drop-shadow(4em 0 0 var(--s-color-primary, #006782));
}
svg,
::slotted(*){
  height: 100%;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  flex-shrink: 0;
}
input{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  margin: 0;
}
:host([readonly=true]) input{
  display: none;
}
`,Lr=`
<slot name="track" class="track" part="track">
  <svg viewBox="0 -960 960 960">
    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
  </svg>
</slot>
<slot name="indicator" class="indicator" part="indicator">
  <svg viewBox="0 -960 960 960">
    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
  </svg>
</slot>
<input
  type="range"
  max="${Q.max}"
  min="${Q.min}"
  step="${Q.step}"
  value="${Q.value}"
/>
`;class Br extends b({style:zr,template:Lr,props:Q,setup(t){const e=t.querySelector(".indicator"),o=t.querySelector("input"),i=()=>{const l=(Number(o.value)-this.min)*100/this.max-this.min;e.style.width=`${l}%`};return o.onchange=()=>this.dispatchEvent(new Event("change")),o.oninput=()=>{this.value=Number(o.value),this.dispatchEvent(new Event("input"))},{max:n=>{o.max=String(n),i()},min:n=>{o.min=String(n),i()},step:n=>{o.step=String(n),i()},value:n=>{o.value=String(n),i()}}}}){}Br.define(Mr);const Dr="s-search",Nr=w({$placeholder:"",disabled:!1,$value:"",$maxLength:-1,readOnly:!1}),Pr=`
:host{
  display: inline-flex;
  vertical-align: middle;
  min-height: 40px;
  width: 220px;
  border-radius: 20px;
  font-size: .875rem;
  position: relative;
  background: var(--s-color-surface-container-low, #F2F4F5);
  color: var(--s-color-on-surface, #191C1E);
  --search-outline-width: 1px;
  --search-outline-color: var(--s-color-surface-variant, #DCE4E8);
}
.wrapper{
  display: grid;
  position: relative;
  border-radius: inherit;
  overflow: hidden;
  background: inherit;
  min-height: inherit;
  flex-grow: 1;
  width: 100%;
  box-shadow: 0 0 0 var(--search-outline-width) var(--search-outline-color);
}
:host(:focus-within) .wrapper{
  position: absolute;
}
.container{
  display: flex;
  align-items: center;
  position: relative;
  min-height: inherit;
}
input{
  border: none;
  padding: 0 16px;
  height: 100%;
  width: 0;
  flex-grow: 1;
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: 1;
  font-family: inherit;
  caret-color: var(--s-color-primary, #006782);
}
input::placeholder{
  color: var(--s-color-outline, #70787D);
}
input::selection{
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
::slotted([slot=dropdown]){
  position: absolute;
  pointer-events: none;
  left: 0;
  height: 0;
  opacity: 0;
  border-top: solid 1px var(--s-color-surface-variant, #DCE4E8);
  height: auto;
}
:host(:focus-within) ::slotted([slot=dropdown]){
  pointer-events: auto;
  position: relative;
  opacity: 1;
}
::slotted([slot]){
  flex-shrink: 0;
}
.clear{
  display: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
svg,
::slotted(svg){
  height: 24px;
  width: 24px;
  fill: var(--s-color-on-surface-variant, #40484C);
}
.icon,
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin: 0 -8px 0 8px;
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin: 0 8px 0 -8px;
}
::slotted(s-icon-button[slot=start]){
  margin-right: -16px;
}
.clear,
::slotted(s-icon-button[slot=end]){
  margin-left: -16px;
}
`,Hr=`
<div class="wrapper" part="wrapper">
  <div class="container" part="container">
    <slot name="start">
      <svg viewBox="0 -960 960 960" class="icon">
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
      </svg>
    </slot>
    <input type="text">
    <slot name="end">
      <s-ripple class="clear">
        <svg viewBox="0 -960 960 960">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path>
        </svg>
      </s-ripple>
    </slot>
  </div>
  <slot name="dropdown"></slot>
</div>
`;class jr extends b({style:Pr,template:Hr,props:Nr,setup(t){const e=t.querySelector("input"),o=t.querySelector(".clear"),i=t.querySelector("[name=dropdown]"),n=()=>o.style.display=e.value===""?"none":"flex";return i.onmousedown=l=>l.preventDefault(),e.onchange=()=>this.dispatchEvent(new Event("change")),o.onclick=()=>{e.value="",n(),this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))},e.oninput=n,{expose:{get native(){return e}},value:{get:()=>e.value,set:l=>{e.value=l,n()}},placeholder:l=>e.placeholder=l,maxLength:l=>e.maxLength=l,readOnly:l=>e.readOnly=l}}}){}jr.define(Dr);const pe="s-segmented-button",_r=w({$value:"",mode:["auto","fixed"]}),Zr=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  border-radius: 20px;
  height: 40px;
  padding: 3px;
  overflow: hidden;
  box-sizing: border-box;
  border: solid 1px var(--s-color-surface-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
}
:host([mode=fixed]){
  display: flex;
}
:host([mode=fixed]) ::slotted(s-segmented-button-item){
  flex-basis: 100%;
}
`,Ir="<slot></slot>";class he extends b({style:Zr,template:Ir,props:_r,setup(t){const e=t.querySelector("slot"),o=new V({context:this,class:ze,slot:e}),i=getComputedStyle(this),n=()=>{const l=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",a=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:z(a)}};return o.onUpdate=l=>{if(!l||!o.select||!this.isConnected)return;const a=l.shadowRoot.querySelector(".indicator").getBoundingClientRect(),c=o.select.shadowRoot.querySelector(".indicator"),d=c.getBoundingClientRect(),r=a.left-d.left;c.style.transform=`translateX(${d.left>a.left?r:Math.abs(r)}px)`,c.style.width=`${a.width}px`,l.style.zIndex="1";const f=c.animate([{transform:"translateX(0)",width:`${d.width}px`}],n());f.onfinish=f.oncancel=f.onremove=()=>{c.style.removeProperty("transform"),c.style.removeProperty("width"),l.style.removeProperty("z-index")}},{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:l=>o.value=l}}}}){}const Ur="s-segmented-button-item",Or=w({selected:!1,disabled:!1,selectable:!0,$value:""}),Qr=`
:host{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 64px;
  padding: 0 16px;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 500;
  font-size: .8125rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 20px;
  transition: color var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  color: var(--s-color-on-surface, #191C1E);
}
:host([selected=true]){
  color: var(--s-color-on-primary, #ffffff);
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent);
}
.indicator{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: inherit;
  background: var(--s-color-primary, #006782);
}
:host([selected=true]) .indicator{
  opacity: 1;
}
::slotted([slot]){
  width: 18px;
  height: 18px;
  color: inherit;
  fill: currentColor;
  flex-shrink: 0;
  position: relative;
}
::slotted([slot=start]){
  margin-right: 4px;
}
::slotted([slot=end]){
  margin-right: 4px;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  position: relative;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    opacity: .38;
    color: var(--s-color-on-surface, #191C1E);
  }
}
`,Vr=`
<div class="indicator" part="indicator"></div>
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class ze extends b({style:Qr,template:Vr,props:Or,setup(){return this.addEventListener("click",()=>{!(this.parentNode instanceof he)||this.selected||this.selectable&&this.dispatchEvent(new Event(`${pe}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof he&&this.dispatchEvent(new CustomEvent(`${pe}:update`,{bubbles:!0,detail:{}}))}}}}){}he.define(pe);ze.define(Ur);const Wr="s-skeleton",Yr=`
:host{
  display: block;
  height: 16px;
  animation: skeleton var(--s-motion-duration-extra-long4, 1000ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0)) infinite;
  background: linear-gradient(90deg, var(--s-color-surface-container-high, #E7E8EA) 25%, var(--s-color-surface-container-highest, #E1E3E4) 37%, var(--s-color-surface-container-high, #E7E8EA) 63%);
  background-size: 400% 100%;
  border-radius: 8px;
}
@keyframes skeleton{
  0%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
`;class Jr extends b({style:Yr}){}Jr.define(Wr);const Gr="s-slider",_=w({disabled:!1,$labeled:!1,$max:100,$min:0,$step:1,$value:0}),Xr=`
:host{
  display: block;
  color: var(--s-color-primary, #006782);
  height: 16px;
  cursor: pointer;
  position: relative;
}
:host([disabled=true]){
  pointer-events: none;
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent) !important;
}
.container{
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  pointer-events: none;
}
.track,
.indicator{
  height: 4px;
  border-radius: 2px;
  position: absolute;
  right: 0;
}
.track{
  background: var(--s-color-secondary-container, #CFE6F1);
  width: calc(100% - 20px);
}
:host([disabled=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
.indicator{
  left: 0;
  width: 0;
  background: currentColor;
}
.handle{
  position: relative;
  height: 16px;
  width: 16px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}
.thumb{
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: currentColor;
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
.thumb::before{
  content: '';
  position: absolute;
  left: -10px;
  top: -10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: color-mix(in srgb, currentColor 20%, transparent);
  transform: scale(0);
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.active .thumb::before{
  transform: scale(1);
}
.label{
  position: absolute;
  bottom: 100%;
  margin-bottom: 12px;
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 6px;
  height: 24px;
  font-size: .75rem;
  transform: scale(0);
  transform-origin: center bottom;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  opacity: .85;
  z-index: 1;
  display: none;
}
.active .label{
  transform: scale(1);
}
:host([labeled=true]) .label{
  display: flex;
}
input{
  margin: 0;
  height: 100%;
  width: 100%;
  cursor: inherit;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]){
    color: var(--s-color-on-surface, #191C1E) !important;
  }
  :host([disabled=true]) .track{
    background: var(--s-color-surface-container-high, #E7E8EA) !important;
  }
  :host([disabled=true]) .thumb{
    opacity: .38;
  }
}
`,Kr=`
<div class="container" part="container">
  <div class="indicator" part="indicator"></div>
  <div class="track" part="track"></div>
  <div class="handle" part="handle">
    <div class="thumb" part="thumb"></div>
    <div class="label" part="label">${_.value}</div>
  </div>
</div>
<input
  type="range"
  max="${_.max}"
  min="${_.min}"
  step="${_.step}"
  value="${_.value}"
/>
`;class Rr extends b({style:Xr,template:Kr,props:_,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".indicator"),i=t.querySelector(".track"),n=t.querySelector(".handle"),l=t.querySelector(".label"),a=t.querySelector("input"),c=()=>{const d=Number(a.value),r=(d-this.min)*100/(this.max-this.min);n.style.left=`calc(${r}% - ${r*.16}px)`,o.style.width=`calc(${r}% - ${4+r*.16}px)`,i.style.width=`calc(${100-r}% - ${20-r*.16}px)`,l.textContent=String(d)};return a.onchange=()=>this.dispatchEvent(new Event("change")),a.oninput=()=>{this.value=Number(a.value),this.dispatchEvent(new Event("input"))},a.onmousedown=d=>d.button===0&&A.pointerFine.matches&&e.classList.add("active"),a.onmouseup=()=>A.pointerFine.matches&&e.classList.remove("active"),a.ontouchstart=()=>A.pointerCoarse.matches&&e.classList.add("active"),a.ontouchend=()=>A.pointerCoarse.matches&&e.classList.remove("active"),a.ontouchcancel=()=>A.pointerCoarse.matches&&e.classList.remove("active"),{max:d=>{a.max=String(d),c()},min:d=>{a.min=String(d),c()},step:d=>{a.step=String(d),c()},value:d=>{a.value=String(d),c()}}}}){}Rr.define(Gr);const J=document.createElement("div");J.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const Le=s=>{s.appendChild(J);const t=J.getBoundingClientRect();return s.removeChild(J),{left:t.left,top:t.top,width:t.width,height:t.height}},en="s-snackbar",tn=w({type:["none","info","success","warning","error"],align:["auto","top","bottom"],$duration:4e3}),on=oe({show:Event,showed:Event,closed:Event}),sn=`
:host{
  display: inline-block;
  vertical-align: middle;
}
.popup{
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  outline: none;
  max-width: none;
  max-height: none;
  display: none;
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: none;
  padding: 16px;
  justify-content: center;
  transition: transform var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
}
.popup.show{
  display: flex;
}
.container{
  outline: none;
  align-self: flex-end;
  width: fit-content;
  display: flex;
  align-items: center;
  min-height: 48px;
  line-height: 22px;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: .875rem;
  font-weight: 500;
  box-sizing: border-box;
  max-width: 320px;
  transition: box-shadow var(--s-motion-duration-medium4, 400ms) var(--s-motion-easing-standard, cubic-bezier(0.2, 0, 0, 1.0));
  box-shadow: var(--s-elevation-level3, 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12));
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
}
.text{
  flex-grow: 1;
  min-width: 0;
  user-select: text;
  -webkit-user-select: text;
}
.icon{
  display: none;
}
:host([type=info]) .info,
:host([type=success]) .success,
:host([type=warning]) .warning,
:host([type=error]) .error{
  display: block;
}
:host([type=info]) .container{
  color: var(--s-color-on-secondary, #ffffff);
  background: var(--s-color-secondary, #4C616B);
}
:host([type=success]) .container{
  color: var(--s-color-on-success, #ffffff);
  background: var(--s-color-success, #006d43);
}
:host([type=warning]) .container{
  color: var(--s-color-on-warning, #ffffff);
  background: var(--s-color-warning, #6f5d00);
}
:host([type=error]) .container{
  color: var(--s-color-on-error, #ffffff);
  background: var(--s-color-error, #BA1A1A);
}
:host([type=info]) ::slotted([slot=action]),
:host([type=success]) ::slotted([slot=action]),
:host([type=warning]) ::slotted([slot=action]),
:host([type=error]) ::slotted([slot=action]){
  color: currentColor;
}
svg,
::slotted([slot=icon]){
  width: 24px;
  height: 24px;
  color: currentColor;
  fill: currentColor;
  margin-right: 12px;
  margin-left: -4px;
}
::slotted([slot=action]){
  font-size: inherit;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 4px;
  margin-right: -8px;
  margin-left: 12px;
  cursor: pointer;
  height: 36px;
  font-size: .875rem;
  color: var(--s-color-inverse-primary, #60D4FE);
}
@media (max-width: 375px){
  .popup{
    padding: 8px;
  }
}
@media (pointer: fine){
  .container:hover{
    box-shadow: var(--s-elevation-level4, 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12));
  }
}
`,rn=`
<slot name="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <div class="container" part="container">
    <slot name="icon">
      <svg viewBox="0 0 24 24" class="icon info">
        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon success">
        <path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon warning">
        <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
      </svg>
      <svg viewBox="0 0 24 24" class="icon error">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
    </slot>
    <div class="text" part="text">
      <slot></slot>
    </div>
    <slot name="action"></slot>
  </div>
</div>
`,nn=s=>{let t=document.body;const e=new Be;e.style.display="block";const o=document.body.firstElementChild;if(o&&o.tagName==="S-PAGE"&&(t=o),typeof s=="string")e.textContent=s;else{if(s.root&&(t=s.root),s.align&&(e.align=s.align),s.icon&&(s.icon instanceof Element&&(s.icon.slot="icon",e.appendChild(s.icon)),typeof s.icon=="string"&&(e.innerHTML=s.icon)),e.append(s.text),s.type&&(e.type=s.type),s.action){const i=document.createElement("s-button");i.type="text",i.slot="action",typeof s.action=="string"?i.textContent=s.action:(i.textContent=s.action.text,i.addEventListener("click",s.action.click)),e.appendChild(i)}typeof s.duration=="number"&&(e.duration=s.duration)}return t.appendChild(e),e.addEventListener("closed",()=>t.removeChild(e)),e.show(),e},we={top:[],bottom:[]};class Be extends b({style:sn,template:rn,props:tn,events:on,methods:{builder:nn},setup(t){const e=t.querySelector(".popup"),o=t.querySelector(".container"),i=getComputedStyle(this),n=()=>{const r=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",f=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:r,duration:z(f)}},l={timer:0,gap:8},a=()=>this.align==="auto"?A.pointerCoarse.matches?"top":"bottom":this.align,c=()=>{if(!this.isConnected||e.classList.contains("show"))return;if(e.classList.add("show"),e.showPopover)e.showPopover();else{const h=Le(t);e.style.width=`${innerWidth}px`,e.style.height=`${innerHeight}px`,e.style.marginLeft=`${-h.left}px`,e.style.marginTop=`${-h.top}px`,e.style.zIndex="3"}const r=a();o.style.alignSelf={top:"flex-start",bottom:"flex-end"}[r];const f=we[r],m={top:1,bottom:-1}[r];let g=o.offsetHeight+l.gap;for(const h of f)h.style.transform=`translateY(${g*m}px)`,g+=h.firstElementChild.offsetHeight+l.gap;const p=o.animate({opacity:[0,1],transform:[`translateY(calc(${m*-100}% + 16px))`,""],pointerEvents:"auto"},{...n(),fill:"forwards"});this.dispatchEvent(new Event("show")),this.duration>0&&(l.timer=setTimeout(d,this.duration)),e.dataset.align=r,f.unshift(e),p.finished.then(()=>this.dispatchEvent(new Event("showed")))},d=()=>{if(!this.isConnected||!e.classList.contains("show"))return;clearTimeout(l.timer);const r=e.dataset.align,f=we[r],m={top:1,bottom:-1}[r],g=f.indexOf(e);for(let h=g+1;h<f.length;h++){const y=f[h],v=Math.abs(Number(y.style.transform.slice(11).slice(0,-3)));y.style.transform=`translateY(${(v-o.offsetHeight-l.gap)*m}px)`}const p=o.animate({opacity:[1,0],transform:`translateY(calc(${m*-100}% + 16px))`},n());this.dispatchEvent(new Event("close")),p.finished.then(()=>{e.hidePopover&&e.hidePopover(),e.removeAttribute("style"),e.classList.remove("show"),this.dispatchEvent(new Event("closed"))}),f.splice(g,1)};return o.onmouseenter=()=>clearTimeout(l.timer),o.onmouseleave=()=>e.classList.contains("show")&&this.duration>0&&(l.timer=setTimeout(d,this.duration)),t.querySelector("slot[name=trigger]").onclick=c,t.querySelector("slot[name=action]").onclick=d,{expose:{show:c,close:d}}}}){}Be.define(en);const an="s-switch",ln=w({disabled:!1,checked:!1}),cn=`
:host{
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  position: relative;
  cursor: pointer;
  color: var(--s-color-primary, #006782);
  width: 52px;
  aspect-ratio: 1.625;
  -webkit-aspect-ratio: 1.625;
  border-radius: 16px;
}
:host([disabled=true]){
  pointer-events: none;
}
.track{
  width: 100%;
  height: 100%;
  border: solid 2px var(--s-color-outline, #70787D);
  box-sizing: border-box;
  border-radius: inherit;
}
:host([disabled=true]) .track{
  border-color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
:host([checked=true]) .track{
  border-width: 0;
  background: currentColor;
}
:host([disabled=true][checked=true]) .track{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent) !important;
}
.ripple{
  height: 125%;
  width: auto;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-radius: 50%;
  inset: auto;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: var(--s-color-outline, #70787D);
  transform: translateX(-10%);
}
:host([checked=true]) .ripple{
  transform: translateX(40%);
  color: currentColor;
}
.thumb{
  background: var(--s-color-outline, #70787D);
  border-radius: 50%;
  width: 40%;
  height: 40%;
  transition: transform var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  position: relative;
}
:host([disabled=true]) .thumb{
  background: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 38%, transparent);
}
:host([checked=true]) .thumb{
  background: var(--s-color-on-primary, #ffffff);
  transform: scale(1.5);
  box-shadow: var(--s-elevation-level1, 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12));
}
:host([disabled=true][checked=true]) .thumb{
  background: var(--s-color-surface, #F8F9FB);
  box-shadow: none;
}
.icon{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity var(--s-motion-duration-short4, 200ms) var(--s-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1.0));
  color: currentColor;
}
::slotted([slot=icon]),
svg{
  color: currentColor;
  fill: currentColor;
  width: 70%;
  height: 70%;
}
:host([checked=true]) .icon{
  opacity: 1;
}
:host([checked=true][disabled=true]) .icon{
  color: color-mix(in srgb, var(--s-color-on-surface, #191C1E) 12%, transparent);
}
@supports not (color: color-mix(in srgb, black, white)){
  :host([disabled=true]) .track{
    border-color: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true][checked=true]) .track{
    background: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true]) .thumb{
    background: var(--s-color-surface-container-highest, #E1E3E4) !important;
  }
  :host([disabled=true][checked=true]) .thumb{
    background: var(--s-color-surface, #F8F9FB) !important;
  }
}
`,dn=`
<div class="track" part="track"></div>
<s-ripple attached="true" class="ripple" part="ripple">
  <div class="thumb" part="thumb">
    <slot name="icon" class="icon"></slot>
  </div>
</s-ripple>
`;class pn extends b({style:cn,template:dn,props:ln,setup(){this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}pn.define(an);const ue="s-tab",hn=w({mode:["scrollable","fixed"],$value:""}),un=`
:host{
  display: flex;
  justify-content: flex-start;
  position: relative;
  background: var(--s-color-surface, #F8F9FB);
  color: var(--s-color-on-surface-variant, #40484C);
}
:host::before{
  content: '';
  position: absolute;
  width: 100%;
  border-bottom: solid 1px var(--s-color-surface-variant, #DCE4E8);
  bottom: 0;
  left: 0;
}
.container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  scrollbar-width: none;
  overflow-x: auto;
}
.container::-webkit-scrollbar{
  display: none;
}
:host([mode=fixed]) .container{
  overflow: hidden;
  width: 100%;
}
::slotted(s-tab-item){
  flex-shrink: 0;
  flex-basis: auto;
}
:host([mode=fixed]) ::slotted(s-tab-item){
  flex-basis: 100%;
  flex-shrink: 1;
}
`,mn=`
<div class="container" part="container">
  <slot></slot>
</div>
`;class me extends b({style:un,template:mn,props:hn,setup(t){const e=t.querySelector("slot"),o=t.querySelector(".container"),i=new V({context:this,class:De,slot:e}),n=getComputedStyle(this),l=()=>{const a=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",c=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:a,duration:z(c)}};return i.onUpdate=a=>{var g;if(i.select&&o.scrollWidth!==o.offsetWidth){const p=i.select.offsetLeft-o.offsetLeft-(o.offsetWidth/2-i.select.offsetWidth/2);o.scrollTo({left:p,behavior:"smooth"})}if(!a||!i.select||!this.isConnected)return;const c=a.shadowRoot.querySelector(".indicator").getBoundingClientRect(),d=(g=i.select.shadowRoot)==null?void 0:g.querySelector(".indicator"),r=d.getBoundingClientRect(),f=c.left-r.left;d.style.transform=`translateX(${r.left>c.left?f:Math.abs(f)}px)`,d.style.width=`${c.width}px`;const m=d.animate([{transform:"translateX(0)",width:`${r.width}px`}],l());m.onfinish=m.oncancel=m.onremove=()=>{d.style.removeProperty("transform"),d.style.removeProperty("width")}},{expose:{get options(){return i.list},get selectedIndex(){return i.selectedIndex}},value:{get:()=>i.value,set:a=>i.value=a}}}}){}const gn="s-tab-item",fn=w({selected:!1,$value:""}),vn=`
:host{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  position: relative;
  cursor: pointer;
  font-size: .875rem;
  font-weight: 500;
  text-transform: capitalize;
  padding: 0 16px;
}
:host([selected=true]){
  color: var(--s-color-primary, #006782);
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: inherit;
}
.indicator{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: var(--s-color-primary, #006782);
  border-radius: 1.5px 1.5px 0 0;
  opacity: 0;
}
:host([selected=true]) .indicator{
  opacity: 1;
}
.text{
  display: flex;
  align-items: center;
  line-height: 1;
}
::slotted([slot=icon]){
  width: 24px;
  height: 24px;
  color: currentColor;
  fill: currentColor;
  margin: 10px 0;
}
::slotted([slot=text]){
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1;
}
.icon ::slotted([slot=text]){
  margin-top: -6px;
  height: 26px;
}
::slotted([slot=badge]){
  margin-left: 4px;
}
::slotted([slot=badge]:not(:empty)){
  width: auto;
}
.icon ::slotted([slot=badge]){
  position: absolute;
  right: 0;
  width: 8px;
  top: 12px;
  margin-left: 0;
}
`,xn=`
<div class="container" part="container">
  <slot name="icon"></slot>
  <div class="text" part="text">
    <slot name="text"></slot>
    <slot name="badge"></slot>
  </div>
  <div class="indicator" part="indicator"></div>
</div>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class De extends b({style:vn,template:xn,props:fn,setup(t){const e=t.querySelector(".container");return t.querySelector("[name=icon]").addEventListener("slotchange",o=>{const n=o.target.assignedElements().length;e.classList[n>0?"add":"remove"]("icon")}),this.addEventListener("click",()=>{!(this.parentNode instanceof me)||this.selected||this.dispatchEvent(new Event(`${ue}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof me&&this.dispatchEvent(new Event(`${ue}:update`,{bubbles:!0}))}}}}){}me.define(ue);De.define(gn);const bn="s-table",yn=`
:host{
  display: inline-block;
  font-size: .875rem;
  overflow: auto;
  border: solid 1px var(--s-color-outline-variant, #C0C8CC);
  border-radius: 4px;
  white-space: nowrap;
}
slot{
  display: table;
  border-collapse: collapse;
  min-width: 100%;
}
@media (pointer: fine){
  :host::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background: transparent;
  }
  :host::-webkit-scrollbar-thumb{
    background: var(--s-color-outline-variant, #C0C8CC);
    border-radius: 3px;
  }
  @supports not selector(::-webkit-scrollbar){
    :host{
      scrollbar-color: var(--s-color-outline-variant, #C0C8CC) transparent;
    }
  }
}
`,wn=`
<slot></slot>
`;class $n extends b({style:yn,template:wn}){}const kn="s-thead",En=`
:host{
  display: table-header-group;
  font-weight: 600;
  position: sticky;
  top: 0;
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
  color: var(--s-color-on-surface-variant, #40484C);
}
`,Cn="<slot></slot>";class Sn extends b({style:En,template:Cn}){}const qn="s-tbody",An=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #191C1E);
}
::slotted(s-tr:not(:first-child)){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
`,Tn="<slot></slot>";class Fn extends b({style:An,template:Tn}){}const Mn="s-tr",zn=`
:host{
  display: table-row;
}
`,Ln="<slot></slot>";class Bn extends b({style:zn,template:Ln}){}const Dn="s-th",Nn=`
:host{
  display: table-cell;
  padding: 12px 16px;
  text-transform: capitalize;
}
`,Pn="<slot></slot>";class Hn extends b({style:Nn,template:Pn}){}const jn="s-td",_n=`
:host{
  display: table-cell;
  user-select: text;
  padding: 12px 16px;
}
`,Zn="<slot></slot>";class In extends b({style:_n,template:Zn}){}$n.define(bn);Sn.define(kn);Fn.define(qn);Bn.define(Mn);Hn.define(Dn);In.define(jn);const Un="s-text-field",On=w({$label:"",$placeholder:"",disabled:!1,type:["text","number","password","multiline"],error:!1,$value:"",$maxLength:-1,readOnly:!1,multiLine:!1,countered:!1}),Qn=`
:host{
  display: inline-grid;
  vertical-align: middle;
  font-size: .875rem;
  min-height: 48px;
  width: 280px;
  color: var(--s-color-on-surface, #191C1E);
  --text-field-border-radius: 4px;
  --text-field-border-color: var(--s-color-outline, #70787D);
  --text-field-padding: 16px;
  --text-field-padding-top: var(--text-field-padding);
  --text-field-padding-bottom: var(--text-field-padding);
  --text-field-padding-left: var(--text-field-padding);
  --text-field-padding-right: var(--text-field-padding);
}
:host([disabled=true]){
  pointer-events: none;
  opacity: .38;
}
:host([type=multiline]){
  line-height: 24px;
  --text-field-padding-top: 12px;
  --text-field-padding-bottom: 12px;
}
.field{
  display: block;
  min-height: inherit;
  font-size: inherit;
  --field-border-radius: var(--text-field-border-radius);
  --field-border-color: var(--text-field-border-color);
  --field-padding: var(--text-field-padding);
  --field-padding-top: var(--text-field-padding-top);
  --field-padding-bottom: var(--text-field-padding-bottom);
  --field-padding-left: var(--text-field-padding-left);
  --field-padding-right: var(--text-field-padding-right);
}
:host([error=true]) .field{
  --s-color-primary: var(--s-color-error, #BA1A1A);
  --field-border-color: var(--s-color-error, #BA1A1A);
  --field-border-width: 2px;
}
:host([type=multiline]) .label{
  height: fit-content;
  padding-top: var(--text-field-padding-top);
  padding-bottom: var(--text-field-padding-bottom);
}
.view{
  flex-grow: 1;
  padding: 0;
  flex-direction: column;
  position: relative;
}
input,
textarea{
  border: none;
  height: 100%;
  width: 100%;
  padding-left: var(--field-padding-left);
  padding-right: var(--field-padding-right);
  background: none;
  outline: none;
  font-size: inherit;
  color: inherit;
  box-sizing: border-box;
  line-height: inherit;
  font-family: inherit;
  caret-color: var(--s-color-primary, #006782);
  display: block;
  -moz-appearance: textfield;
}
textarea{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  resize: none;
  scrollbar-width: none;
  display: none;
}
input::placeholder,
textarea::placeholder{
  color: var(--text-field-border-color);
}
input::selection,
textarea::selection{
  background: var(--s-color-primary, #006782);
  color: var(--s-color-on-primary, #ffffff);
}
:host([type=multiline]) input,
.text>.counter{
  display: none;
}
textarea,
.shadow{
  line-height: inherit;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  box-sizing: border-box;
  padding-top: var(--text-field-padding-top);
  padding-bottom: var(--text-field-padding-bottom);
  padding-left: var(--text-field-padding-left);
  padding-right: var(--text-field-padding-right);
}
:host([type=multiline]) :is(textarea, .shadow),
:host([countered=true]) .counter{
  display: block;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
input:is(::-ms-clear, ::-ms-reveal){
  display: none;
}
.shadow{
  pointer-events: none;
  display: none;
  opacity: 0;
  width: 100%;
  min-height: 100%;
}
.shadow::after{
  content: ' ';
}
.text{
  display: flex;
  align-items: flex-end;
  width: 100%;
  box-sizing: border-box;
  font-size: .75rem;
  color: var(--text-field-border-color);
}
:host([error=true]) .text{
  color: var(--s-color-error, #BA1A1A);
}
.text>slot[name=text]{
  display: block;
  flex-grow: 1;
}
.text>.counter,
::slotted([slot=text]){
  margin-top: 8px;
}
.toggle{
  flex-direction: column;
}
.toggle,
.toggle>s-ripple{
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle svg{
  pointer-events: none;
}
.toggle>s-ripple{
  display: none;
}
.toggle>.up,
.toggle>.down{
  height: 16px;
  width: 24px;
  border-radius: 4px;
  margin-right: 8px;
  margin-left: -4px;
}
.toggle>.visibility{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 4px 0 -4px;
}
.toggle>.visibility>svg{
  display: none;
}
:host([type=number]) .toggle>:is(.up, .down),
:host([type=password]) :is(.toggle>.visibility, .toggle:not(.show-password)>.visibility>.on, .toggle.show-password>.visibility>.off){
  display: flex;
}
svg,
::slotted(svg){
  fill: var(--s-color-on-surface-variant, #40484C);
  height: 24px;
  width: 24px;
  flex-shrink: 0;
}
::slotted(s-icon-button[slot=start]){
  margin-left: 4px;
  margin-right: calc(var(--text-field-border-radius) - var(--text-field-padding-left) + 4px);
}
::slotted(s-icon-button[slot=end]){
  margin-right: 4px;
  margin-left: calc(var(--text-field-border-radius) - var(--text-field-padding-right) + 4px);
}
::slotted(:is(s-icon[slot=start], svg[slot=start])){
  margin-left: 12px;
  margin-right: calc(var(--text-field-border-radius) - var(--text-field-padding-left) + 8px);
}
::slotted(:is(s-icon[slot=end], svg[slot=end])){
  margin-right: 12px;
  margin-left: calc(var(--text-field-border-radius) - var(--text-field-padding-right) + 8px);
}
`,Vn=`
<s-field class="field" fixed="false">
  <div slot="label" class="label"></div>
  <div class="view">
    <div class="shadow"></div>
    <input type="text" part="input">
    <textarea part="textarea"></textarea>
  </div>
  <slot slot="start" name="start"></slot>
  <slot slot="end" name="end">
    <div class="toggle" part="toggle">
      <s-ripple class="up">
        <svg viewBox="0 -960 960 960">
          <path d="m280-400 200-200 200 200H280Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="down">
        <svg viewBox="0 -960 960 960">
          <path d="M480-360 280-560h400L480-360Z"></path>
        </svg>
      </s-ripple>
      <s-ripple class="visibility">
        <svg viewBox="0 -960 960 960" class="on">
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path>
        </svg>
        <svg viewBox="0 -960 960 960" class="off">
          <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"></path>
        </svg>
      </s-ripple>
    </div>
  </slot>
</s-field>
<div class="text" part="text">
  <slot name="text"></slot>
  <div class="counter" part="counter"></div>
</div>
`;class Wn extends b({style:Qn,template:Vn,props:On,setup(t){const e=t.querySelector(".field"),o=t.querySelector(".label"),i=t.querySelector(".shadow"),n=t.querySelector(".counter"),l=t.querySelector(".toggle"),a={input:t.querySelector("input"),textarea:t.querySelector("textarea")},c=()=>this.type==="multiline"?a.textarea:a.input,d=()=>{this.countered&&(n.textContent=`${c().value.length}/${this.maxLength}`)},r=()=>this.dispatchEvent(new Event("change")),f=()=>{e.fixed=!0,e.focused=!0},m=()=>{e.focused=!1,c().value===""&&!this.error&&(e.fixed=!1)};a.input.oninput=d,a.input.onfocus=f,a.input.onblur=m,a.input.onchange=r,a.textarea.onfocus=f,a.textarea.onblur=m,a.textarea.onchange=r,a.textarea.oninput=()=>{i.textContent=a.textarea.value,d()};const g=p=>{this.value=`${parseInt(this.value||"0")+p}`,this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))};return t.querySelector(".up").onclick=()=>g(1),t.querySelector(".down").onclick=()=>g(-1),t.querySelector(".visibility").onclick=()=>{a.input.type=l.classList.contains("show-password")?"password":"text",l.classList.toggle("show-password")},{expose:{get native(){return c()}},label:p=>o.textContent=p,type:(p,h)=>{a.input.type=p==="password"?l.classList.contains("show-password")?"text":"password":p,p==="multiline"&&(a.textarea.value=a.input.value,i.textContent=a.input.value),h==="multiline"&&(a.input.value=a.textarea.value)},error:p=>{if(p)return e.fixed=!0;c().value===""&&(e.fixed=!1)},value:{get:()=>c().value,set:p=>{a.input.value=p,a.textarea.value=p,i.textContent=p,d(),this.error||(e.fixed=p!=="")}},placeholder:p=>{a.input.placeholder=p,a.textarea.placeholder=p},readOnly:p=>{a.input.readOnly=p,a.textarea.readOnly=p},disabled:p=>{a.input.disabled=p,a.textarea.disabled=p},maxLength:p=>{a.input.maxLength=p,a.textarea.maxLength=p,d()},multiLine:p=>this.type=p?"multiline":"text",countered:d}}}){}Wn.define(Un);const Yn="s-tooltip",Jn=w({align:["top","bottom","left","right"],disabled:!1}),Gn=`
:host{
  display: inline-flex;
  vertical-align: middle;
  text-align: left;
}
.popup{
  position: fixed;
  display: none;
  inset: 0;
  margin: 0;
  width: fit-content;
  height: fit-content;
  background: none;
  border: none;
  outline: none;
  max-width: none;
  max-height: none;
  font-size: .875rem;
  font-weight: 400;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  filter: opacity(.88);
  background: var(--s-color-inverse-surface, #2E3132);
  color: var(--s-color-inverse-on-surface, #EFF1F3);
}
::slotted(img){
  display: block;
  border-radius: 4px;
  margin: 2px 0;
  max-width: 280px;
}
`,Xn=`
<slot name="trigger" part="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <slot></slot>
</div>
`;class Kn extends b({style:Gn,template:Xn,props:Jn,setup(t){const e=t.querySelector("slot[name=trigger]"),o=t.querySelector(".popup"),i=getComputedStyle(this);let n=!1;const l=()=>{const r=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",f=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:r,duration:z(f)}},a=()=>{if(!this.isConnected||this.disabled)return;if(o.style.display="block",n=!0,o.showPopover)o.showPopover();else{const y=Le(t);o.style.marginLeft=`${-y.left}px`,o.style.marginTop=`${-y.top}px`,o.style.zIndex="3"}const r=this.getBoundingClientRect(),f=4,m=o.offsetWidth,g=o.offsetHeight,p={top:0,left:0},h={middle(y){p.left=r.left-(m-r.width)/2;const v=()=>(p.top=r.top+r.height+f,p.top+g>innerHeight),x=()=>(p.top=r.top-g-f,p.top<0);p.left<0&&(p.left=r.left),p.left+m>innerWidth&&(p.left=r.left+r.width-m),y==="top"&&x()&&v(),y==="bottom"&&v()&&x()},left(){return p.left=r.left-m-f,p.top=r.top-(g-r.height)/2,p.left<0},right(){return p.left=r.left+r.width+f,p.top=r.top-(g-r.height)/2,p.left+m>innerWidth}};switch(this.align){case"bottom":case"top":h.middle(this.align);break;case"left":h.left()&&h.right();break;case"right":h.right()&&h.left();break}o.style.top=`${p.top}px`,o.style.left=`${p.left}px`,o.animate({opacity:[0,1]},l())};let c=0;const d=()=>{clearTimeout(c),n=!1,o.animate({opacity:[1,0]},l()).finished.then(()=>{n||(o.hidePopover&&o.hidePopover(),o.style.removeProperty("display"))})};e.addEventListener("touchstart",()=>{A.pointerFine.matches||(clearTimeout(c),c=setTimeout(()=>a(),600))},{passive:!0}),e.ontouchend=()=>{clearTimeout(c),d()},e.onmouseenter=()=>A.pointerFine.matches&&a(),e.onmouseleave=()=>A.pointerFine.matches&&d()}}){}Kn.define(Yn);const Rn={class:"team",id:"team"},ei={class:"container"},ti={class:"team-grid"},oi={class:"social-links"},si={__name:"Team",setup(s){return(t,e)=>{const o=re("s-ripple"),i=re("router-link");return M(),F("section",Rn,[u("div",ei,[e[11]||(e[11]=u("h2",{class:"section-title fade-in"},"我们的团队",-1)),u("div",ti,[C(o,{class:"team-member fade-in"},{default:L(()=>[...e[0]||(e[0]=[u("div",{class:"member-avatar"},[u("img",{src:at,alt:"Fexcode",width:"100",height:"100"})],-1),u("h3",{class:"member-name"},"Fexcode",-1),u("p",{class:"member-role"},"爬虫数据收集与数据分析员/后端工程师",-1),u("div",{class:"social-links"},[u("a",{href:"#",class:"social-link"},"📧"),u("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),C(o,{class:"team-member fade-in"},{default:L(()=>[...e[1]||(e[1]=[u("div",{class:"member-avatar"},[u("img",{src:lt,alt:"SkyMaoZi",width:"100",height:"100"})],-1),u("h3",{class:"member-name"},"SkyMaoZi",-1),u("p",{class:"member-role"},"全栈工程师",-1),u("div",{class:"social-links"},[u("a",{href:"#",class:"social-link"},"📧"),u("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),C(o,{class:"team-member fade-in"},{default:L(()=>[...e[2]||(e[2]=[u("div",{class:"member-avatar"},[u("img",{src:ct,alt:"CodeSeed",width:"100",height:"100"})],-1),u("h3",{class:"member-name"},"CodeSeed",-1),u("p",{class:"member-role"},"测试工程师",-1),u("div",{class:"social-links"},[u("a",{href:"#",class:"social-link"},"📧"),u("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),C(o,{class:"team-member fade-in"},{default:L(()=>[...e[3]||(e[3]=[u("div",{class:"member-avatar"},[u("img",{src:dt,alt:"xm",width:"100",height:"100"})],-1),u("h3",{class:"member-name"},"xm",-1),u("p",{class:"member-role"},"爬虫与数据分析员",-1),u("div",{class:"social-links"},[u("a",{href:"#",class:"social-link"},"📧"),u("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),C(o,{class:"team-member fade-in"},{default:L(()=>[e[6]||(e[6]=u("div",{class:"member-avatar"},[u("img",{src:pt,alt:"Justthewoofus",width:"100",height:"100"})],-1)),e[7]||(e[7]=u("h3",{class:"member-name"},"Justthewoofus",-1)),e[8]||(e[8]=u("p",{class:"member-role"},"底层开发工程师",-1)),u("div",oi,[C(i,{to:"justwoofus",class:"social-link"},{default:L(()=>[...e[4]||(e[4]=[G("📧",-1)])]),_:1}),C(i,{to:"justwoofus",class:"social-link"},{default:L(()=>[...e[5]||(e[5]=[G("💼",-1)])]),_:1})])]),_:1}),C(o,{class:"team-member fade-in"},{default:L(()=>[...e[9]||(e[9]=[u("div",{class:"member-avatar"},[u("img",{src:ht,alt:"Narci",width:"100",height:"100"})],-1),u("h3",{class:"member-name"},"Narci",-1),u("p",{class:"member-role"},"后端工程师",-1),u("div",{class:"social-links"},[u("a",{href:"#",class:"social-link"},"📧"),u("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),C(o,{class:"team-member fade-in"},{default:L(()=>[...e[10]||(e[10]=[u("div",{class:"member-avatar"},[u("img",{src:ut,alt:"BaiChuanByte",width:"100",height:"100"})],-1),u("h3",{class:"member-name"},"BaiChuanByte",-1),u("p",{class:"member-role"},"室长/策划/吉祥物",-1),u("div",{class:"social-links"},[u("a",{href:"#",class:"social-link"},"📧"),u("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1})])])])}}},ri={class:"contact",id:"contact"},ni={class:"container"},ii={class:"message-board fade-in"},ai={class:"message-input-container"},li={class:"message-input-footer"},ci={class:"char-count"},di={class:"char-count"},pi=["disabled"],hi={class:"messages-container"},ui={class:"message-content"},mi={class:"message-author"},gi=["onClick"],fi={__name:"Contact",setup(s){const t=Y(""),e=Y([]),o=Y(!1),i=async()=>{try{const a=await H.get("/messagebord/");a.data&&(e.value=a.data.messages||[])}catch(a){console.error("获取留言失败:",a)}},n=async()=>{var a,c;if(t.value.length<=10||t.value.length>512){alert("留言内容长度必须在10到512个字符之间");return}o.value=!0;try{(await H.post("/messagebord/",{content:t.value})).data&&(t.value="",i())}catch(d){console.error("提交留言失败:",d),alert(((c=(a=d.response)==null?void 0:a.data)==null?void 0:c.message)||"提交留言失败，请稍后重试")}finally{o.value=!1}},l=async a=>{if(confirm("确定要删除这条留言吗？"))try{(await H.delete("messagebord/",{data:{user_message_id:a}})).data&&i()}catch(c){console.error("删除留言失败:",c),alert("删除留言失败，请稍后重试")}};return ge(()=>{i()}),(a,c)=>(M(),F("section",ri,[u("div",ni,[c[1]||(c[1]=u("h2",{class:"section-title fade-in"},"联系我们",-1)),u("div",ii,[u("div",ai,[Ze(u("textarea",{"onUpdate:modelValue":c[0]||(c[0]=d=>t.value=d),class:"message-input",placeholder:"输入你的留言 (10-512个字符)",maxlength:"512"},null,512),[[Ie,t.value]]),u("div",li,[u("span",ci,U(t.value.length)+"/512",1),u("span",di,U(t.value.length<10?"多写一点呗~":""),1),u("button",{onClick:n,class:"submit-btn",disabled:o.value||t.value.length<=10||t.value.length>512},U(o.value?"提交中...":"提交留言"),9,pi)])]),u("div",hi,[(M(!0),F(Ee,null,Ue(e.value,d=>(M(),F("div",{key:d.id,class:Oe(["message-item",{"own-message":d.is_own}])},[u("div",ui,[u("span",mi,U(d.username)+":",1),G(" "+U(d.content),1)]),d.is_own?(M(),F("button",{key:0,onClick:r=>l(d.id),class:"delete-btn"}," × ",8,gi)):$e("",!0)],2))),128))])]),c[2]||(c[2]=u("div",{class:"contact-methods"},[u("div",{class:"contact-method fade-in"},[u("div",{class:"contact-icon",onclick:"copyToClipboard('xnors-studio@outlook.com', '邮箱已复制到剪贴板:\\nxnors-studio@outlook.com')"}," 📧 "),u("p",{class:"contact-label"},"邮箱联系")]),u("div",{class:"contact-method fade-in"},[u("div",{class:"contact-icon",onclick:"window.open('https://github.com/xnors', '_blank')"}," 💻 "),u("p",{class:"contact-label"},"GitHub")]),u("div",{class:"contact-method fade-in"},[u("div",{class:"contact-icon",onclick:"copyToClipboard('2734664632', 'QQ号已复制到剪贴板:\\n2734664632')"}," 💬 "),u("p",{class:"contact-label"},"QQ")])],-1))])]))}},vi="/assets/logo-BBsoOzMl.png",xi={},bi={class:"footer-content"};function yi(s,t){return M(),F("footer",null,[u("div",bi,[t[2]||(t[2]=ke('<p class="copyright" data-v-b9a3d6ed>© 2024 Xnors Studio. All rights reserved.</p><div class="friend-links" data-v-b9a3d6ed><p class="friend-links-title" data-v-b9a3d6ed>友情链接</p><a href="https://xnors.github.io/xblogs/" target="_blank" class="friend-link" data-v-b9a3d6ed>异或博客/Xblogs</a><a href="https://nizhiwu.top/" target="_blank" class="friend-link" data-v-b9a3d6ed>逆之雨工作室</a><a href="https://sxxyrry.github.io/" target="_blank" class="friend-link" data-v-b9a3d6ed>23XR工作室</a></div>',2)),u("div",{class:"theme-toggle",onClick:t[0]||(t[0]=(...e)=>s.toggleTheme&&s.toggleTheme(...e))},[...t[1]||(t[1]=[u("img",{src:vi,id:"theme-icon"},null,-1)])])])])}const wi=ee(xi,[["render",yi],["__scopeId","data-v-b9a3d6ed"]]);function $i(){ge(()=>{console.log("Page effects mounted.");const s={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},s);document.querySelectorAll(".fade-in").forEach(n=>{t.observe(n)});const e=n=>{const l=n.target.closest('a[href^="#"]');if(!l)return;n.preventDefault();const a=document.querySelector(l.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})};document.body.addEventListener("click",e);const o=()=>{const n=document.querySelector("nav");if(!n)return;window.pageYOffset>100?(n.style.background="rgba(10, 10, 10, 0.5)",n.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.5)"):(n.style.background="rgba(10, 10, 10, 0.1)",n.style.boxShadow="none")};return window.addEventListener("scroll",o),()=>{console.log("Page effects unmounted."),t.disconnect(),document.body.removeEventListener("click",e),window.removeEventListener("scroll",o)}}),Qe(()=>{})}const Si={__name:"Home",setup(s){return $i(),(t,e)=>(M(),F(Ee,null,[C(Ke),C(ot),C(it),C(si),C(fi),C(wi)],64))}};export{Si as default};
