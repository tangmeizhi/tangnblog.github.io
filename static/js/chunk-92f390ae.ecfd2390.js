(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92f390ae"],{"7fc8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"toms-container"},[r("div",{staticClass:"toms-list-searchWrap"},[r("zm-Search",{ref:"search",attrs:{inputList:t.inputConfig,btnConfig:t.btnConfig},on:{search:t.search,reset:t.resetTable}})],1),r("div",{staticClass:"toms-list-tableWrap"},[r("zm-table",{ref:"tableRef",staticStyle:{width:"100%"},attrs:{"header-cell-style":{"text-align":"center"},tableData:t.tableData,columns:t.columnsList,height:"542px",currentPage:t.pageData.pageIndex,pageSize:t.pageData.pageSize,total:t.pageData.pageCount,sizeList:t.sizeList},on:{handleCurrentChange:t.handleCurrentChange,sortChange:t.sortChange,handleSizeChange:t.handleSizeChange}})],1)])},a=[],o=r("3835"),u=r("1da1"),i=(r("159b"),r("a434"),r("96cf"),r("8cc7")),c=r("a937"),p=r("ed08"),l=r("5f98"),s=function(t){var e=t.$store.state.baseData.baseDataOptionList.IT_XZTY,r=t.$store.state.baseData.baseDataOptionList.IT_XZZL;return[{type:"text-input",bind_key:"keyWord",label:"工号/姓名",placeholder:"工号或姓名",span:6,labelWidth:80,inputWidth:240},{type:"cascader-input",bind_key:"orgId",label:"所属部门",optionList:t.$store.state.baseData.orgTreeDataDescByType[0].children,span:6,checkStrictly:!0,propLabel:"orgName",propValue:"orgId"},{type:"select-input",bind_key:"freeType",label:"闲置种类",span:6,optionList:e},{type:"select-input",bind_key:"freeStatus",label:"当前状态",span:6,optionList:r},{type:"date-input",span:6,label:"闲置时间段",inputWidth:240,labelWidth:80,bind_key:"startDate",datePickerType:"daterange"}]},d={span:24,customList:[],leftBtnHidden:!Object(l["a"])("employ.leavestore.list")},m=function(t){var e=Object(l["a"])("employ.leavestore.info");return[{label:"序号",type:"index",fixed:"left",width:"50px",kind:"render",render:function(e,r){var n=r.$index+1,a=(t.pageData.pageIndex-1)*t.pageData.pageSize;return e("span",n+a)}},{label:"工号",prop:"employNo"},{label:"姓名",prop:"employName",sortable:"custom",align:"left"},{label:"所属部门",prop:"orgCn",minWidth:150,align:"left"},{label:"客户简称",prop:"clientCompanyId",sortable:"custom",align:"left",minWidth:100},{label:"公司岗位",prop:"companyJob",align:"left"},{label:"入职日期",prop:"contractStartTime",minWidth:"120px",kind:"render",render:function(t,e){var r=Object(p["d"])(e.row.contractStartTime,"date");return t("span",r)}},{label:"闲置开始时间",prop:"freeStartDate",minWidth:"120px",kind:"render",render:function(t,e){var r=Object(p["d"])(e.row.freeStartDate,"date");return t("span",r)}},{label:"闲置天数",prop:"day"},{prop:"freeType",label:"闲置种类",sortable:"custom",minWidth:100},{label:"当前状态",prop:"freeStatusCn",sortable:"custom",minWidth:100,align:"left"},{label:"是否已安排岗位",prop:"isArrangeJob",minWidth:120},{label:"操作",fixed:"right",width:"120px",kind:"render",render:function(r,n){return r("span",{style:{color:"#078BFD",cursor:"pointer",display:e?"span":"none"},on:{click:function(){t.$router.push({path:"/hr/idleDetail",query:{employFreeId:n.row.employFreeId,employId:n.row.employId}})}}},"详情")}}]},f=(r("a417"),r("dc27")),y={name:"IdlePoolList",components:{zmTable:i["a"],zmSearch:c["a"]},data:function(){return{btnConfig:d,tableData:[],pageData:{pageIndex:1,pageSize:15,pageCount:0},sortData:[],searchData:{},sizeList:[15,30,50],optionList:[]}},computed:{columnsList:function(){return m(this)},inputConfig:function(){return s(this)}},mounted:function(){this.getFreePoolList()},activated:function(){var t=this;this.$nextTick((function(){t.$refs.tableRef.doLayoutTable()}))},methods:{deleteChildren:p["c"],getFreePoolList:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n,a,o,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t||{},a={input:n},o=Object.assign({},e.pageData,a),o.input.displays=e.sortData,r.next=6,Object(f["K"])(o);case 6:u=r.sent,e.pageData.pageIndex=u.pageIndex,e.pageData.pageCount=u.rowCount,e.tableData=u.result;case 10:case"end":return r.stop()}}),r)})))()},search:function(t){var e=JSON.parse(JSON.stringify(t));if(e.orgId&&e.orgId.length?e.orgId=e.orgId[e.orgId.length-1]:delete e.orgId,e.startDate&&e.startDate.length){var r=Object(o["a"])(e.startDate,2),n=r[0],a=void 0===n?"":n,u=r[1],i=void 0===u?"":u;e.freeStartDate=a,e.freeEndDate=i,delete e.startDate}this.searchData=this.searchParams,this.getFreePoolList(e)},handleSizeChange:function(t){this.pageData.pageIndex=1,this.pageData.pageSize=t,this.getFreePoolList(this.searchData)},resetTable:function(){this.pageData.pageIndex=1,this.searchData={},this.getFreePoolList(this.searchData)},handleCurrentChange:function(t){this.pageData.pageIndex=t,this.getFreePoolList(this.searchData)},sortChange:function(t){var e=this;this.sortData=[];var r="";r="ascending"===t.order?"asc":"desc";var n={display:r,field:t.prop};0===this.sortData.length?this.sortData.push(n):this.sortData.forEach((function(t,r){if(t.field===n.field){if(t.display===n.display)return void e.sortData.splice(r,1);e.sortData.splice(r,1),e.sortData.push(n)}else e.sortData.push(n)})),this.getFreePoolList()}}},h=y,b=r("2877"),g=Object(b["a"])(h,n,a,!1,null,null,null);e["default"]=g.exports},dc27:function(t,e,r){"use strict";r.d(e,"t",(function(){return a})),r.d(e,"R",(function(){return o})),r.d(e,"db",(function(){return u})),r.d(e,"E",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"x",(function(){return p})),r.d(e,"J",(function(){return l})),r.d(e,"K",(function(){return s})),r.d(e,"G",(function(){return d})),r.d(e,"cb",(function(){return m})),r.d(e,"P",(function(){return f})),r.d(e,"bb",(function(){return y})),r.d(e,"N",(function(){return h})),r.d(e,"eb",(function(){return b})),r.d(e,"hb",(function(){return g})),r.d(e,"ab",(function(){return O})),r.d(e,"gb",(function(){return j})),r.d(e,"H",(function(){return v})),r.d(e,"I",(function(){return D})),r.d(e,"F",(function(){return C})),r.d(e,"L",(function(){return E})),r.d(e,"O",(function(){return L})),r.d(e,"fb",(function(){return x})),r.d(e,"jb",(function(){return I})),r.d(e,"w",(function(){return q})),r.d(e,"C",(function(){return w})),r.d(e,"s",(function(){return F})),r.d(e,"U",(function(){return S})),r.d(e,"V",(function(){return k})),r.d(e,"M",(function(){return T})),r.d(e,"v",(function(){return W})),r.d(e,"ib",(function(){return z})),r.d(e,"p",(function(){return P})),r.d(e,"h",(function(){return R})),r.d(e,"W",(function(){return B})),r.d(e,"g",(function(){return N})),r.d(e,"n",(function(){return A})),r.d(e,"X",(function(){return _})),r.d(e,"B",(function(){return $})),r.d(e,"Q",(function(){return J})),r.d(e,"D",(function(){return U})),r.d(e,"l",(function(){return H})),r.d(e,"i",(function(){return Z})),r.d(e,"m",(function(){return X})),r.d(e,"y",(function(){return G})),r.d(e,"A",(function(){return K})),r.d(e,"z",(function(){return M})),r.d(e,"S",(function(){return V})),r.d(e,"c",(function(){return Y})),r.d(e,"e",(function(){return Q})),r.d(e,"b",(function(){return tt})),r.d(e,"d",(function(){return et})),r.d(e,"j",(function(){return rt})),r.d(e,"f",(function(){return nt})),r.d(e,"Z",(function(){return at})),r.d(e,"T",(function(){return ot})),r.d(e,"q",(function(){return ut})),r.d(e,"Y",(function(){return it})),r.d(e,"r",(function(){return ct})),r.d(e,"o",(function(){return pt})),r.d(e,"u",(function(){return lt})),r.d(e,"k",(function(){return st}));var n=r("b775");function a(t){return Object(n["a"])({url:"/employ/attr/queryEmployAttrList",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/employ/archives/queryEmployList",method:"post",params:t})}function u(t){return Object(n["a"])({url:"/employ/attr/saveOrUpdateEmployAttr",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/employ/attr/queryEmployAttr",method:"post",params:t})}function c(t){return Object(n["a"])({url:"/employ/attr/addOrCancelAttr",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/employ/attr/queryEmployAttrHistory",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/employ/free/queryEmployFreeList",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/employ/free/queryEmployFreePoolList",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/employ/free/queryEmployFree",method:"post",params:t})}function m(t){return Object(n["a"])({url:"/employ/archives/saveOrUpdateEmploy",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfoList",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/employ/archives/removeEmployInfo",method:"post",params:t})}function h(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfoDetail",method:"post",params:t})}function b(t){return Object(n["a"])({url:"/employ/free/saveOrUpdateEmployFree",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/employ/free/updateEmployFreeEntry",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/employ/free/removeEmployFree",method:"post",params:t})}function j(t){return Object(n["a"])({url:"/employ/free/updateCancelEmployFree",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/employ/free/queryEmployFreeDetail",method:"post",params:t})}function D(t){return Object(n["a"])({url:"/employ/free/queryEmployFreeHistory",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/employ/archives/queryEmployFormalList",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/employ/archives/queryEmployHistoryList",method:"post",params:t})}function L(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfo",method:"post",params:t})}function x(t){return Object(n["a"])({url:"/employ/archives/updateBatchFormal",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/employ/archives/updateFormalDelay",method:"post",data:t})}function q(){return Object(n["a"])({url:"/employ/archives/queryAppointCount",method:"post"})}function w(t){return Object(n["a"])({url:"/employ/archives/queryEmployBaseDetail?employId=".concat(t.employId),method:"post"})}function F(t){return Object(n["a"])({url:"/employ/archives/getEmployBaseDetail",method:"post",params:t})}function S(t){return Object(n["a"])({url:"/employ/archives/queryEmployWorkCount",method:"post",params:t})}function k(t){return Object(n["a"])({url:"/employ/archives/queryLastEmployChangeRecord",method:"post",params:t})}function T(t){return Object(n["a"])({url:"/employ/archives/queryEmployInfoContractPage",method:"post",data:t})}function W(t){return Object(n["a"])({url:"/employ/archives/operateEmployInfoContract",method:"post",data:t})}function z(t){return Object(n["a"])({url:"/employ/archives/updateEmployInfoContract",method:"post",data:t})}function P(t){return Object(n["a"])({url:"/employ/archives/exportEmployInfoContract",method:"post",data:t})}function R(t){return Object(n["a"])({url:"/employ/archives/checkSpecialDate",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/employ/free/queryNewEmployFreeDetail",method:"post",params:t})}function N(t){return Object(n["a"])({url:"/employ/archives/checkFlow",method:"post",params:t})}function A(t){return Object(n["a"])({url:"/employ/archives/exportEmploy",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/system/org/queryOrgMoney?employType=".concat(t.employType),method:"post"})}function $(t){return Object(n["a"])({url:"/employ/activity/getNewEmployList",method:"post",data:t})}function J(t){return Object(n["a"])({url:"/employ/activity/getReductionEmployList",method:"post",data:t})}function U(t){return Object(n["a"])({url:"/employ/activity/getPositiveEmployList",method:"post",data:t})}function H(t){return Object(n["a"])({url:"/employ/activity/exportPositiveEmployExcel",method:"post",data:t})}function Z(t){return Object(n["a"])({url:"/employ/activity/exportNewEmployExcel",method:"post",data:t})}function X(t){return Object(n["a"])({url:"/employ/activity/exportReductionEmployExcel",method:"post",data:t})}function G(t){return Object(n["a"])({url:"/business/client/queryClientCompanySelectListByLike",method:"post",params:t})}function K(t){return Object(n["a"])({url:"/business/contract/queryContractSelectByOrgIdANDClientCompanyIdOnEmploy",method:"post",params:t})}function M(t){return Object(n["a"])({url:"/business/client/queryClientCompanyWorkplaceListByLike",method:"post",params:t})}function V(t){return Object(n["a"])({url:"/employ/activity/getaddOrLeaveEmployList",method:"post",data:t})}function Y(t){return Object(n["a"])({url:"/employ/two/updChangeLeave",method:"post",data:t})}function Q(t){return Object(n["a"])({url:"/employ/two/updChangeEmployType",method:"post",data:t})}function tt(t){return Object(n["a"])({url:"/employ/two/updChangeZhuanOrg",method:"post",data:t})}function et(t){return Object(n["a"])({url:"/employ/two/updChangeTiaoGang",method:"post",data:t})}function rt(t){return Object(n["a"])({url:"/employ/two/exportUnFormalEmployChangeFinanceList",method:"post",data:t})}function nt(t){return Object(n["a"])({url:"/employ/two/getTwoDetail",method:"get",params:t})}function at(t){return Object(n["a"])({url:"/system/user/queryUserSelectListByCondition",method:"post",params:t})}function ot(t){return Object(n["a"])({url:"/employ/archives/queryEmployRosterList",method:"post",data:t})}function ut(t){return Object(n["a"])({url:"/employ/archives/exportEmployRoster",method:"post",data:t})}function it(t){return Object(n["a"])({url:"/employ/archives/queryRosterList",method:"post",data:t})}function ct(t){return Object(n["a"])({url:"/employ/archives/exportRoster",method:"post",data:t})}function pt(t){return Object(n["a"])({url:"/employ/free/exportEmployFree",method:"post",data:t})}function lt(t){return Object(n["a"])({url:"/employ/rosterrealtime/getLastContrastInfo",method:"get",data:t})}function st(t){return Object(n["a"])({url:"/employ/rosterrealtime/exportContrastExcel",method:"get",data:t})}}}]);