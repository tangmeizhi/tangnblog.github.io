(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d34fef9e"],{3881:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));n("7db0"),n("99af"),n("159b");var o=n("4360");function r(e){e||console.log("请传参为权限code");var t=o["a"].state.processPermission.processPermissionList;if(!(t.length<1)){var n=t.find((function(t){return t.resourceCode===e}));if(n)return"IT_FARS_004"===n.resourceStatus}}function a(e){e||console.log("请传参为权限code");var t=o["a"].state.processPermission.processPermissionList;if(!(t.length<1)){var n=t.find((function(t){return t.resourceCode===e}));if(n)return"IT_FARS_005"===n.resourceStatus}}function i(e){var t=o["a"].state.processPermission.processPermissionList,n=[];if(n=n.concat(e),!(t.length<1)){var r=!1;return n.forEach((function(e){for(var n=0,o=t.length;n<o;n++)if(t[n].resourceCode===e&&"IT_FARS_004"!==t[n].resourceStatus){r=!0;break}})),r}}},6955:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toms-container"},[n("div",{staticClass:"toms-add-navBar"},[e._l(e.navList,(function(t){return[t.hidden?n("div",{key:t.navId,class:{current:e.navFlag===t.navId},on:{click:function(n){return e.navChange(t.navId)}}},[e._v(" "+e._s(t.name)+" ")]):e._e()]}))],2),n("div",{staticClass:"toms-detail-contentWrap",staticStyle:{height:"calc(100% - 45px - 57px)"}},[n("process-basic-details",{attrs:{basicData:e.basicData}}),n("dismission-info-details",{attrs:{basicData:e.dismissionInfo,navName:"navigation"}}),n("delivery-oppinion-details",{attrs:{basicData:e.deliveryOppinion,navName:"navigation"}}),"IT_LZZT_001"!=e.dismissionInfo.leaveStatus||"IT_LZFT_001"!=e.dismissionInfo.recruitJoin||"020"!=e.currentNode&&"030"!=e.currentNode&&"035"!=e.currentNode&&"040"!=e.currentNode&&"050"!=e.currentNode&&"060"!=e.currentNode&&"080"!=e.currentNode&&"090"!=e.currentNode?e._e():n("dismission-talk-details",{attrs:{basicData:e.dissmissTalk,navName:"navigation"}}),"IT_LZZT_001"!=e.dismissionInfo.leaveStatus||"030"!=e.currentNode&&"035"!=e.currentNode&&"040"!=e.currentNode&&"050"!=e.currentNode&&"060"!=e.currentNode&&"080"!=e.currentNode&&"090"!=e.currentNode?e._e():n("staff-dismiss-handover-details",{attrs:{basicData:e.employDismissApply,navName:"navigation"}}),"IT_LZZT_001"!=e.dismissionInfo.leaveStatus||"040"!=e.currentNode&&"050"!=e.currentNode&&"060"!=e.currentNode&&"080"!=e.currentNode&&"090"!=e.currentNode?e._e():n("clent-handover-info-details",{attrs:{basicData:e.clentDelivery,navName:"navigation"}}),"IT_LZZT_001"!=e.dismissionInfo.leaveStatus||"040"!=e.currentNode&&"050"!=e.currentNode&&"060"!=e.currentNode&&"080"!=e.currentNode&&"090"!=e.currentNode?e._e():n("director-approval-details",{attrs:{basicData:e.directorApproval,navName:"navigation"}}),"080"==e.currentNode||"090"==e.currentNode?n("ssc-approval-details",{attrs:{basicData:e.sscApproval,navName:"navigation"}}):e._e(),"090"==e.currentNode?n("dismiss-document-details",{attrs:{basicData:e.dismissDocument,navName:"navigation"}}):e._e(),n("div",{staticClass:"detailsContent"},[e._m(0),n("process-info",{attrs:{isDetails:!0}})],1)],1),n("div",{staticClass:"toms-add-submitForm"},[n("div",{staticClass:"item",on:{click:function(t){e.isShowImgModal=!0}}},[e._v("流程图")]),this.isFromNoReadPage?n("div",{staticClass:"item submit",on:{click:e.hasRead}},[e._v(" 已阅 ")]):e._e()]),n("process-image",{attrs:{isShowImgModal:e.isShowImgModal,src:e.entryProcessImage},on:{"update:isShowImgModal":function(t){e.isShowImgModal=t},"update:is-show-img-modal":function(t){e.isShowImgModal=t}}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title",attrs:{id:"nav11"}},[n("span",[e._v("流程信息")]),n("div",{staticClass:"line"})])}],a=n("1da1"),i=n("5530"),s=(n("96cf"),n("99af"),n("fb6a"),n("ff16")),c=n("0df0"),u=n("df8c"),d=n("f18c"),l=n("107f"),m=n("49e9"),p=n("d180"),f=n("dc7b"),y=n("06ef"),v=n("e5a1"),h=n("bd98"),I=n("ac83"),b=n("6d07"),N=(n("3881"),function(e){return[{name:"基本信息",navId:0,hidden:!0},{name:"离职人信息",navId:1,hidden:!0},{name:"交付意见",navId:2,hidden:!0},{name:"离职访谈信息",navId:3,hidden:"IT_LZZT_001"==e.dismissionInfo.leaveStatus&&"IT_LZFT_001"==e.dismissionInfo.recruitJoin&&("020"==e.currentNode||"030"==e.currentNode||"035"==e.currentNode||"040"==e.currentNode||"050"==e.currentNode||"060"==e.currentNode||"080"==e.currentNode||"090"==e.currentNode)},{name:"员工离职申请",navId:4,hidden:"IT_LZZT_001"==e.dismissionInfo.leaveStatus&&("030"==e.currentNode||"035"==e.currentNode||"040"==e.currentNode||"050"==e.currentNode||"060"==e.currentNode||"080"==e.currentNode||"090"==e.currentNode)},{name:"员工离职交接",navId:5,hidden:"IT_LZZT_001"==e.dismissionInfo.leaveStatus&&("030"==e.currentNode||"035"==e.currentNode||"040"==e.currentNode||"050"==e.currentNode||"060"==e.currentNode||"080"==e.currentNode||"090"==e.currentNode)},{name:"客户方交接信息",navId:6,hidden:"IT_LZZT_001"==e.dismissionInfo.leaveStatus&&("040"==e.currentNode||"050"==e.currentNode||"060"==e.currentNode||"080"==e.currentNode||"090"==e.currentNode)},{name:"总监审批",navId:7,hidden:"IT_LZZT_001"==e.dismissionInfo.leaveStatus&&("040"==e.currentNode||"050"==e.currentNode||"060"==e.currentNode||"080"==e.currentNode||"090"==e.currentNode)},{name:"事业部SSC行政",navId:9,hidden:"080"==e.currentNode||"090"==e.currentNode},{name:"离职证明",navId:10,hidden:"090"==e.currentNode},{name:"流程信息",navId:11,hidden:!0}]}),g=n("d14b"),O=(n("a417"),n("dc27")),j=n("2f62"),w={name:"DetailStaffFile",components:{navBar:s["a"],processBasicDetails:c["a"],dismissionInfoDetails:u["a"],deliveryOppinionDetails:d["a"],dismissionTalkDetails:l["a"],staffDismissHandoverDetails:m["a"],clentHandoverInfoDetails:p["a"],directorApprovalDetails:f["a"],financeApprovalDetails:y["a"],sscApprovalDetails:v["a"],dismissDocumentDetails:h["a"],processInfo:I["a"],processImage:b["a"]},data:function(){return{navFlag:0,basicData:{},jobHistoryData:[],isShowImgModal:!1,entryProcessImage:n("b2e0"),dismissionInfo:{employViolateMoney:0,employDeliverUserId:"",clientJoinUser:"",clientCompanyId:"",clientTwoLevelId:"",clientContractId:"",clientSaleJob:"",clientSaleLevel:"",clientPosition:"",contractStartTime:"",clientEntryName:"",clientEntryAddress:"",employPidNo:"",employSex:"",employType:""},deliveryOppinion:{deliverAddOrder:"IT_ATTR_003",deliverLeaveCause:""},dissmissTalk:{talkLeaveCause:""},employDismissApply:{},clentDelivery:{},directorApproval:{},financeApproval:{},sscApproval:{},dismissDocument:{},currentNode:"010"}},computed:Object(i["a"])(Object(i["a"])({},Object(j["e"])("user",["userInfo"])),{},{isFromNoReadPage:function(){return this.$route.query.fromNoReadPage},navList:function(){return N(this)}}),mounted:function(){this.getProcessDetails()},methods:{getProcessDetails:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$route.query.taskObj,!n){t.next=24;break}return o=JSON.parse(decodeURIComponent(n)),t.next=5,Object(g["p"])({taskInstanceId:o.taskInstanceId,taskFlowConfig:{flowName:o.flowName,version:o.version},taskNodeInstance:{nodeInstanceId:o.nodeInstanceId}});case 5:r=t.sent,e.basicData=r.relatedObject||{},e.basicData.launchPeople="[".concat(r.creatorNo,"] ").concat(r.taskInstance.creatorName),e.basicData.flowName=r.taskFlowConfig.flowName||"",e.basicData.nodeName=r.taskFlowNodeConfig.nodeName,e.basicData.taskName=r.taskInstance.taskName,e.currentNode=r.taskFlowNodeConfig.nodeName.slice(0,3),a=r.relatedObject||{},e.dismissionInfo=a,e.deliveryOppinion=a,e.dissmissTalk=a,e.employDismissApply=a,e.clentDelivery=a,e.directorApproval=a,e.financeApproval=a,e.sscApproval=a,e.dismissDocument=a,e.getEmployInfo(a.employId),a.wleaveFilesJson&&(e.employDismissApply.wleaveFile=JSON.parse(a.wleaveFilesJson).originName);case 24:case"end":return t.stop()}}),t)})))()},getEmployeeHistoryList:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,queryEmployHistoryList({employPidNo:e});case 2:o=n.sent,t.jobHistoryData=o||[];case 4:case"end":return n.stop()}}),n)})))()},navChange:function(e){this.navFlag=e;var t=document.querySelector("#nav".concat(e));t&&t.scrollIntoView()},hasRead:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,o,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query.taskObj,o=JSON.parse(decodeURIComponent(n)),r={},r.nodeInstanceIdList=[],r.nodeInstanceIdList.push(o.nodeInstanceId),t.next=7,Object(g["t"])(r);case 7:a=t.sent,"200"===a.code&&(e.$message.success("已阅成功"),i=e.$route,e.$store.dispatch("tagsView/delView",i).then((function(t){t.visitedViews;e.$router.push("/workbench/noread")})));case 9:case"end":return t.stop()}}),t)})))()},getEmployInfo:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(O["N"])({employId:e});case 2:o=n.sent,r=o.employInfo,t.$set(t.dismissionInfo,"clientCompanyId",r.clientCompanyId),t.$set(t.dismissionInfo,"employSex",r.employSex),t.dismissionInfo.employName="[".concat(r.employNo,"]").concat(r.employName),t.employDismissApply.employName="[".concat(r.employNo,"]").concat(r.employName),t.employDismissApply.orgId=r.orgId,t.dismissionInfo.clientCompanyId=r.clientCompanyId,t.dismissionInfo.clientSimpleName=r.clientSimpleName,t.dismissionInfo.clientTwoLevelId=r.clientTwoLevelId,t.dismissionInfo.clientContractId=r.clientContractId,t.dismissionInfo.clientSaleJob=r.clientSaleJob,t.dismissionInfo.clientSaleLevel=r.clientSaleLevel,t.dismissionInfo.clientPosition=r.clientPosition,t.dismissionInfo.contractStartTime=r.contractStartTime,t.dismissionInfo.clientEntryName=r.clientEntryName,t.dismissionInfo.clientEntryAddress=r.clientEntryAddress,t.dismissionInfo.employPidNo=r.employPidNo,t.dismissionInfo.employType=r.employType,t.dismissionInfo.employSocialCity=r.employSocialCity,t.dismissionInfo.orgId=r.orgId;case 23:case"end":return n.stop()}}),n)})))()}}},E=w,C=n("2877"),D=Object(C["a"])(E,o,r,!1,null,"106dd5e6",null);t["default"]=D.exports},"6d07":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"imgContainer"},[n("el-dialog",{attrs:{title:e.title,visible:e.showImgModal,width:"30%","close-on-click-modal":!1,top:"10vh"},on:{"update:visible":function(t){e.showImgModal=t}}},[n("el-image",{attrs:{src:e.src}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])])],1)],1)},r=[],a={name:"preceeImage",props:{isShowImgModal:{type:Boolean,default:!1},src:{type:String,default:""},title:{type:String,default:"流程图"}},data:function(){return{ccForm:{name:"",org:""},showImgModal:!1,loading:!1,optionList:[]}},watch:{isShowImgModal:{handler:function(e){e&&(this.showImgModal=!0)},immediate:!0},showImgModal:{handler:function(e){e||this.$emit("update:isShowImgModal",!1)}}},mounted:function(){},methods:{}},i=a,s=n("2877"),c=Object(s["a"])(i,o,r,!1,null,"7d9f3cd8",null);t["a"]=c.exports},dc27:function(e,t,n){"use strict";n.d(t,"t",(function(){return r})),n.d(t,"R",(function(){return a})),n.d(t,"db",(function(){return i})),n.d(t,"E",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"x",(function(){return u})),n.d(t,"J",(function(){return d})),n.d(t,"K",(function(){return l})),n.d(t,"G",(function(){return m})),n.d(t,"cb",(function(){return p})),n.d(t,"P",(function(){return f})),n.d(t,"bb",(function(){return y})),n.d(t,"N",(function(){return v})),n.d(t,"eb",(function(){return h})),n.d(t,"hb",(function(){return I})),n.d(t,"ab",(function(){return b})),n.d(t,"gb",(function(){return N})),n.d(t,"H",(function(){return g})),n.d(t,"I",(function(){return O})),n.d(t,"F",(function(){return j})),n.d(t,"L",(function(){return w})),n.d(t,"O",(function(){return E})),n.d(t,"fb",(function(){return C})),n.d(t,"jb",(function(){return D})),n.d(t,"w",(function(){return S})),n.d(t,"C",(function(){return L})),n.d(t,"s",(function(){return _})),n.d(t,"U",(function(){return T})),n.d(t,"V",(function(){return k})),n.d(t,"M",(function(){return F})),n.d(t,"v",(function(){return q})),n.d(t,"ib",(function(){return A})),n.d(t,"p",(function(){return x})),n.d(t,"h",(function(){return R})),n.d(t,"W",(function(){return P})),n.d(t,"g",(function(){return Z})),n.d(t,"n",(function(){return M})),n.d(t,"X",(function(){return J})),n.d(t,"B",(function(){return $})),n.d(t,"Q",(function(){return B})),n.d(t,"D",(function(){return H})),n.d(t,"l",(function(){return U})),n.d(t,"i",(function(){return V})),n.d(t,"m",(function(){return W})),n.d(t,"y",(function(){return G})),n.d(t,"A",(function(){return z})),n.d(t,"z",(function(){return K})),n.d(t,"S",(function(){return Q})),n.d(t,"c",(function(){return X})),n.d(t,"e",(function(){return Y})),n.d(t,"b",(function(){return ee})),n.d(t,"d",(function(){return te})),n.d(t,"j",(function(){return ne})),n.d(t,"f",(function(){return oe})),n.d(t,"Z",(function(){return re})),n.d(t,"T",(function(){return ae})),n.d(t,"q",(function(){return ie})),n.d(t,"Y",(function(){return se})),n.d(t,"r",(function(){return ce})),n.d(t,"o",(function(){return ue})),n.d(t,"u",(function(){return de})),n.d(t,"k",(function(){return le}));var o=n("b775");function r(e){return Object(o["a"])({url:"/employ/attr/queryEmployAttrList",method:"post",data:e})}function a(e){return Object(o["a"])({url:"/employ/archives/queryEmployList",method:"post",params:e})}function i(e){return Object(o["a"])({url:"/employ/attr/saveOrUpdateEmployAttr",method:"post",data:e})}function s(e){return Object(o["a"])({url:"/employ/attr/queryEmployAttr",method:"post",params:e})}function c(e){return Object(o["a"])({url:"/employ/attr/addOrCancelAttr",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/employ/attr/queryEmployAttrHistory",method:"post",data:e})}function d(e){return Object(o["a"])({url:"/employ/free/queryEmployFreeList",method:"post",data:e})}function l(e){return Object(o["a"])({url:"/employ/free/queryEmployFreePoolList",method:"post",data:e})}function m(e){return Object(o["a"])({url:"/employ/free/queryEmployFree",method:"post",params:e})}function p(e){return Object(o["a"])({url:"/employ/archives/saveOrUpdateEmploy",method:"post",data:e})}function f(e){return Object(o["a"])({url:"/employ/archives/queryEmployInfoList",method:"post",data:e})}function y(e){return Object(o["a"])({url:"/employ/archives/removeEmployInfo",method:"post",params:e})}function v(e){return Object(o["a"])({url:"/employ/archives/queryEmployInfoDetail",method:"post",params:e})}function h(e){return Object(o["a"])({url:"/employ/free/saveOrUpdateEmployFree",method:"post",data:e})}function I(e){return Object(o["a"])({url:"/employ/free/updateEmployFreeEntry",method:"post",data:e})}function b(e){return Object(o["a"])({url:"/employ/free/removeEmployFree",method:"post",params:e})}function N(e){return Object(o["a"])({url:"/employ/free/updateCancelEmployFree",method:"post",data:e})}function g(e){return Object(o["a"])({url:"/employ/free/queryEmployFreeDetail",method:"post",params:e})}function O(e){return Object(o["a"])({url:"/employ/free/queryEmployFreeHistory",method:"post",data:e})}function j(e){return Object(o["a"])({url:"/employ/archives/queryEmployFormalList",method:"post",data:e})}function w(e){return Object(o["a"])({url:"/employ/archives/queryEmployHistoryList",method:"post",params:e})}function E(e){return Object(o["a"])({url:"/employ/archives/queryEmployInfo",method:"post",params:e})}function C(e){return Object(o["a"])({url:"/employ/archives/updateBatchFormal",method:"post",data:e})}function D(e){return Object(o["a"])({url:"/employ/archives/updateFormalDelay",method:"post",data:e})}function S(){return Object(o["a"])({url:"/employ/archives/queryAppointCount",method:"post"})}function L(e){return Object(o["a"])({url:"/employ/archives/queryEmployBaseDetail?employId=".concat(e.employId),method:"post"})}function _(e){return Object(o["a"])({url:"/employ/archives/getEmployBaseDetail",method:"post",params:e})}function T(e){return Object(o["a"])({url:"/employ/archives/queryEmployWorkCount",method:"post",params:e})}function k(e){return Object(o["a"])({url:"/employ/archives/queryLastEmployChangeRecord",method:"post",params:e})}function F(e){return Object(o["a"])({url:"/employ/archives/queryEmployInfoContractPage",method:"post",data:e})}function q(e){return Object(o["a"])({url:"/employ/archives/operateEmployInfoContract",method:"post",data:e})}function A(e){return Object(o["a"])({url:"/employ/archives/updateEmployInfoContract",method:"post",data:e})}function x(e){return Object(o["a"])({url:"/employ/archives/exportEmployInfoContract",method:"post",data:e})}function R(e){return Object(o["a"])({url:"/employ/archives/checkSpecialDate",method:"post",data:e})}function P(e){return Object(o["a"])({url:"/employ/free/queryNewEmployFreeDetail",method:"post",params:e})}function Z(e){return Object(o["a"])({url:"/employ/archives/checkFlow",method:"post",params:e})}function M(e){return Object(o["a"])({url:"/employ/archives/exportEmploy",method:"post",data:e})}function J(e){return Object(o["a"])({url:"/system/org/queryOrgMoney?employType=".concat(e.employType),method:"post"})}function $(e){return Object(o["a"])({url:"/employ/activity/getNewEmployList",method:"post",data:e})}function B(e){return Object(o["a"])({url:"/employ/activity/getReductionEmployList",method:"post",data:e})}function H(e){return Object(o["a"])({url:"/employ/activity/getPositiveEmployList",method:"post",data:e})}function U(e){return Object(o["a"])({url:"/employ/activity/exportPositiveEmployExcel",method:"post",data:e})}function V(e){return Object(o["a"])({url:"/employ/activity/exportNewEmployExcel",method:"post",data:e})}function W(e){return Object(o["a"])({url:"/employ/activity/exportReductionEmployExcel",method:"post",data:e})}function G(e){return Object(o["a"])({url:"/business/client/queryClientCompanySelectListByLike",method:"post",params:e})}function z(e){return Object(o["a"])({url:"/business/contract/queryContractSelectByOrgIdANDClientCompanyIdOnEmploy",method:"post",params:e})}function K(e){return Object(o["a"])({url:"/business/client/queryClientCompanyWorkplaceListByLike",method:"post",params:e})}function Q(e){return Object(o["a"])({url:"/employ/activity/getaddOrLeaveEmployList",method:"post",data:e})}function X(e){return Object(o["a"])({url:"/employ/two/updChangeLeave",method:"post",data:e})}function Y(e){return Object(o["a"])({url:"/employ/two/updChangeEmployType",method:"post",data:e})}function ee(e){return Object(o["a"])({url:"/employ/two/updChangeZhuanOrg",method:"post",data:e})}function te(e){return Object(o["a"])({url:"/employ/two/updChangeTiaoGang",method:"post",data:e})}function ne(e){return Object(o["a"])({url:"/employ/two/exportUnFormalEmployChangeFinanceList",method:"post",data:e})}function oe(e){return Object(o["a"])({url:"/employ/two/getTwoDetail",method:"get",params:e})}function re(e){return Object(o["a"])({url:"/system/user/queryUserSelectListByCondition",method:"post",params:e})}function ae(e){return Object(o["a"])({url:"/employ/archives/queryEmployRosterList",method:"post",data:e})}function ie(e){return Object(o["a"])({url:"/employ/archives/exportEmployRoster",method:"post",data:e})}function se(e){return Object(o["a"])({url:"/employ/archives/queryRosterList",method:"post",data:e})}function ce(e){return Object(o["a"])({url:"/employ/archives/exportRoster",method:"post",data:e})}function ue(e){return Object(o["a"])({url:"/employ/free/exportEmployFree",method:"post",data:e})}function de(e){return Object(o["a"])({url:"/employ/rosterrealtime/getLastContrastInfo",method:"get",data:e})}function le(e){return Object(o["a"])({url:"/employ/rosterrealtime/exportContrastExcel",method:"get",data:e})}}}]);