webpackJsonp([21,29],{231:function(t,e,r){r(317);var a=r(0)(r(257),r(341),"data-v-6bc61f36",null);t.exports=a.exports},257:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"breadcrumbs",data:function(){return{items:[{link:"javascript:;",text:"首页",disable:!1},{link:"javascript:;",text:"导航",disable:!1},{link:"javascript:;",text:"组件",disable:!0}]}}}},293:function(t,e,r){e=t.exports=r(60)(),e.push([t.i,".bread-container[data-v-6bc61f36]{display:-ms-flexbox;display:flex}.breadcrumb[data-v-6bc61f36]{-ms-flex-pack:end;justify-content:flex-end}","",{version:3,sources:["/./example/views/Breadcrumb.vue"],names:[],mappings:"AACA,kCACE,oBAAqB,AACrB,YAAc,CACf,AACD,6BACE,kBAAmB,AACf,wBAA0B,CAC/B",file:"Breadcrumb.vue",sourcesContent:["\n.bread-container[data-v-6bc61f36] {\n  display: -ms-flexbox;\n  display: flex;\n}\n.breadcrumb[data-v-6bc61f36] {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}"],sourceRoot:"webpack://"}])},317:function(t,e,r){var a=r(293);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(228)("5df61437",a,!0)},341:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h1",[t._v("面包屑 Breadcrumb")]),t._v(" "),r("h2",[t._v("例子")]),t._v(" "),r("h3",[t._v("字符间隔")]),t._v(" "),r("div",{staticClass:"bread-container"},[r("r-breadcrumb",{attrs:{separator:"/",items:t.items}})],1),t._v(" "),r("div",{staticClass:"bread-container"},[r("r-breadcrumb",{attrs:{separator:">",items:t.items}})],1),t._v(" "),r("h3",[t._v("icon间隔")]),t._v(" "),r("div",{staticClass:"bread-container"},[r("r-breadcrumb",{attrs:{icon:"",separator:"arrow_forward",items:t.items}})],1),t._v(" "),r("div",{staticClass:"bread-container"},[r("r-breadcrumb",{attrs:{icon:"",separator:"directions_run",items:t.items}})],1),t._v(" "),r("h2",[t._v("API")]),t._v(" "),r("h3",[t._v("props")]),t._v(" "),t._m(0),t._v(" "),r("h3",[t._v("items")]),t._v(" "),t._m(1),t._v(" "),r("Markup",{attrs:{lang:"html"}},[t._v('\n    <r-breadcrumb separator="/" :items="items"></r-breadcrumb>\n    <r-breadcrumb separator=">" :items="items"></r-breadcrumb>\n    <r-breadcrumb icon separator="arrow_forward" :items="items"></r-breadcrumb>\n  ')]),t._v(" "),r("Markup",{attrs:{lang:"js"}},[t._v("\n    data () {\n      return {\n        items: [\n          {\n            link: 'javascript:;',\n            text: '首页',\n            disable: false\n          },{\n            link: 'javascript:;',\n            text: '导航',\n            disable: false\n          },{\n            link: 'javascript:;',\n            text: '组件',\n            disable: true\n          }\n        ]\n      }\n    }\n  ")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"bordered responsive-table"},[r("thead",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("separator")]),t._v(" "),r("td",[t._v("分隔符")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v(" '/' ")])]),t._v(" "),r("tr",[r("td",[t._v("icon")]),t._v(" "),r("td",[t._v("分隔符是否为 icon")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("false")])]),t._v(" "),r("tr",[r("td",[t._v("items")]),t._v(" "),r("td",[t._v("面包屑链接")]),t._v(" "),r("td",[t._v("Array")]),t._v(" "),r("td",[t._v("[]")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"bordered responsive-table"},[r("thead",[r("th",[t._v("键")]),t._v(" "),r("th",[t._v("值")])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("link")]),t._v(" "),r("td",[t._v("链接地址")])]),t._v(" "),r("tr",[r("td",[t._v("text")]),t._v(" "),r("td",[t._v("链接名称")])]),t._v(" "),r("tr",[r("td",[t._v("disable")]),t._v(" "),r("td",[t._v("是否置为灰色")])])])])}]}}});