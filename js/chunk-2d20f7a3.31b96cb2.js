(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f7a3"],{b494:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"iq-card position-relative inner-page-bg bg-primary",staticStyle:{height:"150px"}},[e("div",{staticClass:"inner-page-title"},[e("h3",{staticClass:"text-white"},[t._v("Pagination Page")]),e("p",{staticClass:"text-white"},[t._v("lorem ipsum")])])])]),e("b-col",{attrs:{lg:"6",sm:"12"}},[e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Pagination Examples")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive "),e("code",[t._v("aria-label")]),t._v(" for the "),e("code",[t._v("<nav>")]),t._v(" to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be "),e("code",[t._v('aria-label="Search results pages"')]),t._v(".")]),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-examples"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1"\n              prev-text="Previous"\n              next-text="Next"\n              first-text="First"\n              last-text="Last"\n              :total-rows="50"\n></b-pagination>\n')])])])])]),e("b-pagination",{attrs:{value:"1","prev-text":"Previous","next-text":"Next","first-text":"First","last-text":"Last","total-rows":50}})]},proxy:!0}])}),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Disabled and active states")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("Pagination links are customizable for different circumstances. Use "),e("code",[t._v("disabled")]),t._v(" for links that appear un-clickable and "),e("code",[t._v(".active")]),t._v(" to indicate the current page.")]),e("p",[t._v("While the "),e("code",[t._v("disabled")]),t._v(" prop uses "),e("code",[t._v("pointer-events: none")]),t._v(" to "),e("em",[t._v("try")]),t._v(" to disable the link functionality of "),e("code",[t._v("<a>")]),t._v("s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add "),e("code",[t._v('tabindex="-1"')]),t._v(" on disabled links and use custom JavaScript to fully disable their functionality.")]),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"disabled-active-1"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1" disabled :total-rows="50" />\n<b-pagination value="2" :total-rows="50" />\n')])])])])]),e("b-pagination",{attrs:{value:"1",disabled:"","total-rows":50}}),e("p",[t._v("You can optionally swap out active or disabled anchors for "),e("code",[t._v("<span>")]),t._v(", or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.")]),e("b-pagination",{attrs:{value:"2","total-rows":50}})]},proxy:!0}])}),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Pagination With Color")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive "),e("code",[t._v("aria-label")]),t._v(" for the "),e("code",[t._v("<nav>")]),t._v(" to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be "),e("code",[t._v('aria-label="Search results pages"')]),t._v(".")]),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"disabled-active-3"}},[t._v("                    "),e("code",[t._v('\n<b-pagination class="iq-page-primary" :value="2" :total-rows="50" />\n<b-pagination class="iq-page-success" :value="2" :total-rows="50" />\n<b-pagination class="iq-page-info" :value="2" :total-rows="50" />\n')])])])])]),e("b-pagination",{staticClass:"iq-page-primary",attrs:{value:2,"total-rows":50}}),e("b-pagination",{staticClass:"iq-page-success",attrs:{value:2,"total-rows":50}}),e("b-pagination",{staticClass:"iq-page-info",attrs:{value:2,"total-rows":50}})]},proxy:!0}])})],1),e("b-col",[e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Working with icons")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with "),e("code",[t._v("aria")]),t._v(" attributes.")]),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-with-icon"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1"\n              :total-rows="50"\n></b-pagination>\n')])])])])]),e("b-pagination",{attrs:{value:"1","total-rows":50}})]},proxy:!0}])}),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Pagination Sizing")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("Fancy larger or smaller pagination? Add prop "),e("code",[t._v('size="lg"')]),t._v(" or "),e("code",[t._v('size="sm"')]),t._v(" for additional sizes.")]),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-with-icon-size"}},[t._v("                    "),e("code",[t._v('\n<b-pagination value="1" :total-rows="50" size="lg" />\n<b-pagination value="1" :total-rows="50" />\n<b-pagination value="1" :total-rows="50" size="sm" />\n')])])])])]),e("b-pagination",{attrs:{value:"1","total-rows":50,size:"lg"}}),e("b-pagination",{attrs:{value:"1","total-rows":50}}),e("b-pagination",{attrs:{value:"1","total-rows":50,size:"sm"}})]},proxy:!0}])}),e("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[e("h4",{staticClass:"card-title"},[t._v("Alignment")])]},proxy:!0},{key:"headerAction",fn:function(){return[e("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[e("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[e("p",[t._v("By default the pagination component is left aligned. Change the alignment to "),e("code",[t._v("center")]),t._v(", "),e("code",[t._v("right")]),t._v(" ("),e("code",[t._v("right")]),t._v(" is an alias for "),e("code",[t._v("end")]),t._v("), or "),e("code",[t._v("fill")]),t._v(" by setting the prop align to the appropriate value.")]),e("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[e("div",{staticClass:"card"},[e("kbd",{staticClass:"bg-dark"},[e("pre",{staticClass:"text-white",attrs:{id:"pagination-align"}},[t._v("                    "),e("code",[t._v('\n<div>\n  <h6>Left alignment (default)</h6>\n  <b-pagination :value="1" :total-rows="50" />\n</div>\n\n<div class="mt-3">\n  <h6 class="text-center">Center alignment</h6>\n  <b-pagination :value="1" :total-rows="50" align="center" />\n</div>\n\n<div class="mt-3">\n  <h6 class="text-right">Right (end) alignment</h6>\n  <b-pagination :value="1" :total-rows="50" align="right" />\n</div>\n\n<div class="mt-3">\n  <h6 class="text-center">Fill alignment</h6>\n  <b-pagination :value="1" :total-rows="50" align="fill" />\n</div>\n')])])])])]),e("div",[e("h6",[t._v("Left alignment (default)")]),e("b-pagination",{attrs:{value:1,"total-rows":50}})],1),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"text-center"},[t._v("Center alignment")]),e("b-pagination",{attrs:{value:1,"total-rows":50,align:"center"}})],1),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"text-right"},[t._v("Right (end) alignment")]),e("b-pagination",{attrs:{value:1,"total-rows":50,align:"right"}})],1),e("div",{staticClass:"mt-3"},[e("h6",{staticClass:"text-center"},[t._v("Fill alignment")]),e("b-pagination",{attrs:{value:1,"total-rows":50,align:"fill"}})],1)]},proxy:!0}])})],1)],1)],1)},s=[],n=e("bcae"),o={name:"UiPagination",mounted:function(){n["a"].index()}},l=o,r=e("2877"),c=Object(r["a"])(l,i,s,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d20f7a3.31b96cb2.js.map