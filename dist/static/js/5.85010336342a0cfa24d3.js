webpackJsonp([5],{"+6ey":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("3cXf"),n=i.n(a),r=i("4YfN"),c=i.n(r),s=i("9rMa"),o={computed:c()({},Object(s.e)({carInfo:function(t){return t.detail.carInfo},show:function(t){return t.detail.show}}),Object(s.c)({yearList:"detail/yearList",list:"detail/list"})),methods:c()({},Object(s.b)({getDetail:"detail/getDetail",changeYear:"detail/changeYear"}),{clickFn:function(t){window.sessionStorage.setItem("carId",n()(t)),this.$router.push({name:"Quotation",params:{id:t}})}}),mounted:function(){this.id=this.$route.params.id;var t={id:this.id,carId:"",carName:"车款",colorId:"",colorName:"颜色"};window.sessionStorage.setItem("carInfo",n()(t)),this.getDetail(this.id)},beforeDestroy:function(){},beforeRouteEnter:function(t,e,i){i()},beforeRouteLeave:function(t,e,i){i()}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[t.carInfo.list?i("div",{staticClass:"car"},[i("div",{staticClass:"content"},[i("router-link",{staticClass:"img",attrs:{to:"/picture",tag:"div"}},[i("img",{attrs:{src:t.carInfo.CoverPhoto,alt:""}}),t._v(" "),i("span",[t._v(t._s(t.carInfo.pic_group_count)+"张照片")])]),t._v(" "),i("div",{staticClass:"info"},[i("p",[t._v("\n                    "+t._s(t.carInfo.market_attribute.dealer_price)+"\n                ")]),t._v(" "),i("p",[t._v("指导价："+t._s(t.carInfo.market_attribute.official_refer_price))]),t._v(" "),i("div",{staticClass:"action"},[i("button",{on:{click:function(e){t.clickFn(t.carInfo.list[0].car_id)}}},[t._v("询问低价")])])]),t._v(" "),i("div",{staticClass:"car-list"},[i("div",{staticClass:"c-type"},t._l(t.yearList,function(e,a){return i("span",{key:a,class:{active:e===t.show},on:{click:function(i){t.changeYear(e)}}},[t._v(t._s(e))])})),t._v(" "),t._l(t.list,function(e,a,n){return i("div",{key:n},[i("p",[t._v(t._s(a))]),t._v(" "),i("ul",t._l(e,function(e,a){return i("li",{key:a},[i("p",[t._v(t._s(e.market_attribute.year)+"款 "+t._s(e.car_name))]),t._v(" "),i("p",[t._v(t._s(e.horse_power)+"马力"+t._s(e.gear_num)+"档"+t._s(e.trans_type))]),t._v(" "),i("p",[i("span",[t._v("指导价："+t._s(e.market_attribute.official_refer_price))]),t._v(" "),i("span",[t._v(t._s(e.market_attribute.dealer_price_min)+"起")])]),t._v(" "),i("button",{on:{click:function(i){t.clickFn(e.car_id)}}},[t._v("询问低价")])])}))])})],2)],1),t._v(" "),i("div",{staticClass:"bottom",on:{click:function(e){t.clickFn(t.carInfo.list[0].car_id)}}},[i("p",[t._v("询问低价")]),t._v(" "),i("p",[t._v("本地经销商为您报价")])])]):t._e()])},staticRenderFns:[]};var l=i("C7Lr")(o,_,!1,function(t){i("5zt3")},"data-v-95aa2ab2",null);e.default=l.exports},"5zt3":function(t,e){}});
//# sourceMappingURL=5.85010336342a0cfa24d3.js.map