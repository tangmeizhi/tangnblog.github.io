(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-790d6e0e"],{"856c":function(t,e,a){"use strict";a("eaf2")},ca2b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.queryCompanyListData}},[a("el-form-item",{attrs:{label:"公司查询",prop:"tbCompanyName"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入公司名称 ",maxlength:"50"},nativeOn:{keyup:function(t){t.target.value=t.target.value.replace(/^\s+|\s+$/gm,"")}},model:{value:t.queryCompanyListData.tbCompanyName,callback:function(e){t.$set(t.queryCompanyListData,"tbCompanyName",e)},expression:"queryCompanyListData.tbCompanyName"}})],1),a("div",{staticClass:"right-btn"},[a("el-button",{directives:[{name:"has",rawName:"v-has",value:"database.tb.company.add",expression:"'database.tb.company.add'"}],staticClass:"but-91",on:{click:t.toNewProvince}},[t._v("新增")]),a("el-button",{staticClass:"but-91",on:{click:t.emptyBtn}},[t._v("重置")]),a("el-button",{directives:[{name:"has",rawName:"v-has",value:"database.tb.company.list",expression:"'database.tb.company.list'"}],staticClass:"but-91",on:{click:t.queryList}},[t._v("查询")])],1)],1),a("div",{staticClass:"table-min"},[a("el-table",{staticStyle:{width:"100%","border-radius":"6px"},attrs:{height:"542px",data:t.listData,size:"medium","header-cell-style":{background:"#fff",color:"#333"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center",index:t.indexMethod}}),a("el-table-column",{attrs:{label:"公司名称",prop:"tbCompanyName",align:"center"}}),a("el-table-column",{attrs:{label:"联系人",prop:"contactName",align:"center"}}),a("el-table-column",{attrs:{label:"联系电话",prop:"contactPhone",align:"center"}}),a("el-table-column",{attrs:{label:"公司注册地址",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.row.registerAddress,placement:"top"}},[a("span",[t._v(t._s(t._f("ellipsis")(e.row.registerAddress)))])])]}}])}),a("el-table-column",{attrs:{label:"联系地址",prop:"contactAddress",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("ellipsis")(e.row.contactAddress)))])]}}])}),a("el-table-column",{attrs:{label:"联系邮箱",prop:"contactEmail",align:"center"}}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"has",rawName:"v-has",value:"database.tb.company.edit",expression:"'database.tb.company.edit'"}],staticClass:"customBtn",on:{click:function(a){return t.handeChange(e.row)}}},[t._v(" 编辑 ")]),a("span",{directives:[{name:"has",rawName:"v-has",value:"database.tb.company.delete",expression:"'database.tb.company.delete'"}],staticClass:"customBtn",on:{click:function(a){return t.handleDelelt(e.row)}}},[t._v(" 删除 ")])]}}])})],1),a("el-dialog",{staticStyle:{"margin-top":"80px"},attrs:{title:t.title,"close-on-click-modal":!1,width:"34%",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.handleClose}},[a("el-form",{ref:"formData",attrs:{rules:t.rulesDialog,model:t.formData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"公司名称",prop:"tbCompanyName"}},[a("el-input",{staticStyle:{width:"184px"},attrs:{clearable:"",placeholder:"请输入公司名称",maxlength:"50"},on:{input:t.verificationName},model:{value:t.formData.tbCompanyName,callback:function(e){t.$set(t.formData,"tbCompanyName",e)},expression:"formData.tbCompanyName"}})],1),a("el-form-item",{attrs:{label:"联系人",prop:"contactName"}},[a("el-input",{staticStyle:{width:"184px"},attrs:{clearable:"",placeholder:"请输入联系人",maxlength:"50"},model:{value:t.formData.contactName,callback:function(e){t.$set(t.formData,"contactName",e)},expression:"formData.contactName"}})],1),a("el-form-item",{attrs:{label:"联系电话",prop:"contactPhone"}},[a("el-input",{staticStyle:{width:"184px"},attrs:{clearable:"",placeholder:"请输入联系电话",maxlength:"15"},model:{value:t.formData.contactPhone,callback:function(e){t.$set(t.formData,"contactPhone",e)},expression:"formData.contactPhone"}})],1),a("el-form-item",{attrs:{label:"公司注册地址",prop:"registerAreaCode"}},[a("el-col",{attrs:{span:11}},[a("el-cascader",{staticStyle:{width:"100%"},attrs:{clearable:"",options:t.regionOptions,props:{expandTrigger:"hover"}},model:{value:t.formData.registerAreaCode,callback:function(e){t.$set(t.formData,"registerAreaCode",e)},expression:"formData.registerAreaCode"}})],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{staticClass:"dress",attrs:{prop:"registerAddress"}},[a("el-input",{staticStyle:{width:"184px"},attrs:{clearable:"",placeholder:"请输入详细注册地址",maxlength:"50"},model:{value:t.formData.registerAddress,callback:function(e){t.$set(t.formData,"registerAddress",e)},expression:"formData.registerAddress"}})],1)],1)],1),a("el-form-item",{attrs:{label:"联系地址",prop:"contactArea"}},[a("el-col",{attrs:{span:11}},[a("el-cascader",{staticStyle:{width:"100%"},attrs:{clearable:"",options:t.regionOptions,props:{expandTrigger:"hover"}},model:{value:t.formData.contactArea,callback:function(e){t.$set(t.formData,"contactArea",e)},expression:"formData.contactArea"}})],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{staticClass:"dress",attrs:{prop:"contactAddress"}},[a("el-input",{staticStyle:{width:"184px"},attrs:{clearable:"",placeholder:"请输入联系详细地址",maxlength:"50"},model:{value:t.formData.contactAddress,callback:function(e){t.$set(t.formData,"contactAddress",e)},expression:"formData.contactAddress"}})],1)],1)],1),a("el-form-item",{attrs:{label:"联系邮箱",prop:"contactEmail"}},[a("el-input",{staticStyle:{width:"184px"},attrs:{clearable:"",placeholder:"请输入邮箱",maxlength:"50"},model:{value:t.formData.contactEmail,callback:function(e){t.$set(t.formData,"contactEmail",e)},expression:"formData.contactEmail"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.preserveBtn("formData")}}},[t._v("确 定")])],1)],1)],1),a("div",{staticClass:"pagination-min"},[a("el-pagination",{attrs:{"page-sizes":[15,30,50],"page-size":t.pageSize,layout:"total,sizes, prev, pager, next, jumper",total:t.paginationData.rowCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e}}})],1)],1)},n=[],o=(a("fb6a"),a("159b"),a("d3b7"),a("ac1f"),a("1276"),a("d81d"),a("a417")),i=a("ed08"),s=a("61f7"),c={filters:{ellipsis:function(t){return t?t.length>12?t.slice(0,12)+"...":t:""}},data:function(){var t=this,e=function(e,a,r){""===a&&r(new Error("请输入公司名称")),a!=t.currentTbCompanyName?Object(o["c"])({name:t.formData.tbCompanyName}).then((function(t){r()})):r()};return{regionOptions:[],rulesDialog:{tbCompanyName:[{required:!0,validator:e,trigger:"change"}],contactName:[{required:!0,message:"请输入联系人",trigger:"change"}],contactPhone:[{required:!0,trigger:"change",validator:s["d"]}],registerAreaCode:[{required:!0,message:"请输入公司注册地址",trigger:"change"}],registerAddress:[{required:!0,message:"请输入公司详细注册地址",trigger:"change"}],contactArea:[{required:!0,message:"请输入联系地址",trigger:"change"}],contactAddress:[{required:!0,message:"请输入联系详细地址",trigger:"change"}],contactEmail:[{required:!0,trigger:"change",validator:s["i"]}]},listData:[],title:"",queryCompanyListData:{contactAddress:"",contactArea:"",contactEmail:"",contactName:"",contactPhone:"",registerAddress:"",registerAreaCode:"",tbCompanyId:"",tbCompanyName:""},dialogFormVisible:!1,formData:{contactAddress:"",contactArea:"",contactEmail:"",contactName:"",contactPhone:"",registerAddress:"",registerAreaCode:"",tbCompanyId:"",tbCompanyName:""},currentTbCompanyName:"",paginationData:{},currentPage:1,pageSize:15,pageIndex:1}},created:function(){this.regionOptions=Object(i["i"])("cityTree"),this.baseList(this.pageIndex)},methods:{indexMethod:function(t){return this.pageSize*this.paginationData.pageIndex+t-this.pageSize+1},baseList:function(t){var e=this;Object(o["r"])({input:this.queryCompanyListData,nextToken:"",pageEnd:0,pageIndex:t,pageSize:this.pageSize,pageStart:0}).then((function(t){e.paginationData=t,e.listData=t.result}))},preserveBtn:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;var a=Object(i["i"])("cityTree"),r=[];e.formData.contactArea.forEach((function(t){r.push(Object(i["b"])(a,t))}));var n=r.toString();e.formData.contactArea=n;var s=[];e.formData.registerAreaCode.forEach((function(t){s.push(Object(i["b"])(a,t))}));var c=s.toString();e.formData.registerAreaCode=c,Object(o["Y"])(e.formData).then((function(t){e.dialogFormVisible=!1,e.baseList(e.pageIndex),"新建公司"==e.title?e.$message({message:"新增成功！",type:"success"}):e.$message({message:"编辑成功！",type:"success"})}))}))},verificationName:function(t){},toDetails:function(t){this.$router.push({path:"groupDetails",query:{clientGroupId:t}})},emptyBtn:function(){this.queryCompanyListData.tbCompanyName="",this.baseList(this.pageIndex)},toNewProvince:function(){this.title="新建公司",this.contactArea=[],this.registerAreaCode=[],this.dialogFormVisible=!0,this.formData={contactAddress:"",contactArea:"",contactEmail:"",contactName:"",contactPhone:"",registerAddress:"",registerAreaCode:"",tbCompanyId:"",tbCompanyName:""}},handeChange:function(t){this.title="编辑公司",this.dialogFormVisible=!0,this.formData=JSON.parse(JSON.stringify(t)),this.currentTbCompanyName=t.tbCompanyName;var e=Object(i["i"])("cityTree"),a=[];this.formData.registerAreaCode&&(a=this.formData.registerAreaCode.split(","));var r=Object(i["g"])(e,a),n=r.map((function(t){return t.value}));this.formData.registerAreaCode=n;var o=[];this.formData.contactArea&&(o=this.formData.contactArea.split(","));var s=Object(i["g"])(e,o),c=s.map((function(t){return t.value}));this.formData.contactArea=c},handleDelelt:function(t){var e=this;this.$confirm("此操作将永久删除该数据，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["Q"])({tbCompanyId:t.tbCompanyId}).then((function(t){e.baseList(e.pageIndex),e.$message({type:"success",message:"删除成功!"})}))})).catch((function(t){}))},handleChange:function(t){},queryList:function(){this.baseList(this.pageIndex)},handleSizeChange:function(){this.baseList()},handleCurrentChange:function(t){this.baseList(t)},handleClose:function(){this.$refs.formData.resetFields()}}},l=c,m=(a("856c"),a("2877")),d=Object(m["a"])(l,r,n,!1,null,"db6c0e70",null);e["default"]=d.exports},eaf2:function(t,e,a){}}]);