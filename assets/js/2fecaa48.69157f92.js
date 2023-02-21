"use strict";(self.webpackChunkeasyyun_website=self.webpackChunkeasyyun_website||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,y=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:4},a="\u79c1\u6709\u5316\u90e8\u7f72",c={unversionedId:"guide/private-deployment",id:"guide/private-deployment",title:"\u79c1\u6709\u5316\u90e8\u7f72",description:"\u79c1\u6709\u90e8\u7f72\u7248\uff08\u4ed8\u8d39\uff09\uff0c\u79c1\u6709\u5316\u7248\u672cAPI\u63a5\u53e3\u548c\u4e91\u7aefAPI\u63a5\u53e3\u901a\u7528\uff0c\u53ea\u9700\u6539\u5c11\u91cf\u914d\u7f6e\u5373\u53ef\u542f\u52a8\uff0c\u57fa\u4e8eDocker\u6280\u672f\uff0c\u6613\u88c5\u6613\u7528\u3002",source:"@site/docs/guide/private-deployment.md",sourceDirName:"guide",slug:"/guide/private-deployment",permalink:"/docs/guide/private-deployment",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/guide/note"},next:{title:"API",permalink:"/docs/category/api"}},p={},l=[],u={toc:l},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u79c1\u6709\u5316\u90e8\u7f72"},"\u79c1\u6709\u5316\u90e8\u7f72"),(0,o.kt)("p",null,"\u79c1\u6709\u90e8\u7f72\u7248\uff08\u4ed8\u8d39\uff09\uff0c\u79c1\u6709\u5316\u7248\u672cAPI\u63a5\u53e3\u548c\u4e91\u7aefAPI\u63a5\u53e3\u901a\u7528\uff0c\u53ea\u9700\u6539\u5c11\u91cf\u914d\u7f6e\u5373\u53ef\u542f\u52a8\uff0c\u57fa\u4e8eDocker\u6280\u672f\uff0c\u6613\u88c5\u6613\u7528\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6570\u636e\u9690\u79c1\u6709\u9700\u6c42\u7684\u4f01\u4e1a\u6216\u4e2a\u4eba\uff0c",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/faq#%E8%81%94%E7%B3%BB%E5%BB%BA%E8%AE%AE"},"\u516c\u4f17\u53f7\u7559\u8a00"),"\uff0c\u6211\u4eec\u63d0\u4f9b1\u5bf91\u90e8\u7f72\u7b49\u670d\u52a1\u3002"))}d.isMDXComponent=!0}}]);