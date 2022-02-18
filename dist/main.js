(()=>{"use strict";var e={869:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(81),o=r.n(a),n=r(645),d=r.n(n)()(o());d.push([e.id,'body{box-sizing:border-box;padding:0;margin:0;font-family:"Roboto",sans-serif}#sidebar{position:fixed;left:0;top:0;bottom:0;background:#f5f5f5;width:275px;display:flex;justify-content:center;align-items:center;box-shadow:1px 0 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(10, 1fr);row-gap:1rem;width:100%;height:95%}#sidebar .sidebar-content-container .sidebar-top{width:100%;grid-row:1/4}#sidebar .sidebar-content-container .sidebar-top .search-bar-container{width:100%;display:flex;justify-content:center;align-items:center}#sidebar .sidebar-content-container .sidebar-top .search-bar-container #search-form{position:relative}#sidebar .sidebar-content-container .sidebar-top .search-bar-container #search-form .search-bar{position:relative;border-top-left-radius:5px;border-bottom-left-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-top .search-bar-container #search-form .search-bar:focus{outline:1px solid #1ba2b6;z-index:2}#sidebar .sidebar-content-container .sidebar-top .search-bar-container #search-form .search-btn{border-top-right-radius:5px;border-bottom-right-radius:5px;padding:.5rem .85rem;border:1px solid #d3d3d3;box-shadow:5px 0 15px rgba(0,0,0,.25);position:relative;left:-5px;transition:.2s all ease-in-out;font-weight:700}#sidebar .sidebar-content-container .sidebar-top .search-bar-container #search-form .search-btn:hover{background:#4f4f4f;color:#fff}#sidebar .sidebar-content-container .sidebar-top .search-bar-container #search-form .search-btn:active{background:#f0f0f0;color:rgba(25,23,17,.6);box-shadow:inset -5px 0 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-top .sidebar-toplinks-container{width:100%;text-align:left;margin:1rem 0 0 0}#sidebar .sidebar-content-container .sidebar-top .sidebar-toplinks-container .sidebar-top-link{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-top .sidebar-toplinks-container .sidebar-top-link:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-top .sidebar-toplinks-container .active-btn{background-color:rgba(56,122,137,.578);color:#fff}#sidebar .sidebar-content-container .sidebar-middle{grid-row:4/9;width:100%}#sidebar .sidebar-content-container .sidebar-middle .workspace-btn-container .add-workspaces-btn{width:100%;font-size:12px;background:rgba(0,0,0,0);border:none;color:rgba(81,81,81,.6);padding:.4rem;display:flex;justify-content:space-between;cursor:pointer}#sidebar .sidebar-content-container .sidebar-middle .workspace-btn-container .add-workspaces-btn .fas{opacity:0}#sidebar .sidebar-content-container .sidebar-middle .workspace-btn-container .add-workspaces-btn:hover .fas{opacity:1}#sidebar .sidebar-content-container .sidebar-middle #workspaces{max-height:147.5px;overflow-y:scroll}#sidebar .sidebar-content-container .sidebar-middle #workspaces .workspace{width:100%}#sidebar .sidebar-content-container .sidebar-middle #workspaces .workspace .workspaces-btn{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-middle #workspaces .workspace .workspaces-btn:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-middle #workspaces .workspace .active-btn{background-color:rgba(56,122,137,.578);color:#fff}#sidebar .sidebar-content-container .sidebar-middle #workspaces::-webkit-scrollbar{width:.3em;visibility:hidden}#sidebar .sidebar-content-container .sidebar-middle #workspaces::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);visibility:hidden}#sidebar .sidebar-content-container .sidebar-middle #workspaces::-webkit-scrollbar-thumb{background-color:rgba(169,169,169,.612);outline:1px solid rgba(112,128,144,0);border-radius:5px}#sidebar .sidebar-content-container .sidebar-middle #documents-container{margin:2rem 0}#sidebar .sidebar-content-container .sidebar-middle #documents-container .pages-text{font-size:12px;background:rgba(0,0,0,0);border:none;color:rgba(81,81,81,.6);padding:.4rem}#sidebar .sidebar-content-container .sidebar-middle #documents-container .journal-btn{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-middle #documents-container .journal-btn:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-middle #documents-container .to-do-btn{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-middle #documents-container .to-do-btn:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-middle #documents-container .guide-btn{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-middle #documents-container .guide-btn:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-middle #documents-container .active-btn{background-color:rgba(56,122,137,.578);color:#fff}#sidebar .sidebar-content-container .sidebar-bottom{grid-row:9/11;width:100%;position:relative}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .active{display:block}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .not-active{display:none}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .login-signup-container{width:90%;margin:0 auto;position:absolute;bottom:1rem;text-align:center}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .login-signup-container .signup{background-color:#ff4500;color:#fff;border:none;border-radius:5px;font-weight:700;font-size:15px;margin:5px;padding:.5rem 1rem;transition:.2s all ease-in-out;cursor:pointer}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .login-signup-container .signup:hover{background-color:rgba(255,68,0,.9);box-shadow:0 0 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .login-signup-container .login{background-color:rgba(0,0,0,0);color:rgba(0,0,0,.6);border:none;border-radius:5px;font-weight:700;font-size:15px;margin:5px;padding:.5rem 1rem;transition:.2s all ease-in-out;cursor:pointer}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .login-signup-container .login:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 0 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .account-settings-container .account-text{font-size:12px;background:rgba(0,0,0,0);border:none;color:rgba(81,81,81,.6);padding:.4rem}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .account-settings-container .settings{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .account-settings-container .settings:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .account-settings-container .signout{background-color:rgba(0,0,0,0);border:none;padding:.75rem;color:rgba(0,0,0,.6);font-weight:700;font-size:15px;cursor:pointer;width:100%;text-align:left;transition:.2s all ease-in-out}#sidebar .sidebar-content-container .sidebar-bottom #user-settings .account-settings-container .signout:hover{background-color:#a5a5a5;color:#fff;box-shadow:0 2px 15px rgba(0,0,0,.25)}#main-content{position:absolute;left:295px;top:0;bottom:0;width:80%}#workspace-form-container{position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center;animation:workspaceModalPop;animation-duration:.5s}#workspace-form-container .workspace-form{width:fit-content;background:rgba(0,0,0,.75);padding:2rem;border-radius:5px;position:relative;display:grid;grid-template-columns:1fr}#workspace-form-container .workspace-form .exit-workspace-form{color:#f13a0c;position:absolute;right:.25rem;top:.25rem;font-size:1.3rem;cursor:pointer}#workspace-form-container .workspace-form label{color:#fff}#workspace-form-container .workspace-form input{position:relative;border-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25);margin:.5rem 0}#workspace-form-container .workspace-form input:focus{outline:1px solid #1ba2b6}#workspace-form-container .workspace-form .workspace-alert{color:#f35656;font-size:14px;margin:1rem 0}#workspace-form-container .workspace-form .noshow-alert{display:none}#workspace-form-container .workspace-form textarea{position:relative;border-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25);margin:.5rem 0}#workspace-form-container .workspace-form textarea:focus{outline:1px solid #1ba2b6}#workspace-form-container .workspace-form .workspace-form-btn{position:relative;border-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25);cursor:pointer}.noshow-workspace-modal{display:none !important}@keyframes workspaceModalPop{0%{opacity:0}100%{opacity:1}}.ws-content .tdiv{display:flex;align-items:center}.ws-content .ws-title{margin:2rem 0 0 0;display:inline-block;font-size:2rem;color:#1f272a}.ws-content .ws-description{font-size:15px;width:40%;color:#323f44}.ws-content .ws-delete-btn{margin:2rem 0 0 .5rem;font-size:1.5rem;color:#5e0a8a;text-shadow:0px 0px 4px rgba(93,10,138,.5);cursor:pointer}.ws-content .ws-delete-btn:active{text-shadow:none}#workspace-board-section .workspace-board-container{display:grid !important;grid-template-columns:repeat(4, 1fr)}#workspace-board-section .workspace-board-container .ws-row{max-height:540px;width:93%;background:rgba(230,229,229,.9);border-radius:5px;overflow-y:scroll;box-shadow:0 0 15px rgba(115,115,115,.2)}#workspace-board-section .workspace-board-container .ws-row .row-title{margin:1rem 0 1rem .8rem}#workspace-board-section .workspace-board-container .ws-row .card-div{background:rgba(245,245,245,.925);border:1px solid rgba(142,142,142,.25);width:85%;border-radius:5px;padding:.5rem;margin:1rem auto;box-shadow:0 0 15px rgba(115,115,115,.2)}#workspace-board-section .workspace-board-container .ws-row .card-div .card-top{display:flex;justify-content:space-between}#workspace-board-section .workspace-board-container .ws-row .card-div .card-top .due{border:1px solid rgba(204,134,28,.898);background:rgba(255,230,213,.898);font-weight:600;font-size:11px;outline:none;color:#4b5458;border-radius:5px}#workspace-board-section .workspace-board-container .ws-row .card-div h4{margin:0 0 .5rem 0}#workspace-board-section .workspace-board-container .ws-row .card-div .card-middle .card-description{font-size:14px}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom{display:flex;justify-content:space-between;position:relative}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .card-delete-btn{align-self:end;color:#5e0a8a;text-shadow:0px 0px 4px rgba(93,10,138,.5);cursor:pointer}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .card-delete-btn:active{text-shadow:none}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .created-date{font-size:9px;align-self:end;color:#4f4f4f}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .card-p-btn{color:#403f3f;padding:3px;box-shadow:0 0 5px rgba(88,88,88,.3);align-self:end;transition:.1s all ease-in}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .card-p-btn:hover{color:#969696;padding:3px;box-shadow:0 0 5px rgba(88,88,88,.3);align-self:end}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .onDeck{background-color:#ffe944;border:none;border-radius:5px;cursor:pointer}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .inProgress{background-color:#83f848;border:none;border-radius:5px;cursor:pointer}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .review{background-color:#e657aa;border:none;border-radius:5px;cursor:pointer}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .complete{background-color:#00d0ff;border:none;border-radius:5px;cursor:pointer}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .p-options-container{display:grid;grid-template-columns:1fr;position:absolute;right:0;top:1.1rem;background:rgba(245,245,245,.925);border:1px solid rgba(142,142,142,.25);border-radius:4px;box-shadow:0 0 15px rgba(115,115,115,.2)}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .p-options-container .p-options{background-color:rgba(0,0,0,0);outline:none;border:none;width:100%;padding:.1rem}#workspace-board-section .workspace-board-container .ws-row .card-div .card-bottom .p-options-container .p-options:hover{background-color:#3d6e9a;color:#fff}#workspace-board-section .workspace-board-container .ws-row::-webkit-scrollbar{width:.3em;visibility:hidden}#workspace-board-section .workspace-board-container .ws-row::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);visibility:hidden}#workspace-board-section .workspace-board-container .ws-row::-webkit-scrollbar-thumb{background-color:rgba(194,194,194,.6);outline:1px solid rgba(112,128,144,0);border-radius:5px}#workspace-board-section .workspace-board-container h3{display:flex;align-items:center;justify-content:space-between}#workspace-board-section .workspace-board-container .ws-btns{background-color:rgba(0,0,0,0);opacity:.5;margin:0 .5rem;border:none;cursor:pointer;transition:.2s all ease-in-out}#workspace-board-section .workspace-board-container .ws-btns:hover{opacity:1}#card-form-container{position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center;animation:workspaceModalPop;animation-duration:.5s}#card-form-container .card-form{width:fit-content;background:rgba(0,0,0,.75);padding:2rem;border-radius:5px;position:relative;display:grid;grid-template-columns:1fr}#card-form-container .card-form .exit-card-form{color:#f13a0c;position:absolute;right:.25rem;top:.25rem;font-size:1.3rem;cursor:pointer}#card-form-container .card-form label{color:#fff}#card-form-container .card-form input{position:relative;border-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25);margin:.5rem 0}#card-form-container .card-form input:focus{outline:1px solid #1ba2b6}#card-form-container .card-form textarea{position:relative;border-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25);margin:.5rem 0}#card-form-container .card-form textarea:focus{outline:1px solid #1ba2b6}#card-form-container .card-form .card-form-btn{position:relative;border-radius:5px;padding:.5rem .75rem;border:1px solid #d3d3d3;box-shadow:0 0 15px rgba(0,0,0,.25);cursor:pointer}.noshow-card-modal{display:none !important}',""]);const i=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,o,n){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(d[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&d[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var n={},d=[],i=0;i<e.length;i++){var s=e[i],c=a.base?s[0]+a.base:s[0],l=n[c]||0,p="".concat(c," ").concat(l);n[c]=l+1;var b=r(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==b)t[b].references++,t[b].updater(m);else{var u=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:u,references:1})}d.push(p)}return d}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var n=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<n.length;d++){var i=r(n[d]);t[i].references--}for(var s=a(e,o),c=0;c<n.length;c++){var l=r(n[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}n=s}}},569:e=>{var t={};e.exports=function(e,r){var a=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,o&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var n=r.sourceMap;n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={id:a,exports:{}};return e[a](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),a=r(795),o=r.n(a),n=r(569),d=r.n(n),i=r(565),s=r.n(i),c=r(216),l=r.n(c),p=r(589),b=r.n(p),m=r(869),u={};u.styleTagTransform=b(),u.setAttributes=s(),u.insert=d().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=l(),t()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;const g=(()=>{let e=document.createElement("div");return e.innerHTML="<h1>GUIDE</h1>",{guideContent:e}})(),w=(()=>{let e=document.createElement("div");return e.innerHTML="<h1>Today</h1>",{todayContent:e}})(),f=function(e,t){e.classList.remove(t)},h=function(e,t){e.classList.add(t)},k=(()=>{let e=document.querySelector(".add-workspaces-btn"),t=document.querySelector(".exit-workspace-form"),r=document.querySelector("#workspace-form-container");return e.addEventListener("click",(()=>{f(r,"noshow-workspace-modal")})),t.addEventListener("click",(()=>{h(r,"noshow-workspace-modal")})),{workspaceFormContainer:r}})(),x=(()=>{let e=[];return null!==localStorage.getItem("myWorkspaces")&&(e=JSON.parse(localStorage.getItem("myWorkspaces"))),{workspacesArr:e}})(),v=(()=>{let e,t=document.querySelector(".workspace-form"),r=document.querySelector("#title"),a=document.querySelector("#description"),o=document.querySelector("#workspaces");function n(e){localStorage.setItem("myWorkspaces",JSON.stringify(e))}function d(){let e=0;o.innerHTML="",JSON.parse(localStorage.getItem("myWorkspaces")).forEach((t=>{let r=document.createElement("div");r.classList.add("workspace");let a=document.createElement("button");a.classList.add("workspaces-btn","pages"),a.name="workspacepage",a.dataset.indexNumber=e,a.textContent=t.title,a.addEventListener("click",(e=>{E.activePageBtn(e.target),E.activePage(e.target)})),r.appendChild(a),o.appendChild(r),e++}))}return null!==localStorage.getItem("myWorkspaces")&&d(),t.addEventListener("submit",(t=>{t.preventDefault();let o=r.value,i=a.value,s=[];if(x.workspacesArr.forEach((e=>{s.push(e.title)})),-1!==s.indexOf(o)){let e=document.querySelector(".workspace-alert");e.classList.remove("noshow-alert"),setTimeout((()=>{e.classList.add("noshow-alert")}),5e3)}else{!function(t,r){let a=JSON.parse(localStorage.getItem("myWorkspaces"));e=((e,t,r)=>({title:e,description:t,id:r,ondeck:[],inprogress:[],review:[],complete:[]}))(t,r,null==a?0:a.length)}(o,i),c=e,x.workspacesArr.push(c),n(x.workspacesArr),d();let t=document.querySelectorAll(".workspaces-btn");E.activePageBtn(t[e.id]),E.activePage(t[e.id]),h(k.workspaceFormContainer,"noshow-workspace-modal"),r.value="",a.value=""}var c})),{AddToSidebar:d,AddToStorage:n}})(),y=(()=>{let e,t=document.querySelector(".exit-card-form"),r=document.querySelector("#card-form-container"),a=document.querySelector(".card-form"),o="0";function n(t){t.preventDefault(),console.log("workingtest"),C.createCard(o,e),h(r,"noshow-card-modal"),d(e.id)}function d(d){let i=x.workspacesArr;e=i[d];let s=document.querySelector("#main-content");s.innerHTML="";let c=document.createElement("div");c.classList.add("ws-content");let l=document.createElement("div");l.classList.add("tdiv"),c.appendChild(l);let p=document.createElement("h1");p.classList.add("ws-title"),p.textContent=e.title,l.appendChild(p);let b=document.createElement("i");b.classList.add("fas","fa-trash-alt","ws-delete-btn"),b.dataset.wsid=e.id,b.addEventListener("click",(e=>{let t=e.target.dataset.wsid;C.removeWorkspace(t)})),l.appendChild(b);let m=document.createElement("div"),u=document.createElement("p");u.classList.add("ws-description"),u.textContent=e.description,m.appendChild(u),c.appendChild(m);let g=document.createElement("section");g.id="workspace-board-section";let w=document.createElement("div");w.classList.add("workspace-board-container");let k=document.createElement("div");k.classList.add("ondeck","ws-row");let v=document.createElement("h3");v.classList.add("row-title"),v.textContent="On Deck";let y=document.createElement("button");y.classList.add("ondeck-btn","ws-btns"),y.dataset.rowtype=0;let E=document.createElement("i");E.classList.add("fas","fa-plus","ondeck-btn"),E.dataset.rowtype=0,y.appendChild(E),v.appendChild(y),k.appendChild(v);let L=e.ondeck;L.forEach((t=>{t.cardid=L.indexOf(t);let r=document.createElement("div");r.classList.add("card-div");let a=document.createElement("div");a.classList.add("card-top");let o=document.createElement("h4");o.textContent=t.title,a.appendChild(o);let n=document.createElement("button");n.classList.add("due"),n.textContent=`Due: ${t.due}`,a.appendChild(n);let d=document.createElement("div");d.classList.add("card-middle");let i=document.createElement("p");i.classList.add("card-description"),i.textContent=t.description,d.appendChild(i);let s=document.createElement("div");s.classList.add("card-bottom");let c=document.createElement("i");c.classList.add("fas","fa-trash-alt","card-delete-btn"),c.dataset.cardrow=0,c.dataset.cardiden=t.cardid,c.addEventListener("click",(t=>{console.log(t.target);let r=t.target.dataset.cardiden,a=t.target.dataset.cardrow;C.deleteCard(r,a,e)})),s.appendChild(c);let l=document.createElement("span");l.textContent=`Created: ${t.date}`,l.classList.add("created-date"),s.appendChild(l);let p=document.createElement("button");p.classList.add("card-p-btn","onDeck"),p.dataset.cardid=t.cardid,p.dataset.cardtype=0,p.addEventListener("click",(t=>{let r=t,a=document.createElement("div");a.classList.add("p-options-container");let o=["On Deck","In Progress","Review","Complete"];o.forEach((e=>{let t=document.createElement("button");t.classList.add("p-options"),t.dataset.op=o.indexOf(e),t.innerHTML=e,a.appendChild(t)})),s.appendChild(a),document.querySelectorAll(".p-options").forEach((t=>{t.addEventListener("click",(t=>{let a=t;C.changePriority(a,r,e)}))}))})),p.textContent=t.priority,s.appendChild(p),r.appendChild(a),r.appendChild(d),r.appendChild(s),k.appendChild(r)}));let S=document.createElement("div");S.classList.add("inprogress","ws-row");let P=document.createElement("h3");P.classList.add("row-title"),P.textContent="In Progress";let A=document.createElement("button");A.classList.add("inprogress-btn","ws-btns"),A.dataset.rowtype=1;let T=document.createElement("i");T.classList.add("fas","fa-plus","inprogress-btn"),T.dataset.rowtype=1,A.appendChild(T),P.appendChild(A),S.appendChild(P);let O=e.inprogress;O.forEach((t=>{t.cardid=O.indexOf(t);let r=document.createElement("div");r.classList.add("card-div");let a=document.createElement("div");a.classList.add("card-top");let o=document.createElement("h4");o.textContent=t.title,a.appendChild(o);let n=document.createElement("button");n.classList.add("due"),n.textContent=`Due: ${t.due}`,a.appendChild(n);let d=document.createElement("div");d.classList.add("card-middle");let i=document.createElement("p");i.classList.add("card-description"),i.textContent=t.description,d.appendChild(i);let s=document.createElement("div");s.classList.add("card-bottom");let c=document.createElement("i");c.classList.add("fas","fa-trash-alt","card-delete-btn"),c.dataset.cardrow=1,c.dataset.cardiden=t.cardid,c.addEventListener("click",(t=>{console.log(t.target);let r=t.target.dataset.cardiden,a=t.target.dataset.cardrow;C.deleteCard(r,a,e)})),s.appendChild(c);let l=document.createElement("span");l.textContent=`Created: ${t.date}`,l.classList.add("created-date"),s.appendChild(l);let p=document.createElement("button");p.classList.add("card-p-btn","inProgress"),p.dataset.cardid=t.cardid,p.dataset.cardtype=1,p.addEventListener("click",(t=>{let r=t,a=document.createElement("div");a.classList.add("p-options-container");let o=["On Deck","In Progress","Review","Complete"];o.forEach((e=>{let t=document.createElement("button");t.classList.add("p-options"),t.dataset.op=o.indexOf(e),t.innerHTML=e,a.appendChild(t)})),s.appendChild(a),document.querySelectorAll(".p-options").forEach((t=>{t.addEventListener("click",(t=>{console.log("test987");let a=t;C.changePriority(a,r,e)}))}))})),p.textContent=t.priority,s.appendChild(p),r.appendChild(a),r.appendChild(d),r.appendChild(s),S.appendChild(r)}));let q=document.createElement("div");q.classList.add("review","ws-row");let I=document.createElement("h3");I.classList.add("row-title"),I.textContent="Review";let z=document.createElement("button");z.classList.add("review-btn","ws-btns"),z.dataset.rowtype=2;let M=document.createElement("i");M.classList.add("fas","fa-plus","review-btn"),M.dataset.rowtype=2,z.appendChild(M),I.appendChild(z),q.appendChild(I);let D=e.review;D.forEach((t=>{t.cardid=D.indexOf(t);let r=document.createElement("div");r.classList.add("card-div");let a=document.createElement("div");a.classList.add("card-top");let o=document.createElement("h4");o.textContent=t.title,a.appendChild(o);let n=document.createElement("button");n.classList.add("due"),n.textContent=`Due: ${t.due}`,a.appendChild(n);let d=document.createElement("div");d.classList.add("card-middle");let i=document.createElement("p");i.classList.add("card-description"),i.textContent=t.description,d.appendChild(i);let s=document.createElement("div");s.classList.add("card-bottom");let c=document.createElement("i");c.classList.add("fas","fa-trash-alt","card-delete-btn"),c.dataset.cardrow=2,c.dataset.cardiden=t.cardid,c.addEventListener("click",(t=>{console.log(t.target);let r=t.target.dataset.cardiden,a=t.target.dataset.cardrow;C.deleteCard(r,a,e)})),s.appendChild(c);let l=document.createElement("span");l.textContent=`Created: ${t.date}`,l.classList.add("created-date"),s.appendChild(l);let p=document.createElement("button");p.classList.add("card-p-btn","review"),p.dataset.cardid=t.cardid,p.dataset.cardtype=2,p.addEventListener("click",(t=>{let r=t,a=document.createElement("div");a.classList.add("p-options-container");let o=["On Deck","In Progress","Review","Complete"];o.forEach((e=>{let t=document.createElement("button");t.classList.add("p-options"),t.dataset.op=o.indexOf(e),t.innerHTML=e,a.appendChild(t)})),s.appendChild(a),document.querySelectorAll(".p-options").forEach((t=>{t.addEventListener("click",(t=>{let a=t;C.changePriority(a,r,e)}))}))})),p.textContent=t.priority,s.appendChild(p),r.appendChild(a),r.appendChild(d),r.appendChild(s),q.appendChild(r)}));let $=document.createElement("div");$.classList.add("complete","ws-row");let N=document.createElement("h3");N.classList.add("row-title"),N.textContent="Complete";let j=document.createElement("button");j.classList.add("complete-btn","ws-btns"),j.dataset.rowtype=3;let R=document.createElement("i");R.classList.add("fas","fa-plus","complete-btn"),R.dataset.rowtype=3,j.appendChild(R),N.appendChild(j),$.appendChild(N);let H=e.complete;H.forEach((t=>{t.cardid=H.indexOf(t);let r=document.createElement("div");r.classList.add("card-div");let a=document.createElement("div");a.classList.add("card-top");let o=document.createElement("h4");o.textContent=t.title,a.appendChild(o);let n=document.createElement("button");n.classList.add("due"),n.textContent=`Due: ${t.due}`,a.appendChild(n);let d=document.createElement("div");d.classList.add("card-middle");let i=document.createElement("p");i.classList.add("card-description"),i.textContent=t.description,d.appendChild(i);let s=document.createElement("div");s.classList.add("card-bottom");let c=document.createElement("i");c.classList.add("fas","fa-trash-alt","card-delete-btn"),c.dataset.cardrow=3,c.dataset.cardiden=t.cardid,c.addEventListener("click",(t=>{console.log(t.target);let r=t.target.dataset.cardiden,a=t.target.dataset.cardrow;C.deleteCard(r,a,e)})),s.appendChild(c);let l=document.createElement("span");l.textContent=`Created: ${t.date}`,l.classList.add("created-date"),s.appendChild(l);let p=document.createElement("button");p.classList.add("card-p-btn","complete"),p.dataset.cardid=t.cardid,p.dataset.cardtype=3,p.addEventListener("click",(t=>{let r=t,a=document.createElement("div");a.classList.add("p-options-container");let o=["On Deck","In Progress","Review","Complete"];o.forEach((e=>{let t=document.createElement("button");t.classList.add("p-options"),t.dataset.op=o.indexOf(e),t.innerHTML=e,a.appendChild(t)})),s.appendChild(a),document.querySelectorAll(".p-options").forEach((t=>{t.addEventListener("click",(t=>{console.log("test987");let a=t;C.changePriority(a,r,e)}))}))})),p.textContent=t.priority,s.appendChild(p),r.appendChild(a),r.appendChild(d),r.appendChild(s),$.appendChild(r)})),w.appendChild(k),w.appendChild(S),w.appendChild(q),w.appendChild($),g.appendChild(w),c.appendChild(g),s.appendChild(c),document.querySelectorAll(".ws-btns").forEach((e=>{e.addEventListener("click",(e=>{o=e.target.dataset.rowtype,console.log("clickedRT",o),f(r,"noshow-card-modal"),t.addEventListener("click",(()=>{h(r,"noshow-card-modal")}))}))})),a.addEventListener("submit",n)}return{PaintUI:d,exitFormBtn:t,cardFormContainer:r,cardForm:a,clickedRowType:o}})(),C={createCard:function(e,t){let r,a,o,n,d,i,s="",c=e;console.log("rtype",e),r=document.querySelector("#cardtitle"),a=document.querySelector("#carddue"),o=document.querySelector("#carddescription");let l=a.value.split("-"),p=new Date(`${l[0]},${l[1]},${l[2]},`).toString();console.log(p),p=p.split(" ");let b=`${p[0]} ${p[1]} ${p[2]}`,m=(new Date).toString().split(" ");switch(n=`${m[0]} ${m[1]} ${m[2]} ${m[3]}`,c){case"0":d="On Deck",i=0;break;case"1":d="In Progress",i=1;break;case"2":d="Review",i=2;break;case"3":d="Complete",i=3}switch(s={title:r.value,due:b,description:o.value,date:n,priority:d,cardtype:i,cardid:undefined},i){case 0:t.ondeck.push(s);break;case 1:t.inprogress.push(s);break;case 2:t.review.push(s);break;case 3:t.complete.push(s)}x.workspacesArr[t.id]=t,v.AddToStorage(x.workspacesArr),r.value="",a.value="",o.value=""},changePriority:function(e,t,r){let a,o=e.target.dataset.op,n=t.target.dataset.cardtype,d=t.target.dataset.cardid;switch(n){case"0":a=r.ondeck[d],r.ondeck.splice(d,1),a.cardtype=o;break;case"1":a=r.inprogress[d],r.inprogress.splice(d,1),a.cardtype=o;break;case"2":a=r.review[d],r.review.splice(d,1),a.cardtype=o;break;case"3":a=r.complete[d],r.complete.splice(d,1),a.cardtype=o}switch(o){case"0":a.priority="On Deck",r.ondeck.push(a);break;case"1":a.priority="In Progress",r.inprogress.push(a);break;case"2":a.priority="Review",r.review.push(a);break;case"3":a.priority="Complete",r.complete.push(a)}x.workspacesArr[r.id]=r,v.AddToStorage(x.workspacesArr),y.PaintUI(r.id)},deleteCard:function(e,t,r){switch(console.log(e,t,r),t){case"0":r.ondeck.splice(e,1);break;case"1":r.inprogress.splice(e,1);break;case"2":r.review.splice(e,1);break;case"3":r.complete.splice(e,1)}x.workspacesArr[r.id]=r,v.AddToStorage(x.workspacesArr),y.PaintUI(r.id)},removeWorkspace:function(e){x.workspacesArr.splice(e,1);let t=0;x.workspacesArr.forEach((e=>{e.id=t,t++})),v.AddToStorage(x.workspacesArr),v.AddToSidebar();let r=document.querySelector(".guide-btn");E.activePage(r),E.activePageBtn(r)}},E=(()=>{let e=document.querySelector("#main-content");function t(e){document.querySelectorAll(".pages").forEach((e=>{e.classList.remove("active-btn")})),e.classList.add("active-btn")}function r(t){switch(e.innerHTML="",t.name){case"today":e.appendChild(w.todayContent);break;case"guide":e.appendChild(g.guideContent);break;case"workspacepage":localStorage.setItem("selectedPage",JSON.stringify(t.dataset.indexNumber));let r=JSON.parse(localStorage.getItem("selectedPage"));y.PaintUI(r);break;default:console.log("NO PAGE CONTENT YET")}}return e.appendChild(g.guideContent),document.querySelectorAll(".pages").forEach((e=>{e.addEventListener("click",(e=>{t(e.target),r(e.target)}))})),{activePageBtn:t,activePage:r}})()})()})();