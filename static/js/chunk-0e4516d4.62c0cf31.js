(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e4516d4"],{"48ca":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"detailsContent"},[t._m(0),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("入职客户方")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientCompanyId||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("客户简称")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientSimpleName||"--"))])]),t.basicData.clientTwoLevelId?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("入职客户二级分类")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientTwoLevelId||"--"))])]):t._e(),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("所属客户合同")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientContractId||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("结算岗位")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientSaleJob||"--"))])]),s("div",{staticClass:"item addBorder"},[s("div",{staticClass:"label"},[t._v("结算职级")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientSaleLevel||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("客户方岗位")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientPosition||"--"))])]),"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("在场状态")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employSiteStatus||"--"))])]):t._e(),"030"==t.currentNode&&"IT_OSIT_001"==t.$parent.allFormData.employInfoJson.employSiteStatus?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("入场日期")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientEntryTime||"--"))])]):t._e(),"030"==t.currentNode&&"IT_OSIT_001"==t.$parent.allFormData.employInfoJson.employSiteStatus?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("客户职场名称")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientEntryName||"--"))])]):t._e(),"030"==t.currentNode&&"IT_OSIT_001"==t.$parent.allFormData.employInfoJson.employSiteStatus?s("div",{staticClass:"item addBorder"},[s("div",{staticClass:"label"},[t._v("客户职场地址")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientEntryAddress||"--"))])]):t._e(),"030"==t.currentNode?s("div",{class:["item","IT_OSIT_001"==t.$parent.allFormData.employInfoJson.employSiteStatus?"oneRow":""]},[s("div",{staticClass:"label"},[t._v("对应交付")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyDeliver||"--"))])]):t._e()])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav14"}},[s("span",[t._v("客户方信息")])])}],l={name:"CCCDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}},currentNode:{type:String,default:function(){return"010"}}},data:function(){return{}},mounted:function(){},methods:{}},c=l,n=s("2877"),v=Object(n["a"])(c,i,e,!1,null,"14c2c2fe",null);a["a"]=v.exports},"4bea":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detailsContent"},[s("div",{staticClass:"detailsContent"},[t._m(0),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("员工姓名")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("手机号码")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employMobile||"--"))])]),s("div",{staticClass:"item  oneRow"},[s("div",{staticClass:"label"},[t._v("员工定薪流程")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.taskIdCn||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("入职办理城市")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.preEntryCityCn))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("入职办理地址")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.preEntryAddressCn))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("预约入职日期")]),s("div",{staticClass:"value"},[s("span",[t._v(t._s(t._f("timeFormat")(t.basicData.preEntryDate,"yyyy-mm-dd")))]),s("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.basicData.timeRange||"--"))])])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("特殊情况预约")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("isSpecial")(t.basicData.specialBespeak)))])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav1"}},[s("span",[t._v("预约入职")])])}],l={name:"AppointmentInDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}}},filters:{isSpecial:function(t){return"true"===t?"是":"否"}},data:function(){return{}},mounted:function(){},methods:{}},c=l,n=s("2877"),v=Object(n["a"])(c,i,e,!1,null,"51cc6790",null);a["a"]=v.exports},"6d59":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"detailsContent"},[t._m(0),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("工作主题")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientCompanyId||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("流程名称")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientCompanyName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("发起人")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.clientSimpleName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("当前环节")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.creditCode||"--"))])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav1"}},[s("span",[t._v("基本信息")])])}],l={name:"BasicDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}}},data:function(){return{}},mounted:function(){},methods:{}},c=l,n=s("2877"),v=Object(n["a"])(c,i,e,!1,null,"608e9b4e",null);a["a"]=v.exports},"6d73":function(t,a,s){"use strict";s("ccdb")},"6fd0":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"toms-list-tableWrap detailsContent"},[t._m(0),s("zm-table",{staticStyle:{width:"100%"},attrs:{border:"",tableData:t.basicData,columns:t.columns,isShowPagenation:!1}})],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav15"}},[s("span",[t._v("在职历史")])])}],l=s("8cc7"),c=(s("ac1f"),s("1276"),s("ed08")),n=(s("5f98"),Object(c["h"])("companyScale"),Object(c["h"])("riskType"),Object(c["h"])("financeType"),Object(c["h"])("cooperationMode"),Object(c["h"])("scaleType"),Object(c["h"])("companyNature"),Object(c["h"])("IndustryType"),Object(c["h"])("IndustrySubType"),function(t){return[{label:"原工号/姓名",prop:"employName",width:"180px",kind:"render",render:function(t,a){var s="".concat(a.row.employName);return t("span",s)}},{label:"原归属部门",prop:"orgId"},{label:"入职日期",prop:"contractStartTime",minWidth:"120px",kind:"render",render:function(t,a){return t("span",a.row.contractStartTime?a.row.contractStartTime.split("T")[0]:"")}},{label:"离职日期",prop:"contractLeaveTime",kind:"render",render:function(t,a){return t("span",a.row.contractLeaveTime?a.row.contractLeaveTime.split("T")[0]:"")}},{label:"转正日期",prop:"contractFormalTime",kind:"render",render:function(t,a){return t("span",a.row.contractFormalTime?a.row.contractFormalTime.split("T")[0]:"")}},{label:"离职原因",prop:"contractLeaveCause"},{type:"select-input",bind_key:"isGoodEmploy",label:"黑/优才名单"}]}),v={name:"OnJobHistoryDetails",components:{zmTable:l["a"]},props:{basicData:{type:Array,default:function(){return[]}},navName:{type:String,default:function(){return"nav"}}},data:function(){return{columns:n(this)}},mounted:function(){},methods:{}},r=v,d=s("2877"),o=Object(d["a"])(r,i,e,!1,null,"44f0f4af",null);a["a"]=o.exports},"7e1b":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"detailsContent"},[t._m(0),t._l(t.familyList,(function(a,i){return s("div",{key:i,staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("姓名")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.memberName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("关系")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.memberRelation||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("工作单位")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.memberWorkunit||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("职位")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.memberJob||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("联系方式")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.memberContact||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("住址")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.memberAddress||"--"))])])])}))],2),s("div",{staticClass:"detailsContent"},[t._m(1),t._l(t.emergencyCtctList,(function(a,i){return s("div",{key:i,staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("姓名")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.contactName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("与员工关系")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.contactRelation||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("手机号码")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.contactMobile||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("送达地址")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.contactAddress||"--"))])])])}))],2),s("div",{staticClass:"detailsContent"},[t._m(2),t._l(t.educationList,(function(a,i){return s("div",{key:i,staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("起止时间")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("timeFormat")(a.formData.eduStartTime,"yyyy-mm-dd"))+"—"+t._s(t._f("timeFormat")(a.formData.eduEndTime,"yyyy-mm-dd")))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("学校名称")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.eduSchoolName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("所学专业")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.eduSpec||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("所得证书")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.eduCer||"--"))])])])}))],2),s("div",{staticClass:"detailsContent"},[t._m(3),t._l(t.trainingList,(function(a,i){return s("div",{key:i,staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("起止时间")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("timeFormat")(a.formData.trainStartTime,"yyyy-mm-dd"))+"—"+t._s(t._f("timeFormat")(a.formData.trainEndTime,"yyyy-mm-dd")))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("培训机构")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.trainOrgName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("培训内容")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.trainContent||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("证书")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.trainCer||"--"))])])])}))],2),s("div",{staticClass:"detailsContent"},[t._m(4),t._l(t.workExeList,(function(a,i){return s("div",{key:i,staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("起止时间")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("timeFormat")(a.formData.jobStartTime,"yyyy-mm-dd"))+"—"+t._s(t._f("timeFormat")(a.formData.jobEndTime,"yyyy-mm-dd")))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("工作单位")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.jobCompanyName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("职位")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.jobName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("离职原因")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.jobLeaveCause||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("薪资")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.jobSalary||"--"))])]),s("div",{staticClass:"item addBorder"},[s("div",{staticClass:"label"},[t._v("证明人")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.jobReterence||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("证明人电话")]),s("div",{staticClass:"value"},[t._v(t._s(a.formData.jobReterenceMobile||"--"))])])])}))],2),s("div",{staticClass:"detailsContent"},[t._m(5),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("身份证正反面")]),t._l(t.attachmentData.docPidList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("个人简历附件")]),t._l(t.attachmentData.docResumeList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("学历证书")]),t._l(t.attachmentData.docEduCerList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("学信网验证")]),t._l(t.attachmentData.docChsiVeryfyList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("学位证书")]),t._l(t.attachmentData.docDegreeCerList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("前公司离职证明")]),t._l(t.attachmentData.docLeaveCerList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("体检报告")]),t._l(t.attachmentData.docHealthList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("个人声明")]),t._l(t.attachmentData.docPersonalRemarkList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("公积金卡")]),t._l(t.attachmentData.docGjjCardList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("社保卡")]),t._l(t.attachmentData.docHrssCardList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("银行卡")]),t._l(t.attachmentData.docBankCardList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("保密协议")]),t._l(t.attachmentData.docSecrecyProtocolList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("劳动合同")]),t._l(t.attachmentData.docWorkContractList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("技能证书")]),t._l(t.attachmentData.docSkillCerList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("一寸照片")]),t._l(t.attachmentData.docPhotoList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("其他证书")]),t._l(t.attachmentData.docOtherList,(function(a){return s("div",{key:a.fileId,staticClass:"value affix"},[s("el-tooltip",{attrs:{placement:"top"}},[s("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(a.originName))]),s("span",{on:{click:function(s){return t.docPreview(a)}}},[t._v(t._s(a.originName.substring(0,15)))])])],1)}))],2)])]),s("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(a){t.dialogVisible=a}}},[s("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav8"}},[s("span",[t._v("家庭成员")]),s("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav9"}},[s("span",[t._v("紧急联系人")]),s("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav10"}},[s("span",[t._v("教育经历")]),s("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav11"}},[s("span",[t._v("培训经历")]),s("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav12"}},[s("span",[t._v("工作经历")]),s("div",{staticClass:"line"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav13"}},[s("span",[t._v("附件信息")]),s("div",{staticClass:"line"})])}],l={name:"FmlCtcEduTraWrk",props:{familyList:{type:Array,default:function(){return[]}},workExeList:{type:Array,default:function(){return[]}},trainingList:{type:Array,default:function(){return[]}},educationList:{type:Array,default:function(){return[]}},emergencyCtctList:{type:Array,default:function(){return[]}},attachmentData:{type:Object,default:function(){return{}}}},data:function(){return{dialogImageUrl:"",dialogVisible:!1}},mounted:function(){console.log("附件",this.attachmentData)},methods:{docPreview:function(t){if(console.log("下载预览",t),".jpg"==t.fileSuffix||".png"==t.fileSuffix||".jpeg"==t.fileSuffix)this.dialogImageUrl="https://www.tobowork.com//api/tobosoft-toms/cos/file/download/"+t.fileId,this.dialogVisible=!0;else{var a=t.fileId,s="https://www.tobowork.com//api/tobosoft-toms/cos/file/download/"+a,i=document.createElement("a");i.setAttribute("download",t.originName),i.href=s,document.body.appendChild(i),i.click(),i.remove()}}}},c=l,n=(s("6d73"),s("2877")),v=Object(n["a"])(c,i,e,!1,null,"136e206e",null);a["a"]=v.exports},"930c":function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"detailsContent"},[t._m(0),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("入职公司")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyId||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("所属部门")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.orgId||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("公司岗位")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyJob))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("岗位职级")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyJobLevel))])]),"025"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("公司邮箱")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyEmail||"--"))])]):t._e(),"025"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("社保电脑号")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyHrssNo||"--"))])]):t._e(),"025"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("公积金卡号")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.companyGjjNo||"--"))])]):t._e(),"025"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("工资卡银行")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.companySalaryBank||"--")+" ")])]):t._e(),"025"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("银行支行")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.companySalaryBankBranch||"--")+" ")])]):t._e(),"025"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("银行卡号")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.companySalaryNo||"--")+" ")])]):t._e()])]),"010"==t.currentNode||"020"==t.currentNode||"025"==t.currentNode?s("div",{staticClass:"detailsContent"},[t._m(1),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("合同生效日期")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.contractStartTime||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("合同类型")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.contractType))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("合同期限")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.contractTime))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("试用期期限")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.contractTrialTime))])])])]):t._e()])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav6"}},[s("span",[t._v("公司信息")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav7"}},[s("span",[t._v("劳动合同")]),s("div",{staticClass:"line"})])}],l={name:"CCCDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}},currentNode:{type:String,default:function(){return""}}},data:function(){return{}},mounted:function(){},methods:{}},c=l,n=s("2877"),v=Object(n["a"])(c,i,e,!1,null,"16f669f4",null);a["a"]=v.exports},a21c:function(t,a,s){t.exports=s.p+"static/img/staff_entry.bfffd600.png"},ccdb:function(t,a,s){},db45:function(t,a,s){"use strict";s("df2f")},df2f:function(t,a,s){},e1e8:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"detailsContent"},[t._m(0),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("员工类型")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employType))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("姓名")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employName||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("性别")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employSex))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("手机号码")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employPhone||"--"))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("证件类型")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employPidType))])]),s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("证件号码")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employPidNo||"--"))])]),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("年龄")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employAge||"--"))])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("工作年限")]),s("div",{staticClass:"value"},[t._v(t._s(t.basicData.employJobTime||"--"))])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("私人邮箱")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employEmailSecret||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("微信号")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employWechat||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("学历")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employEdu)+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("毕业时间")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employEduTime||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("学历性质")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employEduType)+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("毕业院校")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employEduSchool||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("专业")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employEduSpec||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("员工工号")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employNo||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("出生日期")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employBirthday||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("民族")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employNation||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("籍贯")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employNativeAddress||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("政治面貌")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employPolitical||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("身高")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employHeight||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("体重")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employWeight||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("户口所在地")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employRegisteredAddress||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("婚姻状况")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employMarriageStatus)+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("生育状况")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employBaby)+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item"},[s("div",{staticClass:"label"},[t._v("社保缴纳城市")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employSocialCity||"--")+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item addBorder"},[s("div",{staticClass:"label"},[t._v("现居住地址")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employAddress)+" "+t._s(t.basicData.employDetailAddress)+" ")])]):t._e(),"025"==t.currentNode||"030"==t.currentNode?s("div",{staticClass:"item oneRow noBorder"},[s("div",{staticClass:"label"},[t._v("户籍地址")]),s("div",{staticClass:"value"},[t._v(" "+t._s(t.basicData.employCensusAddress)+" "+t._s(t.basicData.employCensusDetailAddress)+" ")])]):t._e()])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav5"}},[s("span",[t._v("员工基本信息")])])}],l={name:"EntryBasicDetails",props:{basicData:{type:Object,default:function(){return{}}},navName:{type:String,default:function(){return"nav"}},currentNode:{type:String,default:function(){return"010"}}},data:function(){return{}},mounted:function(){},methods:{}},c=l,n=s("2877"),v=Object(n["a"])(c,i,e,!1,null,"2b9585b5",null);a["a"]=v.exports},f388:function(t,a,s){"use strict";var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"detailsContent"},[t._m(0),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item oneRow"},[s("div",{staticClass:"label"},[t._v("员工提交状态")]),s("div",{staticClass:"entry-file"},[s("span",[t._v(t._s(t._f("isSubmit")(t.employSubmitStatus)))]),t.employSubmitStatus?s("span",{staticClass:"file-link",on:{click:t.printEntryFile}},[t._v("入职档案表")]):t._e(),t.employSubmitStatus?s("span",{staticClass:"file-link",on:{click:t.printSendAddress}},[t._v("送达地址确认书")]):t._e()])])])]),s("div",{staticClass:"detailsContent"},[t._m(1),s("div",{staticClass:"detailsItem"},t._l(t.entryFiles,(function(a,i){return s("div",{key:i,staticClass:"item oneRow addBorder"},[s("div",{staticClass:"label"},[t._v(t._s(a.fileTitle))]),s("div",{staticClass:"entry-file"},[s("el-checkbox-group",{model:{value:a.checkList,callback:function(s){t.$set(a,"checkList",s)},expression:"item.checkList"}},t._l(a.checkOptions,(function(a){return s("el-checkbox",{key:a.value,attrs:{label:a.value,disabled:!0}},[t._v(" "+t._s(a.text)+" ")])})),1)],1)])})),0)]),s("div",{staticClass:"detailsContent"},[t._m(2),s("div",{staticClass:"detailsItem"},[s("div",{staticClass:"item oneRow"},[s("div",{staticClass:"label"},[t._v("入职办理日期")]),s("div",{staticClass:"value"},[t._v(t._s(t._f("timeFormat")(t.entryOfDate,"yyyy-mm-dd")))])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav2"}},[s("span",[t._v("入职档案表")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav3"}},[s("span",[t._v("办理入职")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"title",attrs:{id:"nav4"}},[s("span",[t._v("入职办理日期")])])}],l=s("c91b"),c=s("4360"),n=c["a"].state.baseData.baseDataOptionList,v={name:"EntryFileDetail",components:{zmForm:l["a"]},props:{entryOfDate:{type:String,default:function(){return""}},navName:{type:String,default:function(){return"nav"}},employSubmitStatus:{type:Boolean,default:function(){return!1}},employSubmitData:{type:Array,default:function(){return[]}},employWriteData:{type:Array,default:function(){return[]}},employSignData:{type:Array,default:function(){return[]}},offerId:{type:String,default:function(){return"nav"}}},filters:{isSubmit:function(t){return t?"已提交":"未提交"}},watch:{employSubmitData:{immediate:!0,deep:!0,handler:function(t){this.entryFiles[0].checkList=t}},employWriteData:{immediate:!0,deep:!0,handler:function(t){this.entryFiles[1].checkList=t}},employSignData:{immediate:!0,deep:!0,handler:function(t){this.entryFiles[2].checkList=t}}},data:function(){return{entryFiles:[{fileTitle:"提交资料",checkList:[],disabled:!0,checkOptions:n.IT_TJZL},{fileTitle:"填写资料",checkList:[],disabled:!0,checkOptions:n.IT_TXZL},{fileTitle:"签署文件",checkList:[],disabled:!0,checkOptions:n.IT_QSWJ}]}},mounted:function(){},methods:{printEntryFile:function(){this.$router.push("/workbench/entryFilePrint/".concat(this.offerId))},printSendAddress:function(){this.$router.push("/workbench/serviceAddressPrint/".concat(this.offerId))}}},r=v,d=(s("db45"),s("2877")),o=Object(d["a"])(r,i,e,!1,null,"64afcd00",null);a["a"]=o.exports}}]);