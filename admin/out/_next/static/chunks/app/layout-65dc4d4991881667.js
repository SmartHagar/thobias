(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{5869:function(e,t,s){Promise.resolve().then(s.t.bind(s,2778,23)),Promise.resolve().then(s.bind(s,9371)),Promise.resolve().then(s.bind(s,8784)),Promise.resolve().then(s.bind(s,8646)),Promise.resolve().then(s.bind(s,7129)),Promise.resolve().then(s.bind(s,2841))},3684:function(e,t,s){"use strict";var n=s(4131);let a=async e=>{let{setLogout:t,setLoadLogout:s,route:a}=e;s(!0);let l=await t();if((null==l?void 0:l.status)==="success")return n.Z.remove("token"),n.Z.remove("role"),n.Z.remove("user"),window.location.href="/"};t.Z=a},9371:function(e,t,s){"use strict";var n=s(7437),a=s(7129),l=s(2265),r=s(2841),i=s(5536),o=s(9376);t.default=()=>{let{isOpen:e,setIsOpen:t}=(0,a.X)(),{welcome:s,setWelcome:u}=(0,r.I)(),c=(0,o.usePathname)();return(0,l.useEffect)(()=>{if("/admin"===c)u("Selamat Datang Admin");else{let e=null==c?void 0:c.split("/");u("Halaman ".concat(e[e.length-1]))}return()=>{}},[c,u]),(0,l.useEffect)(()=>{t(!1)},[c,t]),(0,n.jsxs)("div",{className:"flex justify-between lg:justify-center z-50 h-10  bg-linear",children:[(0,n.jsx)("h3",{className:"capitalize text-xl z-50 font-bold w-full text-center text-neutral pt-1",children:s}),(0,n.jsx)(i.vHB,{className:"lg:hidden cursor-pointer z-50 select-none mr-4 self-center",onClick:()=>{t(!e)}})]})}},4629:function(e,t,s){"use strict";s.d(t,{I:function(){return r}});var n=s(7437),a=s(1140);let l=e=>"".concat(e),r=async()=>[{name:"Home",href:l("/"),icon:(0,n.jsx)(a.u9h,{})},{name:"Lokasi",slug:"shippings",icon:(0,n.jsx)(a.pzg,{}),subMenus:[{name:"Kecamatan",href:l("/shippings/subDistricts")},{name:"Kelurahan",href:l("/shippings/villages")}]},{name:"Kategori",slug:"categories",icon:(0,n.jsx)(a.xH_,{}),subMenus:[{name:"Daftar",href:l("/categories/lists")},{name:"Sub Kategori",href:l("/categories/subCategories")}]},{name:"Produk",icon:(0,n.jsx)(a.R_f,{}),href:l("/products/lists")},{name:"Pesanan",href:l("/orders"),icon:(0,n.jsx)(a.HSp,{})}]},8784:function(e,t,s){"use strict";var n=s(7437),a=s(2265),l=s(7648),r=s(9376),i=s(9578),o=s(3684),u=s(7129),c=s(8614),d=s(521),f=s(4629),h=s(2746);t.default=e=>{let{type:t="admin"}=e,{isOpen:s}=(0,u.X)(),m=(0,r.usePathname)(),x=(0,r.useRouter)(),[p,v]=(0,a.useState)([]),[g,b]=(0,a.useState)([]),[j,w]=(0,a.useState)(!1),{setLogout:N}=(0,h.Z)(),y=(0,a.useCallback)(async()=>{let e=[];"admin"===t&&(e=await (0,f.I)()),v(e)},[t]);(0,a.useEffect)(()=>{y()},[y]);let k=e=>{for(let t of e){if((null==t?void 0:t.href)===m){let e=null==m?void 0:m.split("/");e.splice(0,1),b(e)}t.subMenus&&k(t.subMenus)}};return(0,a.useEffect)(()=>(p&&k(p),()=>{}),[p,m]),(0,n.jsx)(c.M,{children:s&&(0,n.jsx)(d.E.div,{initial:{y:-300,opacity:0},animate:{y:0,opacity:1},exit:{y:300,opacity:0},children:(0,n.jsx)("div",{className:"h-full px-3 py-4 overflow-auto bg-fourth/80 text-third",children:(0,n.jsxs)("div",{className:"flex flex-col gap-4 h-full sidebar w-full overflow-auto",children:[(0,n.jsx)("ul",{className:"space-y-2 grow w-full h-full overflow-auto list-none p-0",children:p&&p.map((e,t)=>{let s=m===e.href,a=null==e?void 0:e.subMenus,{name:r,icon:o,slug:u}=e;return a?(0,i.Z)({subMenus:a,name:r,icon:o,slug:u,index:t,pathname:m,openMenus:g,truncatedName:r}):(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:e.href||"#",className:"flex w-full dark:text-neutral items-center p-2 hover:text-neutral transition-all duration-300 rounded-lg group ".concat(s&&"dark:text-secondary text-secondary font-bold"),children:[o,(0,n.jsx)("span",{className:"ms-3",children:r})]})},t)})}),j?(0,n.jsx)("span",{className:"loading loading-dots loading-md"}):(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("button",{className:"btn btn-primary text-neutral",onClick:()=>(0,o.Z)({setLogout:N,setLoadLogout:w,route:x}),children:"Logout"})})]})})})})}},8646:function(e,t,s){"use strict";var n=s(7437),a=s(2265),l=s(7648),r=s(9376),i=s(9578),o=s(3145),u=s(4629),c=s(3684),d=s(2746);t.default=e=>{let{type:t="admin"}=e,s=(0,r.usePathname)(),f=(0,r.useRouter)(),[h,m]=(0,a.useState)([]),[x,p]=(0,a.useState)([]),[v,g]=(0,a.useState)(!1),{setLogout:b}=(0,d.Z)(),j=(0,a.useCallback)(async()=>{let e=[];"admin"===t&&(e=await (0,u.I)()),m(e)},[t]);(0,a.useEffect)(()=>{j()},[j]);let w=e=>{for(let t of e){if((null==t?void 0:t.href)===s){let e=null==s?void 0:s.split("/");e.splice(0,1),p(e)}t.subMenus&&w(t.subMenus)}};return(0,a.useEffect)(()=>(h&&w(h),()=>{}),[h,s]),(0,n.jsx)("aside",{className:"z-40 w-full h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-neutral shadow-sm","aria-label":"Sidebar",children:(0,n.jsx)("div",{className:"sidebar z-50 h-full px-3 pt-4 overflow-y-auto text-third flex flex-row-reverse justify-between sm:block",children:(0,n.jsxs)("div",{className:"flex flex-col gap-4 h-full sidebar w-full overflow-hidden",children:[(0,n.jsx)("div",{className:"h-28 sidebar ",children:(0,n.jsx)(o.default,{alt:"logo",src:"/images/logo.png",width:150,height:150,className:"mx-auto mb-3 rounded-full"})}),(0,n.jsx)("ul",{className:"space-y-2 grow w-full h-full overflow-auto scrollbar list-none p-0 select-none dark:text-neutral",children:h&&h.map((e,t)=>{let a=s===e.href,r=null==e?void 0:e.subMenus,{name:o,icon:u,slug:c}=e,d=o.length>10?o.slice(0,10)+"...":o;return r?(0,i.Z)({subMenus:r,name:o,truncatedName:d,icon:u,slug:c,index:t,pathname:s,openMenus:x}):(0,n.jsx)("li",{children:(0,n.jsxs)(l.default,{href:e.href||"#",className:"flex w-full dark:text-neutral items-center p-2 hover:text-neutral hover:underline transition-all duration-300 rounded-lg group ".concat(a&&"dark:text-secondary text-secondary font-bold"),title:o,children:[u,(0,n.jsx)("span",{className:"ms-3",children:d})]})},t)})}),v?(0,n.jsx)("span",{className:"loading loading-dots loading-md"}):(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("button",{className:"btn bg-primary",onClick:()=>(0,c.Z)({setLogout:b,setLoadLogout:g,route:f}),children:"Logout"})})]})})})}},9578:function(e,t,s){"use strict";var n=s(7437),a=s(7648);let l=e=>{let{subMenus:t,name:s,truncatedName:r,icon:i,slug:o,index:u,pathname:c,openMenus:d}=e,f=d.includes(o);return(0,n.jsx)("div",{className:"cursor-pointer",children:(0,n.jsxs)("details",{className:"group [&_summary::-webkit-details-marker]:hidden",open:f,children:[(0,n.jsxs)("summary",{className:"flex items-center justify-between px-2 py-2 transition-colors duration-300 transform rounded-lg hover:text-fifth",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{children:i}),(0,n.jsx)("span",{className:"mx-2",title:s,children:r})]}),(0,n.jsx)("span",{className:"shrink-0 transition duration-300 group-open:-rotate-180",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),t&&t.map((e,t)=>{let s=c===e.href;return(0,n.jsxs)("div",{className:"ml-4",children:[!e.subMenus&&(0,n.jsx)(a.default,{href:e.href||"#",className:"flex items-center mx-3 py-2 transition-colors duration-300 transform hover:text-neutral hover:underline rounded-lg group ".concat(s&&"text-accent font-bold"),children:(0,n.jsx)("span",{className:"mx-2",children:e.name})}),e.subMenus&&l({subMenus:e.subMenus,name:e.name,truncatedName:e.truncatedName,icon:e.icon,slug:e.slug,index:t,pathname:c,openMenus:d})]},t)})]})},u)};t.Z=l},7129:function(e,t,s){"use strict";s.d(t,{X:function(){return r}});var n=s(7437),a=s(2265);let l=(0,a.createContext)({isOpen:!1,setIsOpen:()=>!1});t.default=e=>{let{children:t}=e,[s,r]=(0,a.useState)(!1);return(0,n.jsx)(l.Provider,{value:{isOpen:s,setIsOpen:r},children:t})};let r=()=>(0,a.useContext)(l)},2841:function(e,t,s){"use strict";s.d(t,{I:function(){return r}});var n=s(7437),a=s(2265);let l=(0,a.createContext)({welcome:"admin WWF",setWelcome:()=>{},title:"Default Title",setTitle:()=>{},description:"Default Description",setDescription:()=>{}});t.default=e=>{let{children:t}=e,[s,r]=(0,a.useState)("admin WWF"),[i,o]=(0,a.useState)("Default Title"),[u,c]=(0,a.useState)("Default Description");return(0,n.jsx)(l.Provider,{value:{welcome:s,setWelcome:r,title:i,setTitle:o,description:u,setDescription:c},children:t})};let r=()=>(0,a.useContext)(l)},4061:function(e,t,s){"use strict";s.d(t,{I8:function(){return u},Sj:function(){return c},_n:function(){return a}});var n=s(3464);let a="http://localhost:8000",l="".concat(a,"/auth"),r="".concat(a,"/api"),i="".concat(a,"/crud"),o="".concat(a,"/storage"),u=n.Z.create({baseURL:l}),c=n.Z.create({baseURL:i});n.Z.create({baseURL:r}),n.Z.create({baseURL:o})},2746:function(e,t,s){"use strict";var n=s(3011),a=s(6885),l=s(4061),r=s(4131);let i=(0,n.U)((0,a.mW)((e,t)=>({setToken:async()=>r.Z.get("token"),setLogout:async()=>{let e=await t().setToken();try{let t=await (0,l.I8)({method:"post",url:"/logout",headers:{Authorization:"Bearer ".concat(e)}});return{status:"success",data:t.data}}catch(e){return{status:"error",error:e.response.data}}}})));t.Z=i},2778:function(){}},function(e){e.O(0,[2461,1779,5505,4579,7648,2968,2971,2117,1744],function(){return e(e.s=5869)}),_N_E=e.O()}]);