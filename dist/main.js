(()=>{"use strict";const e=class{constructor(e,t){this.title=e,this.list=[]}};function t(e){const t=e.currentTarget.getAttribute("data-item");s=n[t],console.log(s)}function c(e,t){t.push(e)}const n=[],o=new e("Daily tasks",[]),i=new e("Daily tasks 2",[]);let s=o;c(o,n),c(i,n);const l=document.querySelector(".content-container"),r=document.querySelector(".list-of-projects");function d(e){l.innerHTML="";for(let t=0;t<e.list.length;t++){const c=document.createElement("div");c.classList.add("item"),l.appendChild(c),c.setAttribute("data-item",t);const n=document.createTextNode(e.list[t].title);c.appendChild(n);const o=document.createElement("button");o.innerHTML="x",o.classList.add("close-item-button"),c.appendChild(o),o.addEventListener("click",a),console.log(c.getAttribute("data-item"))}}function u(){const e=document.querySelector(".item-form"),t=document.querySelector(".item-title"),c=document.querySelector(".item-duedate"),n=document.querySelector(".item-description");t.value="",c.value="",n.value="",e.classList.add("hidden")}function a(e){const t=e.currentTarget.parentNode.getAttribute("data-item");s.list.splice(t,1),d(s)}!function(e){r.innerHTML="";for(let c=0;c<e.length;c++){const n=document.createElement("div");n.classList.add("project"),r.appendChild(n),n.setAttribute("data-item",c);const o=document.createTextNode(e[c].title);n.appendChild(o),n.addEventListener("click",t)}}(n),document.querySelector(".new-item").addEventListener("click",(function(e){document.querySelector(".item-form").classList.remove("hidden"),console.log(s)})),document.querySelector(".item-form-close").addEventListener("click",u),document.querySelector(".item-form-submit").addEventListener("click",(function(){const e=document.querySelector(".item-title"),t=document.querySelector(".item-duedate"),c=document.querySelector(".item-description"),n=e.value,o=t.value,i=c.value;var r;r=new class{constructor(e,t,c,n){this.title=e,this.description=t,this.dueDate=c,this.status=!1}}(n,i,o),s.list.push(r),console.log(s),u(),d(s),l.scrollTop=l.scrollHeight}))})();