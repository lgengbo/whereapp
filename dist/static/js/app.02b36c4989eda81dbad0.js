webpackJsonp([1],{"0RAP":function(t,e){},"0b7g":function(t,e){},"1ckV":function(t,e){},"2UnA":function(t,e){},"9RBh":function(t,e){},"9n10":function(t,e){},AzW7:function(t,e){},DgcJ:function(t,e){},FKhI:function(t,e){},GUeR:function(t,e){},IWT7:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},a=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=a.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},a,!1,function(t){i("1ckV")},null,null).exports,r=i("/ocq"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header_right"},[this._v("\n        "+this._s(this.$store.state.city)+"\n        "),e("span",{staticClass:"iconfont"},[this._v("")])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header_left"},[e("div",{staticClass:"iconfont"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header_input"},[e("span",{staticClass:"iconfont seach"},[this._v("")]),this._v(" "),e("span",[this._v("输入城市/景点/游玩主题")])])}]};var c=i("VU/8")({name:"HomeHeader",data:function(){return{}}},o,!1,function(t){i("IWT7")},"data-v-86eaffa2",null).exports,l={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:1800,autoplayDisableOnInteraction:!1}}},computed:{showSwiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"broadcast"},[this.showSwiper?e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"图片"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var u=i("VU/8")(l,d,!1,function(t){i("9RBh")},"data-v-c9eaa3ac",null).exports,h={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplayDisableOnInteraction:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"broadcast"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s,staticClass:"icon"},[i("ul",{staticClass:"icon_img"},t._l(e,function(e){return i("router-link",{key:e.id,staticClass:"icon_item",attrs:{to:"detail",tag:"li"}},[i("a",{attrs:{href:"javascrpt:void()"}},[i("img",{staticClass:"swiper_img",attrs:{src:e.imgUrl,alt:"图片"}})]),i("span",{staticClass:"icon_text"},[t._v(t._s(e.desc))])])}))])}),t._v(" "),i("swiper-slide")],2)],1)},staticRenderFns:[]};var v=i("VU/8")(h,p,!1,function(t){i("AzW7")},"data-v-3bf74dc2",null).exports,f={name:"HomeRecommend",props:{list:Array},data:function(){return{}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id,tag:"li"}},[i("img",{staticClass:"item_img",attrs:{src:e.imgUrl,alt:"推荐"}}),t._v(" "),i("div",{staticClass:"item_info"},[i("p",{staticClass:"item_title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item_desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item_btn"},[t._v("查看详细")])])])}))])},staticRenderFns:[]};var _=i("VU/8")(f,m,!1,function(t){i("2UnA")},"data-v-1595e0ee",null).exports,y={name:"HomeSwiper",props:{list:Array},data:function(){return{}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item"},[i("img",{staticClass:"item_img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("p",{staticClass:"item_title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item_desc"},[t._v(t._s(e.desc))])])}))])},staticRenderFns:[]};var C=i("VU/8")(y,w,!1,function(t){i("f5ZA")},"data-v-ac1e9060",null).exports,g=i("mtWM"),b=i.n(g);b.a.defaults.baseURL=Object({NODE_ENV:"production"}).API_ROOT;var k={name:"Home",data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},components:{HomeHeader:c,HomeSwiper:u,HomeIcons:v,HomeRecommend:_,HomeWeekend:C},methods:{getHomeInfo:function(){b.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w"},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var $=i("VU/8")(k,S,!1,function(t){i("e3GK")},"data-v-101100e1",null).exports,x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n"),e("router-link",{attrs:{to:"/"}},[e("a",{attrs:{href:"javacript:void()"}},[e("span",{staticClass:"iconfont back"},[this._v("")])])])],1)},staticRenderFns:[]};var I=i("VU/8")({name:"HomeHearch",data:function(){return{}}},x,!1,function(t){i("ikVB")},"data-v-59bc46e7",null).exports,L=i("Dd8w"),E=i.n(L),A=i("GQaK"),H=i("NYxO"),O={name:"HomeSearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},methods:E()({handleCityClick:function(t){this.keyword="",this.toChangeCity(t),this.$router.push("/")}},Object(H.b)(["toChangeCity"])),computed:E()({hasNoData:function(){return!this.list.length}},Object(H.c)(["city"])),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},mounted:function(){this.scroll=new A.a(this.$refs.search,{click:!0,tap:!0})}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",id:"city_search",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search_content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search_item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom "},[t._v("没有匹配到数据")])],2)])])},staticRenderFns:[]};var U=i("VU/8")(O,R,!1,function(t){i("DgcJ")},"data-v-030839dc",null).exports,T={name:"HomeHearch",props:{hot:Array,cities:Object,letter:String},data:function(){return{}},computed:E()({},Object(H.c)(["city"])),mounted:function(){this.scroll=new A.a(this.$refs.wrapper,{click:!0,tap:!0})},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},methods:E()({handleCityClick:function(t){this.toChangeCity(t),this.$router.push("/")}},Object(H.b)(["toChangeCity"]))},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"btn_list"},[i("div",{staticClass:"btn_wrap"},[i("div",{staticClass:"btn"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"btn_list"},t._l(t.hot,function(e){return i("div",{key:e.id,staticClass:"btn_wrap"},[i("div",{staticClass:"btn",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:e.id,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("div",{key:e.id,staticClass:"city_list"},[i("div",{staticClass:"city_item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])])})],2)})],2)])},staticRenderFns:[]};var F=i("VU/8")(T,N,!1,function(t){i("b4Ar")},"data-v-54837a16",null).exports,V={name:"HomeAnalphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{startY:0,touchstatus:!1,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleTouchStart:function(){this.touchstatus=!0},handleTouchMove:function(t){var e=this;t.preventDefault(),this.touchstatus&&(this.timer&&clearTimeout(this.timer),this.times=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>0&&s<e.letters.length&&e.$emit("changeLetter",e.letters[s])},16))},handleTouchEnd:function(){this.touchstatus=!1},handleLetterClick:function(t){this.$emit("changeLetter",t.target.innerText)}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(e))])}))])},staticRenderFns:[]};var G={name:"HomeCity",data:function(){return{hotCities:[],cities:{},letter:""}},components:{CityHeader:I,CitySearch:U,CityList:F,CityAnalphabet:i("VU/8")(V,D,!1,function(t){i("fdmJ")},"data-v-48f66458",null).exports},methods:{getCityInfo:function(){b.a.get("/api/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var i=e.data;this.hotCities=i.hotCities,this.cities=i.cities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w"},[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hot:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-analphabet",{attrs:{cities:t.cities},on:{changeLetter:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(G,j,!1,function(t){i("GUeR")},"data-v-7afb3c7c",null).exports,M={name:"DetailHeader",data:function(){return{showAbs:!0,opacityBackStyle:{opacity:1},opacityHeaderStyle:{opacity:0}}},methods:{handleScroll:function(){var t=window.parent.document.documentElement.scrollTop;if(t>40){var e=t/130;e=e>1?1:e,this.opacityHeaderStyle={opacity:e},this.showAbs=!1}else{this.showAbs=!0;var i=t/40;i=i>1?1:i,this.opacityBackStyle={opacity:1-i}}}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header_abs",style:t.opacityBackStyle,attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont back-icon-back"},[t._v("")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"detail_header",style:t.opacityHeaderStyle},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont header_back"},[t._v("")])]),t._v("\n      景点详情\n  ")],1)],1)},staticRenderFns:[]};var W=i("VU/8")(M,P,!1,function(t){i("FKhI")},"data-v-281654fe",null).exports,z={name:"CommonGallary",props:{imgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0,loop:!0,disableOnInteraction:!1,autoplayDisableOnInteraction:!1}}},methods:{handleGallaryClick:function(){this.$emit("hallaryclose")}},computed:{isShowGallary:function(){return this.imgs.length>0}}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[this.isShowGallary?e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallery_img",attrs:{src:t,alt:"画廊"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)])},staticRenderFns:[]};var J=i("VU/8")(z,Y,!1,function(t){i("YkW6")},"data-v-75b8171f",null).exports,K={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{ShowGallary:!1}},components:{CommonGallary:J},methods:{handleBannerClick:function(){this.ShowGallary=!0},handleGlallayColse:function(){this.ShowGallary=!this.ShowGallary}}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner"},[i("img",{staticClass:"banner_img",attrs:{src:t.bannerImg,alt:"横幅"},on:{click:t.handleBannerClick}}),t._v(" "),i("div",{staticClass:"banner_info"},[i("div",{staticClass:"banner_title"},[t._v(t._s(t.sightName))]),t._v(" "),t._m(0)]),t._v(" "),i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.ShowGallary,expression:"ShowGallary"}],attrs:{imgs:t.gallaryImgs},on:{hallaryclose:t.handleGlallayColse}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner_number"},[e("span",{staticClass:"iconfont banner_icon"},[this._v("")]),this._v(" 4\n      ")])}]};var Z=i("VU/8")(K,q,!1,function(t){i("z570")},"data-v-7f23403e",null).exports,Q={name:"DetailList",props:{categoryList:Array},data:function(){return{}},components:{}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.categoryList,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item_title border-bottom"},[i("span",{staticClass:"item_title_icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item_children"},[i("detail-list",{attrs:{categoryList:e.children}})],1):t._e()])}))},staticRenderFns:[]};var tt={name:"Detail",data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},components:{DetailHeader:W,DetailBanner:Z,DetailList:i("VU/8")(Q,X,!1,function(t){i("0RAP")},"data-v-efcd3586",null).exports},methods:{getDetailInfo:function(){b.a.get("/api/detail.json?id="+this.$route.params.id).then(this.getCityInfoSucc)},getCityInfoSucc:function(t){var e=t.data;if(e.data&&e.ret){var i=e.data;this.sightName=i.sightName,this.bannerImg=i.bannerImg,this.gallaryImgs=i.gallaryImgs,this.categoryList=i.categoryList}}},mounted:function(){this.getDetailInfo()}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w"},[e("detail-header"),this._v(" "),e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-list",{attrs:{categoryList:this.categoryList}}),this._v(" "),e("div",{staticClass:"content"})],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("0b7g")},"data-v-98942876",null).exports;s.a.use(r.a);var st=new r.a({routes:[{path:"/",name:"home",component:$},{path:"/city",name:"city",component:B},{path:"/detail/:id",name:"detail",component:it}],scrollBehavior:function(t,e,i){return i||{x:0,y:0}}}),at=(i("9n10"),i("M6Sr"),i("TzC8"),i("v5o6")),nt=i.n(at),rt=i("F3EI"),ot=i.n(rt),ct=(i("v2ns"),"南京");try{localStorage.city&&(ct=localStorage.city||"上海")}catch(t){}var lt={city:ct},dt={toChangeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(H.a);var ut=new H.a.Store({state:lt,mutations:dt,actions:{changeCity:function(t,e){t.commit("toChanggeCity",e)}}});s.a.use(ot.a),s.a.config.productionTip=!1,nt.a.attach(document.body),new s.a({el:"#app",router:st,store:ut,components:{App:n},template:"<App/>"})},TzC8:function(t,e){},YkW6:function(t,e){},b4Ar:function(t,e){},e3GK:function(t,e){},f5ZA:function(t,e){},fdmJ:function(t,e){},ikVB:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(a,n,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},z570:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.02b36c4989eda81dbad0.js.map