(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9820],{2546:function(t,a,e){Promise.resolve().then(e.bind(e,362))},362:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return v}});var s=e(7437),r=e(2265),i=e(1971),l=e(8745),d=e(9376),n=e(8946),c=e.n(n),u=e(5281),o=t=>{let{setDelete:a,setEdit:e}=t,{setSubDistricts:n,dtSubDistricts:o}=(0,u.Z)(),[h,b]=(0,r.useState)(1),[m,g]=(0,r.useState)(10),[p,S]=(0,r.useState)(!0),x=(0,d.useSearchParams)(),j=(null==x?void 0:x.get("sortby"))||"",_=(null==x?void 0:x.get("order"))||"",w=(null==x?void 0:x.get("cari"))||"",f=c().debounce(t=>{t()},500),D=(0,r.useCallback)(async()=>{g(10),await n({page:h,limit:m,search:w,sortby:j,order:_}),S(!1)},[n,h,m,w,j,_]);return(0,r.useEffect)(()=>(f(D),()=>{f.cancel()}),[w,j,_,h,m]),(0,s.jsx)("div",{className:"flex-1 flex-col max-w-full h-full overflow-auto",children:p?(0,s.jsx)("span",{className:"loading loading-spinner loading-lg"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(l.Z,{headTable:["No","Nama","Aksi"],tableBodies:["sub_district_nm"],dataTable:null==o?void 0:o.data,page:h,limit:m,setEdit:e,setDelete:a,ubah:!0,hapus:!0})}),(null==o?void 0:o.last_page)>1&&(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(i.Z,{currentPage:null==o?void 0:o.current_page,totalPages:null==o?void 0:o.last_page,setPage:b})})]})})},h=e(6433),b=e(9064),m=e(543),g=e(2841),p=e(1400),S=t=>{let{register:a,setValue:e,watch:r,halaman:i}=t;return(0,s.jsx)("div",{className:"grid grid-cols-8 gap-2 w-full",children:(0,s.jsx)(p.Z,{watch:r,setValue:e,name:"cari",register:a,placeholder:"Cari data ".concat(i),addClass:"col-span-8"})})},x=e(9501),j=e(1505),_=e(9762),w=t=>{let{register:a,errors:e}=t;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(j.Z,{label:"Nama ",name:"sub_district_nm",register:a,errors:e.sub_district_nm,required:!0,addClass:"col-span-8"})})},f=e(7550),D=t=>{let{showModal:a,setShowModal:e,dtEdit:i,halaman:l}=t,{addData:d,updateData:n}=(0,u.Z)(),[c,o]=(0,r.useState)(!1),{register:h,handleSubmit:b,setValue:g,control:p,formState:{errors:S},watch:D}=(0,x.cI)(),v=()=>{g("id",""),g("sub_district_nm","")};(0,r.useEffect)(()=>{i?(g("id",i.id),g("sub_district_nm",i.sub_district_nm)):v()},[a,i]);let y=async t=>{(0,f.Z)({row:t,dtEdit:i,setIsLoading:o,setShowModal:e,addData:d,updateData:n,resetForm:v,toastShow:m.Z})};return(0,s.jsx)(_.Z,{title:"Form ".concat(l),showModal:a,setShowModal:e,width:"md:w-[50rem] lg:w-[65rem]",children:(0,s.jsxs)("form",{onSubmit:b(y),children:[(0,s.jsx)(j.Z,{name:"id",register:h,type:"hidden"}),(0,s.jsx)("div",{className:"grid grid-cols-8 gap-2 mb-4",children:(0,s.jsx)(w,{register:h,errors:S,dtEdit:i,control:p,watch:D,setValue:g,showModal:a})}),(0,s.jsx)("div",{children:c?(0,s.jsx)("span",{className:"loading loading-spinner loading-lg"}):(0,s.jsx)("button",{className:"btn btn-primary",onClick:b(y),type:"submit",children:"Simpan"})})]})})},v=()=>{let t="Kecamatan",{setWelcome:a}=(0,g.I)();(0,r.useEffect)(()=>(a("Halaman ".concat(t)),()=>{}),[a]);let{removeData:e}=(0,u.Z)(),[i,l]=(0,r.useState)(!1),[d,n]=(0,r.useState)(!1),[c,p]=(0,r.useState)(),[j,_]=(0,r.useState)(),w=async t=>{let{id:a,isDelete:s}=t;if(p(a),s){let{data:t}=await e(c);(0,m.Z)({event:t}),n(!1)}else n(!0)},{register:f,setValue:v,watch:y,control:Z}=(0,x.cI)();return(0,s.jsxs)("div",{className:"flex flex-col h-full w-full",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(b.x7,{}),(0,s.jsx)(D,{dtEdit:null!=j?j:null,showModal:i,setShowModal:l,halaman:t}),(0,s.jsx)(h.Z,{showDel:d,setShowDel:n,setDelete:w}),(0,s.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,s.jsxs)("p",{children:["Silahkan Mengolah data ",t]}),(0,s.jsx)("button",{className:"btn btn-primary",onClick:()=>{l(!0),_(null)},children:"Tambah Data"})]})]}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)(S,{halaman:t,register:f,setValue:v,watch:y,control:Z})}),(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(o,{setDelete:w,setEdit:t=>{l(!0),_(t)}})})]})}},5281:function(t,a,e){"use strict";var s=e(3011),r=e(6885),i=e(4061),l=e(4010);let d=(0,s.U)((0,r.mW)(t=>({dtSubDistricts:{last_page:0,current_page:0,data:[]},setSubDistricts:async a=>{let{page:e=1,limit:s=10,search:r,sortby:d,order:n}=a;try{let a=await l.Z.getState().setToken(),c=await (0,i.Sj)({method:"get",url:"/subDistricts",headers:{Authorization:"Bearer ".concat(a)},params:{limit:s,page:e,search:r,sortby:d,order:n}});return t(t=>({...t,dtSubDistricts:c.data.data})),console.log({response:c}),{status:"berhasil",data:c.data}}catch(t){var c;return{status:"error",error:null===(c=t.response)||void 0===c?void 0:c.data}}},setShowSubDistricts:async a=>{try{let e=await l.Z.getState().setToken(),s=await (0,i.Sj)({method:"get",url:"/subDistricts/".concat(a),headers:{Authorization:"Bearer ".concat(e)}});return t(t=>({...t,dtSubDistricts:s.data.data})),{status:"berhasil",data:s.data}}catch(t){var e;return{status:"error",error:null===(e=t.response)||void 0===e?void 0:e.data}}},addData:async a=>{try{let e=await l.Z.getState().setToken(),s=await (0,i.Sj)({method:"post",url:"/subDistricts",headers:{Authorization:"Bearer ".concat(e)},data:a});return t(t=>({dtSubDistricts:{last_page:t.dtSubDistricts.last_page,current_page:t.dtSubDistricts.current_page,data:[s.data.data,...t.dtSubDistricts.data]}})),{status:"berhasil tambah",data:s.data}}catch(t){return{status:"error",data:t.response.data}}},removeData:async a=>{try{let e=await l.Z.getState().setToken(),s=await (0,i.Sj)({method:"delete",url:"/subDistricts/".concat(a),headers:{Authorization:"Bearer ".concat(e)}});return t(t=>({dtSubDistricts:{last_page:t.dtSubDistricts.last_page,current_page:t.dtSubDistricts.current_page,data:t.dtSubDistricts.data.filter(t=>t.id!==a)}})),{status:"berhasil hapus",data:s.data}}catch(t){return{status:"error",data:t.response.data}}},updateData:async(a,e)=>{try{let s=await l.Z.getState().setToken(),r=await (0,i.Sj)({method:"PUT",url:"/subDistricts/".concat(a),headers:{Authorization:"Bearer ".concat(s)},data:e});return t(t=>({dtSubDistricts:{last_page:t.dtSubDistricts.last_page,current_page:t.dtSubDistricts.current_page,data:t.dtSubDistricts.data.map(t=>t.id===a?{...t,...r.data.data}:t)}})),{status:"berhasil update",data:r.data}}catch(t){return{status:"error",data:t.response.data}}}})));a.Z=d}},function(t){t.O(0,[1779,1866,6990,4579,9501,9099,8848,9264,2971,2117,1744],function(){return t(t.s=2546)}),_N_E=t.O()}]);