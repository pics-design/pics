(this.webpackJsonppics_react=this.webpackJsonppics_react||[]).push([[0],{20:function(e,t,a){e.exports=a(42)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),m=(a(25),a(4)),i=a(2),o=a(1);a(26),a(27);var u=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],o=function(){return l(!1)};return Object(n.useEffect)((function(){return o(),document.getElementById("current").addEventListener("click",o),function(){document.getElementById("current").removeEventListener("click",o)}}),[e.pageNumber]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header page".concat(e.pageNumber)},r.a.createElement("img",{src:"".concat("/pics","/img/icon-img.png"),alt:""}),r.a.createElement("h1",null,["\u30c7\u30b6\u30a4\u30f3\u4e8b\u52d9\u6240 \u30d4\u30af\u30b9","\u308f\u305f\u3057\u305f\u3061\u306b\u3064\u3044\u3066","\u4f5c\u54c1\u4e00\u89a7","\u304a\u554f\u3044\u5408\u308f\u305b\u30fb\u3054\u4f9d\u983c","\u3053\u308c\u307e\u3067\u306e\u304a\u4ed5\u4e8b"][e.pageNumber])),r.a.createElement("div",{className:"menu-icon"},r.a.createElement("i",{className:c?"fas fa-times":"fas fa-bars",onClick:function(){return l(!c)}})),r.a.createElement("div",{className:c?"linkButton active":"linkButton"},r.a.createElement(i.b,{to:"/",className:0==e.pageNumber?"links active page".concat(e.pageNumber):"links page".concat(e.pageNumber),id:0===e.pageNumber?"current":"",onClick:e.setPageNumber0},"top"),r.a.createElement(i.b,{to:"/Aboutus",className:1==e.pageNumber?"links active page".concat(e.pageNumber):"links page".concat(e.pageNumber),id:1===e.pageNumber?"current":"",onClick:e.setPageNumber1},"About us"),r.a.createElement(i.b,{to:"/Library",className:2==e.pageNumber?"links active page".concat(e.pageNumber):"links page".concat(e.pageNumber),id:2===e.pageNumber?"current":"",onClick:e.setPageNumber2},"Library"),r.a.createElement(i.b,{to:"/Contact",className:3==e.pageNumber?"links active page".concat(e.pageNumber):"links page".concat(e.pageNumber),id:3===e.pageNumber?"current":"",onClick:e.setPageNumber3},"Contact"),r.a.createElement(i.b,{to:"/Works",className:4==e.pageNumber?"links active page".concat(e.pageNumber):"links page".concat(e.pageNumber),id:4===e.pageNumber?"current":"",onClick:e.setPageNumber4},"Works")))},s=(a(33),a(19)),g=a.n(s);function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-image top"},r.a.createElement("img",{src:"".concat("/pics","/img/illust-toppage.png"),alt:""}),r.a.createElement("h1",null,"\u5927\u5206\u5e02\u3092\u4e2d\u5fc3\u306b\u6d3b\u52d5\u3059\u308b\u5c0f\u3055\u306a\u30c7\u30b6\u30a4\u30f3\u4e8b\u52d9\u6240\u3067\u3059")))}function E(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-links"},r.a.createElement(i.b,{to:"Aboutus",className:1===c?"top-link active":"top-link",onMouseOver:function(){return l(1)},onMouseLeave:function(){return l(0)},onClick:e.setPageNumber1},r.a.createElement("img",{src:"".concat("/pics","/img/icon-aboutus.png"),alt:""}),r.a.createElement("h1",null,"About us")),r.a.createElement(i.b,{to:"Library",className:2===c?"top-link active":"top-link",onMouseOver:function(){return l(2)},onMouseLeave:function(){return l(0)},onClick:e.setPageNumber2},r.a.createElement("img",{src:"".concat("/pics","/img/icon-library.png"),alt:""}),r.a.createElement("h1",null,"Library")),r.a.createElement(i.b,{to:"Contact",className:3===c?"top-link active":"top-link",onMouseOver:function(){return l(3)},onMouseLeave:function(){return l(0)},onClick:e.setPageNumber3},r.a.createElement("img",{src:"".concat("/pics","/img/icon-contact.png"),alt:""}),r.a.createElement("h1",null,"Contact")),r.a.createElement(i.b,{to:"Works",className:4===c?"top-link active":"top-link",onMouseOver:function(){return l(4)},onMouseLeave:function(){return l(0)},onClick:e.setPageNumber4},r.a.createElement("img",{src:"".concat("/pics","/img/icon-works.png"),alt:""}),r.a.createElement("h1",null,"Works"))))}function b(){var e=["latests-001.jpg","latests-002.jpg","latests-003.jpg"].map((function(e,t){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:"".concat("/pics","/img/").concat(e)}))})),t={effect:"cube",slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-latest"},r.a.createElement("h1",null,"Latest - \u6700\u8fd1\u306e\u4f5c\u54c1 -"),r.a.createElement(g.a,t,e)))}function N(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){if(!a){var e=document.createElement("script");e.setAttribute("src","https://platform.twitter.com/widgets.js"),document.body.appendChild(e),c(!0)}}),[]),r.a.createElement("div",{className:"tweet"},r.a.createElement("a",{className:"twitter-timeline","data-width":"80%","data-height":"700",href:"https://twitter.com/PicsDesign0726?ref_src=twsrc%5Etfw"},"Tweets by PicsDesign0726"))}var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(E,{setPageNumber1:e.setPageNumber1,setPageNumber2:e.setPageNumber2,setPageNumber3:e.setPageNumber3,setPageNumber4:e.setPageNumber4}),r.a.createElement(b,null),r.a.createElement(N,null))};a(36);function f(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-image aboutus"},r.a.createElement("img",{src:"".concat("/pics","/img/illust-aboutus.png")})))}function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"aboutus-text"},r.a.createElement("h1",null,"\u5927\u5206\u5e02\u3092\u62e0\u70b9\u306b\u6d3b\u52d5\u3059\u308b\u5c0f\u3055\u306a\u30c7\u30b6\u30a4\u30f3\u4e8b\u52d9\u6240\u3067\u3059"),r.a.createElement("p",null,"\u79c1\u305f\u3061\u306f\u3001\u4ee4\u548c\u4e8c\u5e74\u516b\u6708\u306b\u6d3b\u52d5\u3092\u59cb\u3081\u305f\u82e5\u3044\u30c7\u30b6\u30a4\u30ca\u30fc\u96c6\u56e3\u3067\u3059\u3002"),r.a.createElement("p",null,"\u30e1\u30f3\u30d0\u30fc\u304c\u305d\u308c\u305e\u308c\u306e\u500b\u6027\u3084\u5f97\u610f\u5206\u91ce\u3092\u6d3b\u304b\u3057\u3001\u76f8\u4e57\u52b9\u679c\u3092\u751f\u307f\u51fa\u3057\u65b0\u305f\u306a\u3082\u306e\u3065\u304f\u308a\u304c\u3067\u304d\u305f\u3089\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002")))}function h(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=["aboutus_images_001.jpg","aboutus_images_002.jpg","aboutus_images_003.jpg","aboutus_images_004.jpg","aboutus_images_005.jpg","aboutus_images_006.jpg"].map((function(e,t){return r.a.createElement("li",{className:a===t?"aboutus-image-item active":"aboutus-image-item",key:t},r.a.createElement("img",{src:"".concat("/pics","/img/").concat(e),onClick:""===a?function(){return c(t)}:function(){return c("")}}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"aboutus-image"},r.a.createElement("ul",null,l),r.a.createElement("div",{className:""===a?"mask":"mask active"})))}var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(v,null),r.a.createElement(h,null))};a(37);function P(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-image contact"},r.a.createElement("img",{src:"".concat("/pics","/img/illust-contact.png")})))}function y(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"forms"},r.a.createElement("h1",null,"\u304a\u554f\u3044\u5408\u308f\u305b"),r.a.createElement("form",{name:"sendMail",class:"formrun",action:"https://form.run/api/v1/r/rs584wu9ps1sx65nnis9lsdy",method:"post",id:"mail_form"},r.a.createElement("div",{class:"formItem"},r.a.createElement("p",null,"\u304a\u540d\u524d"),r.a.createElement("input",{type:"text",name:"name",size:"40"})),r.a.createElement("div",{class:"formItem"},r.a.createElement("p",null,"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"),r.a.createElement("input",{type:"email",name:"email",size:"40"})),r.a.createElement("div",{class:"formItem"},r.a.createElement("p",null,"\u4ef6\u540d"),r.a.createElement("input",{type:"text",name:"subject",size:"40"})),r.a.createElement("div",{class:"formItem"},r.a.createElement("p",null,"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"),r.a.createElement("textarea",{rows:"10",cols:"60",name:"message"})),r.a.createElement("div",{class:"formButtons"},r.a.createElement("button",{type:"submit","data-formrun-error-text":"\u672a\u5165\u529b\u306e\u9805\u76ee\u304c\u3042\u308a\u307e\u3059","data-formrun-submitting-text":"\u9001\u4fe1\u4e2d...",class:"submitButton",name:"submitButton"},"\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b"),r.a.createElement("input",{type:"reset",class:"deleteButton",name:"delete",value:"\u53d6\u6d88"})))))}var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(y,null))};a(38),a(39);function F(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"back-button"},r.a.createElement(i.b,{to:"/Library"},"\u623b\u308b")))}function j(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],i=e.url.map((function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:t.toString(),className:c===a?"iconItem active":"iconItem"},r.a.createElement("img",{src:"".concat("/pics","/img/").concat(e.folder,"/").concat(t),onClick:""===c?function(){return l(a)}:function(){return l("")}})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"iconItems"},i),r.a.createElement("div",{className:""===c?"mask":"mask active"}))}var I=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"library-icons"},r.a.createElement(j,{url:e.url,folder:e.folder}),r.a.createElement(F,null)))};function O(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-image library"},r.a.createElement("img",{src:"".concat("/pics","/img/illust-library.png")})))}function C(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],i=e.contentImages.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:e.toString(),className:c===t?"library-content-item active":"library-content-item"},r.a.createElement("img",{src:"".concat("/pics","/img/").concat(e),onClick:""===c?function(){return l(t)}:function(){return l("")}})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"library-content"},r.a.createElement("div",{className:"library-content-top"},r.a.createElement("img",{src:e.topImageUrl}),r.a.createElement("h1",null,e.text)),r.a.createElement("ul",{className:"library-content-images"},i),r.a.createElement("div",{className:""===c?"mask":"mask active"})))}function _(e){var t=["https://www.youtube.com/watch?v=41XTNGMnwAY","https://www.youtube.com/watch?v=TeVbqg0RkXQ","https://www.youtube.com/watch?v=8CJPqiT8rVA"],a=["Metal Ring.mov","Discover.mov","Small Space.mov"].map((function(e,a){return r.a.createElement("a",{href:t[a],key:e.toString()},r.a.createElement("video",{src:"".concat("/pics","/video/").concat(e),id:"libraryVideo".concat(a),playsInline:!0,muted:!0,onMouseOver:function(){document.getElementById("libraryVideo".concat(a)).play()},onMouseLeave:function(){document.getElementById("libraryVideo".concat(a)).pause()}}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"library-content-top"},r.a.createElement("img",{src:"".concat("/pics","/img/library-img-icon-animation.png")}),r.a.createElement("h1",null,"\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3")),r.a.createElement("div",{className:"library-content-videos"},a))}function L(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"library-content-top"},r.a.createElement("img",{src:"".concat("/pics","/img/library-img-icon-design.png")}),r.a.createElement("h1",null,"\u305d\u306e\u4ed6\u30a2\u30a4\u30b3\u30f3\u7b49")),r.a.createElement("ul",{className:"library-content-images"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Icons"},r.a.createElement("img",{src:"".concat("/pics","/img/library-img-other-003.jpg")}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/Others"},r.a.createElement("img",{src:"".concat("/pics","/img/library-img-other-004.jpg")})))))}function x(e){var t=["library-img-icon-chirashi.png","library-img-icon-design.png"],a=["\u3061\u3089\u3057\u30fb\u5e83\u544a\u30fb\u30d1\u30f3\u30d5\u30ec\u30c3\u30c8","\u30ed\u30b4\u30fb\u30a4\u30e9\u30b9\u30c8\u7b49"],n={flyers:["library-img-chirashi-003-crop.jpg","library-img-chirashi-001-crop.jpg","library-img-chirashi-002-crop.jpg"],rogos:["library-img-other-001.jpg","library-img-other-002.jpg","Nenga2015-moza.jpg","Nenga2016_moza.jpg","Nenga2017_moza.jpg","Nenga2018_moza.jpg","Nenga2019-mercari_moza.jpg","Nenga2020_moza.jpg"]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{topImageUrl:"".concat("/pics","/img/").concat(t[0]),text:a[0],contentImages:n.flyers}),r.a.createElement(_,null),r.a.createElement(C,{topImageUrl:"".concat("/pics","/img/").concat(t[1]),text:a[1],contentImages:n.rogos}),r.a.createElement(L,null))}function M(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(x,null))}var A=function(e){var t={icons:["ApplicationsFolderIcon.png","DownloadsFolder.png","Drive.png","Folder-AD.png","Folder-Ae.png","Folder-Ai.png","Folder-Au.png","Folder-Dw.png","Folder-Fl.png","Folder-Gw.png","Folder-Id.png","Folder-Ps.png","GenericAirDiskIcon.png","GenericFolderIcon.png","GenericTimeMachineDiskIcon.png","LibraryFolderIcon.png","MusicFolderIcon.png","SidebarRemovableDisk.png","SystemFolderIcon.png","UsersFolderIcon.png"],others:["Popicons1.png","Popicons2.png","Popicons3.png","Popicons4.png","Popicons5.png","Popicons6.png","Popicons7.png","Popicons8.png","Popicons9.png","Popicons10.png","Popicons11.png","Popicons12.png"]},a=["Mac Folder Icons","Pop icons"];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/Library"},r.a.createElement(M,null)),r.a.createElement(o.a,{path:"/Icons"},r.a.createElement(I,{url:t.icons,folder:a[0]})),r.a.createElement(o.a,{path:"/Others"},r.a.createElement(I,{url:t.others,folder:a[1]})))))};a(40);var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"works"},r.a.createElement("h1",null,"- \u305f\u3060\u3044\u307e\u6e96\u5099\u4e2d\u3067\u3059 -"),r.a.createElement(i.b,{to:"/",onClick:e.setPageNumber0},"\u30c8\u30c3\u30d7\u3078\u623b\u308b")))};var B=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(u,{pageNumber:e.pageNumber,setPageNumber0:e.setPageNumber0,setPageNumber1:e.setPageNumber1,setPageNumber2:e.setPageNumber2,setPageNumber3:e.setPageNumber3,setPageNumber4:e.setPageNumber4})),r.a.createElement("div",{className:"mainContents"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0},r.a.createElement(d,{setPageNumber1:e.setPageNumber1,setPageNumber2:e.setPageNumber2,setPageNumber3:e.setPageNumber3,setPageNumber4:e.setPageNumber4})),r.a.createElement(o.a,{path:"/Aboutus"},r.a.createElement(k,null)),r.a.createElement(o.a,{exact:!0,path:"/Library"},r.a.createElement(A,{pageNumber:e.pageNumber,setPageNumber2:e.setPageNumber2})),r.a.createElement(o.a,{path:"/Contact"},r.a.createElement(w,null)),r.a.createElement(o.a,{path:"/Works"},r.a.createElement(S,{setPageNumber0:e.setPageNumber0}))))))};a(41);var D=function(e){return r.a.createElement("div",{className:"footer page".concat(e.pageNumber)},r.a.createElement("div",{className:"footerLeft"},r.a.createElement("img",{src:"".concat("/pics","/img/icon-img.png")}),r.a.createElement("h1",null,"\u30c7\u30b6\u30a4\u30f3\u4e8b\u52d9\u6240 \u30d4\u30af\u30b9")),r.a.createElement("div",{className:"footerRight"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:"".concat("/pics","/img/footer-images-adress.png")}),r.a.createElement("h1",null,"\u5927\u5206\u770c\u5927\u5206\u5e02\u5927\u624b\u753a 2-2-7")),r.a.createElement("li",null,r.a.createElement("img",{src:"".concat("/pics","/img/footer-images-tel.png")}),r.a.createElement("h1",null,"080-5543-4409")),r.a.createElement("li",null,r.a.createElement("img",{src:"".concat("/pics","/img/footer-images-mail.png")}),r.a.createElement("h1",null,"pics.design.0726@gmail.com")))))};var z=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(){"/"===window.location.pathname?c(0):"/Aboutus"===window.location.pathname?c(1):"/Library"===window.location.pathname|"/Icons"===window.location.pathname|"/Others"===window.location.pathname?c(2):"/Contact"===window.location.pathname?c(3):c(4)};return Object(n.useEffect)((function(){l(),window.onpopstate=l}),[a]),r.a.createElement("div",null,r.a.createElement(B,{pageNumber:a,setPageNumber0:function(){return c(0)},setPageNumber1:function(){return c(1)},setPageNumber2:function(){return c(2)},setPageNumber3:function(){return c(3)},setPageNumber4:function(){return c(4)}}),r.a.createElement(D,{pageNumber:a}))};l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b63bda06.chunk.js.map