(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141b2cbe"],{"6d07":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"imgContainer"},[r("el-dialog",{attrs:{title:t.title,visible:t.showImgModal,width:"30%","close-on-click-modal":!1,top:"10vh"},on:{"update:visible":function(e){t.showImgModal=e}}},[r("el-image",{attrs:{src:t.src}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])])],1)],1)},n=[],o={name:"preceeImage",props:{isShowImgModal:{type:Boolean,default:!1},src:{type:String,default:""},title:{type:String,default:"流程图"}},data:function(){return{ccForm:{name:"",org:""},showImgModal:!1,loading:!1,optionList:[]}},watch:{isShowImgModal:{handler:function(t){t&&(this.showImgModal=!0)},immediate:!0},showImgModal:{handler:function(t){t||this.$emit("update:isShowImgModal",!1)}}},mounted:function(){},methods:{}},u=o,i=r("2877"),c=Object(i["a"])(u,a,n,!1,null,"7d9f3cd8",null);e["a"]=c.exports},"997e":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toms-container"},[r("div",{staticClass:"toms-add-navBar"},t._l(t.navList,(function(e){return r("div",{key:e.id,class:{current:t.navFlag===e.id},on:{click:function(r){return t.navChange(e.id)}}},[t._v(" "+t._s(e.label)+" ")])})),0),r("div",{staticClass:"toms-detail-contentWrap",staticStyle:{height:"calc(100% - 45px - 57px)"}},[r("process-basic-details",{attrs:{basicData:t.allFormData}}),r("recruitment-details",{attrs:{basicData:t.allFormData}}),r("basic-details",{attrs:{basicData:t.allFormData}}),r("labor-contract",{attrs:{basicData:t.allFormData}}),r("company-job",{attrs:{basicData:t.allFormData}}),t.isShowSalaryLine?t._e():r("client-job",{attrs:{basicData:t.allFormData}}),r("salary-line",{attrs:{basicData:t.allFormData}}),r("salary-info",{attrs:{basicData:t.allFormData}}),r("people-advice",{attrs:{basicData:t.allFormData}}),r("resume-info",{attrs:{basicData:t.allFormData,uploadTableData:t.uploadTableData}}),r("job-history",{attrs:{jobHistoryData:t.jobHistoryData}}),r("div",{staticClass:"detailsContent"},[t._m(0),r("process-info",{attrs:{isDetails:!0}})],1)],1),r("div",{staticClass:"toms-add-submitForm"},[r("div",{staticClass:"item",on:{click:function(e){t.isShowImgModal=!0}}},[t._v("流程图")]),this.isFromNoReadPage?r("div",{staticClass:"item submit",on:{click:t.hasRead}},[t._v(" 已阅 ")]):t._e()]),r("process-image",{attrs:{isShowImgModal:t.isShowImgModal,src:t.entryProcessImage},on:{"update:isShowImgModal":function(e){t.isShowImgModal=e},"update:is-show-img-modal":function(e){t.isShowImgModal=e}}})],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title",attrs:{id:"nav11"}},[r("span",[t._v("流程信息")]),r("div",{staticClass:"line"})])}],o=r("1da1"),u=r("5530"),i=(r("96cf"),r("fb6a"),r("caad"),r("2532"),r("a434"),r("99af"),r("d3b7"),r("0df0")),c=r("292d"),s=r("fc50"),l=r("d3b1"),d=r("075e"),m=r("78cb"),p=r("b116"),f=r("6401"),y=r("45df"),h=r("a23b"),b=r("8239"),v=r("ac83"),O=r("6d07"),j=r("d14b"),g=(r("a417"),r("dc27")),w=r("2f62"),D={name:"DetailStaffFile",components:{processBasicDetails:i["a"],basicDetails:c["a"],recruitmentDetails:s["a"],laborContract:l["a"],companyJob:d["a"],clientJob:m["a"],salaryLine:p["a"],salaryInfo:f["a"],peopleAdvice:y["a"],resumeInfo:h["a"],jobHistory:b["a"],processInfo:v["a"],processImage:O["a"]},data:function(){return{navList:[{label:"基本信息",id:0},{label:"招聘人信息",id:1},{label:"员工信息",id:2},{label:"劳动合同",id:3},{label:"公司岗位",id:4},{label:"客户方岗位",id:5},{label:"薪资参考线",id:6},{label:"薪资信息",id:7},{label:"招聘人意见",id:8},{label:"简历附件",id:9},{label:"在职历史",id:10},{label:"流程信息",id:11}],navFlag:1,allFormData:{nodeName:""},jobHistoryData:[],isShowImgModal:!1,entryProcessImage:r("4a0d"),uploadTableData:[],getDetailsInfoDone:!1}},computed:Object(u["a"])(Object(u["a"])({},Object(w["e"])("user",["userInfo"])),{},{isFromNoReadPage:function(){return this.$route.query.fromNoReadPage},currentNode:function(){return this.allFormData.nodeName?this.allFormData.nodeName.slice(0,3):""},isShowSalaryLine:function(){var t=this.$route.query.taskObj,e=JSON.parse(decodeURIComponent(t));if(e.nodeName.includes("010"))return this.navList.splice(5,1),this.navList.splice(5,1),!0}}),watch:{$route:{immediate:!0,handler:function(t,e){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.getProcessDetails();case 2:console.log("watch中监听, 获取详情数据");case 3:case"end":return t.stop()}}),t)})))()}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getProcessDetails();case 2:console.log("mounted中的方法执行");case 3:case"end":return e.stop()}}),e)})))()},methods:Object(u["a"])(Object(u["a"])({},Object(w["d"])("entryCfmSalary",["CHANGE_EDIT_PROCESS_STATUS","CHANGE_LIST_PAGE_STAUTS"])),{},{getProcessDetails:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.getDetailsInfoDone){e.next=2;break}return e.abrupt("return");case 2:if(t.getDetailsInfoDone=!0,r=t.$route.query.taskObj,!r){e.next=18;break}return a=JSON.parse(decodeURIComponent(r)),e.next=8,Object(j["p"])({taskInstanceId:a.taskInstanceId,taskFlowConfig:{flowName:a.flowName,version:a.version},taskNodeInstance:a});case 8:return n=e.sent,t.allFormData=n.relatedObject||{},t.uploadTableData=n.taskFileDTOS,t.allFormData.launchPeople="[".concat(n.creatorNo,"] ").concat(n.taskInstance.creatorName),t.allFormData.flowName=n.taskFlowConfig.flowName||"",t.allFormData.nodeName=t.$set(t.allFormData,"nodeName",n.taskFlowNodeConfig.nodeName),t.allFormData.taskName=n.taskInstance.taskName,e.next=17,t.getEmployeeHistoryList(t.allFormData.employPidSno);case 17:return e.abrupt("return",Promise.resolve("创建对象"));case 18:case"end":return e.stop()}}),e)})))()},getEmployeeHistoryList:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(g["L"])({employPidNo:t});case 2:a=r.sent,e.jobHistoryData=a||[];case 4:case"end":return r.stop()}}),r)})))()},navChange:function(t){this.navFlag=t;var e=document.querySelector("#nav".concat(t));e&&e.scrollIntoView()},hasRead:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,a,n,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.$route.query.taskObj,a=JSON.parse(decodeURIComponent(r)),n={},n.nodeInstanceIdList=[],n.nodeInstanceIdList.push(a.nodeInstanceId),e.next=7,Object(j["t"])(n);case 7:o=e.sent,"200"===o.code&&(t.CHANGE_LIST_PAGE_STAUTS(!0),t.$message.success("已阅成功"),u=t.$route,t.$store.dispatch("tagsView/delView",u).then((function(e){e.visitedViews;t.$router.push("/workbench/noread")})));case 9:case"end":return e.stop()}}),e)})))()}})},E=D,I=r("2877"),C=Object(I["a"])(E,a,n,!1,null,"aa611792",null);e["default"]=C.exports},dc27:function(t,e,r){"use strict";r.d(e,"t",(function(){return n})),r.d(e,"R",(function(){return o})),r.d(e,"db",(function(){return u})),r.d(e,"E",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"x",(function(){return s})),r.d(e,"J",(function(){return l})),r.d(e,"K",(function(){return d})),r.d(e,"G",(function(){return m})),r.d(e,"cb",(function(){return p})),r.d(e,"P",(function(){return f})),r.d(e,"bb",(function(){return y})),r.d(e,"N",(function(){return h})),r.d(e,"eb",(function(){return b})),r.d(e,"hb",(function(){return v})),r.d(e,"ab",(function(){return O})),r.d(e,"gb",(function(){return j})),r.d(e,"H",(function(){return g})),r.d(e,"I",(function(){return w})),r.d(e,"F",(function(){return D})),r.d(e,"L",(function(){return E})),r.d(e,"O",(function(){return I})),r.d(e,"fb",(function(){return C})),r.d(e,"jb",(function(){return F})),r.d(e,"w",(function(){return S})),r.d(e,"C",(function(){return L})),r.d(e,"s",(function(){return k})),r.d(e,"U",(function(){return q})),r.d(e,"V",(function(){return N})),r.d(e,"M",(function(){return x})),r.d(e,"v",(function(){return R})),r.d(e,"ib",(function(){return _})),r.d(e,"p",(function(){return P})),r.d(e,"h",(function(){return T})),r.d(e,"W",(function(){return A})),r.d(e,"g",(function(){return M})),r.d(e,"n",(function(){return H})),r.d(e,"X",(function(){return $})),r.d(e,"B",(function(){return U})),r.d(e,"Q",(function(){return B})),r.d(e,"D",(function(){return J})),r.d(e,"l",(function(){return G})),r.d(e,"i",(function(){return V})),r.d(e,"m",(function(){return W})),r.d(e,"y",(function(){return Z})),r.d(e,"A",(function(){return z})),r.d(e,"z",(function(){return K})),r.d(e,"S",(function(){return Q})),r.d(e,"c",(function(){return X})),r.d(e,"e",(function(){return Y})),r.d(e,"b",(function(){return tt})),r.d(e,"d",(function(){return et})),r.d(e,"j",(function(){return rt})),r.d(e,"f",(function(){return at})),r.d(e,"Z",(function(){return nt})),r.d(e,"T",(function(){return ot})),r.d(e,"q",(function(){return ut})),r.d(e,"Y",(function(){return it})),r.d(e,"r",(function(){return ct})),r.d(e,"o",(function(){return st})),r.d(e,"u",(function(){return lt})),r.d(e,"k",(function(){return dt}));var a=r("b775");function n(t){return Object(a["a"])({url:"/employ/attr/queryEmployAttrList",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/employ/archives/queryEmployList",method:"post",params:t})}function u(t){return Object(a["a"])({url:"/employ/attr/saveOrUpdateEmployAttr",method:"post",data:t})}function i(t){return Object(a["a"])({url:"/employ/attr/queryEmployAttr",method:"post",params:t})}function c(t){return Object(a["a"])({url:"/employ/attr/addOrCancelAttr",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/employ/attr/queryEmployAttrHistory",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/employ/free/queryEmployFreeList",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/employ/free/queryEmployFreePoolList",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/employ/free/queryEmployFree",method:"post",params:t})}function p(t){return Object(a["a"])({url:"/employ/archives/saveOrUpdateEmploy",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/employ/archives/queryEmployInfoList",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/employ/archives/removeEmployInfo",method:"post",params:t})}function h(t){return Object(a["a"])({url:"/employ/archives/queryEmployInfoDetail",method:"post",params:t})}function b(t){return Object(a["a"])({url:"/employ/free/saveOrUpdateEmployFree",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/employ/free/updateEmployFreeEntry",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/employ/free/removeEmployFree",method:"post",params:t})}function j(t){return Object(a["a"])({url:"/employ/free/updateCancelEmployFree",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/employ/free/queryEmployFreeDetail",method:"post",params:t})}function w(t){return Object(a["a"])({url:"/employ/free/queryEmployFreeHistory",method:"post",data:t})}function D(t){return Object(a["a"])({url:"/employ/archives/queryEmployFormalList",method:"post",data:t})}function E(t){return Object(a["a"])({url:"/employ/archives/queryEmployHistoryList",method:"post",params:t})}function I(t){return Object(a["a"])({url:"/employ/archives/queryEmployInfo",method:"post",params:t})}function C(t){return Object(a["a"])({url:"/employ/archives/updateBatchFormal",method:"post",data:t})}function F(t){return Object(a["a"])({url:"/employ/archives/updateFormalDelay",method:"post",data:t})}function S(){return Object(a["a"])({url:"/employ/archives/queryAppointCount",method:"post"})}function L(t){return Object(a["a"])({url:"/employ/archives/queryEmployBaseDetail?employId=".concat(t.employId),method:"post"})}function k(t){return Object(a["a"])({url:"/employ/archives/getEmployBaseDetail",method:"post",params:t})}function q(t){return Object(a["a"])({url:"/employ/archives/queryEmployWorkCount",method:"post",params:t})}function N(t){return Object(a["a"])({url:"/employ/archives/queryLastEmployChangeRecord",method:"post",params:t})}function x(t){return Object(a["a"])({url:"/employ/archives/queryEmployInfoContractPage",method:"post",data:t})}function R(t){return Object(a["a"])({url:"/employ/archives/operateEmployInfoContract",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/employ/archives/updateEmployInfoContract",method:"post",data:t})}function P(t){return Object(a["a"])({url:"/employ/archives/exportEmployInfoContract",method:"post",data:t})}function T(t){return Object(a["a"])({url:"/employ/archives/checkSpecialDate",method:"post",data:t})}function A(t){return Object(a["a"])({url:"/employ/free/queryNewEmployFreeDetail",method:"post",params:t})}function M(t){return Object(a["a"])({url:"/employ/archives/checkFlow",method:"post",params:t})}function H(t){return Object(a["a"])({url:"/employ/archives/exportEmploy",method:"post",data:t})}function $(t){return Object(a["a"])({url:"/system/org/queryOrgMoney?employType=".concat(t.employType),method:"post"})}function U(t){return Object(a["a"])({url:"/employ/activity/getNewEmployList",method:"post",data:t})}function B(t){return Object(a["a"])({url:"/employ/activity/getReductionEmployList",method:"post",data:t})}function J(t){return Object(a["a"])({url:"/employ/activity/getPositiveEmployList",method:"post",data:t})}function G(t){return Object(a["a"])({url:"/employ/activity/exportPositiveEmployExcel",method:"post",data:t})}function V(t){return Object(a["a"])({url:"/employ/activity/exportNewEmployExcel",method:"post",data:t})}function W(t){return Object(a["a"])({url:"/employ/activity/exportReductionEmployExcel",method:"post",data:t})}function Z(t){return Object(a["a"])({url:"/business/client/queryClientCompanySelectListByLike",method:"post",params:t})}function z(t){return Object(a["a"])({url:"/business/contract/queryContractSelectByOrgIdANDClientCompanyIdOnEmploy",method:"post",params:t})}function K(t){return Object(a["a"])({url:"/business/client/queryClientCompanyWorkplaceListByLike",method:"post",params:t})}function Q(t){return Object(a["a"])({url:"/employ/activity/getaddOrLeaveEmployList",method:"post",data:t})}function X(t){return Object(a["a"])({url:"/employ/two/updChangeLeave",method:"post",data:t})}function Y(t){return Object(a["a"])({url:"/employ/two/updChangeEmployType",method:"post",data:t})}function tt(t){return Object(a["a"])({url:"/employ/two/updChangeZhuanOrg",method:"post",data:t})}function et(t){return Object(a["a"])({url:"/employ/two/updChangeTiaoGang",method:"post",data:t})}function rt(t){return Object(a["a"])({url:"/employ/two/exportUnFormalEmployChangeFinanceList",method:"post",data:t})}function at(t){return Object(a["a"])({url:"/employ/two/getTwoDetail",method:"get",params:t})}function nt(t){return Object(a["a"])({url:"/system/user/queryUserSelectListByCondition",method:"post",params:t})}function ot(t){return Object(a["a"])({url:"/employ/archives/queryEmployRosterList",method:"post",data:t})}function ut(t){return Object(a["a"])({url:"/employ/archives/exportEmployRoster",method:"post",data:t})}function it(t){return Object(a["a"])({url:"/employ/archives/queryRosterList",method:"post",data:t})}function ct(t){return Object(a["a"])({url:"/employ/archives/exportRoster",method:"post",data:t})}function st(t){return Object(a["a"])({url:"/employ/free/exportEmployFree",method:"post",data:t})}function lt(t){return Object(a["a"])({url:"/employ/rosterrealtime/getLastContrastInfo",method:"get",data:t})}function dt(t){return Object(a["a"])({url:"/employ/rosterrealtime/exportContrastExcel",method:"get",data:t})}}}]);