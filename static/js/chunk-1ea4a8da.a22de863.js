(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ea4a8da"],{"052e":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("是否已开具离职证明")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.hrIsLeaveFile)))])]),t("div",{staticClass:"item "},[t("div",{staticClass:"label"},[a._v("离职证明开具日期")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("timeFormat")(a.basicData.hrLeaveFileDate,"yyyy-mm-dd")))])]),t("div",{staticClass:"item "},[t("div",{staticClass:"label"},[a._v("离职证明文件")]),t("div",{staticClass:"value affix",on:{click:a.docPreview}},[a._v(a._s(a.fileObj.originName||"--"))])]),t("div",{staticClass:"item "},[t("div",{staticClass:"label"},[a._v("未开离职证明原因")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.unLeaveCertifyCause||"--"))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav10"}},[t("span",[a._v("离职证明")])])}],l={name:"DismissDocDetails",props:{basicData:{type:Object,default:function(){return{}}}},watch:{deep:!0,basicData:{handler:function(a){a.leaveFilesJson&&(this.fileObj=JSON.parse(a.leaveFilesJson),console.log(this.fileObj))}}},data:function(){return{fileObj:{}}},mounted:function(){},methods:{docPreview:function(){var a=this.fileObj.fileId,s="https://www.tobowork.com//api/tobosoft-toms/cos/file/download/"+a,t=document.createElement("a");t.setAttribute("download",this.fileObj.originName),t.href=s,document.body.appendChild(t),t.click(),t.remove()}}},v=l,c=(t("3723"),t("2877")),d=Object(c["a"])(v,i,e,!1,null,"3e7b4f90",null);s["a"]=d.exports},"056a":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("客户结算截止日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.clientBalanceDate,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("客户方交接情况")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientHandDescCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("是否有客户方资产归还")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientIsAssetsCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("归还客户方资产名称")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientAssetsName||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("归还资产是否完好")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientAssetsOkCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("其他说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientDesc||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("预计办理离职手续日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.clientPreLeaveFileDate,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职计薪截止日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.clientMoneyEndDate,"yyyy-mm-dd"))+" ")])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav6"}},[t("span",[a._v("客户方交接信息")])])}],l={name:"ClientHandoverInfoDetails",props:{basicData:{type:Object,default:function(){return{}}}},filters:{hasLeave:function(a){return"TRUE"===a?"有":"无"}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"f8374d50",null);s["a"]=d.exports},"0df0":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"detailsContent"},[t("div",{staticClass:"title",attrs:{id:a.navName+"0"}},[t("span",[a._v("基本信息")]),t("div",{staticClass:"line"})]),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("工作主题")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.taskName||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("流程名称")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.flowName||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("发起人")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.launchPeople||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("当前环节")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.nodeName||"--")+" ")])])])])},e=[],l={name:"BasicDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"4e7acd04",null);s["a"]=d.exports},3723:function(a,s,t){"use strict";t("ae5d")},"63ad":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("预计离场日期")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("timeFormat")(a.basicData.talkPreOutsiteDate,"yyyy-mm-dd")))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("预计离职日期")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("timeFormat")(a.basicData.talkPreLeaveDate,"yyyy-mm-dd")))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职类型")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.talkLeaveTypeCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职原因")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.talkLeaveCauseCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职原因说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.talkLeaveDesc||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("是否有其他特殊情况")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.isSpecial)))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职获悉日期")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("timeFormat")(a.basicData.talkLeaveDate,"yyyy-mm-dd")))])]),t("div",{staticClass:"item addBorder"},[t("div",{staticClass:"label"},[a._v("访谈结果")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.talkResultCn||"--"))])]),t("div",{staticClass:"item oneRow"},[t("div",{staticClass:"label"},[a._v("访谈信息说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.talkMessage||"--"))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav3"}},[t("span",[a._v("离职访谈信息")])])}],l={name:"DissmissionTalkDetails",props:{basicData:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"65020de5",null);s["a"]=d.exports},6494:function(a,s,t){a.exports=t.p+"static/img/new_staff_dismiss.969cb86b.png"},"7e6f":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("是否有公司资产需归还")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscIsAssetsCn))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("归还公司资产名称")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscAssetsName||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("归还固定资产是否完好")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscAssetsOkCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("信息系统账号处理情况")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscInformationCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职日期")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("timeFormat")(a.basicData.confirmLeaveDate,"yyyy-mm-dd")))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职手续办理方式")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscLeaveTypeCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("委托说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscEntrustDesc||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("其他说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.sscOtherDesc||"--"))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav9"}},[t("span",[a._v("事业部SSC行政")])])}],l={name:"SSCApprovalDetails",props:{basicData:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"6ce73116",null);s["a"]=d.exports},"8ed00":function(a,s,t){},"968d0":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("备用金是否已结清")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.finaIsImprest)))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("个人借款是否已结清")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.finaIsLoan)))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("发票是否已交接")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.finaIsInvoice)))])]),t("div",{staticClass:"item addBorder"},[t("div",{staticClass:"label"},[a._v("应收账款是否已交接")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.finaIsAnswerMoney)))])]),t("div",{staticClass:"item oneRow"},[t("div",{staticClass:"label"},[a._v("其他说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.finaDesc||"--"))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav8"}},[t("span",[a._v("财务审批")])])}],l={name:"DirectorApprovalDetails",props:{basicData:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"7ce8b437",null);s["a"]=d.exports},"9e54":function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职类型")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.deliverLeaveTypeCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职原因")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.deliverLeaveCauseCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("加入名单")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.deliverAddOrderCn||"--"))])]),t("div",{staticClass:"item addBorder"},[t("div",{staticClass:"label"},[a._v("加入名单原因")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.deliverAddOrderDesc||"--"))])]),t("div",{staticClass:"item oneRow"},[t("div",{staticClass:"label"},[a._v("交付意见")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.deliverDesc||"--"))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav2"}},[t("span",[a._v("交付意见")])])}],l={name:"DeliveryOppinionDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"2f4f710e",null);s["a"]=d.exports},a11a:function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item oneRow"},[t("div",{staticClass:"label"},[a._v("是否需要总监审批")]),t("div",{staticClass:"value"},[a._v(a._s(a._f("yesOrNoFilter")(a.basicData.isLeaderAudit)))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav7"}},[t("span",[a._v("总监审批")])])}],l={name:"DirectorApprovalDetails",props:{basicData:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"bc975738",null);s["a"]=d.exports},ae5d:function(a,s,t){},b1fe:function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("申请人")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.employName||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("申请单号")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.wapplyNo||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所属组织")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.orgId||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("申请日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.wleaveApplyDate,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("入职日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.wentryDate,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.wleaveDate,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所交接事项")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.wjoinItem||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所交接资料")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.wjoinDoc||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("交接人类型")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientJoinUserTypeCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("客户方交接人")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientJoinUserCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("交接人电话")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientJoinUserPhone||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职原因")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.deliverLeaveTypeCn||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("离职说明")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.wleaveRemark||"--"))])]),t("div",{staticClass:"item oneRow",staticStyle:{"border-top":"1px solid #e4e7ed"},on:{click:a.downloadFile}},[t("div",{staticClass:"label"},[a._v("附件")]),t("div",{staticClass:"value affix"},[a._v(a._s(a.basicData.wleaveFile||"--"))])])])])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav4"}},[t("span",[a._v("员工离职申请")]),t("div",{staticClass:"line"})])}],l={name:"StaffDismissHandoverDetails",props:{basicData:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{downloadFile:function(){var a=this.basicData.wleaveFiles;if(a){var s="https://www.tobowork.com//api/tobosoft-toms/cos/file/download/"+a,t=document.createElement("a");t.setAttribute("download",this.basicData.wleaveFile),t.href=s,document.body.appendChild(t),t.click(),t.remove()}}}},v=l,c=(t("d277"),t("2877")),d=Object(c["a"])(v,i,e,!1,null,"25d0ef61",null);s["a"]=d.exports},c39e:function(a,s,t){"use strict";var i=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"detailsContent"},[a._m(0),t("div",{staticClass:"detailsItem"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("工号/姓名")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.employName||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所属组织")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.orgId||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所属客户")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientCompanyId||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("客户简称")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientSimpleName||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所属客户二级分类")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientTwoLevelId||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("所属客户合同")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientContractId||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("结算岗位")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientSaleJob||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("结算职级")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientSaleLevel||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("客户方岗位")]),t("div",{staticClass:"value"},[a._v(a._s(a.basicData.clientPosition||"--"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("入职日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.contractStartTime,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("职场名称")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.clientEntryName||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("职场地址")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.clientEntryAddress||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("证件号码")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.employPidNo||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("性别")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("getBaseDataLabel")(a.basicData.employSex,this))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("员工类型")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("getBaseDataLabel")(a.basicData.employType,this))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("员工状态")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("getBaseDataLabel")(a.basicData.employStatus,this))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("联系电话")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.employMobile||"--")+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("预计离职日期")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a._f("timeFormat")(a.basicData.employPreLeaveDate,"yyyy-mm-dd"))+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("对应交付")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.employDeliverUserIdCn||"--")+" ")])]),t("div",{class:["item","IT_LZZT_002"!=a.basicData.leaveStatus?"":"addBorder"]},[t("div",{staticClass:"label"},[a._v("违约金(元)")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.employViolateMoney||"--")+" ")])]),t("div",{class:["item","IT_LZZT_002"!=a.basicData.leaveStatus?"":"oneRow"]},[t("div",{staticClass:"label"},[a._v("员工离职状态")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.leaveStatusCn||"--")+" ")])]),"IT_LZZT_002"!=a.basicData.leaveStatus?t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[a._v("是否需要招聘访谈")]),t("div",{staticClass:"value"},[a._v(" "+a._s(a.basicData.recruitJoinCn||"--")+" ")])]):a._e()])])},e=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"title",attrs:{id:"nav1"}},[t("span",[a._v("离职人信息")])])}],l={name:"DismissionInfoDetails",props:{basicData:{type:Object,default:function(){return{}}}},data:function(){return{}},mounted:function(){},methods:{}},v=l,c=t("2877"),d=Object(c["a"])(v,i,e,!1,null,"e300afe2",null);s["a"]=d.exports},d277:function(a,s,t){"use strict";t("8ed00")}}]);