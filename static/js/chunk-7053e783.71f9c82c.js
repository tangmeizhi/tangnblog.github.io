(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7053e783"],{"0df0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detailsContent"},[a("div",{staticClass:"title",attrs:{id:t.navName+"0"}},[a("span",[t._v("基本信息")]),a("div",{staticClass:"line"})]),a("div",{staticClass:"detailsItem"},[a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("工作主题")]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.taskName||"--")+" ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("流程名称")]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.flowName||"--")+" ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("发起人")]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.launchPeople||"--")+" ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("当前环节")]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.nodeName||"--")+" ")])])])])},r=[],o={name:"BasicDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}}},data:function(){return{}},mounted:function(){},methods:{}},s=o,i=a("2877"),c=Object(i["a"])(s,n,r,!1,null,"4e7acd04",null);e["a"]=c.exports},3881:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return s}));a("7db0"),a("99af"),a("159b");var n=a("4360");function r(t){t||console.log("请传参为权限code");var e=n["a"].state.processPermission.processPermissionList;if(!(e.length<1)){var a=e.find((function(e){return e.resourceCode===t}));if(a)return"IT_FARS_004"===a.resourceStatus}}function o(t){t||console.log("请传参为权限code");var e=n["a"].state.processPermission.processPermissionList;if(!(e.length<1)){var a=e.find((function(e){return e.resourceCode===t}));if(a)return"IT_FARS_005"===a.resourceStatus}}function s(t){var e=n["a"].state.processPermission.processPermissionList,a=[];if(a=a.concat(t),!(e.length<1)){var r=!1;return a.forEach((function(t){for(var a=0,n=e.length;a<n;a++)if(e[a].resourceCode===t&&"IT_FARS_004"!==e[a].resourceStatus){r=!0;break}})),r}}},"6d07":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imgContainer"},[a("el-dialog",{attrs:{title:t.title,visible:t.showImgModal,width:"30%","close-on-click-modal":!1,top:"10vh"},on:{"update:visible":function(e){t.showImgModal=e}}},[a("el-image",{attrs:{src:t.src}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])],1)],1)},r=[],o={name:"preceeImage",props:{isShowImgModal:{type:Boolean,default:!1},src:{type:String,default:""},title:{type:String,default:"流程图"}},data:function(){return{ccForm:{name:"",org:""},showImgModal:!1,loading:!1,optionList:[]}},watch:{isShowImgModal:{handler:function(t){t&&(this.showImgModal=!0)},immediate:!0},showImgModal:{handler:function(t){t||this.$emit("update:isShowImgModal",!1)}}},mounted:function(){},methods:{}},s=o,i=a("2877"),c=Object(i["a"])(s,n,r,!1,null,"7d9f3cd8",null);e["a"]=c.exports},b282:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toms-container"},[a("div",{staticClass:"toms-add-navBar"},[t._l(t.navList,(function(e){return[e.hidden?a("div",{key:e.navId,class:{current:t.navFlag===e.navId},on:{click:function(a){return t.navChange(e.navId)}}},[t._v(" "+t._s(e.name)+" ")]):t._e()]}))],2),a("div",{staticClass:"toms-detail-contentWrap",staticStyle:{height:"calc(100% - 45px - 57px)"}},[a("process-basic-details",{attrs:{basicData:t.allFormData}}),a("appointment-in-details",{attrs:{basicData:t.allFormData,navName:"navigation"}}),"020"==t.currentNode||"025"==t.currentNode||"030"==t.currentNode?a("entry-file-details",{attrs:{employSubmitData:t.employSubmitData,employWriteData:t.employWriteData,employSignData:t.employSignData,entryOfDate:t.entryOfDate,employSubmitStatus:t.employSubmitStatus,offerId:t.offerId,navName:"navigation"}}):t._e(),a("staff-info-details",{attrs:{currentNode:t.currentNode,basicData:t.staffBasicInfo,navName:"navigation"}}),a("company-contract-details",{attrs:{currentNode:t.currentNode,basicData:t.staffBasicInfo,navName:"navigation"}}),"025"==t.currentNode?a("fml-ctc-edu-tra-wrk",{attrs:{workExeList:t.workExeList,trainingList:t.trainingList,educationList:t.educationList,familyList:t.familyList,emergencyCtctList:t.emergencyCtctList,attachmentData:t.affixFormData,navName:"navigation"}}):t._e(),"010"==t.currentNode||"020"==t.currentNode||"030"==t.currentNode?a("client-info-details",{attrs:{currentNode:t.currentNode,basicData:t.staffBasicInfo,navName:"navigation"}}):t._e(),"010"==t.currentNode||"020"==t.currentNode?a("salary-details",{attrs:{basicData:t.salaryInfo,navName:"navigation"}}):t._e(),a("on-job-history",{attrs:{basicData:t.jobHistoryData}}),a("div",{staticClass:"detailsContent"},[t._m(0),a("process-info",{attrs:{isDetails:!0}})],1)],1),a("div",{staticClass:"toms-add-submitForm"},[a("div",{staticClass:"item",on:{click:function(e){t.isShowImgModal=!0}}},[t._v("流程图")]),this.isFromNoReadPage?a("div",{staticClass:"item submit",on:{click:t.hasRead}},[t._v(" 已阅 ")]):t._e()]),a("process-image",{attrs:{isShowImgModal:t.isShowImgModal,src:t.entryProcessImage},on:{"update:isShowImgModal":function(e){t.isShowImgModal=e},"update:is-show-img-modal":function(e){t.isShowImgModal=e}}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title",attrs:{id:"nav16"}},[a("span",[t._v("流程信息")]),a("div",{staticClass:"line"})])}],o=a("1da1"),s=a("5530"),i=(a("99af"),a("fb6a"),a("ac1f"),a("1276"),a("159b"),a("d3b7"),a("96cf"),a("ff16")),c=a("0df0"),u=a("6d59"),l=a("4bea"),d=a("f388"),m=a("e1e8"),p=a("930c"),f=a("7e1b"),y=a("48ca"),v=a("6fd0"),h=a("ac83"),b=a("6d07"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detailsContent"},[t._m(0),a("div",{staticClass:"detailsItem"},[a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("转正月薪")]),a("div",{staticClass:"value"},[t._v(t._s(t.basicData.contractMoney||"--"))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("试用期月薪")]),a("div",{staticClass:"value"},[t._v(t._s(t.basicData.contractFreeMoney||"--"))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("是否有年终奖")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("yearMoney")(t.basicData.yearMoney)))])]),a("div",{staticClass:"item addBorder"},[a("div",{staticClass:"label"},[t._v("薪资生效日期")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("timeFormat")(t.basicData.moneyStartTime,"yyyy-mm-dd")))])]),t.isShowHrss?a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("社保缴纳城市")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("getBaseDataLabel")(t.basicData.hrssCity)))])]):t._e(),t.isShowHrss?a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("社保缴纳方式")]),a("div",{staticClass:"value"},[t._v(t._s(t._f("getBaseDataLabel")(t.basicData.hrssPayType)))])]):t._e(),t.isShowHrss?a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("社保参保规则")]),a("div",{staticClass:"value"},[t._v(t._s(t.basicData.hrssRule||"--"))])]):t._e(),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[t._v("UV值")]),a("div",{staticClass:"value"},[t._v(t._s(t.basicData.uv||"--"))])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title",attrs:{id:"nav20"}},[a("span",[t._v("薪酬信息")])])}],I=(a("caad"),a("2532"),{name:"SalaryDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}},contractType:function(){return this.$parent.staffBasicInfo.contractType}},filters:{yearMoney:function(t){return"1"==t?"是":"否"}},data:function(){return{isShowHrss:!0}},watch:{"basicData.contractType":{immediate:!0,deep:!0,handler:function(t){console.log("实习",t),t&&t.includes("实习")?this.isShowHrss=!1:this.isShowHrss=!0}}},mounted:function(){},methods:{}}),C=I,O=a("2877"),j=Object(O["a"])(C,D,g,!1,null,"39cb4688",null),N=j.exports,E=a("d14b"),w=(a("a417"),a("dc27")),_=a("2f62"),F=(a("3881"),function(t){return[{name:"基本信息",navId:0,hidden:!0},{name:"预约入职",navId:1,hidden:!0},{name:"入职档案表",navId:2,hidden:"020"==t.currentNode||"025"==t.currentNode||"030"==t.currentNode},{name:"办理入职",navId:3,hidden:"020"==t.currentNode||"025"==t.currentNode||"030"==t.currentNode},{name:"入职办理日期",navId:4,hidden:"020"==t.currentNode||"025"==t.currentNode||"030"==t.currentNode},{name:"员工基本信息",navId:5,hidden:!0},{name:"公司信息",navId:6,hidden:"025"==t.currentNode||"030"==t.currentNode},{name:"劳动合同",navId:7,hidden:"030"!==t.currentNode},{name:"家庭成员",navId:8,hidden:"025"==t.currentNode},{name:"紧急联系人",navId:9,hidden:"025"==t.currentNode},{name:"教育经历",navId:10,hidden:"025"==t.currentNode},{name:"培训经历",navId:11,hidden:"025"==t.currentNode},{name:"工作经历",navId:12,hidden:"025"==t.currentNode},{name:"附件信息",navId:13,hidden:"025"==t.currentNode},{name:"客户方信息",navId:14,hidden:"025"!==t.currentNode},{name:"薪酬信息",navId:20,hidden:"010"==t.currentNode||"020"==t.currentNode},{name:"在职历史",navId:15,hidden:!0},{name:"流程信息",navId:16,hidden:!0}]}),S={name:"EntryProcessDetailS",components:{navBar:i["a"],processBasicDetails:c["a"],basicDetails:u["a"],appointmentInDetails:l["a"],entryFileDetails:d["a"],staffInfoDetails:m["a"],companyContractDetails:p["a"],fmlCtcEduTraWrk:f["a"],clientInfoDetails:y["a"],onJobHistory:v["a"],processInfo:h["a"],processImage:b["a"],salaryDetails:N},data:function(){return{navFlag:0,allFormData:{},jobHistoryData:[],isShowImgModal:!1,entryProcessImage:a("a21c"),affixFormData:{},employSubmitData:[],employWriteData:[],employSignData:[],entryOfDate:"",employSubmitStatus:"",staffBasicInfo:{},familyList:[{formData:{}},{formData:{}}],emergencyCtctList:[{formData:{}},{formData:{}}],educationList:[{formData:{}}],trainingList:[{formData:{}}],workExeList:[{formData:{}}],currentNode:"010",salaryInfo:{},offerId:"",getDetailsInfoDone:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(_["e"])("user",["userInfo"])),{},{isFromNoReadPage:function(){return this.$route.query.fromNoReadPage},navList:function(){return F(this)}}),watch:{$route:{immediate:!0,handler:function(t,e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.getProcessDetails();case 2:console.log("watch中监听, 获取详情数据");case 3:case"end":return t.stop()}}),t)})))()}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProcessDetails();case 2:console.log("mounted中的方法执行");case 3:case"end":return e.stop()}}),e)})))()},methods:{getProcessDetails:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,s,i,c,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getDetailsInfoDone){e.next=2;break}return e.abrupt("return");case 2:if(t.getDetailsInfoDone=!0,a=t.$route.query.taskObj,!a){e.next=52;break}return n=JSON.parse(decodeURIComponent(a)),e.next=8,Object(E["p"])({taskInstanceId:n.taskInstanceId,taskFlowConfig:{flowName:n.flowName,version:n.version},taskNodeInstance:{nodeInstanceId:n.nodeInstanceId}});case 8:if(r=e.sent,t.allFormData=r.relatedObject||{},t.offerId=t.allFormData.offerId,t.allFormData.launchPeople="[".concat(r.creatorNo,"] ").concat(r.taskInstance.creatorName),t.allFormData.flowName=r.taskFlowConfig.flowName||"",t.allFormData.nodeName=r.taskFlowNodeConfig.nodeName,t.allFormData.taskName=r.taskInstance.taskName,t.currentNode=r.taskFlowNodeConfig.nodeName.slice(0,3),t.allFormData.employSubmitData&&(t.employSubmitData=t.allFormData.employSubmitData.split(",")),t.allFormData.employWriteData&&(t.employWriteData=t.allFormData.employWriteData.split(",")),t.allFormData.employSignData&&(t.employSignData=t.allFormData.employSignData.split(",")),t.entryOfDate=t.allFormData.entryOfDate,t.employSubmitStatus=!!t.allFormData.employSubmitStatus,t.staffBasicInfo=JSON.parse(t.allFormData.employInfoJsonCn)||{},t.staffBasicInfo.clientSimpleName=t.allFormData.taskEmployPrice.clientSimpleName,o=JSON.parse(t.allFormData.employJobJson)||[],s=JSON.parse(t.allFormData.employEduJson)||[],i=JSON.parse(t.allFormData.employFamilyJsonCn)||[],c=JSON.parse(t.allFormData.employContactJsonCn)||[],u=JSON.parse(t.allFormData.employTrainJson)||[],t.affixFormData=JSON.parse(r.fileJson)||{},t.$set(t.salaryInfo,"contractMoney",t.allFormData.taskEmployPrice.contremployTypeactMoney),t.salaryInfo.contractMoney=t.allFormData.taskEmployPrice.contractMoney,t.salaryInfo.contractFreeMoney=t.allFormData.taskEmployPrice.contractFreeMoney,t.salaryInfo.yearMoney=t.allFormData.taskEmployPrice.yearMoney,t.salaryInfo.moneyStartTime=t.allFormData.taskEmployPrice.moneyStartTime,t.salaryInfo.hrssCity=t.allFormData.taskEmployPrice.hrssCity,t.salaryInfo.hrssPayType=t.allFormData.taskEmployPrice.hrssPayType,t.salaryInfo.contractType=t.staffBasicInfo.contractType,t.salaryInfo.uv=t.allFormData.taskEmployPrice.uv,!t.allFormData.taskEmployPrice.hrssRule){e.next=43;break}return e.next=41,Object(E["h"])({protectId:t.allFormData.taskEmployPrice.hrssRule});case 41:l=e.sent,l.data&&t.$set(t.salaryInfo,"hrssRule",l.data.protectName);case 43:return console.log("薪酬信息",t.salaryInfo),i.forEach((function(e,a){t.familyList[a].formData=e})),c.forEach((function(e,a){t.emergencyCtctList[a].formData=e})),s.forEach((function(e,a){void 0===t.educationList[a]&&(t.educationList[a]={}),t.educationList[a].formData=e})),u.forEach((function(e,a){void 0===t.trainingList[a]&&(t.trainingList[a]={}),t.trainingList[a].formData=e})),o.forEach((function(e,a){void 0===t.workExeList[a]&&(t.workExeList[a]={}),t.workExeList[a].formData=e})),e.next=51,t.getEmployeeHistoryList(t.staffBasicInfo.employPidNo||t.allFormData.taskEmployPrice.employPidSno);case 51:return e.abrupt("return",Promise.resolve("创建对象"));case 52:case"end":return e.stop()}}),e)})))()},getEmployeeHistoryList:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(w["L"])({employPidNo:t});case 2:n=a.sent,e.jobHistoryData=n||[];case 4:case"end":return a.stop()}}),a)})))()},navChange:function(t){this.navFlag=t;var e=document.querySelector("#nav".concat(t));e&&e.scrollIntoView()},hasRead:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.query.taskObj,n=JSON.parse(decodeURIComponent(a)),r={},r.nodeInstanceIdList=[],r.nodeInstanceIdList.push(n.nodeInstanceId),e.next=7,Object(E["t"])(r);case 7:o=e.sent,"200"===o.code&&(t.$message.success("已阅成功"),s=t.$route,t.$store.dispatch("tagsView/delView",s).then((function(e){e.visitedViews;t.$router.push("/workbench/noread")})));case 9:case"end":return e.stop()}}),e)})))()}}},L=S,k=Object(O["a"])(L,n,r,!1,null,"45243e3a",null);e["default"]=k.exports},dc27:function(t,e,a){"use strict";a.d(e,"t",(function(){return r})),a.d(e,"R",(function(){return o})),a.d(e,"db",(function(){return s})),a.d(e,"E",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"x",(function(){return u})),a.d(e,"J",(function(){return l})),a.d(e,"K",(function(){return d})),a.d(e,"G",(function(){return m})),a.d(e,"cb",(function(){return p})),a.d(e,"P",(function(){return f})),a.d(e,"bb",(function(){return y})),a.d(e,"N",(function(){return v})),a.d(e,"eb",(function(){return h})),a.d(e,"hb",(function(){return b})),a.d(e,"ab",(function(){return D})),a.d(e,"gb",(function(){return g})),a.d(e,"H",(function(){return I})),a.d(e,"I",(function(){return C})),a.d(e,"F",(function(){return O})),a.d(e,"L",(function(){return j})),a.d(e,"O",(function(){return N})),a.d(e,"fb",(function(){return E})),a.d(e,"jb",(function(){return w})),a.d(e,"w",(function(){return _})),a.d(e,"C",(function(){return F})),a.d(e,"s",(function(){return S})),a.d(e,"U",(function(){return L})),a.d(e,"V",(function(){return k})),a.d(e,"M",(function(){return x})),a.d(e,"v",(function(){return P})),a.d(e,"ib",(function(){return q})),a.d(e,"p",(function(){return R})),a.d(e,"h",(function(){return M})),a.d(e,"W",(function(){return B})),a.d(e,"g",(function(){return T})),a.d(e,"n",(function(){return J})),a.d(e,"X",(function(){return $})),a.d(e,"B",(function(){return H})),a.d(e,"Q",(function(){return A})),a.d(e,"D",(function(){return W})),a.d(e,"l",(function(){return U})),a.d(e,"i",(function(){return V})),a.d(e,"m",(function(){return G})),a.d(e,"y",(function(){return Z})),a.d(e,"A",(function(){return z})),a.d(e,"z",(function(){return K})),a.d(e,"S",(function(){return Q})),a.d(e,"c",(function(){return X})),a.d(e,"e",(function(){return Y})),a.d(e,"b",(function(){return tt})),a.d(e,"d",(function(){return et})),a.d(e,"j",(function(){return at})),a.d(e,"f",(function(){return nt})),a.d(e,"Z",(function(){return rt})),a.d(e,"T",(function(){return ot})),a.d(e,"q",(function(){return st})),a.d(e,"Y",(function(){return it})),a.d(e,"r",(function(){return ct})),a.d(e,"o",(function(){return ut})),a.d(e,"u",(function(){return lt})),a.d(e,"k",(function(){return dt}));var n=a("b775");function r(t){return Object(n["a"])({url:"/employ/attr/queryEmployAttrList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/employ/archives/queryEmployList",method:"post",params:t})}function s(t){return Object(n["a"])({url:"/employ/attr/saveOrUpdateEmployAttr",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/employ/attr/queryEmployAttr",method:"post",params:t})}function c(t){return Object(n["a"])({url:"/employ/attr/addOrCancelAttr",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/employ/attr/queryEmployAttrHistory",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/employ/free/queryEmployFreeList",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/employ/free/queryEmployFreePoolList",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/employ/free/queryEmployFree",method:"post",params:t})}function p(t){return Object(n["a"])({url:"/employ/archives/saveOrUpdateEmploy",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfoList",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/employ/archives/removeEmployInfo",method:"post",params:t})}function v(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfoDetail",method:"post",params:t})}function h(t){return Object(n["a"])({url:"/employ/free/saveOrUpdateEmployFree",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/employ/free/updateEmployFreeEntry",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/employ/free/removeEmployFree",method:"post",params:t})}function g(t){return Object(n["a"])({url:"/employ/free/updateCancelEmployFree",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/employ/free/queryEmployFreeDetail",method:"post",params:t})}function C(t){return Object(n["a"])({url:"/employ/free/queryEmployFreeHistory",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/employ/archives/queryEmployFormalList",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/employ/archives/queryEmployHistoryList",method:"post",params:t})}function N(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfo",method:"post",params:t})}function E(t){return Object(n["a"])({url:"/employ/archives/updateBatchFormal",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/employ/archives/updateFormalDelay",method:"post",data:t})}function _(){return Object(n["a"])({url:"/employ/archives/queryAppointCount",method:"post"})}function F(t){return Object(n["a"])({url:"/employ/archives/queryEmployBaseDetail?employId=".concat(t.employId),method:"post"})}function S(t){return Object(n["a"])({url:"/employ/archives/getEmployBaseDetail",method:"post",params:t})}function L(t){return Object(n["a"])({url:"/employ/archives/queryEmployWorkCount",method:"post",params:t})}function k(t){return Object(n["a"])({url:"/employ/archives/queryLastEmployChangeRecord",method:"post",params:t})}function x(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfoContractPage",method:"post",data:t})}function P(t){return Object(n["a"])({url:"/employ/archives/operateEmployInfoContract",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/employ/archives/updateEmployInfoContract",method:"post",data:t})}function R(t){return Object(n["a"])({url:"/employ/archives/exportEmployInfoContract",method:"post",data:t})}function M(t){return Object(n["a"])({url:"/employ/archives/checkSpecialDate",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/employ/free/queryNewEmployFreeDetail",method:"post",params:t})}function T(t){return Object(n["a"])({url:"/employ/archives/checkFlow",method:"post",params:t})}function J(t){return Object(n["a"])({url:"/employ/archives/exportEmploy",method:"post",data:t})}function $(t){return Object(n["a"])({url:"/system/org/queryOrgMoney?employType=".concat(t.employType),method:"post"})}function H(t){return Object(n["a"])({url:"/employ/activity/getNewEmployList",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/employ/activity/getReductionEmployList",method:"post",data:t})}function W(t){return Object(n["a"])({url:"/employ/activity/getPositiveEmployList",method:"post",data:t})}function U(t){return Object(n["a"])({url:"/employ/activity/exportPositiveEmployExcel",method:"post",data:t})}function V(t){return Object(n["a"])({url:"/employ/activity/exportNewEmployExcel",method:"post",data:t})}function G(t){return Object(n["a"])({url:"/employ/activity/exportReductionEmployExcel",method:"post",data:t})}function Z(t){return Object(n["a"])({url:"/business/client/queryClientCompanySelectListByLike",method:"post",params:t})}function z(t){return Object(n["a"])({url:"/business/contract/queryContractSelectByOrgIdANDClientCompanyIdOnEmploy",method:"post",params:t})}function K(t){return Object(n["a"])({url:"/business/client/queryClientCompanyWorkplaceListByLike",method:"post",params:t})}function Q(t){return Object(n["a"])({url:"/employ/activity/getaddOrLeaveEmployList",method:"post",data:t})}function X(t){return Object(n["a"])({url:"/employ/two/updChangeLeave",method:"post",data:t})}function Y(t){return Object(n["a"])({url:"/employ/two/updChangeEmployType",method:"post",data:t})}function tt(t){return Object(n["a"])({url:"/employ/two/updChangeZhuanOrg",method:"post",data:t})}function et(t){return Object(n["a"])({url:"/employ/two/updChangeTiaoGang",method:"post",data:t})}function at(t){return Object(n["a"])({url:"/employ/two/exportUnFormalEmployChangeFinanceList",method:"post",data:t})}function nt(t){return Object(n["a"])({url:"/employ/two/getTwoDetail",method:"get",params:t})}function rt(t){return Object(n["a"])({url:"/system/user/queryUserSelectListByCondition",method:"post",params:t})}function ot(t){return Object(n["a"])({url:"/employ/archives/queryEmployRosterList",method:"post",data:t})}function st(t){return Object(n["a"])({url:"/employ/archives/exportEmployRoster",method:"post",data:t})}function it(t){return Object(n["a"])({url:"/employ/archives/queryRosterList",method:"post",data:t})}function ct(t){return Object(n["a"])({url:"/employ/archives/exportRoster",method:"post",data:t})}function ut(t){return Object(n["a"])({url:"/employ/free/exportEmployFree",method:"post",data:t})}function lt(t){return Object(n["a"])({url:"/employ/rosterrealtime/getLastContrastInfo",method:"get",data:t})}function dt(t){return Object(n["a"])({url:"/employ/rosterrealtime/exportContrastExcel",method:"get",data:t})}}}]);