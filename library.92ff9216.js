!function(){function e(e){return e&&e.__esModule?e.default:e}var a={gallery:document.querySelector(".main-gallery"),pagination:document.querySelector(".pagination")},t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,a,t){a&&r(e.prototype,a);t&&r(e,t);return e};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,a,t){a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t;return e};var u=new(function(){"use strict";function a(n,r){var u=this;e(t)(this,a),e(i)(this,"handlePagination",(function(e){if("A"===e.target.nodeName){switch(u.ref.removeEventListener("click",u.handlePagination),e.target.dataset.num){case"prev":u.currentPage>1?u.currentPage-=1:u.currentPage;break;case"next":u.currentPage<u.totalPages?u.currentPage+=1:u.currentPage;break;default:u.currentPage=Number(e.target.dataset.num)}u.onPage(u.currentPage)}})),this.ref=n,this.onPage=r,this.currentPage=0,this.totalPages=0}return e(n)(a,[{key:"on",value:function(e,a){this.currentPage=Number(e),this.totalPages=Number(a),this.makeMarkUp(),this.ref.addEventListener("click",this.handlePagination)}},{key:"makeMarkUp",value:function(){var e=0,a=0;this.totalPages>7&&(e=this.currentPage-2>1?this.currentPage-2:this.currentPage-1,a=this.currentPage+2<this.totalPages?this.currentPage+2:this.currentPage+1);for(var t="",n=1;n<=this.totalPages;n+=1)(1===n||n>=e&&n<=a||n===this.totalPages)&&(n!==this.currentPage?t+='<li class="pagination-page" ><a href="#" data-num="'.concat(n,'">').concat(n,"</a></li>"):t+='<li class="pagination-page current-page" ><a href="#" data-num="'.concat(n,'">').concat(n,"</a></li>"));t='\n  <ul class="pagination-list">\n  <a href="#" class="pagination-page" data-num="prev"><<</a>\n  '.concat(t,'\n  <a href="#" class="pagination-page" data-num="next">>></a>\n  </ul>\n  '),this.ref.innerHTML=t}}]),a}())(a.pagination,(function(e){u.on(e,15)}));u.on(5,15)}();
//# sourceMappingURL=library.92ff9216.js.map
