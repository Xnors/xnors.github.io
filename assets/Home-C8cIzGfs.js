var Le=Object.defineProperty;var Be=(r,t,e)=>t in r?Le(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var C=(r,t,e)=>Be(r,typeof t!="symbol"?t+"":t,e);import{a as De,_ as G}from"./_plugin-vue_export-helper-CpFNrKBp.js";import{r as Ne,o as xe,c as N,a as v,b as Pe,u as He,d as S,w as z,e as ee,f as P,g as te,h as be,i as je,F as Ze}from"./index-ILob0Bm9.js";async function Ue(){var r,t;try{return!!((t=(r=(await De.get("islogined")).data)==null?void 0:r.data)!=null&&t.islogined)}catch{return!1}}const Ie={class:"nav-container"},Oe={class:"nav-links"},Ve={key:0},We={__name:"TopNav",setup(r){let t=Ne(!1);return xe(async()=>{t.value=await Ue(),t.value?console.log("用户已登录"):console.log("用户未登录")}),window.addEventListener("scroll",()=>{const e=document.querySelector("nav");window.pageYOffset>100?(e.style.background="rgba(10, 10, 10, 0.5)",e.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.5)"):(e.style.background="rgba(10, 10, 10, 0.1)",e.style.boxShadow="none")}),(e,o)=>{const i=ee("router-link");return P(),N("nav",null,[v("div",Ie,[o[4]||(o[4]=v("div",{class:"logo"},"Xnors Studio",-1)),v("ul",Oe,[o[1]||(o[1]=v("li",null,[v("a",{href:"#services"},"服务")],-1)),o[2]||(o[2]=v("li",null,[v("a",{href:"#team"},"团队")],-1)),o[3]||(o[3]=v("li",null,[v("a",{href:"#contact"},"联系")],-1)),He(t)?Pe("",!0):(P(),N("li",Ve,[S(i,{to:"login"},{default:z(()=>[...o[0]||(o[0]=[te("注册/登录",-1)])]),_:1})]))])])])}}},Qe=G(We,[["__scopeId","data-v-83ffef21"]]),Ye={},_e={class:"hero"};function Je(r,t){return P(),N("section",_e,[...t[0]||(t[0]=[v("div",{class:"hero-content"},[v("h1",{class:"xnors-logo"},"异或 · 工作室"),v("p",{class:"tagline"},"求同存异")],-1)])])}const Ge=G(Ye,[["render",Je],["__scopeId","data-v-675bd003"]]),Xe={},Ke={class:"services",id:"services"};function Re(r,t){return P(),N("section",Ke,[...t[0]||(t[0]=[be('<div class="container"><h2 class="section-title fade-in">我们的服务</h2><div class="services-grid"><div class="service-detail-card fade-in"><div class="service-detail-icon">🕷️</div><h3>爬虫开发</h3><p> 定制化爬虫解决方案，支持反爬虫策略，高效稳定地采集各类网站数据。 </p><div class="tech-tags"><span class="tech-tag">Python</span><span class="tech-tag">Scrapy</span><span class="tech-tag">Selenium</span></div></div><div class="service-detail-card fade-in"><div class="service-detail-icon">📊</div><h3>数据分析</h3><p>从原始数据中提取有价值的信息，提供可视化报告和决策支持。</p><div class="tech-tags"><span class="tech-tag">Pandas</span><span class="tech-tag">NumPy</span><span class="tech-tag">Matplotlib</span></div></div><div class="service-detail-card fade-in"><div class="service-detail-icon">🌐</div><h3>网页制作</h3><p>响应式网站设计，注重用户体验，打造现代化的网络形象。</p><div class="tech-tags"><span class="tech-tag">HTML5</span><span class="tech-tag">CSS3</span><span class="tech-tag">JavaScript</span></div></div><div class="service-detail-card fade-in"><div class="service-detail-icon">⚙️</div><h3>后端开发</h3><p>构建高性能、可扩展的服务器架构，确保系统稳定运行。</p><div class="tech-tags"><span class="tech-tag">Node.js</span><span class="tech-tag">Django</span><span class="tech-tag">MySQL</span></div></div></div></div>',1)])])}const et=G(Xe,[["render",Re]]),tt="/assets/fexcode-DMOrT1gv.jpg",ot="/assets/skymaozi-nhs1gBWB.jpg",rt="/assets/codeseed-DQNZieAx.jpg",st="/assets/xmtm-CuJgfDVO.jpg",nt="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABpAGoDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAgMEBQYHCAEACf/EADcQAAECBQMCBQEGBQUBAAAAAAECAwAEBQYREiExB0ETIlFhoXEIFBUygZEWUnKxwSMkQ9Hw8f/EABoBAAIDAQEAAAAAAAAAAAAAAAQFAQIDAAb/xAAhEQACAgIDAAMBAQAAAAAAAAAAAQIRAyEEEjETIkEUUf/aAAwDAQACEQMRAD8AnvRDqNIz0nLEPDBAQd874jQdKqaV6FIWFAnO3EfJ3oF1PeoNyolX31eE6dSEk7Z4zH0c6VXJ+J01BUrJKdQ39yYU5V0bTGEE2rQtvg66gtXqrPwIqHrG6G7MnM7gpAxFuXl5prPrg/AinOtY8S0JhpG6yB7xGGSi02dki5qpN0jBFMpi63e6pVpOVOuqBUBxviLsluhsyy0lbatSiN/p6cxW9j0qsyd7zH3WnPPu+KVBaU5CRmNYWnUHUS7aZ5QZeOApOQR/aDMmZNaRlDGm7opV6wJ+mjCmFHHcDt2+Ib1U6Yad8MsqJ9Y1u1LUyfwlxbKyRjkGG+d6f0xx4uBhBJ3yOPSAnk7pdpPYV0MwsUKbIKgwcQcimlG6xue3pGh6laMpKyx0aB5TtxFJ3etm31rW6RgqOMRZNSdIpKPVWM6acCo4G8BMk2y4CvHvEfneocs0lWlYH1iJ1nqUFAhC9/b/AOQSsbS2Dt36WS/Psy+AFgBOe8N5uFGT/uD+8VBM3jNTedDhOfSEP4jPnfxDvF3FkaItJVldMqcu+w5ocbWkg+2cYj6l/Zrnl1C3JeYWrJLYBBPzHyNl5oOzbJJONaR8iPp50Xv6nWXacsJxQSQhOlIIzxn0ivMxNtNItgmlpl/XW8l2YBBz2ydhsBDGqzGrwknUTKcyeAVKI787b7xTc91RqXU6+JC36M0pKJ14MlYySEkjUduNt+Y1NWW5WiNStBp4H3SUZDbro3K1gDJ/fJ5OOITSlKNsPj1k/aozzcq6VZTMxJUqQaFRUCPEAGUp9ScfEUzUpyeqfjIl3MvE41I2GfeJ11pnJh6eXKy4LXiKKVuo/Nj0z9YRSNttUeiypCSNRB1K5P0gf5ZP9NlCK8FfTizZ6mrRN1GddKSArSTt/eJndVyOUyTBYVqAHMN05UESVD17kgbbxCLnr6n6cg6sDHHEaxkiaQirfUOdDiRrykxXV5TBuZhRcURj07Q5PTLU4hRK8EcQyVd0Nyqwg6fKTBWC5SMskai2VjUrWWchKuDyTvDem1SUkq3x+v8AmDJ+4HxPFpB21HPeFDdYcKCD/eHyhpCi9CWVozbS8ad8w6iQR/JDe1Olbil+hhZ+I+/zEOJKor7pj0+XccyioTAxItKx/Urkd/SNFsTADKfFUSjHlGT5R2HvgRBrELFPtOSAwgYCyPU+8OE9caGmlaFhWAT+sGtJraBla8Zq/wCxzIyj15Vapka3peUKWVnhK1bZHviNL3PLppVvKm0ZceWkMttj8zjh5I9oxx9ii7kuTdbJXjUlKee+Y13WaomadK0LB8FjSgE8KPJHoc7x5bmJRbS/WNMO6KWuOylVCcl2FKCl6g48rGcnnHP6QG8qQhCJaUQnCykaYmKJxtmdbYX51BWFHuTyfkxAupFzCRfedQoamhpB9O0LYR/0YoaLwLcpRW5YLCnQAFEdjzFZXG4EyQQo48sKazW1zEgt4vayTkmK7ue4i5jDu2AMfpBUYEjZMVVbDy0J/LnbfiCZ+oFyUypWVEEbfTMR+ang4vOckn1hNPzx+7FAVgEHJHOMYgrF9ZWVkri0RKeqDUm3MTKyAdRCQdsnHAEGUua+8MB1zKcpCtMO/VWmUK1LRpEulQdqc0A+oE5KAR6dtormnXCG0oaKiUjbJPb94fwdpN+CPIurdFgNPtOpLbKSpxXxAPuMx/N8QfblVlDLLLaUhRHmJ3J/7gpdwy4WoeIjYxemZJuiOSlzvS9GaY1kaUgw2puh5ailSjjPrCD/AIEjPIhrfd0u4T6RsU0ae+x5dS5G9JyULuluYQClPvzmNmqvNbbrSFrAUtZCt+43zHzc6F3B/DvUemPLXpadUG1HgDJjdt605bS5F+UWSlSQs49wN/8AMed5sG5UNOO1Q6t3q1/E2XHAElRUd+B6xVXUy60TlMqL6XMhbpSk+2YZZqpuN3DNIWtQW0gg57jjH+Yglz1cOUZxsLyrxiSPQZhakqGOg9dxFdOU3qO49eIg1dqB8TGomFTU5hlYKsk5iMVF9bj5JMEpJErfgJM4dZJO0GJmQ4halnygAb+nEIUMLfcAG5JEHXbJro1rLdX5VqVpHbfGR8QRBJtJFZPrF2Vjc9WmaxWJh+ZcLigdCQTkJSNgB+gENqFlPBgtaisk5JPOfaAgnOIdQ+saEmRpt0PEpX35JlTaFbK75hAqadUonxjucQVpGMmObRezEkpJCB/TDM4dDxUd94dyoeED7Qyzudo0RkxwlquZNbb7SiHWlBYIHGD6xv3ol1Np/UygU8qfCp1tsMutFWSFAkDA+gEfOlKsJwCdX12/aJV046hVLpxc8lVpB4t+E6FON52WM4OR9IC5GLugzDNRezdHUy2vw+pzUyw2NK06Tp3wYoSry7rgdQUlK9RUoH9x8Rp2i9R7a6j0BmdZmmiZpIU42rlCsYV8gxWtwWVLz866JVQUgKPmEIvjcW7Q3g06KImA6DgbQhclXXl7Ji4HOmbrZJW3tnb3jgsdiVOpaU4HPqInXgZCDf4QW27ccW6lakajkY25OcYhj+0TPMyX4bSGj/qoT4rwHY8AY+mIu8Lp1sUhyr1FxuWkZYFSEqxqWrfGB9frGRL5ud277lnak4TpdWdIPZOdh+0F8eNytg3KajGvwjmMbR4cwYoAkkbAniPAYhwIQC8gQXmDHTzBWqOOpEjXsMe0Nc3hWYdXxgbdjDYtlSySI2egcQE47QIKBTkQJ9BQSeRBOTpjjRa8H2g3jVraz+Hzi2AeU5yItnpH10m5e6KfLV2bKpF54JccVwgE8mKI14J2jocIGBtnn3gPLijO9BOPNKDTPrH1Al6FTrNYmmFtpVMpCmnMjCk45BjI3Unqmae4qUouhxY2W4dxnHbeKLV1guiYpMpTn6m8/KyqdDKFqJ0jJOPfmGdy6pl8ZWRqOSSYXfyNSuxquauo53bd9VuBSUT8446lJ8recJH6d4jBOTmPTM6t90qMACyrcwxxY1FWL8uV5GCjhOI54gB3gDrgwMd42BdUccOIKgfhk75jug/+ETRxJHdue8N77wQDjY94cJjgQyzff6xvIxEzzxXkDmCdUdPMBjBvZc8TiPR6PRQ4GFbR7VAI9HE2D1QIK2gqBDiJR1oEVnO8BUSTkxxUc7RYgXNJykCDPDgLH5YNixc//9k=",it="/assets/Narci-B-P0n0y2.jpg",at="/assets/baichuanbyte-Dx--U616.jpg",X={CSSStyleSheet:!0,CSSContainer:CSS.supports("container-type","size")};try{new CSSStyleSheet}catch{X.CSSStyleSheet=!1}const lt=(r,t)=>{for(const e of t){if(!X.CSSStyleSheet){const i=document.createElement("style");i.textContent=e,r.insertBefore(i,r.firstChild);continue}const o=new CSSStyleSheet;o.replaceSync(e),r.adoptedStyleSheets=[...r.adoptedStyleSheets,o]}},w=r=>{const t={},e={};for(const o in r){let i=r[o];const n={key:o,sync:!0,types:[]};o.startsWith("$")&&(n.key=o.slice(1),n.sync=!1),Array.isArray(i)&&(n.types=i,i=n.types[0]),t[n.key]=i,e[n.key]={sync:n.sync,def:i,to:a=>{switch(typeof i){case"string":const l=String(a);return n.types.length>0?n.types.includes(l)?l:n.types[0]:l;case"number":const c=Number(a);return isNaN(c)?i:c;case"boolean":return typeof a=="boolean"?a:a==="true"}}}}return Object.defineProperty(t,"$meta",{value:e}),t},K=r=>r,ct=`
:host{
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
*{
  outline: none;
}
`,b=r=>{var i;const t={observedAttributes:[],upperPropKeys:{},metaProps:((i=r.props)==null?void 0:i.$meta)??{},events:[]};for(const n in t.metaProps??{}){const a=n.toLowerCase();t.observedAttributes.push(a),t.upperPropKeys[a]=n}for(const n in r.events){const a=`on${n}`;t.observedAttributes.push(a),!(a in HTMLElement.prototype)&&t.events.push(a)}const e=new Map;class o extends HTMLElement{static define(a){customElements.define(a,this)}constructor(){var g;super();const a=this.attachShadow({mode:"open"});a.innerHTML=r.template??"",lt(a,[ct,...r.style?Array.isArray(r.style)?r.style:[r.style]:[]]);const l={...r.props};let c;const p={};for(const u in l){const m=this[u];m!==void 0&&(p[u]=m),Object.defineProperty(this,u,{configurable:!0,get:()=>{var h;const d=c==null?void 0:c[u];return!d||typeof d=="function"||!d.get?l[u]:(h=d.get)==null?void 0:h.call(d,l[u])},set:d=>{var $;const h=t.metaProps[u],y=d===void 0?h.def:h.to(d);if(h.sync){const k=u.toLowerCase(),E=this.getAttribute(k),T=String(y);if(y===h.def&&E!==null)return this.removeAttribute(k);if(y!==h.def&&E!==T)return this.setAttribute(k,T)}if(y===this[u])return;const f=l[u];l[u]=y;const x=c==null?void 0:c[u];if(x)try{typeof x=="function"?x(y,f):($=x.set)==null||$.call(x,y,f)}catch(k){throw l[u]=f,k}}})}const s={};for(const u of t.events){const m=u;typeof this[m]=="function"&&(s[u]=this[m]),Object.defineProperty(this,u,{configurable:!0,get:()=>s[u]??null,set:d=>s[u]=typeof d=="function"?d:void 0}),this.addEventListener(u.slice(2),d=>s[u]&&s[u].bind(this)(d))}c=(g=r.setup)==null?void 0:g.call(this,a);for(const u in(c==null?void 0:c.expose)??{})Object.defineProperty(this,u,{get:()=>{var m;return(m=c==null?void 0:c.expose)==null?void 0:m[u]}});for(const u in p)this[u]=p[u];this.connectedCallback=this.disconnectedCallback=this.adoptedCallback=this.attributeChangedCallback=void 0,e.set(this,c)}connectedCallback(){var a,l;(l=(a=e.get(this))==null?void 0:a.onMounted)==null||l.call(a)}disconnectedCallback(){var a,l;(l=(a=e.get(this))==null?void 0:a.onUnmounted)==null||l.call(a)}adoptedCallback(){var a,l;(l=(a=e.get(this))==null?void 0:a.onAdopted)==null||l.call(a)}attributeChangedCallback(a,l,c){if(t.events.includes(a))return this[a]=c?new Function("event",c):null;this[t.upperPropKeys[a]]=c??void 0}}C(o,"observedAttributes",t.observedAttributes);for(const n in r.methods)o[n]=r.methods[n];return o},dt="s-alert",pt=w({type:["info","success","warning","error"]}),ht=`
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
`,ut=`
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
`;class mt extends b({style:ht,template:ut,props:pt}){}mt.define(dt);const gt="s-appbar",ft=`
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
`,vt=`
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
`;class xt extends b({style:ft,template:vt,setup(t){const e=t.querySelector(".view");X.CSSContainer||new ResizeObserver(()=>{e.classList.toggle("s-laptop",this.offsetWidth<=1024),e.classList.toggle("s-tablet",this.offsetWidth<=768)}).observe(this)}}){}xt.define(gt);const bt="s-avatar",yt=w({$src:""}),wt=`
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
`,$t=`
<slot></slot>
<slot name="badge"></slot>
`;class kt extends b({style:wt,template:$t,props:yt,setup(t){const e=document.createElement("img");return{src:o=>{e.src=o,e.onload=()=>{this.dispatchEvent(new Event("load")),t.insertBefore(e,t.children[0])},e.onerror=()=>{this.dispatchEvent(new ErrorEvent("error")),e.isConnected&&t.removeChild(e)}}}}}){}kt.define(bt);const Et="s-badge",Ct=`
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
`,St=`
<slot class="text" part="text"></slot>
`;class qt extends b({style:Ct,template:St}){}qt.define(Et);const F=r=>{const t=r.trim().match(/^([\d\.]+)(s|ms)$/);if(!t)throw new Error;const e=Number(t[1]);return t[2]==="s"?e*1e3:e},At="s-bottom-sheet",Tt=w({showed:!1,disabledGesture:!1}),Ft=K({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),zt=`
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
`,Mt=`
<slot name="trigger"></slot>
<dialog part="popup">
  <div class="scrim" part="scrim"></div>
  <div class="container" part="container">
    <div class="indicator" part="indicator"></div>
    <slot name="text"></slot>
    <slot id="view"></slot>
  </div>
</dialog>
`,Lt=r=>{let t=document.body;const e=document.body.firstElementChild;e&&e.tagName==="S-PAGE"&&(t=e);const o=new ye,i=document.createElement("div");return i.slot="text",typeof r=="function"||r instanceof HTMLElement?r instanceof HTMLElement?o.appendChild(r):r(o):typeof r=="string"?(i.textContent=r,o.appendChild(i)):(r.root&&(t=r.root),r.disabledGesture&&(o.disabledGesture=r.disabledGesture),typeof r.view=="string"&&(i.textContent=r.view,o.appendChild(i)),r.view instanceof HTMLElement&&o.appendChild(r.view),typeof r.view=="function"&&r.view(o)),o.addEventListener("closed",()=>t.removeChild(o)),o.showed=!0,t.appendChild(o),o};class ye extends b({style:zt,template:Mt,props:Tt,events:Ft,methods:{builder:Lt},setup(t){const e=t.querySelector("dialog"),o=t.querySelector(".container"),i=t.querySelector(".scrim"),n=t.querySelector(".indicator"),a=getComputedStyle(this);let l=null;const c=()=>{const m=a.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",d=a.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:m,duration:F(d)}};t.querySelector("#view").onslotchange=m=>{l=m.target.assignedElements()[0]??null},t.querySelector("slot[name=trigger]").onclick=()=>{this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}}))||(this.showed=!0)};const p=m=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:m}}))||(this.showed=!1)};i.onclick=()=>p("SCRIM");let s=null;o.addEventListener("touchmove",m=>{const d=m.target;if(this.disabledGesture)return;const h=m.touches[0];if(!s)return s={y:h.pageY,x:h.pageX,disabled:!1,top:0,h:o.offsetHeight,now:Date.now()};if(s.disabled)return;const y=h.pageY-s.y,f=h.pageX-s.x;if(s.top=Math.min(s.h,Math.max(0,y)),d!==n&&l&&l.scrollTop>0||Math.abs(y)<Math.abs(f))return s.disabled=!0;o.style.transform=`translateY(${s.top}px)`},{passive:!1}),o.ontouchend=()=>{if(!s||s.disabled)return s=null;const m=Date.now()-s.now>300?s.h/3:20;if(s.top>m){if(!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:"GESTURE"}})))return;this.showed=!1}else o.animate({transform:[o.style.transform,"translateY(0)"]},c()),o.style.removeProperty("transform");s=null};const g=()=>{if(!this.isConnected||e.open)return;e.showModal(),e.classList.add("show");const m=c();i.animate({opacity:[0,1]},m),o.animate({transform:["translateY(100%)","translateY(0)"],opacity:[0,1]},m).finished.then(()=>this.dispatchEvent(new Event("showed")))},u=()=>{if(!this.isConnected||!e.open)return;e.classList.remove("show");const m=c(),d=o.style.transform;i.animate({opacity:[1,0]},m),o.animate({transform:[d===""?"translateY(0)":d,"translateY(100%)"],opacity:[1,0]},m).finished.then(()=>{e.close(),d&&o.style.removeProperty("transform"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!e.open&&g(),showed:m=>m?g():u()}}}){}ye.define(At);const A={mobileS:matchMedia("(max-width: 320px)"),mobileM:matchMedia("(max-width: 375px)"),mobileL:matchMedia("(max-width: 425px)"),tablet:matchMedia("(max-width: 768px)"),laptop:matchMedia("(max-width: 1024px)"),laptopL:matchMedia("(max-width: 1440px)"),pointerCoarse:matchMedia("(pointer: coarse)"),pointerFine:matchMedia("(pointer: fine)")},Bt="s-ripple",Dt=w({centered:!1,attached:!1}),Nt=`
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
`,Pt=`
<slot></slot>
<div class="container" part="container">
  <div class="ripple"></div>
</div>
`;class Z extends b({style:Nt,template:Pt,props:Dt,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".ripple"),i=getComputedStyle(this),n=()=>{const m=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",d=i.getPropertyValue("--s-motion-duration-long4")||"600ms",h=i.getPropertyValue("--s-motion-duration-short4")||"200ms";return{easing:m,duration:F(d),shortDuration:F(h)}},a=()=>A.pointerFine.matches&&e.classList.add("hover"),l=()=>A.pointerFine.matches&&e.classList.remove("hover"),c={parentNode:null,pressed:!1},p=m=>{const{offsetWidth:d,offsetHeight:h}=this;let y=Math.sqrt(d**2+h**2);const f={x:"50%",y:"50%"};if(!this.centered){const{left:H,top:R}=this.getBoundingClientRect(),W=m.clientX-H,ue=m.clientY-R,me=h/2,ge=d/2,ze=(Math.abs(me-ue)+me)*2,Me=(Math.abs(ge-W)+ge)*2;y=Math.sqrt(ze**2+Me**2),f.x=`${W}px`,f.y=`${ue}px`}let x=o,$=()=>{};c.pressed?(x=o.cloneNode(),e.appendChild(x),$=()=>x.remove()):(c.pressed=!0,$=()=>c.pressed=!1);const k=c.parentNode??this,E=n();k.setAttribute("pressed","");const T=x.animate({opacity:[1,1],width:[`${y}px`,`${y}px`],height:[`${y}px`,`${y}px`],transform:["translate(-50%, -50%) scale(0)","translate(-50%, -50%) scale(1)"],left:[f.x,f.x],top:[f.y,f.y]},{...E,fill:"forwards"});return()=>{k.removeAttribute("pressed");const H=Number(T.currentTime),R=E.duration-E.shortDuration,W=H>R?E.shortDuration:E.duration-H;x.animate({opacity:[1,0]},{duration:W,easing:E.easing,fill:"forwards"}).finished.then($)}},s=async m=>{if(m.button!==0)return;const d={};if(m.pointerType==="mouse"){document.addEventListener("pointerup",p(m),{once:!0});return}let h;d.timer=setTimeout(()=>{h=p(m),document.removeEventListener("touchmove",y),d.upper&&h()},50),document.addEventListener("touchend",()=>{if(!h)return d.upper=!0;h()},{once:!0});const y=()=>clearTimeout(d.timer);document.addEventListener("touchmove",y,{once:!0})},g=m=>{m.addEventListener("mouseenter",a),m.addEventListener("mouseleave",l),m.addEventListener("wheel",l,{passive:!0}),m.addEventListener("pointerdown",s)},u=()=>{c.parentNode&&(c.parentNode.removeEventListener("mouseenter",a),c.parentNode.removeEventListener("mouseleave",l),c.parentNode.removeEventListener("wheel",l),c.parentNode.removeEventListener("pointerdown",s),c.parentNode=null)};return g(this),{onMounted:()=>{this.attached&&this.parentNode&&(c.parentNode=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode,g(c.parentNode))},onUnmounted:()=>this.attached&&u(),attached:m=>{if(!this.isConnected)return;if(!m)return u();const d=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;g(d)}}}}){}Z.define(Bt);const Ht="s-button",jt=w({disabled:!1,type:["filled","elevated","filled-tonal","outlined","text"]}),Zt=`
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
`,Ut=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class It extends b({style:Zt,template:Ut,props:jt}){}It.define(Ht);const Ot="s-card",Vt=w({type:["elevated","filled","outlined"],clickable:!1}),Wt=`
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
`,Qt=`
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
`;class Yt extends b({style:Wt,template:Qt,props:Vt,setup(t){const e=t.querySelector("slot[name=action]");e.onpointerdown=o=>o.stopPropagation()}}){}Yt.define(Ot);class V{constructor(t){C(this,"list",[]);C(this,"select");C(this,"selectValue");C(this,"flag",!1);const{context:e}=t;e.addEventListener(`${e.tagName.toLocaleLowerCase()}:select`,o=>{var n,a;if(o.stopPropagation(),!(o.target instanceof t.class))return;let i;this.flag=!0,o.target.selected=!0,this.list.forEach(l=>{l!==o.target&&(l.selected&&(i=l),l.selected=!1)}),this.select=o.target,this.flag=!1,e.dispatchEvent(new Event("change")),(n=this.onUpdate)==null||n.call(this,i),(a=this.onSelect)==null||a.call(this)}),e.addEventListener(`${e.tagName.toLocaleLowerCase()}:update`,o=>{var n;if(o.stopPropagation(),this.flag||this.list.length===0||!(o.target instanceof t.class))return;this.flag=!0;let i;o.target.selected?(this.select=o.target,this.list.forEach(a=>{a!==o.target&&(a.selected&&(i=a),a.selected=!1)})):delete this.select,this.flag=!1,(n=this.onUpdate)==null||n.call(this,i)}),t.slot.addEventListener("slotchange",()=>{var o,i;this.flag=!0,delete this.select,this.list=t.slot.assignedElements().filter(n=>{if(n instanceof t.class){if(this.selectValue!==void 0)n.value===this.selectValue?(this.select=n,n.selected=!0):n.selected=!1;else{if(!this.select&&n.selected)return this.select=n,!0;this.select&&(n.selected=!1)}return!0}}),this.flag=!1,(o=this.onSlotChange)==null||o.call(this),(i=this.onUpdate)==null||i.call(this)})}get value(){var t;return((t=this.list[this.list.indexOf(this.select)])==null?void 0:t.value)??""}set value(t){var e;this.selectValue=t,this.list.length!==0&&(this.flag=!0,this.list.forEach(o=>{if(o.value===t){o.selected=!0,this.select=o;return}o.selected=!1}),(e=this.onUpdate)==null||e.call(this),this.flag=!1)}get selectedIndex(){return this.list.indexOf(this.select)}}const Y="s-carousel",_t=w({$value:"",$autoplay:!1,$duration:4e3}),Jt=`
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
`,Gt=`
<div class="container" part="container">
  <slot></slot>
</div>
<div class="track"></div>
`;class we extends b({style:Jt,template:Gt,props:_t,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".track"),i=t.querySelector("slot"),n=new V({context:this,class:$e,slot:i});let a=-1;n.onUpdate=()=>{o.childNodes.forEach(p=>p.classList.remove("checked")),e.style.transform=`translateX(${-n.selectedIndex*100}%)`,n.selectedIndex!==-1&&(o.childNodes[n.selectedIndex].classList.add("checked"),l())};const l=()=>{!this.autoplay||n.list.length===0||!this.isConnected||(c(),a=setTimeout(()=>{let p=n.selectedIndex+1;p>=n.list.length&&(p=0),n.list[p].selected=!0,this.dispatchEvent(new Event("change"))},this.duration))},c=()=>clearInterval(a);return n.onSlotChange=()=>{o.innerHTML="";const p=document.createDocumentFragment();n.list.forEach(s=>{const g=document.createElement("div");g.className="indicator",g.addEventListener("click",()=>s.dispatchEvent(new Event(`${Y}:select`,{bubbles:!0}))),p.appendChild(g)}),o.appendChild(p)},e.onpointerdown=p=>{if(n.list.length<=1)return;c();const s=p.pageX,g=p.pageY,u=e.offsetWidth,m=n.list[n.selectedIndex-1],d=n.list[n.selectedIndex+1],h={now:0,left:0,next:void 0},y=$=>{const k=$ instanceof TouchEvent?$.touches[0]:$,E=k.pageX-s,T=k.pageY-g;if($ instanceof TouchEvent&&Math.abs(E)<Math.abs(T)&&!h.next)return f();if(h.left=E,h.now===0&&(h.now=Date.now()),m&&(h.left=Math.min(h.left,u)),d&&(h.left=Math.max(h.left,u*-1)),(!m&&h.left>0||!d&&h.left<0)&&(h.left=h.left*.2),h.left<0&&d||h.left>0&&m){const L=Math.abs(h.left)/u*.05;n.select.style.transition="none",n.select.style.transform=`scale(${.05-L+.95})`,h.next=h.left<0?d:m,h.next.style.transition="none",h.next.style.transform=`scale(${L+.95})`}e.style.transition="none",e.style.pointerEvents="none",e.style.transform=`translateX(calc(${-n.selectedIndex*100}% + ${h.left}px))`,$.cancelable&&$.preventDefault()},f=()=>{var E,T,L;document.removeEventListener(x.up,f),document.removeEventListener(x.move,y),e.style.removeProperty("pointer-events"),e.style.removeProperty("transition"),n.select.style.removeProperty("transition"),n.select.style.removeProperty("transform"),(E=h.next)==null||E.style.removeProperty("transition"),(T=h.next)==null||T.style.removeProperty("transform");const $=n.selectedIndex;if(!($===0&&h.left>0||$===n.list.length-1&&h.left<0)){const H=Date.now()-h.now>300?u/2:20;if(Math.abs(h.left)>H){(L=h.next)==null||L.dispatchEvent(new Event(`${Y}:select`,{bubbles:!0}));return}}e.style.transform=`translateX(${-n.selectedIndex*100}%)`,l()},x={move:A.pointerCoarse.matches?"touchmove":"pointermove",up:A.pointerCoarse.matches?"touchend":"pointerup"};document.addEventListener(x.move,y,{passive:!1}),document.addEventListener(x.up,f)},{expose:{get options(){return n.list},get selectedIndex(){return n.selectedIndex},togglePrevious:()=>{const p=n.list[n.selectedIndex-1];p&&(p.selected=!0)},toggleNext:()=>{const p=n.list[n.selectedIndex+1];p&&(p.selected=!0)}},onMounted:l,onUnmounted:c,value:{get:()=>n.value,set:p=>{n.value=p,l()}},autoplay:l}}}){}const Xt="s-carousel-item",Kt=w({selected:!1,$value:""}),Rt=`
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
`,eo="<slot></slot>";class $e extends b({style:Rt,template:eo,props:Kt,setup(){return{selected:()=>{this.parentNode instanceof we&&this.dispatchEvent(new Event(`${Y}:update`,{bubbles:!0}))}}}}){}we.define(Y);$e.define(Xt);const to="s-checkbox",oo=w({disabled:!1,checked:!1,indeterminate:!1}),ro=`
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
`,so=`
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
`;class no extends b({style:ro,template:so,props:oo,setup(){this.addEventListener("click",()=>{this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}no.define(to);const io="s-chip",ao=w({type:["filled","outlined"],$value:"",checked:!1,disabled:!1,clickable:!1}),lo=`
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
`,co=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<slot name="action"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
`;class po extends b({style:lo,template:co,props:ao,setup(t){const e=t.querySelector("slot[name=action]");e.onclick=o=>o.stopPropagation(),e.onpointerdown=o=>o.stopPropagation(),this.addEventListener("click",()=>{this.clickable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))})}}){}po.define(io);const ho="s-circular-progress",uo=w({indeterminate:!1,animated:!1,$max:100,$value:0}),mo=`
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
`,q=48,B=4,D=(q-B)*Math.PI,go=`
<div class="container known">
  <svg viewBox="0 0 48 48" style="transform: rotate(-90deg);--dasharray: ${D}px;">
    <circle class="track block" cx="${q/2}" cy="${q/2}" r="${(q-B)/2}" style="stroke-width: ${B}px" />
    <circle class="indicator block" cx="${q/2}" cy="${q/2}" r="${(q-B)/2}" style="stroke-dashoffset: ${D}px;stroke-width: ${B}px" />
  </svg>
</div>
<div class="container unknown">
  <svg viewBox="0 0 48 48" style="animation: stroke-rotate 5.2s ease-in-out infinite;--dasharray: ${D}px;">
    <circle transform="rotate(-90, ${q/2}, ${q/2})" cx="${q/2}" cy="${q/2}" r=" ${(q-B)/2}" style="animation: stroke 1.3s ease-in-out infinite;stroke-width: ${B}px"></circle>
  </svg>
</div>
`;class fo extends b({style:mo,template:go,props:uo,setup(t){const e=t.querySelector(".known .track"),o=t.querySelector(".known .indicator"),i=()=>{const n=Math.min(this.value,this.max)/this.max*100,a=D-D*(n/100),l=n/100*360;e.style.strokeDashoffset=`${n===0?0:Math.min(D+16-a,D)}px`,e.setAttribute("transform",`rotate(${l+20}, ${q/2}, ${q/2})`),o.style.strokeDashoffset=`${a}px`};return{max:i,value:i}}}){}fo.define(ho);const _=(r,t="yyyy-MM-dd")=>{typeof r=="string"&&(r=new Date(r));const e=r.getFullYear(),o=r.getMonth()+1,i=r.getDate();return t.replace("yyyy",e.toString()).replace("MM",o.toString().padStart(2,"0")).replace("dd",i.toString().padStart(2,"0"))};class vo{constructor(t){C(this,"list");C(this,"locale",navigator.language);C(this,"updates",new Map);this.list=t}getItem(t){if(t=t||this.locale,t in this.list)return this.list[t];const[e]=t.split("-");return e in this.list?this.list[e]:this.list.zh}addItem(t,e){if(this.list[t])throw new Error(`Locale ${t} already exists`);this.list[t]=e}setLocale(t){this.locale=t??navigator.language,this.updates.forEach(e=>e())}}const M=new vo({});M.list={zh:{display:r=>`${r.getFullYear()}年${r.getMonth()+1}月${r.getDate()}日 星期${M.list.zh.displayWeeks[r.getDay()]}`,displayMonth:r=>`${r.getFullYear()}年`,displayWeeks:["日","一","二","三","四","五","六"]},en:{display:r=>`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][r.getDay()]}, Jan ${r.getDate()}`,displayMonth:r=>`${["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]} ${r.getFullYear()}`,displayWeeks:["S","M","T","W","T","F","S"]}};const xo="s-date",bo=w({$value:"",$locale:"",$max:"2099-12-31",$min:"1900-01-01"}),yo=`
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
`,U={years:[],weeks:[],days:[]};for(let r=0;r<200;r++)r<7&&U.weeks.push('<div class="item"></div>'),r<31&&U.days.push(`<div class="item"><s-ripple class="icon-button">${r+1}</s-ripple></div>`),U.years.push('<s-ripple class="button item"></s-ripple>');const wo=`
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
  <s-scroll-view class="years">${U.years.join("")}</s-scroll-view>
  <div class="weeks">${U.weeks.join("")}</div>
  <div class="days">${U.days.join("")}</div>
</div>
`;class $o{constructor(t,e,o){C(this,"yearSelect");C(this,"daySelect");C(this,"dayOverflow");C(this,"date");C(this,"min");C(this,"max");this.date=typeof t=="string"?new Date(t):t,this.min=new Date(e),this.max=new Date(o)}}const fe=(r,t)=>{const e=new Date(r,t+1,1);return e.setDate(e.getDate()-1),e.getDate()},ko=(r,t)=>{M.addItem(r,t)},Eo=r=>{M.setLocale(r)};class Co extends b({style:yo,template:wo,props:bo,methods:{addLocale:ko,setLocale:Eo},setup(t){const e=t.querySelector(".container"),o=t.querySelector(".header>span"),i=t.querySelector(".action>.year"),n=t.querySelector(".action>.toggle>.prev"),a=t.querySelector(".action>.toggle>.next"),l=t.querySelector(".years"),c=t.querySelector(".weeks"),p=t.querySelector(".days"),s=new $o(this.value||new Date,this.min,this.max),g=()=>{const f=M.getItem(this.locale).display;o.textContent=f(s.date);const x=M.getItem(this.locale).displayMonth;i.children[0].textContent=x(s.date)},u=()=>{const f=M.getItem(this.locale).displayWeeks;c.childNodes.forEach((x,$)=>x.textContent=f[$])},m=()=>{var $,k,E;const f=new Date(s.date.getFullYear(),s.date.getMonth(),1).getDay();p.children[0].setAttribute("style",`margin-left: calc((100% / 7) * ${f})`);const x=new Date(s.date.getFullYear(),s.date.getMonth()+1,0).getDate();($=s.dayOverflow)==null||$.classList.remove("overflow"),s.dayOverflow=p.children[x-1],s.dayOverflow.classList.add("overflow"),(k=s.yearSelect)==null||k.classList.remove("checked"),s.yearSelect=l.children[s.date.getFullYear()-s.min.getFullYear()],s.yearSelect.classList.add("checked"),(E=s.daySelect)==null||E.classList.remove("checked"),s.daySelect=p.children[s.date.getDate()-1],s.daySelect.classList.add("checked"),e.style.removeProperty("height")},d=()=>{const f=s.max.getFullYear()-s.min.getFullYear();l.innerHTML="",l.style.counterReset=`year-counter ${s.min.getFullYear()-1}`;const x=document.createDocumentFragment();for(let $=0;$<=f;$++){const k=new Z;k.classList.add("button","item"),x.appendChild(k)}l.appendChild(x),m()},h=(f,x,$)=>{this.value=_(new Date(f,x,$)),this.dispatchEvent(new Event("change"))};i.onclick=()=>{const f=e.offsetHeight;if(e.classList.toggle("show-years"),e.classList.contains("show-years")){e.style.height=`${f}px`,s.yearSelect&&l.scrollTo({top:s.yearSelect.offsetTop-l.offsetHeight/2+s.yearSelect.offsetHeight/2});return}},n.onclick=()=>{const f=fe(s.date.getFullYear(),s.date.getMonth()-1),x=Math.min(s.date.getDate(),f);h(s.date.getFullYear(),s.date.getMonth()-1,x)},a.onclick=()=>{const f=fe(s.date.getFullYear(),s.date.getMonth()+1),x=Math.min(s.date.getDate(),f);h(s.date.getFullYear(),s.date.getMonth()+1,x)},l.onclick=f=>{if(!(f.target instanceof Z))return;e.classList.remove("show-years");const x=Array.from(l.children).indexOf(f.target)+s.min.getFullYear();h(x,s.date.getMonth(),s.date.getDate())},p.onclick=f=>{if(!(f.target instanceof Z))return;const x=Array.from(p.children).indexOf(f.target.parentElement)+1;h(s.date.getFullYear(),s.date.getMonth(),x)};const y=()=>{g(),u()};return m(),y(),{onMounted:()=>M.updates.set(this,y),onUnmounted:()=>M.updates.delete(this),min:f=>{const x=new Date(f);if(isNaN(x.getTime())||x.getTime()>s.date.getTime())throw Error("invalid min date");s.min=x,d()},max:f=>{const x=new Date(f);if(isNaN(x.getTime())||x.getTime()<s.date.getTime())throw Error("invalid max date");s.max=x,d()},value:{get:()=>_(s.date),set:f=>{const x=new Date(f);if(isNaN(x.getTime())||x.getTime()<s.min.getTime()||x.getTime()>s.max.getTime())throw Error("invalid date");s.date=x,g(),m()}},locale:y}}}){}Co.define(xo);const So="s-date-picker",oe=w({$value:"",$min:"",$max:"",$label:"",$positiveText:"确定",$negativeText:"取消",$format:"yyyy-MM-dd",$locale:""}),qo=`
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
`,Ao=`
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
  <s-ripple class="negative" slot="action" part="negative">${oe.negativeText}</s-ripple>
  <s-ripple class="positive" slot="action" part="positive">${oe.positiveText}</s-ripple>
</s-dialog>
`;class To extends b({style:qo,template:Ao,props:oe,setup(t){const e=t.querySelector("s-dialog"),o=t.querySelector("s-date"),i=t.querySelector(".negative"),n=t.querySelector(".positive"),a=t.querySelector("s-field"),l=t.querySelector(".label"),c=t.querySelector(".view"),p={date:""};return e.addEventListener("show",()=>{a.fixed=!0,a.focused=!0,p.date||(c.textContent=this.label,c.style.opacity="0")}),e.onclose=()=>{a.focused=!1,p.date||(a.fixed=!1)},n.onclick=()=>{this.value=o.value,c.style.removeProperty("opacity"),this.dispatchEvent(new Event("change"))},{value:{get:()=>p.date,set:s=>{if(p.date=s,s===""){o.value=_(new Date),a.fixed=!1,c.textContent="";return}a.fixed=!0,c.textContent=_(s,this.format),o.value=s}},locale:{get:()=>o.locale,set:s=>o.locale=s},min:{get:()=>o.min,set:s=>o.min=s},max:{get:()=>o.max,set:s=>o.max=s},label:s=>l.textContent=s,positiveText:s=>n.textContent=s,negativeText:s=>i.textContent=s}}}){}To.define(So);const Fo="s-scroll-view",zo=`
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
`,Mo="<slot></slot>";class Lo extends b({style:zo,template:Mo}){}Lo.define(Fo);const Bo="s-dialog",Do=w({showed:!1,size:["standard","full"]}),No=K({show:CustomEvent,showed:Event,close:CustomEvent,closed:Event}),Po=`
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
`,Ho=`
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
`,jo=r=>{let t=document.body;const e=new ke,o=document.body.firstElementChild;if(o&&o.tagName==="S-PAGE"&&(t=o),typeof r=="string"){const i=document.createElement("div");i.slot="text",i.textContent=r,e.appendChild(i)}else{if(r.root&&(t=r.root),r.headline){const n=document.createElement("div");n.slot="headline",n.textContent=r.headline,e.appendChild(n)}if(r.text){const n=document.createElement("div");n.slot="text",n.textContent=r.text,e.appendChild(n)}r.view&&(typeof r.view=="function"?r.view(e):e.appendChild(r.view));const i=r.actions??[];for(const n of Array.isArray(i)?i:[i]){const a=document.createElement("s-button");a.slot="action",a.type="text",a.textContent=n.text,n.click&&(a.onclick=n.click),e.appendChild(a)}}return e.showed=!0,e.addEventListener("closed",()=>t.removeChild(e)),t.appendChild(e),e};class ke extends b({style:Po,template:Ho,props:Do,events:No,methods:{builder:jo},setup(t){const e=t.querySelector("dialog"),o=t.querySelector(".scrim"),i=t.querySelector(".wrapper"),n=getComputedStyle(this),a=()=>{const s=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",g=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:s,duration:F(g)}};t.querySelector("slot[name=trigger]").onclick=()=>{if(this.showed||!this.dispatchEvent(new CustomEvent("show",{cancelable:!0,detail:{source:"TRIGGER"}})))return console.log("拒绝");this.showed=!0};const l=s=>{!this.showed||!this.dispatchEvent(new CustomEvent("close",{cancelable:!0,detail:{source:s}}))||(this.showed=!1)};t.querySelector(".scrim").onclick=()=>l("SCRIM"),t.querySelector("slot[name=action]").onclick=()=>l("ACTION");const c=()=>{if(!this.isConnected||e.open)return;const s=a();e.showModal(),e.classList.add("show"),o.animate({opacity:[0,1]},s),i.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},s).addEventListener("finish",()=>this.dispatchEvent(new Event("showed")))},p=()=>{if(!this.isConnected||!e.open)return;const s=a();o.animate({opacity:[1,0]},s),i.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},s).addEventListener("finish",()=>{e.close(),e.classList.remove("show"),this.dispatchEvent(new Event("closed"))})};return{onMounted:()=>this.showed&&!e.open&&c(),showed:s=>s?c():p()}}}){}ke.define(Bo);const Zo="s-divider",Uo=`
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
`,Io="<slot></slot>";class Oo extends b({style:Uo,template:Io}){}Oo.define(Zo);const Vo="s-drawer",Wo=`
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
`,Qo=`
<slot class="view" part="view"></slot>
<div class="scrim" part="scrim show"></div>
<slot name="start" class="start show" part="start"></slot>
<slot name="end" class="end show" part="end"></slot>
`;class Yo extends b({style:Wo,template:Qo,setup(t){const e=t.querySelector(".scrim"),o={start:t.querySelector(".start"),end:t.querySelector(".end")},i=getComputedStyle(this),n=()=>{const u=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",m=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:u,duration:F(m)}},a=(u="start")=>o[u],l=u=>u??this.offsetWidth<=1024?"show-laptop":"show",c=(u="start")=>({start:-1,end:1})[u],p=(u,m)=>{const d=a(u),h=l(m);if(d.classList.contains(h))return;const y=c(u),f=n();d.classList.add(h),e.classList.add(h);const x=this.offsetWidth<=1024?{transform:[`translateX(${d.offsetWidth*y}px)`,"translateX(0)"]}:{width:["0",d.offsetWidth+"px"]};this.offsetWidth<=1024&&e.animate({opacity:[0,1]},f),d.animate(x,f)},s=(u,m)=>{const d=a(u),h=l(m);if(!d.classList.contains(h))return;const y=c(u),f=n(),x={...this.offsetWidth<=1024?{transform:["translateX(0)",`translateX(${d.offsetWidth*y}px)`]}:{width:[d.offsetWidth+"px","0px"]}};d.style.display="block",d.animate(x,f).finished.then(()=>d.style.removeProperty("display")),this.offsetWidth<=1024&&e.animate({opacity:[1,0]},f),d.classList.remove(h),e.classList.remove(h)},g=(u,m)=>{const d=a(u),h=l(m);d.classList.contains(h)?s(u,m):p(u,m)};return e.addEventListener("click",()=>{s("start",!0),s("end",!0)}),X.CSSContainer||new ResizeObserver(()=>{e.classList.toggle("s-laptop",this.offsetWidth<=1024),o.start.classList.toggle("s-laptop",this.offsetWidth<=1024),o.end.classList.toggle("s-laptop",this.offsetWidth<=1024)}).observe(this),{expose:{show:p,close:s,toggle:g}}}}){}Yo.define(Vo);const _o="s-empty",Jo=`
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
`,Go=`
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
<slot></slot>`;class Xo extends b({style:Jo,template:Go}){}Xo.define(_o);const Ko="s-fab",Ro=w({hidden:!1,disabled:!1}),er=`
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
`,tr=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class or extends b({style:er,template:tr,props:Ro}){}or.define(Ko);const rr="s-icon-button",sr=w({disabled:!1,type:["standard","filled","filled-tonal","outlined"]}),nr=`
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
`,ir=`
<slot name="start"></slot>
<slot></slot>
<slot name="end"></slot>
<s-ripple class="ripple" attached="true" part="ripple"></s-ripple>
<slot name="badge"></slot>
`;class ar extends b({style:nr,template:ir,props:sr}){}ar.define(rr);const I={none:"",home:"M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",add:"M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z",search:"M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",menu:"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",arrow_back:"m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z",arrow_forward:{name:"arrow_back",angle:180},arrow_upward:{name:"arrow_back",angle:90},arrow_downward:{name:"arrow_back",angle:-90},arrow_drop_up:"m280-400 200-200 200 200H280Z",arrow_drop_down:{name:"arrow_drop_up",angle:180},arrow_drop_left:{name:"arrow_drop_up",angle:-90},arrow_drop_right:{name:"arrow_drop_up",angle:90},more_vert:"M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z",more_horiz:{name:"more_vert",angle:90},close:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",done:"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z",chevron_up:"M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z",chevron_down:{name:"chevron_up",angle:180},chevron_left:{name:"chevron_up",angle:-90},chevron_right:{name:"chevron_up",angle:90},light_mode:"M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z",dark_mode:"M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z",star:"m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z",favorite:"m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"},lr="s-icon",cr=w({name:Object.keys(I),$src:""}),dr=`
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
`,pr="<slot></slot>";class hr extends b({style:dr,template:pr,props:cr,setup(t){const e=t.querySelector("slot"),o=document.createElement("img"),i=(n=I.none,a="")=>`<svg viewBox="0 -960 960 960"><path d="${n}" transform="${a}"></path></svg>`;return{name:n=>{const a=I[n];if(typeof a=="string")return e.innerHTML=i(a);const l=a.name;typeof I[l]=="string"&&(e.innerHTML=i(I[l],`rotate(${a.angle} 480 -480)`))},src:async()=>{try{const n=new URL(this.src,location.href);if(n.pathname.endsWith(".svg")){const l=await(await fetch(n.href)).text(),c=document.createElement("template");c.innerHTML=l;const p=c.content.childNodes[0];if(!(p instanceof SVGElement))throw new Error("Invalid SVG");e.innerHTML="",e.appendChild(p),this.dispatchEvent(new Event("load"))}else o.src=n.href,o.onload=()=>{e.innerHTML="",e.appendChild(o),this.dispatchEvent(new Event("load"))},o.onerror=()=>this.dispatchEvent(new ErrorEvent("error"))}catch{this.dispatchEvent(new ErrorEvent("error"))}}}}}){}hr.define(lr);const ur="s-linear-progress",mr=w({indeterminate:!1,animated:!1,$max:100,$value:0}),gr=`
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
`,fr=`
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
`;class vr extends b({style:gr,template:fr,props:mr,setup(t){const e=t.querySelector(".known>.track"),o=t.querySelector(".known>.indicator"),i=()=>{const n=Math.min(this.value,this.max)/this.max*100;e.style.transform=`translateX(calc(${n}% + ${n===0?0:4}px))`,o.style.transform=`translateX(${n-100}%)`};return{max:i,value:i}}}){}vr.define(ur);const xr="s-menu",br=`
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
`,yr=`
<slot name="label"></slot>
<slot></slot>
`;class wr extends b({style:br,template:yr}){}const $r="s-menu-item",Ee=w({checked:!1,folded:!0}),kr=`
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
`,Er=`
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
<s-fold class="fold" part="fold" folded="${Ee.folded}">
  <slot name="menu" class="menu"></slot>
</s-fold>
`;class Cr extends b({style:kr,template:Er,props:Ee,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".fold"),i=t.querySelector("slot[name=menu]");return o.onclick=n=>n.stopPropagation(),i.onslotchange=()=>e.classList[i.assignedElements().length>0?"add":"remove"]("show-menu"),e.onclick=()=>{e.classList.contains("show-menu")&&(this.folded=!this.folded)},{folded:n=>o.folded=n}}}){}wr.define(xr);Cr.define($r);const re="s-navigation",Sr=w({mode:["bottom","rail"],$value:""}),qr=`
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
`,Ar=`
<slot name="start"></slot>
<slot id="slot"></slot>
<slot name="end"></slot>
`;class se extends b({style:qr,template:Ar,props:Sr,setup(t){const e=t.querySelector("#slot"),o=new V({context:this,class:Ce,slot:e});return{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:i=>o.value=i}}}}){}const Tr="s-navigation-item",Fr=w({selected:!1,$value:""}),zr=`
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
`,Mr=`
<s-ripple attached="true" class="icon" part="icon">
  <slot name="icon"></slot>
  <slot name="badge"></slot>
</s-ripple>
<slot name="text"></slot>
`;class Ce extends b({style:zr,template:Mr,props:Fr,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof se&&this.dispatchEvent(new Event(`${re}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof se&&this.dispatchEvent(new Event(`${re}:update`,{bubbles:!0}))}}}}){}se.define(re);Ce.define(Tr);const Lr="s-field",Br=w({focused:!1,fixed:!0}),Dr=`
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
`,Nr=`
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
`;class Pr extends b({style:Dr,template:Nr,props:Br}){}Pr.define(Lr);const Hr="s-fold",jr=w({folded:!1}),Zr=`
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
`,Ur=`
<slot name="trigger"></slot>
<div class="container" part="container">
  <slot class="view" part="view"></slot>
</div>
`;class Ir extends b({style:Zr,template:Ur,props:jr,setup(t){t.querySelector("slot[name=trigger]").onclick=()=>this.folded=!this.folded}}){}Ir.define(Hr);const Or="s-page",Vr=w({theme:["light","auto","dark"]}),Wr=`
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
`,Qr="<slot></slot>",ne=document.createElement("style");ne.textContent="::view-transition-old(root),::view-transition-new(root) { animation: none; mix-blend-mode: normal}";class Yr extends b({style:Wr,template:Qr,props:Vr,setup(){const t=getComputedStyle(this),e=matchMedia("(prefers-color-scheme: dark)"),o=()=>{const a=t.getPropertyValue("--s-motion-easing-standard-accelerate")||"cubic-bezier(0.3, 0, 1, 1)",l=t.getPropertyValue("--s-motion-duration-long4")||"600ms";return{easing:a,duration:F(l)}},i=()=>this.theme==="auto"?e.matches:this.theme==="dark";return{expose:{toggle:(a,l)=>new Promise(c=>{if(this.theme===a)return;const p=e.matches,s=f=>f==="auto"?p?"dark":"light":f,g=s(this.theme),u=s(a);if(g===u||!document.startViewTransition)return this.theme=a,c();const m=innerWidth,d=innerHeight,h={clipPath:[`circle(0px at 50% ${d/2}px)`,`circle(${Math.sqrt(m**2+d**2)/2}px at 50% ${d/2}px)`]};if(l&&l.isConnected){const{left:f,top:x}=l.getBoundingClientRect(),$=f+l.offsetWidth/2,k=x+l.offsetHeight/2,E=Math.max(m-$,$),T=Math.max(d-k,k),L=Math.sqrt(E**2+T**2);h.clipPath[0]=`circle(0px at ${$}px ${k}px)`,h.clipPath[1]=`circle(${L}px at ${$}px ${k}px)`}const y=document.startViewTransition(()=>{this.theme=a,document.head.appendChild(ne)});y.ready.then(async()=>{const f=document.documentElement.animate(h,{...o(),pseudoElement:"::view-transition-new(root)"});c(f),await y.finished,ne.remove()})}),get isDark(){return i()}},theme:a=>{if(a==="light")return this.removeAttribute("dark");if(a==="dark")return this.setAttribute("dark","");const l=()=>{e.matches?this.setAttribute("dark",""):this.removeAttribute("dark"),this.dispatchEvent(new Event("change"))};e.onchange=l,l()}}}}){}Yr.define(Or);const _r="s-pagination",Jr=w({$value:1,$total:20,$count:20,type:["standard","outlined"]}),Gr=`
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
`,Xr=`
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
`;class Kr extends b({style:Gr,template:Xr,props:Jr,setup(t){const e=t.querySelector(".prev"),o=t.querySelector(".next"),i=t.querySelector(".container"),n=()=>this.dispatchEvent(new Event("change")),a=()=>{const c=Math.ceil(this.total/this.count);let p=Math.max(Math.min(c-7,Math.max(0,this.value-4)),0);if(i.childNodes.forEach(s=>{p++;const g=s;g.textContent=p.toString(),g.classList.toggle("checked",this.value===p),g.classList.remove("text")}),e.classList.toggle("disabled",this.value===1),o.classList.toggle("disabled",this.value===c),c>7){if(this.value>=5){i.childNodes.item(0).textContent="1";const s=i.childNodes.item(1);s.textContent="...",s.classList.add("text")}if(this.value<=c-4){i.childNodes.item(i.childNodes.length-1).textContent=c.toString();const s=i.childNodes.item(i.childNodes.length-2);s.textContent="...",s.classList.add("text")}}},l=()=>{const c=Math.ceil(this.total/this.count),p=Math.min(c,7),s=document.createDocumentFragment();for(let g=1;g<=p;g++){const u=new Z;u.classList.add("button"),s.appendChild(u)}i.innerHTML="",i.appendChild(s),a()};return i.onclick=c=>{if(!(c.target instanceof Z))return;const p=Number(c.target.textContent);p!==this.value&&(this.value=p,n())},e.onclick=()=>{const c=Math.max(this.value-1,1);c!==this.value&&(this.value=c,n())},o.onclick=()=>{const c=Math.min(this.value+1,Math.ceil(this.total/this.count));c!==this.value&&(this.value=c,n())},{total:l,value:a}}}){}Kr.define(_r);const ie="s-picker",Rr=w({disabled:!1,$label:"",$value:""}),es=`
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
`,ts=`
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
`;class ae extends b({style:es,template:ts,props:Rr,setup(t){const e=t.querySelector(".popup"),o=t.querySelector(".field"),i=t.querySelector(".label"),n=t.querySelector(".view"),a=t.querySelector("#slot"),l=t.querySelector(".container"),c=new V({context:this,class:Se,slot:a});return e.addEventListener("show",()=>{o.focused=!0,o.fixed=!0,c.select||(n.textContent=this.label,n.style.opacity="0"),l.style.minWidth=`${this.offsetWidth}px`,c.select&&l.scrollTo({top:c.select.offsetTop-l.offsetTop-(l.offsetHeight/2-c.select.offsetHeight/2)})}),e.onclose=()=>{o.focused=!1,!c.select&&(o.fixed=!1)},e.addEventListener("closed",()=>l.style.removeProperty("min-width")),c.onUpdate=()=>{if(!c.select){o.fixed=!1,n.textContent="";return}o.fixed=!0,n.style.removeProperty("opacity"),n.textContent=c.select.textContent},c.onSelect=()=>e.close(),{expose:{get options(){return c.list},get selectedIndex(){return c.selectedIndex},get show(){return e.show},get toggle(){return e.toggle},get close(){return e.close}},label:p=>i.textContent=p,value:{get:()=>c.value,set:p=>c.value=p}}}}){}const os="s-picker-item",rs=w({selected:!1,$value:""}),ss=`
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
`,ns=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple part="ripple" attached="true" ></s-ripple>
`;class Se extends b({style:ss,template:ns,props:rs,setup(){return this.addEventListener("click",()=>{this.selected||this.parentNode instanceof ae&&this.dispatchEvent(new Event(`${ie}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof ae&&this.dispatchEvent(new Event(`${ie}:update`,{bubbles:!0}))}}}}){}ae.define(ie);Se.define(os);const is="s-popup",as=w({align:["center","left","right"]}),ls=K({show:Event,showed:Event,closed:Event}),cs=`
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
`,ds=`
<slot name="trigger"></slot>
<dialog class="popup" part="popup">
  <div class="scrim" part="scrim"></div>
  <slot class="container" part="container"></slot>
</dialog>
`,ps=(r,t,e,o)=>{const i={top:0,left:0,origin:[]},n=o==="center",a=n?r.top+r.height:r.top,l=n?r.top-e:r.top-e+r.height;if(a+e<=innerHeight)i.top=a,i.origin[1]="top";else if(l>=0)i.top=l,i.origin[1]="bottom";else{const c=(innerHeight-e)/2;i.top=c,i.origin[1]=`${r.top+r.height/2-c}px`}if(n)i.left=r.left-(t-r.width)/2,i.origin[0]="center",i.left<0?(i.left=r.left,i.origin[0]=`${r.width/2}px`):i.left+t>innerWidth&&(i.left=r.left+r.width-t,i.origin[0]=`${t-r.width+r.width/2}px`);else{const c=g=>{i.left=r.left-t,i.origin[0]="right",i.left<0&&g&&g()},p=g=>{i.left=r.left+r.width,i.origin[0]="left",i.left+t>innerWidth&&g&&g()},s=()=>{const g=(innerWidth-t)/2;i.left=g,i.origin[0]=`${r.left+r.width/2-g}px`};o==="left"?c(()=>p(s)):p(()=>c(s))}return i};class hs extends b({style:cs,template:ds,props:as,events:ls,setup(t){const e=t.querySelector("dialog"),o=t.querySelector(".container"),i=getComputedStyle(this),n=()=>{const p=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",s=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:p,duration:F(s)}},a=p=>{var d;if(!this.isConnected||e.open)return;const s={top:0,left:0,origin:[]};if(e.showModal(),!this.dispatchEvent(new Event("show",{cancelable:!0})))return e.close();o.style.maxHeight=`${innerHeight}px`,o.style.maxWidth=`${innerWidth}px`;const g=o.offsetWidth,u=o.offsetHeight;if(!p||p instanceof HTMLElement){const y=(p??this).getBoundingClientRect(),f=ps(y,g,u,this.align);s.top=f.top,s.left=f.left,s.origin=f.origin}else s.top=p.y,s.left=p.x,s.origin=((d=p.origin)==null?void 0:d.split(" "))??["left","top"],p.x+g>innerWidth&&(s.left=p.x-g,s.origin[0]="right"),p.y+u>innerHeight&&(s.top=p.y-u,s.origin[1]="bottom");o.style.transformOrigin=s.origin.join(" "),o.style.top=`${s.top}px`,o.style.left=`${s.left}px`;const m=o.animate({transform:["scale(.9)","scale(1)"],opacity:[0,1]},n());this.setAttribute("showed",""),m.finished.then(()=>this.dispatchEvent(new Event("showed")))},l=()=>{if(!this.isConnected||!e.open||o.getAnimations().length>0||!this.dispatchEvent(new Event("close",{cancelable:!0})))return;const p=o.animate({transform:["scale(1)","scale(.9)"],opacity:[1,0]},n());this.removeAttribute("showed"),p.finished.then(()=>{e.close(),this.dispatchEvent(new Event("closed"))})},c=p=>e.open?l():a(p);return t.querySelector("slot[name=trigger]").addEventListener("click",()=>a()),t.querySelector(".scrim").addEventListener("pointerdown",l),{expose:{show:a,toggle:c,close:l},onMounted:()=>addEventListener("resize",l),onUnmounted:()=>removeEventListener("resize",l)}}}){}hs.define(is);const he="s-popup-menu",us=w({group:["","start","end"]}),ms=`
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
`,gs=`
<s-popup class="popup">
  <slot slot="trigger" name="trigger"></slot>
  <s-scroll-view class="container" part="container">
    <slot></slot>
  </s-scroll-view>
</s-popup>
`;class J extends b({style:ms,template:gs,props:us,setup(t){const e=t.querySelector(".popup"),o=t.querySelector("slot[name=trigger]");return o.onclick=i=>{i.stopPropagation(),e.show()},this.addEventListener(`${he}:click`,i=>{i.stopPropagation(),e.close()}),e.onclose=i=>{const n=i.target;if(n.parentNode instanceof ShadowRoot){const a=n.parentNode.host;a.parentNode instanceof J&&a.parentNode.close()}},{onMounted:()=>{this.parentNode instanceof J&&e.setAttribute("align","right")},expose:{get show(){return e.show},get toggle(){return e.toggle},get close(){return e.close}}}}}){}const fs="s-popup-menu-item",vs=`
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
`,xs=`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true"></s-ripple>
`;class bs extends b({style:vs,template:xs,setup(){this.addEventListener("click",()=>this.dispatchEvent(new Event(`${he}:click`,{bubbles:!0})))}}){}J.define(he);bs.define(fs);const ys="s-radio-button",ws=w({disabled:!1,checked:!1,name:"",$value:""}),$s=`
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
`,ks=`
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
`;class Es extends b({style:$s,template:ks,props:ws,setup(){this.addEventListener("click",()=>{this.checked=!0,this.name&&document.querySelectorAll(`${this.tagName}[name='${this.name}']`).forEach(t=>{t!==this&&(t.checked=!1)}),this.dispatchEvent(new Event("change"))})}}){}Es.define(ys);const Cs="s-rate",O=w({readOnly:!1,$max:10,$min:0,$value:5,$step:1}),Ss=`
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
`,qs=`
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
  max="${O.max}"
  min="${O.min}"
  step="${O.step}"
  value="${O.value}"
/>
`;class As extends b({style:Ss,template:qs,props:O,setup(t){const e=t.querySelector(".indicator"),o=t.querySelector("input"),i=()=>{const a=(Number(o.value)-this.min)*100/this.max-this.min;e.style.width=`${a}%`};return o.onchange=()=>this.dispatchEvent(new Event("change")),o.oninput=()=>{this.value=Number(o.value),this.dispatchEvent(new Event("input"))},{max:n=>{o.max=String(n),i()},min:n=>{o.min=String(n),i()},step:n=>{o.step=String(n),i()},value:n=>{o.value=String(n),i()}}}}){}As.define(Cs);const Ts="s-search",Fs=w({$placeholder:"",disabled:!1,$value:"",$maxLength:-1,readOnly:!1}),zs=`
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
`,Ms=`
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
`;class Ls extends b({style:zs,template:Ms,props:Fs,setup(t){const e=t.querySelector("input"),o=t.querySelector(".clear"),i=t.querySelector("[name=dropdown]"),n=()=>o.style.display=e.value===""?"none":"flex";return i.onmousedown=a=>a.preventDefault(),e.onchange=()=>this.dispatchEvent(new Event("change")),o.onclick=()=>{e.value="",n(),this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))},e.oninput=n,{expose:{get native(){return e}},value:{get:()=>e.value,set:a=>{e.value=a,n()}},placeholder:a=>e.placeholder=a,maxLength:a=>e.maxLength=a,readOnly:a=>e.readOnly=a}}}){}Ls.define(Ts);const le="s-segmented-button",Bs=w({$value:"",mode:["auto","fixed"]}),Ds=`
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
`,Ns="<slot></slot>";class ce extends b({style:Ds,template:Ns,props:Bs,setup(t){const e=t.querySelector("slot"),o=new V({context:this,class:qe,slot:e}),i=getComputedStyle(this),n=()=>{const a=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",l=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:a,duration:F(l)}};return o.onUpdate=a=>{if(!a||!o.select||!this.isConnected)return;const l=a.shadowRoot.querySelector(".indicator").getBoundingClientRect(),c=o.select.shadowRoot.querySelector(".indicator"),p=c.getBoundingClientRect(),s=l.left-p.left;c.style.transform=`translateX(${p.left>l.left?s:Math.abs(s)}px)`,c.style.width=`${l.width}px`,a.style.zIndex="1";const g=c.animate([{transform:"translateX(0)",width:`${p.width}px`}],n());g.onfinish=g.oncancel=g.onremove=()=>{c.style.removeProperty("transform"),c.style.removeProperty("width"),a.style.removeProperty("z-index")}},{expose:{get options(){return o.list},get selectedIndex(){return o.selectedIndex}},value:{get:()=>o.value,set:a=>o.value=a}}}}){}const Ps="s-segmented-button-item",Hs=w({selected:!1,disabled:!1,selectable:!0,$value:""}),js=`
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
`,Zs=`
<div class="indicator" part="indicator"></div>
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class qe extends b({style:js,template:Zs,props:Hs,setup(){return this.addEventListener("click",()=>{!(this.parentNode instanceof ce)||this.selected||this.selectable&&this.dispatchEvent(new Event(`${le}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof ce&&this.dispatchEvent(new CustomEvent(`${le}:update`,{bubbles:!0,detail:{}}))}}}}){}ce.define(le);qe.define(Ps);const Us="s-skeleton",Is=`
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
`;class Os extends b({style:Is}){}Os.define(Us);const Vs="s-slider",j=w({disabled:!1,$labeled:!1,$max:100,$min:0,$step:1,$value:0}),Ws=`
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
`,Qs=`
<div class="container" part="container">
  <div class="indicator" part="indicator"></div>
  <div class="track" part="track"></div>
  <div class="handle" part="handle">
    <div class="thumb" part="thumb"></div>
    <div class="label" part="label">${j.value}</div>
  </div>
</div>
<input
  type="range"
  max="${j.max}"
  min="${j.min}"
  step="${j.step}"
  value="${j.value}"
/>
`;class Ys extends b({style:Ws,template:Qs,props:j,setup(t){const e=t.querySelector(".container"),o=t.querySelector(".indicator"),i=t.querySelector(".track"),n=t.querySelector(".handle"),a=t.querySelector(".label"),l=t.querySelector("input"),c=()=>{const p=Number(l.value),s=(p-this.min)*100/(this.max-this.min);n.style.left=`calc(${s}% - ${s*.16}px)`,o.style.width=`calc(${s}% - ${4+s*.16}px)`,i.style.width=`calc(${100-s}% - ${20-s*.16}px)`,a.textContent=String(p)};return l.onchange=()=>this.dispatchEvent(new Event("change")),l.oninput=()=>{this.value=Number(l.value),this.dispatchEvent(new Event("input"))},l.onmousedown=p=>p.button===0&&A.pointerFine.matches&&e.classList.add("active"),l.onmouseup=()=>A.pointerFine.matches&&e.classList.remove("active"),l.ontouchstart=()=>A.pointerCoarse.matches&&e.classList.add("active"),l.ontouchend=()=>A.pointerCoarse.matches&&e.classList.remove("active"),l.ontouchcancel=()=>A.pointerCoarse.matches&&e.classList.remove("active"),{max:p=>{l.max=String(p),c()},min:p=>{l.min=String(p),c()},step:p=>{l.step=String(p),c()},value:p=>{l.value=String(p),c()}}}}){}Ys.define(Vs);const Q=document.createElement("div");Q.setAttribute("style","position: fixed;right: 0;bottom: 0;width: 100%;height: 100%;pointer-events: none");const Ae=r=>{r.appendChild(Q);const t=Q.getBoundingClientRect();return r.removeChild(Q),{left:t.left,top:t.top,width:t.width,height:t.height}},_s="s-snackbar",Js=w({type:["none","info","success","warning","error"],align:["auto","top","bottom"],$duration:4e3}),Gs=K({show:Event,showed:Event,closed:Event}),Xs=`
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
`,Ks=`
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
`,Rs=r=>{let t=document.body;const e=new Te;e.style.display="block";const o=document.body.firstElementChild;if(o&&o.tagName==="S-PAGE"&&(t=o),typeof r=="string")e.textContent=r;else{if(r.root&&(t=r.root),r.align&&(e.align=r.align),r.icon&&(r.icon instanceof Element&&(r.icon.slot="icon",e.appendChild(r.icon)),typeof r.icon=="string"&&(e.innerHTML=r.icon)),e.append(r.text),r.type&&(e.type=r.type),r.action){const i=document.createElement("s-button");i.type="text",i.slot="action",typeof r.action=="string"?i.textContent=r.action:(i.textContent=r.action.text,i.addEventListener("click",r.action.click)),e.appendChild(i)}typeof r.duration=="number"&&(e.duration=r.duration)}return t.appendChild(e),e.addEventListener("closed",()=>t.removeChild(e)),e.show(),e},ve={top:[],bottom:[]};class Te extends b({style:Xs,template:Ks,props:Js,events:Gs,methods:{builder:Rs},setup(t){const e=t.querySelector(".popup"),o=t.querySelector(".container"),i=getComputedStyle(this),n=()=>{const s=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",g=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:s,duration:F(g)}},a={timer:0,gap:8},l=()=>this.align==="auto"?A.pointerCoarse.matches?"top":"bottom":this.align,c=()=>{if(!this.isConnected||e.classList.contains("show"))return;if(e.classList.add("show"),e.showPopover)e.showPopover();else{const h=Ae(t);e.style.width=`${innerWidth}px`,e.style.height=`${innerHeight}px`,e.style.marginLeft=`${-h.left}px`,e.style.marginTop=`${-h.top}px`,e.style.zIndex="3"}const s=l();o.style.alignSelf={top:"flex-start",bottom:"flex-end"}[s];const g=ve[s],u={top:1,bottom:-1}[s];let m=o.offsetHeight+a.gap;for(const h of g)h.style.transform=`translateY(${m*u}px)`,m+=h.firstElementChild.offsetHeight+a.gap;const d=o.animate({opacity:[0,1],transform:[`translateY(calc(${u*-100}% + 16px))`,""],pointerEvents:"auto"},{...n(),fill:"forwards"});this.dispatchEvent(new Event("show")),this.duration>0&&(a.timer=setTimeout(p,this.duration)),e.dataset.align=s,g.unshift(e),d.finished.then(()=>this.dispatchEvent(new Event("showed")))},p=()=>{if(!this.isConnected||!e.classList.contains("show"))return;clearTimeout(a.timer);const s=e.dataset.align,g=ve[s],u={top:1,bottom:-1}[s],m=g.indexOf(e);for(let h=m+1;h<g.length;h++){const y=g[h],f=Math.abs(Number(y.style.transform.slice(11).slice(0,-3)));y.style.transform=`translateY(${(f-o.offsetHeight-a.gap)*u}px)`}const d=o.animate({opacity:[1,0],transform:`translateY(calc(${u*-100}% + 16px))`},n());this.dispatchEvent(new Event("close")),d.finished.then(()=>{e.hidePopover&&e.hidePopover(),e.removeAttribute("style"),e.classList.remove("show"),this.dispatchEvent(new Event("closed"))}),g.splice(m,1)};return o.onmouseenter=()=>clearTimeout(a.timer),o.onmouseleave=()=>e.classList.contains("show")&&this.duration>0&&(a.timer=setTimeout(p,this.duration)),t.querySelector("slot[name=trigger]").onclick=c,t.querySelector("slot[name=action]").onclick=p,{expose:{show:c,close:p}}}}){}Te.define(_s);const en="s-switch",tn=w({disabled:!1,checked:!1}),on=`
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
`,rn=`
<div class="track" part="track"></div>
<s-ripple attached="true" class="ripple" part="ripple">
  <div class="thumb" part="thumb">
    <slot name="icon" class="icon"></slot>
  </div>
</s-ripple>
`;class sn extends b({style:on,template:rn,props:tn,setup(){this.addEventListener("click",()=>{this.checked=!this.checked,this.dispatchEvent(new Event("change"))})}}){}sn.define(en);const de="s-tab",nn=w({mode:["scrollable","fixed"],$value:""}),an=`
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
`,ln=`
<div class="container" part="container">
  <slot></slot>
</div>
`;class pe extends b({style:an,template:ln,props:nn,setup(t){const e=t.querySelector("slot"),o=t.querySelector(".container"),i=new V({context:this,class:Fe,slot:e}),n=getComputedStyle(this),a=()=>{const l=n.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",c=n.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:l,duration:F(c)}};return i.onUpdate=l=>{var m;if(i.select&&o.scrollWidth!==o.offsetWidth){const d=i.select.offsetLeft-o.offsetLeft-(o.offsetWidth/2-i.select.offsetWidth/2);o.scrollTo({left:d,behavior:"smooth"})}if(!l||!i.select||!this.isConnected)return;const c=l.shadowRoot.querySelector(".indicator").getBoundingClientRect(),p=(m=i.select.shadowRoot)==null?void 0:m.querySelector(".indicator"),s=p.getBoundingClientRect(),g=c.left-s.left;p.style.transform=`translateX(${s.left>c.left?g:Math.abs(g)}px)`,p.style.width=`${c.width}px`;const u=p.animate([{transform:"translateX(0)",width:`${s.width}px`}],a());u.onfinish=u.oncancel=u.onremove=()=>{p.style.removeProperty("transform"),p.style.removeProperty("width")}},{expose:{get options(){return i.list},get selectedIndex(){return i.selectedIndex}},value:{get:()=>i.value,set:l=>i.value=l}}}}){}const cn="s-tab-item",dn=w({selected:!1,$value:""}),pn=`
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
`,hn=`
<div class="container" part="container">
  <slot name="icon"></slot>
  <div class="text" part="text">
    <slot name="text"></slot>
    <slot name="badge"></slot>
  </div>
  <div class="indicator" part="indicator"></div>
</div>
<s-ripple attached="true" part="ripple"></s-ripple>
`;class Fe extends b({style:pn,template:hn,props:dn,setup(t){const e=t.querySelector(".container");return t.querySelector("[name=icon]").addEventListener("slotchange",o=>{const n=o.target.assignedElements().length;e.classList[n>0?"add":"remove"]("icon")}),this.addEventListener("click",()=>{!(this.parentNode instanceof pe)||this.selected||this.dispatchEvent(new Event(`${de}:select`,{bubbles:!0}))}),{selected:()=>{this.parentNode instanceof pe&&this.dispatchEvent(new Event(`${de}:update`,{bubbles:!0}))}}}}){}pe.define(de);Fe.define(cn);const un="s-table",mn=`
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
`,gn=`
<slot></slot>
`;class fn extends b({style:mn,template:gn}){}const vn="s-thead",xn=`
:host{
  display: table-header-group;
  font-weight: 600;
  position: sticky;
  top: 0;
  border-bottom: solid 1px var(--s-color-outline-variant, #C0C8CC);
  background: var(--s-color-surface-container, #ECEEF0);
  color: var(--s-color-on-surface-variant, #40484C);
}
`,bn="<slot></slot>";class yn extends b({style:xn,template:bn}){}const wn="s-tbody",$n=`
:host{
  display: table-row-group;
  color: var(--s-color-on-surface, #191C1E);
}
::slotted(s-tr:not(:first-child)){
  border-top: solid 1px var(--s-color-outline-variant, #C0C8CC);
}
`,kn="<slot></slot>";class En extends b({style:$n,template:kn}){}const Cn="s-tr",Sn=`
:host{
  display: table-row;
}
`,qn="<slot></slot>";class An extends b({style:Sn,template:qn}){}const Tn="s-th",Fn=`
:host{
  display: table-cell;
  padding: 12px 16px;
  text-transform: capitalize;
}
`,zn="<slot></slot>";class Mn extends b({style:Fn,template:zn}){}const Ln="s-td",Bn=`
:host{
  display: table-cell;
  user-select: text;
  padding: 12px 16px;
}
`,Dn="<slot></slot>";class Nn extends b({style:Bn,template:Dn}){}fn.define(un);yn.define(vn);En.define(wn);An.define(Cn);Mn.define(Tn);Nn.define(Ln);const Pn="s-text-field",Hn=w({$label:"",$placeholder:"",disabled:!1,type:["text","number","password","multiline"],error:!1,$value:"",$maxLength:-1,readOnly:!1,multiLine:!1,countered:!1}),jn=`
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
`,Zn=`
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
`;class Un extends b({style:jn,template:Zn,props:Hn,setup(t){const e=t.querySelector(".field"),o=t.querySelector(".label"),i=t.querySelector(".shadow"),n=t.querySelector(".counter"),a=t.querySelector(".toggle"),l={input:t.querySelector("input"),textarea:t.querySelector("textarea")},c=()=>this.type==="multiline"?l.textarea:l.input,p=()=>{this.countered&&(n.textContent=`${c().value.length}/${this.maxLength}`)},s=()=>this.dispatchEvent(new Event("change")),g=()=>{e.fixed=!0,e.focused=!0},u=()=>{e.focused=!1,c().value===""&&!this.error&&(e.fixed=!1)};l.input.oninput=p,l.input.onfocus=g,l.input.onblur=u,l.input.onchange=s,l.textarea.onfocus=g,l.textarea.onblur=u,l.textarea.onchange=s,l.textarea.oninput=()=>{i.textContent=l.textarea.value,p()};const m=d=>{this.value=`${parseInt(this.value||"0")+d}`,this.dispatchEvent(new Event("input")),this.dispatchEvent(new Event("change"))};return t.querySelector(".up").onclick=()=>m(1),t.querySelector(".down").onclick=()=>m(-1),t.querySelector(".visibility").onclick=()=>{l.input.type=a.classList.contains("show-password")?"password":"text",a.classList.toggle("show-password")},{expose:{get native(){return c()}},label:d=>o.textContent=d,type:(d,h)=>{l.input.type=d==="password"?a.classList.contains("show-password")?"text":"password":d,d==="multiline"&&(l.textarea.value=l.input.value,i.textContent=l.input.value),h==="multiline"&&(l.input.value=l.textarea.value)},error:d=>{if(d)return e.fixed=!0;c().value===""&&(e.fixed=!1)},value:{get:()=>c().value,set:d=>{l.input.value=d,l.textarea.value=d,i.textContent=d,p(),this.error||(e.fixed=d!=="")}},placeholder:d=>{l.input.placeholder=d,l.textarea.placeholder=d},readOnly:d=>{l.input.readOnly=d,l.textarea.readOnly=d},disabled:d=>{l.input.disabled=d,l.textarea.disabled=d},maxLength:d=>{l.input.maxLength=d,l.textarea.maxLength=d,p()},multiLine:d=>this.type=d?"multiline":"text",countered:p}}}){}Un.define(Pn);const In="s-tooltip",On=w({align:["top","bottom","left","right"],disabled:!1}),Vn=`
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
`,Wn=`
<slot name="trigger" part="trigger"></slot>
<div class="popup" popover="manual" part="popup">
  <slot></slot>
</div>
`;class Qn extends b({style:Vn,template:Wn,props:On,setup(t){const e=t.querySelector("slot[name=trigger]"),o=t.querySelector(".popup"),i=getComputedStyle(this);let n=!1;const a=()=>{const s=i.getPropertyValue("--s-motion-easing-standard")||"cubic-bezier(0.2, 0, 0, 1.0)",g=i.getPropertyValue("--s-motion-duration-medium4")||"400ms";return{easing:s,duration:F(g)}},l=()=>{if(!this.isConnected||this.disabled)return;if(o.style.display="block",n=!0,o.showPopover)o.showPopover();else{const y=Ae(t);o.style.marginLeft=`${-y.left}px`,o.style.marginTop=`${-y.top}px`,o.style.zIndex="3"}const s=this.getBoundingClientRect(),g=4,u=o.offsetWidth,m=o.offsetHeight,d={top:0,left:0},h={middle(y){d.left=s.left-(u-s.width)/2;const f=()=>(d.top=s.top+s.height+g,d.top+m>innerHeight),x=()=>(d.top=s.top-m-g,d.top<0);d.left<0&&(d.left=s.left),d.left+u>innerWidth&&(d.left=s.left+s.width-u),y==="top"&&x()&&f(),y==="bottom"&&f()&&x()},left(){return d.left=s.left-u-g,d.top=s.top-(m-s.height)/2,d.left<0},right(){return d.left=s.left+s.width+g,d.top=s.top-(m-s.height)/2,d.left+u>innerWidth}};switch(this.align){case"bottom":case"top":h.middle(this.align);break;case"left":h.left()&&h.right();break;case"right":h.right()&&h.left();break}o.style.top=`${d.top}px`,o.style.left=`${d.left}px`,o.animate({opacity:[0,1]},a())};let c=0;const p=()=>{clearTimeout(c),n=!1,o.animate({opacity:[1,0]},a()).finished.then(()=>{n||(o.hidePopover&&o.hidePopover(),o.style.removeProperty("display"))})};e.addEventListener("touchstart",()=>{A.pointerFine.matches||(clearTimeout(c),c=setTimeout(()=>l(),600))},{passive:!0}),e.ontouchend=()=>{clearTimeout(c),p()},e.onmouseenter=()=>A.pointerFine.matches&&l(),e.onmouseleave=()=>A.pointerFine.matches&&p()}}){}Qn.define(In);const Yn={class:"team",id:"team"},_n={class:"container"},Jn={class:"team-grid"},Gn={class:"social-links"},Xn={__name:"Team",setup(r){return(t,e)=>{const o=ee("s-ripple"),i=ee("router-link");return P(),N("section",Yn,[v("div",_n,[e[11]||(e[11]=v("h2",{class:"section-title fade-in"},"我们的团队",-1)),v("div",Jn,[S(o,{class:"team-member fade-in"},{default:z(()=>[...e[0]||(e[0]=[v("div",{class:"member-avatar"},[v("img",{src:tt,alt:"Fexcode",width:"100",height:"100"})],-1),v("h3",{class:"member-name"},"Fexcode",-1),v("p",{class:"member-role"},"爬虫数据收集与数据分析员/后端工程师",-1),v("div",{class:"social-links"},[v("a",{href:"#",class:"social-link"},"📧"),v("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),S(o,{class:"team-member fade-in"},{default:z(()=>[...e[1]||(e[1]=[v("div",{class:"member-avatar"},[v("img",{src:ot,alt:"SkyMaoZi",width:"100",height:"100"})],-1),v("h3",{class:"member-name"},"SkyMaoZi",-1),v("p",{class:"member-role"},"全栈工程师",-1),v("div",{class:"social-links"},[v("a",{href:"#",class:"social-link"},"📧"),v("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),S(o,{class:"team-member fade-in"},{default:z(()=>[...e[2]||(e[2]=[v("div",{class:"member-avatar"},[v("img",{src:rt,alt:"CodeSeed",width:"100",height:"100"})],-1),v("h3",{class:"member-name"},"CodeSeed",-1),v("p",{class:"member-role"},"测试工程师",-1),v("div",{class:"social-links"},[v("a",{href:"#",class:"social-link"},"📧"),v("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),S(o,{class:"team-member fade-in"},{default:z(()=>[...e[3]||(e[3]=[v("div",{class:"member-avatar"},[v("img",{src:st,alt:"xm",width:"100",height:"100"})],-1),v("h3",{class:"member-name"},"xm",-1),v("p",{class:"member-role"},"爬虫与数据分析员",-1),v("div",{class:"social-links"},[v("a",{href:"#",class:"social-link"},"📧"),v("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),S(o,{class:"team-member fade-in"},{default:z(()=>[e[6]||(e[6]=v("div",{class:"member-avatar"},[v("img",{src:nt,alt:"Justthewoofus",width:"100",height:"100"})],-1)),e[7]||(e[7]=v("h3",{class:"member-name"},"Justthewoofus",-1)),e[8]||(e[8]=v("p",{class:"member-role"},"底层开发工程师",-1)),v("div",Gn,[S(i,{to:"justwoofus",class:"social-link"},{default:z(()=>[...e[4]||(e[4]=[te("📧",-1)])]),_:1}),S(i,{to:"justwoofus",class:"social-link"},{default:z(()=>[...e[5]||(e[5]=[te("💼",-1)])]),_:1})])]),_:1}),S(o,{class:"team-member fade-in"},{default:z(()=>[...e[9]||(e[9]=[v("div",{class:"member-avatar"},[v("img",{src:it,alt:"Narci",width:"100",height:"100"})],-1),v("h3",{class:"member-name"},"Narci",-1),v("p",{class:"member-role"},"后端工程师",-1),v("div",{class:"social-links"},[v("a",{href:"#",class:"social-link"},"📧"),v("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1}),S(o,{class:"team-member fade-in"},{default:z(()=>[...e[10]||(e[10]=[v("div",{class:"member-avatar"},[v("img",{src:at,alt:"BaiChuanByte",width:"100",height:"100"})],-1),v("h3",{class:"member-name"},"BaiChuanByte",-1),v("p",{class:"member-role"},"室长/策划/吉祥物",-1),v("div",{class:"social-links"},[v("a",{href:"#",class:"social-link"},"📧"),v("a",{href:"#",class:"social-link"},"💼")],-1)])]),_:1})])])])}}},Kn="/assets/logo-BBsoOzMl.png",Rn={},ei={class:"footer-content"};function ti(r,t){return P(),N("footer",null,[v("div",ei,[t[2]||(t[2]=be('<p class="copyright" data-v-b9a3d6ed>© 2024 Xnors Studio. All rights reserved.</p><div class="friend-links" data-v-b9a3d6ed><p class="friend-links-title" data-v-b9a3d6ed>友情链接</p><a href="https://xnors.github.io/xblogs/" target="_blank" class="friend-link" data-v-b9a3d6ed>异或博客/Xblogs</a><a href="https://nizhiwu.top/" target="_blank" class="friend-link" data-v-b9a3d6ed>逆之雨工作室</a><a href="https://sxxyrry.github.io/" target="_blank" class="friend-link" data-v-b9a3d6ed>23XR工作室</a></div>',2)),v("div",{class:"theme-toggle",onClick:t[0]||(t[0]=(...e)=>r.toggleTheme&&r.toggleTheme(...e))},[...t[1]||(t[1]=[v("img",{src:Kn,id:"theme-icon"},null,-1)])])])])}const oi=G(Rn,[["render",ti],["__scopeId","data-v-b9a3d6ed"]]);function ri(){xe(()=>{console.log("Page effects mounted.");const r={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},r);document.querySelectorAll(".fade-in").forEach(n=>{t.observe(n)});const e=n=>{const a=n.target.closest('a[href^="#"]');if(!a)return;n.preventDefault();const l=document.querySelector(a.getAttribute("href"));l&&l.scrollIntoView({behavior:"smooth",block:"start"})};document.body.addEventListener("click",e);const o=()=>{const n=document.querySelector("nav");if(!n)return;window.pageYOffset>100?(n.style.background="rgba(10, 10, 10, 0.5)",n.style.boxShadow="0 2px 20px rgba(0, 0, 0, 0.5)"):(n.style.background="rgba(10, 10, 10, 0.1)",n.style.boxShadow="none")};return window.addEventListener("scroll",o),()=>{console.log("Page effects unmounted."),t.disconnect(),document.body.removeEventListener("click",e),window.removeEventListener("scroll",o)}}),je(()=>{})}const ai={__name:"Home",setup(r){return ri(),(t,e)=>(P(),N(Ze,null,[S(Qe),S(Ge),S(et),S(Xn),S(oi)],64))}};export{ai as default};
