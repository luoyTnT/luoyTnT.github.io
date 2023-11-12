(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-437693d8"],{"4a0d":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"})},a=[],i={name:"ArticleAudio",data:function(){return{}},created:function(){},methods:{}},n=i,c=r("2877"),s=Object(c["a"])(n,o,a,!1,null,"54b1c4d2",null);t["a"]=s.exports},"71c3":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"confirmVideoRef",staticStyle:{width:"80%","margin-top":"30px"},attrs:{model:e.videoInfo,"label-width":"50px","label-position":"right",rules:e.saveRules}},[r("el-form-item",{attrs:{label:"视频",prop:"otherFile"}},[r("el-upload",{ref:"upload",staticClass:"video-upload",attrs:{action:e.uploadAction,"before-upload":e.submitUpload,accept:".mp4,.avi"}},[e.videoExist?r("div",{staticClass:"addVideo"},[e._v(e._s(e.videoFileInfo.relName)+" "),r("i",{staticClass:"el-icon-refresh-left"}),e._v(" "+e._s(e.getFileSize(e.videoFileInfo.fileSize)))]):r("el-button",{staticClass:"addVideo",attrs:{type:"primary"}},[e._v("+ 添加视频")])],1)],1),r("el-form-item",{attrs:{label:"封面",prop:"cover"}},[r("el-upload",{staticClass:"cover-uploader",attrs:{action:e.uploadAction,"show-file-list":!1,"before-upload":e.beforeCoverUpload}},[e.videoInfo.cover?r("img",{staticClass:"cover",attrs:{src:e.coverUrl}}):r("i",{staticClass:"el-icon-plus cover-uploader-icon cover"})])],1),r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题",maxlength:"80","show-word-limit":""},model:{value:e.videoInfo.title,callback:function(t){e.$set(e.videoInfo,"title",t)},expression:"videoInfo.title"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"categoryId"}},[r("div",{staticClass:"block"},[r("el-cascader",{attrs:{options:e.options,props:{value:"id",label:"title"}},on:{change:e.handleChange},model:{value:e.videoInfo.categoryId,callback:function(t){e.$set(e.videoInfo,"categoryId",t)},expression:"videoInfo.categoryId"}})],1)]),r("el-form-item",{attrs:{label:"简介",prop:"profile"}},[r("el-input",{attrs:{placeholder:"填写更多相关信息",maxlength:"255","show-word-limit":""},model:{value:e.videoInfo.profile,callback:function(t){e.$set(e.videoInfo,"profile",t)},expression:"videoInfo.profile"}})],1),r("el-button",{staticClass:"save",on:{click:e.saveArticleDraft}},[e._v("存草稿")]),r("el-button",{staticClass:"save",attrs:{type:"primary"},on:{click:e.saveArticle}},[e._v("发布")])],1)],1)},a=[],i=r("c7eb"),n=r("1da1"),c=(r("b680"),r("b0c0"),r("75cc")),s=r("789c"),d=r("f974"),l={name:"ArticleVideo",props:["dataProp"],data:function(){return{loading:!1,articleFileId:null,videoInfo:{id:"",cover:"",title:"",categoryId:"",profile:"",type:"1",draft:!1,otherFile:[]},videoFileInfo:{},videoExist:!1,coverUrl:"",categoryList:{title:null,parents:!1},options:[],saveRules:{otherFile:[{required:!0,message:" ",trigger:"blur"}],cover:[{required:!0,message:" ",trigger:"blur"}],title:[{required:!0,message:" ",trigger:"blur"},{max:80,message:" ",trigger:"change"}],categoryId:[{required:!0,message:" ",trigger:"blur"}]}}},computed:{uploadAction:function(){return"javascript:void(0)"}},created:function(){this.getCategoryList(),this.getVideoInfo()},methods:{getCategoryList:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["b"])(e.categoryList);case 2:r=t.sent,e.options=r.data;case 4:case"end":return t.stop()}}),t)})))()},handleChange:function(e){var t=e[e.length-1];this.videoInfo.categoryId=t},getVideoInfo:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r,o;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.dataProp){t.next=11;break}return t.next=3,Object(d["c"])(e.dataProp);case 3:r=t.sent,o=r.data,e.videoInfo=o,e.videoInfo.otherFile=o.articleUrl,e.coverUrl=o.coverUrl,e.videoFileInfo=o.articleUrl[0],e.videoExist=!0,e.articleFileId=e.dataProp;case 11:case"end":return t.stop()}}),t)})))()},getFileSize:function(e){var t=(e/1048576).toFixed(2);return t>1024?t=t/1024+" GB":t<.9?t=1024*t+" KB":t+=" MB",t},submitUpload:function(e){var t=this,r=this.getFileType(e);if(r){this.loading=!0;var o=new FormData;o.append("file",e),o.append("type",r),Object(s["f"])(o).then((function(e){200===e.code?(t.videoFileInfo=e.data,t.videoInfo.otherFile=[{id:e.data.id,orderNum:1}],t.videoInfo.cover=e.data.id,t.coverUrl=e.data.thumbnailUrl,t.videoExist=!0,t.loading=!1,t.$message.success("上传成功")):(t.videoExist=!1,t.loading=!1,t.$message.error("上传失败"))}))}return!1},getFileType:function(e){var t="video/mp4"===e.type||"video/adv"===e.type;if(t)return 2;t||this.$message.error(e.name+"上传文件格式不支持！")},beforeCoverUpload:function(e){var t=this,r="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type||"image/gif"===e.type,o=e.size/1024/1024<50;if(r||this.$message.error("上传图片只能是jpg、gif、png、jpeg格式!"),o||this.$message.error("上传图片大小不能超过 50MB!"),r&&o){var a=1,i=new FormData;i.append("file",e),i.append("type",a),Object(s["f"])(i).then((function(e){200===e.code?(t.$message.success("上传成功"),t.videoInfo.cover=e.data.id,t.coverUrl=e.data.url):t.$message.error("上传失败")}))}return!1},saveArticleDraft:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.videoExist){t.next=3;break}return e.$message.error("请先上传视频"),t.abrupt("return");case 3:e.videoInfo.draft=!0,e.saveOrEditVideoInfo();case 5:case"end":return t.stop()}}),t)})))()},saveOrEditVideoInfo:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=""!==e.videoInfo.id,r?Object(d["a"])(e.videoInfo,e.videoInfo.id).then((function(t){200===t.code?(0==e.videoInfo.draft?(e.$message.success("发布成功"),e.$router.push("/dynamic")):(e.$message.success("修改成功"),e.$router.push("/dynamic")),e.$emit("notifyParent")):e.$message.error("修改失败，请检查后重试")})):Object(d["f"])(e.videoInfo).then((function(t){200===t.code?(0==e.videoInfo.draft?(e.$message.success("发布成功"),e.$router.push("/dynamic")):(e.$message.success("保存成功"),e.$router.push("/dynamic")),e.$emit("notifyParent")):e.$message.error("添加用户失败，请检查后重试")}));case 2:case"end":return t.stop()}}),t)})))()},saveArticle:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.confirmVideoRef.validate((function(t){t?(e.videoInfo.draft=!1,e.saveOrEditVideoInfo()):e.$message.error("请填写完整信息后提交")}));case 1:case"end":return t.stop()}}),t)})))()}}},u=l,f=(r("72b3"),r("2877")),p=Object(f["a"])(u,o,a,!1,null,"6c8e4323",null);t["a"]=p.exports},"72b3":function(e,t,r){"use strict";r("b2cb")},"75cc":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return c}));var o=r("b775");function a(e){return Object(o["a"])({url:"/dynamicCategory/list",method:"post",data:e})}function i(e){return Object(o["a"])({url:"/dynamicCategory/save",method:"post",data:e})}function n(e,t){return Object(o["a"])({url:"/dynamicCategory/edit/".concat(t),method:"put",data:e})}function c(e){return Object(o["a"])({url:"/dynamicCategory/remove/".concat(e),method:"delete"})}},"789c":function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"d",(function(){return d}));var o=r("b775");function a(e){return Object(o["a"])({url:"/file/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}function i(e){return Object(o["a"])({url:"/file/download/".concat(e),method:"get"})}function n(e){return Object(o["a"])({url:"/file/page",method:"post",data:e})}function c(e){return Object(o["a"])({url:"/file/edit/state",method:"put",data:e})}function s(e){return Object(o["a"])({url:"/file/remove/".concat(e),method:"delete"})}function d(e){return Object(o["a"])({url:"/file/remove/batch",method:"delete",data:e})}},a054:function(e,t,r){},b2cb:function(e,t,r){},d9f5:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"confirmVideoRef",staticStyle:{width:"80%","margin-top":"30px"},attrs:{model:e.videoInfo,"label-width":"50px","label-position":"right",rules:e.saveRules}},[r("el-form-item",{attrs:{label:"封面",prop:"cover"}},[r("el-upload",{staticClass:"cover-uploader",attrs:{action:e.uploadAction,"show-file-list":!1,"before-upload":e.beforeCoverUpload}},[e.videoInfo.cover?r("img",{staticClass:"cover",attrs:{src:e.coverUrl}}):r("i",{staticClass:"el-icon-plus cover-uploader-icon cover"})])],1),r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入标题",maxlength:"80","show-word-limit":""},model:{value:e.videoInfo.title,callback:function(t){e.$set(e.videoInfo,"title",t)},expression:"videoInfo.title"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"categoryId"}},[r("div",{staticClass:"block"},[r("el-cascader",{attrs:{options:e.options,props:{value:"id",label:"title"}},on:{change:e.handleChange},model:{value:e.videoInfo.categoryId,callback:function(t){e.$set(e.videoInfo,"categoryId",t)},expression:"videoInfo.categoryId"}})],1)]),r("el-form-item",{attrs:{label:"内容",prop:"columnContent"}},[r("div",{staticClass:"columnContent",staticStyle:{border:"1px solid #ccc",width:"100%"}},[r("Toolbar",{staticStyle:{"border-bottom":"1px solid #ccc"},attrs:{editor:e.editor,defaultConfig:e.toolbarConfig,mode:e.mode}}),r("Editor",{staticStyle:{height:"500px","overflow-y":"hidden"},attrs:{defaultConfig:e.editorConfig,mode:e.mode},on:{onCreated:e.onCreated},model:{value:e.html,callback:function(t){e.html=t},expression:"html"}})],1)]),r("el-button",{staticClass:"save",on:{click:e.saveArticleDraft}},[e._v("存草稿")]),r("el-button",{staticClass:"save",attrs:{type:"primary"},on:{click:e.saveArticle}},[e._v("发布")])],1)],1)},a=[],i=r("c7eb"),n=r("1da1"),c=(r("af93"),r("b680"),r("b0c0"),r("75cc")),s=r("789c"),d=r("f974"),l=r("4e15"),u={name:"ArticleColumn",components:{Editor:l["a"],Toolbar:l["b"]},data:function(){return{editor:null,html:"<p>hello</p>",toolbarConfig:{},editorConfig:{placeholder:"请输入内容..."},mode:"simple",loading:!1,articleFileId:null,videoInfo:{id:"",cover:"",title:"",categoryId:"",type:"1",draft:!1,otherFile:[]},videoFileInfo:{},videoExist:!1,coverUrl:"",categoryList:{title:null,parents:!1},options:[],saveRules:{otherFile:[{required:!0,message:" ",trigger:"blur"}],cover:[{required:!0,message:" ",trigger:"blur"}],title:[{required:!0,message:" ",trigger:"blur"},{max:80,message:" ",trigger:"change"}],categoryId:[{required:!0,message:" ",trigger:"blur"}],columnContent:[{required:!0,message:" ",trigger:"blur"}]}}},computed:{uploadAction:function(){return"javascript:void(0)"}},created:function(){this.getCategoryList(),this.getVideoInfo()},methods:{onCreated:function(e){this.editor=Object.seal(e)},getCategoryList:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["b"])(e.categoryList);case 2:r=t.sent,e.options=r.data;case 4:case"end":return t.stop()}}),t)})))()},handleChange:function(e){var t=e[e.length-1];this.videoInfo.categoryId=t},getVideoInfo:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r,o;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==e.dataProp){t.next=11;break}return t.next=3,Object(d["c"])(e.dataProp);case 3:r=t.sent,o=r.data,e.videoInfo=o,e.videoInfo.otherFile=o.articleUrl,e.coverUrl=o.coverUrl,e.videoFileInfo=o.articleUrl[0],e.videoExist=!0,e.articleFileId=e.dataProp;case 11:case"end":return t.stop()}}),t)})))()},getFileSize:function(e){var t=(e/1048576).toFixed(2);return t>1024?t=t/1024+" GB":t<.9?t=1024*t+" KB":t+=" MB",t},submitUpload:function(e){var t=this,r=this.getFileType(e);if(r){this.loading=!0;var o=new FormData;o.append("file",e),o.append("type",r),Object(s["f"])(o).then((function(e){200===e.code?(t.videoFileInfo=e.data,t.videoInfo.otherFile=[{id:e.data.id,orderNum:1}],t.videoInfo.cover=e.data.id,t.coverUrl=e.data.thumbnailUrl,t.videoExist=!0,t.loading=!1,t.$message.success("上传成功")):(t.videoExist=!1,t.loading=!1,t.$message.error("上传失败"))}))}return!1},getFileType:function(e){var t="video/mp4"===e.type||"video/adv"===e.type;if(t)return 2;t||this.$message.error(e.name+"上传文件格式不支持！")},beforeCoverUpload:function(e){var t=this,r="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type||"image/gif"===e.type,o=e.size/1024/1024<50;if(r||this.$message.error("上传图片只能是jpg、gif、png、jpeg格式!"),o||this.$message.error("上传图片大小不能超过 50MB!"),r&&o){var a=1,i=new FormData;i.append("file",e),i.append("type",a),Object(s["f"])(i).then((function(e){200===e.code?(t.$message.success("上传成功"),t.videoInfo.cover=e.data.id,t.coverUrl=e.data.url):t.$message.error("上传失败")}))}return!1},saveArticleDraft:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.videoExist){t.next=3;break}return e.$message.error("请先上传视频"),t.abrupt("return");case 3:e.videoInfo.draft=!0,e.saveOrEditVideoInfo();case 5:case"end":return t.stop()}}),t)})))()},saveOrEditVideoInfo:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){var r;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=""!==e.videoInfo.id,r?Object(d["a"])(e.videoInfo,e.videoInfo.id).then((function(t){200===t.code?(0==e.videoInfo.draft?(e.$message.success("发布成功"),e.$router.push("/dynamic")):(e.$message.success("修改成功"),e.$router.push("/dynamic")),e.$emit("notifyParent")):e.$message.error("修改失败，请检查后重试")})):Object(d["f"])(e.videoInfo).then((function(t){200===t.code?(0==e.videoInfo.draft?(e.$message.success("发布成功"),e.$router.push("/dynamic")):(e.$message.success("保存成功"),e.$router.push("/dynamic")),e.$emit("notifyParent")):e.$message.error("添加用户失败，请检查后重试")}));case 2:case"end":return t.stop()}}),t)})))()},saveArticle:function(){var e=this;return Object(n["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.confirmVideoRef.validate((function(t){t?(e.videoInfo.draft=!1,e.saveOrEditVideoInfo()):e.$message.error("请填写完整信息后提交")}));case 1:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;setTimeout((function(){e.html="<p>模拟 Ajax 异步设置内容 HTML</p>"}),1500)},beforeDestroy:function(){var e=this.editor;null!=e&&e.destroy()}},f=u,p=(r("e50b"),r("e9cc"),r("2877")),v=Object(p["a"])(f,o,a,!1,null,"1471b587",null);t["a"]=v.exports},e9cc:function(e,t,r){"use strict";r("a054")},f974:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return n})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return d}));var o=r("b775");function a(e){return Object(o["a"])({url:"/dynamicArticle/page",method:"post",data:e})}function i(e){return Object(o["a"])({url:"/dynamicArticle/detail/".concat(e),method:"get"})}function n(e){return Object(o["a"])({url:"/dynamicArticle/save",method:"post",data:e})}function c(e,t){return Object(o["a"])({url:"/dynamicArticle/edit/".concat(t),method:"put",data:e})}function s(e){return Object(o["a"])({url:"/dynamicArticle/edit/state/".concat(e),method:"put"})}function d(e){return Object(o["a"])({url:"/dynamicArticle/remove/".concat(e),method:"delete"})}}}]);