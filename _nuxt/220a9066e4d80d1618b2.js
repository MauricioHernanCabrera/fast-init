(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(t,e,o){var content=o(255);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("246f89b4",content,!0,{sourceMap:!1})},254:function(t,e,o){"use strict";var r=o(208);o.n(r).a},255:function(t,e,o){(e=o(37)(!1)).push([t.i,'.Projects[data-v-3f2849bc]{background-color:#fff}.Projects .Project-item[data-v-3f2849bc]{border-bottom:1px solid #e0e0e0;padding:16px;transition:.3s;display:flex;align-items:center;justify-content:space-between;position:relative}.Projects .Project-item.hover[data-v-3f2849bc]:hover{background-color:#feb500;color:#fff}.Projects .Project-item.hover:hover .Project-actions button[data-v-3f2849bc]{color:#fff}.Projects .Project-item .Project-link[data-v-3f2849bc]{position:absolute;width:100%;height:100%;top:0;left:0;cursor:pointer;z-index:5}.Projects .Project-item .Project-content h4[data-v-3f2849bc]{font-weight:600;font-size:16px}.Projects .Project-item .Project-content .Project-commands[data-v-3f2849bc]{display:flex;flex-wrap:wrap}.Projects .Project-item .Project-content .Project-commands .Project-command-item[data-v-3f2849bc]{font-size:14px}.Projects .Project-item .Project-content .Project-commands .Project-command-item[data-v-3f2849bc]:last-child:after{display:none}.Projects .Project-item .Project-content .Project-commands .Project-command-item[data-v-3f2849bc]:after{content:"|"}.Projects .Project-item .Project-actions[data-v-3f2849bc]{flex:0 0 108px}.Projects .Project-item .Project-actions button[data-v-3f2849bc]{position:relative;cursor:pointer;padding:6px;border-radius:50%;height:32px;width:32px;color:#3d3c3c;border:1px solid #f0f0f0;margin-left:4px;transition:.3s;z-index:10}.Projects .Project-item .Project-actions button[data-v-3f2849bc]:hover{border:1px solid #fff;background-color:#fff}.Projects .Project-item .Project-actions button:hover i[data-v-3f2849bc]{color:#feb500}',""]),t.exports=e},258:function(t,e,o){"use strict";o.r(e);o(51),o(16),o(17),o(9),o(39);var r=o(48),c=o(18),n=o(209),l=o(210),d=o(28);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={data:function(){return{clipboard:"asdsa"}},computed:f({},Object(d.b)(["getProjects"])),methods:f({},Object(d.c)(["SET_DIALOG","CANCEL_DIALOG","SET_PROJECT","SET_COMMANDS"]),{copyClipboard:function(t){var e=this,o=t.filter((function(t){return t.program&&t.program._id})).reduce((function(t,e){var o=e.program,r=e.param,param=void 0===r?"":r;return"".concat(t,' "').concat(o.url,'" ').concat(param," &&")}),"").slice(1,-3);this.clipboard=o,this.$nextTick((function(){e.$refs.customNotesClipboard.select(),document.execCommand("copy")}))}})},P=(o(254),o(15)),v=Object(P.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Projects"},[0==t.getProjects.length?o("div",{staticClass:"Project-item"},[t._m(0)]):t._l(t.getProjects,(function(e){return o("div",{key:e._id,staticClass:"Project-item hover"},[o("div",{staticClass:"Project-link",on:{click:function(o){return t.$router.push("/commands?project_id="+e._id)}}}),o("div",{staticClass:"Project-content"},[o("h4",[t._v(t._s(e.name)+" ")]),o("ul",{staticClass:"Project-commands"},t._l(e.commands,(function(e){return e.program?o("li",{key:e._id,staticClass:"Project-command-item"},[t._v(t._s(e.program.name))]):t._e()})),0)]),o("div",{staticClass:"Project-actions"},[o("button",{attrs:{title:"Copy clipboard"},on:{click:function(o){return t.copyClipboard(e.commands)}}},[o("i",{staticClass:"fas fa-clipboard"})]),o("button",{attrs:{title:"Edit project"},on:{click:function(o){return t.SET_DIALOG({title:"Edit project",nameBtnSubmit:"Edit",active:"create-or-update",data:e})}}},[o("i",{staticClass:"fas fa-pen"})]),o("button",{attrs:{title:"Remove project"},on:{click:function(o){return t.SET_DIALOG({title:"Delete project",nameBtnSubmit:"Delete",active:"delete",data:{_id:e._id,name:e.name}})}}},[o("i",{staticClass:"fas fa-trash-alt"})])])])})),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.clipboard,expression:"clipboard"}],ref:"customNotesClipboard",staticStyle:{"z-index":"-1",position:"absolute",top:"-1000%"},attrs:{cols:"30",rows:"10"},domProps:{value:t.clipboard},on:{input:function(e){e.target.composing||(t.clipboard=e.target.value)}}})],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Project-content"},[e("h4",[this._v("There no projects")])])}],!1,null,"3f2849bc",null).exports,O=o(199),h=o(198),_=o(197),C={components:{FIInput:O.a},mixins:[h.a],validations:{form:{name:{required:_.required}}},data:function(){return{DEFAULT_FORM:{name:""}}}},E=Object(P.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("FormBase",{attrs:{title:t.title,value:t.value,nameBtnSubmit:t.nameBtnSubmit,disabled:t.$v.$invalid},on:{input:t.handleInput,submit:t.submit}},[t.value?[o("FIInput",{attrs:{placeholder:"Name (*)",autofocus:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})]:t._e()],2)}),[],!1,null,"f5749428",null).exports,y=o(211);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{Toolbar:n.a,Card:l.a,Projects:v,FormProject:E,FormDelete:y.a},computed:D({},Object(d.d)(["dialog","projects"])),methods:D({},Object(d.c)(["SET_DIALOG","CANCEL_DIALOG","ADD_PROJECT","REMOVE_PROJECT","UPDATE_PROJECT"]),{submitForm:function(t){var e=t.newValue,o=t.updateValue;if(e){this.ADD_PROJECT(e);var c=this.projects.slice(this.projects.length-1),n=Object(r.a)(c,1)[0];this.$router.push("/commands?project_id=".concat(n._id))}o&&this.UPDATE_PROJECT(o)},deleteItem:function(t){this.REMOVE_PROJECT(t)}})},T=Object(P.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Toolbar",{attrs:{title:"Projects"}},[o("template",{slot:"toolbar-items"},[o("button",{on:{click:function(e){return t.SET_DIALOG({title:"Create project",active:"create-or-update"})}}},[o("i",{staticClass:"fas fa-plus"}),o("span",[t._v("project")])])])],2),o("Card",[o("Projects")],1),o("FormProject",{attrs:{data:t.dialog.data,title:t.dialog.title,nameBtnSubmit:t.dialog.nameBtnSubmit,value:"create-or-update"==t.dialog.active},on:{submit:t.submitForm,input:t.CANCEL_DIALOG}}),o("FormDelete",{attrs:{data:t.dialog.data,title:t.dialog.title,nameBtnSubmit:"delete",value:"delete"==t.dialog.active},on:{submit:t.deleteItem,input:t.CANCEL_DIALOG}})],1)}),[],!1,null,"03dc312b",null);e.default=T.exports}}]);