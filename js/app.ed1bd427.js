(function(){"use strict";var t={1443:function(t,e,n){var a=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("van-row",{attrs:{type:"flex",justify:"center"}},[e("h1"),e("van-col",{attrs:{span:"24"}},[e("TopNavVue")],1)],1),e("van-row",{attrs:{type:"flex",justify:"center"}},[e("van-col",{attrs:{span:"22"}},[e("MainBody")],1)],1)],1)},r=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Topnav"},[e("van-grid",{attrs:{clickable:"","column-num":5,border:!1}},[e("van-grid-item",{attrs:{icon:"user-circle-o",to:"/start"}}),e("van-grid-item",{attrs:{text:"数据",to:"/club"}}),e("van-grid-item",{attrs:{text:" 运动",to:"/video"}}),e("van-grid-item",{attrs:{text:"工具",to:"/vip"}}),e("van-grid-item",{attrs:{icon:"cart-o",to:"/search"}})],1)],1)},o=[],c={},l=c,u=n(1001),v=(0,u.Z)(l,s,o,!1,null,null,null),d=v.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("router-view"),e("van-tabbar",{attrs:{route:""}},[e("van-tabbar-item",{attrs:{icon:"bar-chart-o",to:"/club"}},[t._v("数据")]),e("van-tabbar-item",{attrs:{icon:"flower-o",badge:"5",to:"/video"}},[t._v("开始")]),e("van-tabbar-item",{attrs:{icon:"apps-o",to:"/vip"}},[t._v("功能")]),e("van-tabbar-item",{attrs:{icon:"setting-o",dot:"",to:"/start"}},[t._v("设置")])],1)],1)},h=[],m={data(){return{}}},f=m,g=(0,u.Z)(f,p,h,!1,null,null,null),b=g.exports,k={name:"App",components:{TopNavVue:d,MainBody:b}},w=k,x=(0,u.Z)(w,i,r,!1,null,null,null),y=x.exports,S=n(7272),_=(n(5110),n(2631)),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Sa"},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e("van-empty",{attrs:{description:"连接失败，请下滑刷新"}})],1)],1)},Z=[],F=n(8848),D={data(){return{count:0,isLoading:!1}},methods:{onRefresh(){setTimeout((()=>{(0,F.Z)("连接失败"),this.isLoading=!1,this.count++}),1e3)}}},q=D,R=(0,u.Z)(q,C,Z,!1,null,null,null),O=R.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ad"},[e("van-overlay",{attrs:{show:t.show},on:{click:function(e){t.show=!1}}}),e("van-dropdown-menu",[e("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),e("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),e("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"}}),e("br"),e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"收藏",type:"primary"}})]},proxy:!0}])},[e("van-card",{attrs:{num:"1",price:"125.00","origin-price":"700.00",desc:"适合新手的健身教程!只需一周练3次,就可以打造完美身材...",title:"健身教程-零基础版",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2F1a8070d9c73bf59721d96dc3c32d263f1e7f776f3f0bd-fmDy9H_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672420133&t=ca85181a5845d275d9c2fee72cdb2684"},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{staticStyle:{"margin-right":"0.5rem"},attrs:{plain:"",type:"danger"}},[t._v("折扣")]),e("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("新手推荐")])]},proxy:!0}])})],1),e("br"),e("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"}}),e("br"),e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"收藏",type:"primary"}})]},proxy:!0}])},[e("van-card",{attrs:{num:"2",price:"99.98",desc:"现货供应,瑜伽类辅助用品,瑜伽砖瑜伽垫配套产品...",title:"tpe瑜伽垫（紫）",thumb:"https://img2.baidu.com/it/u=1120004818,2842812488&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334"},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{staticStyle:{"margin-right":"0.5rem"},attrs:{plain:"",type:"danger"}},[t._v("瑜伽")]),e("van-tag",{staticStyle:{"margin-right":"0.5rem"},attrs:{plain:"",type:"danger"}},[t._v("优质保证")]),e("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("器材")])]},proxy:!0}])})],1),e("br"),e("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"}}),e("br"),e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"收藏",type:"primary"}})]},proxy:!0}])},[e("van-card",{attrs:{num:"1",price:"1200.00",desc:"基于高端骨传导技术GwT2的明湖运动耳机...",title:"骨传导挂耳式无线蓝牙运动耳机",thumb:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20210317%2F10%2Fwemedia%2F3c9d4aff580a8efa6b0f6744ddbba30abd6bf006_size45_w783_h522.png&refer=http%3A%2F%2Fd.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672422441&t=bb17c47fff2caca54fa5badaa16d7772"},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{staticStyle:{"margin-right":"0.5rem"},attrs:{plain:"",type:"danger"}},[t._v("运动")]),e("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("耳机")])]},proxy:!0}])})],1),e("van-submit-bar",{attrs:{price:152496,"button-text":"提交订单"},on:{submit:t.onSubmit},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v(" 你所在的地区异常, "),e("span",{on:{click:t.onClickEditAddress}},[t._v("请点我"),e("span",{staticStyle:{"text-decoration":"underline"}},[t._v("重新选择地址")])])]},proxy:!0}])},[e("van-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)},j=[],T=n(5348),z={data(){return{show:!1,checked:!0,value1:0,value2:"a",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]}},methods:{onSubmit(){this.show=!0},onClickEditAddress(){T.Z.alert({message:"未知错误"}).then((()=>{}))}}},A=z,M=(0,u.Z)(A,P,j,!1,null,null,null),N=M.exports,$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sports"},[e("van-cell",{staticStyle:{"background-color":"white"},attrs:{title:"开始运动"}}),e("van-circle",{staticStyle:{"margin-top":"1rem"},attrs:{rate:80,speed:100,text:t.text},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),e("van-steps",{attrs:{direction:"vertical",active:1}},[e("van-step",[e("h3",[t._v("运动分>40")]),e("p",[t._v("2022-10-12 12:40")])]),e("van-step",[e("h3",[t._v("运动分>80")]),e("p",[t._v("2022-11-07 10:00")])]),e("van-step",[e("h3",[t._v("运动分>90")]),e("p",[t._v("未知")])])],1),e("van-picker",{directives:[{name:"show",rawName:"v-show",value:t.picker,expression:"picker"}],attrs:{title:"选择运动模式","show-toolbar":"",columns:t.columns},on:{cancel:t.onCancel,confirm:t.onConfirm}}),e("van-cell",{attrs:{center:"",title:"定位辅助"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-switch",{attrs:{size:"24"},model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}})]},proxy:!0}])}),e("van-cell",{attrs:{center:"",title:"计步功能"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-switch",{attrs:{size:"24"},model:{value:t.checked2,callback:function(e){t.checked2=e},expression:"checked2"}})]},proxy:!0}])}),e("van-cell",{attrs:{center:"",title:"启用模式选择"},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-switch",{attrs:{size:"24"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})]},proxy:!0}])}),e("van-cell",{attrs:{title:"校对日期",value:"校对","is-link":""},on:{click:function(e){t.showdate=!0}}}),e("van-datetime-picker",{directives:[{name:"show",rawName:"v-show",value:t.showdate,expression:"showdate"}],attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:function(e){t.showdate=!1},confirm:t.ondate},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}}),e("van-cell",{attrs:{title:"基础计时器","is-link":""}}),e("br"),e("van-count-down",{ref:"countDown",attrs:{millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS"},on:{finish:t.finish}}),e("br"),e("van-grid",{attrs:{clickable:"","column-num":3,"icon-size":"30px",square:""}},[e("van-grid-item",{attrs:{icon:"play-circle-o"},on:{click:t.start}}),e("van-grid-item",{attrs:{icon:"pause-circle-o"},on:{click:t.pause}}),e("van-grid-item",{attrs:{icon:"replay"},on:{click:t.reset}})],1)],1)},L=[],E=n(6450),B={data(){return{currentRate:0,showdate:!1,checked1:!1,checked2:!0,picker:!1,columns:["快跑","步行","瑜伽","健身"],minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date(2022,11,1)}},methods:{onConfirm(t,e){(0,F.Z)(`当前值：${t}, id：${e}`),this.picker=!1},onCancel(){(0,F.Z)("取消")},ondate(){(0,E.Z)("修改成功"),this.showdate=!1},start(){this.$refs.countDown.start()},pause(){this.$refs.countDown.pause()},reset(){this.$refs.countDown.reset()},finish(){(0,F.Z)("倒计时结束")}},computed:{text(){return"运动分："+this.currentRate.toFixed(0)}}},G=B,V=(0,u.Z)(G,$,L,!1,null,null,null),W=V.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showbotton,expression:"showbotton"}],staticClass:"main"},[e("van-cell-group",{attrs:{inset:""}},[e("van-cell",{staticStyle:{"background-color":"white"},attrs:{title:"我的数据"}}),e("van-circle",{staticStyle:{"margin-top":"1rem"},attrs:{rate:80,speed:100,text:t.text},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),e("van-cell",{attrs:{title:"运动步数",value:"步数记录","is-link":""},on:{click:t.clickD}}),e("van-cell",{attrs:{title:"跑步记录",value:"详情信息","is-link":""}}),e("van-cell",{attrs:{title:"健康指数",value:"健康指数","is-link":""}}),e("van-cell",{attrs:{title:"有氧运动",value:"运动时间","is-link":""}}),e("van-cell",{attrs:{title:"健身打卡",value:"打卡日历","is-link":""}}),e("van-cell",{attrs:{title:"我的课程",value:"课程详情","is-link":""}})],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showdata,expression:"showdata"}],staticClass:"data"},[e("van-nav-bar",{attrs:{title:"步数记录","left-text":"返回","right-text":"分享","left-arrow":""},on:{"click-left":function(e){t.showbotton=!0,t.showdata=!1},"click-right":function(e){t.showShare=!0}}}),e("div",{staticClass:"M11"},[e("van-cell-group",{staticStyle:{"margin-top":"20px"},attrs:{inset:""}},[e("van-cell",{staticClass:"month",attrs:{title:"2022-11","is-link":"","arrow-direction":"down"}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"10,247 Steps",value:"11/26","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"11,389 Steps",value:"11/23","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"10,210 Steps",value:"11/12","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"20,562 Steps",value:"11/6","is-link":""}})],1)],1),e("div",{staticClass:"M10"},[e("van-cell-group",{staticStyle:{"margin-top":"20px"},attrs:{inset:""}},[e("van-cell",{staticClass:"month",attrs:{title:"2022-10","is-link":"","arrow-direction":"down"}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"10,854 Steps",value:"10/28","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"10,979 Steps",value:"10/20","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"14,076 Steps",value:"10/19","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"12,130 Steps",value:"10/15","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"22,234 Steps",value:"10/12","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"13,015 Steps",value:"10/11","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"10,210 Steps",value:"10/5","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"12,022 Steps",value:"10/2","is-link":""}})],1)],1),e("div",{staticClass:"M9"},[e("van-cell-group",{staticStyle:{"margin-top":"20px"},attrs:{inset:""}},[e("van-cell",{staticClass:"month",attrs:{title:"2022-9","is-link":"","arrow-direction":"down"}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"12,172 Steps",value:"9/29","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"13,293 Steps",value:"9/21","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"10,839 Steps",value:"9/19","is-link":""}})],1)],1),e("div",{staticClass:"M6"},[e("van-cell-group",{staticStyle:{"margin-top":"20px"},attrs:{inset:""}},[e("van-cell",{staticClass:"month",attrs:{title:"2022-6","is-link":"","arrow-direction":"down"}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"9,012 Steps",value:"6/27","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"7,389 Steps",value:"6/20","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"12,390 Steps",value:"6/19","is-link":""}}),e("van-cell",{attrs:{icon:"chart-trending-o",title:"8,984 Steps",value:"6/16","is-link":""}})],1),e("van-share-sheet",{attrs:{title:"分享给朋友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)],1)])},J=[],Q={data(){return{currentRate:0,showdata:!1,showbotton:!0,showShare:!1,options:[{name:"Wechat",icon:"wechat"},{name:"Web",icon:"link"},{name:"Post",icon:"poster"},{name:"QRcode",icon:"qrcode"}]}},methods:{clickD(){this.showdata=!0,this.showbotton=!1},onSelect(t){(0,F.Z)(t.name),this.showShare=!1}},computed:{text(){return"运动分："+this.currentRate.toFixed(0)}}},I=Q,K=(0,u.Z)(I,H,J,!1,null,null,null),U=K.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tool"},[e("van-grid",{attrs:{square:"",gutter:20,"column-num":3}},[e("van-grid-item",{attrs:{text:"地图",icon:"location"}}),e("van-grid-item",{attrs:{text:"告示",icon:"comment"}}),e("van-grid-item",{attrs:{text:"礼物",icon:"point-gift"}}),e("van-grid-item",{attrs:{text:"圈子",icon:"friends"}}),e("van-grid-item",{attrs:{text:"会员",icon:"vip-card"}}),e("van-grid-item",{attrs:{text:"热门",icon:"fire"}}),e("van-grid-item",{attrs:{text:"购物",icon:"bag"}}),e("van-grid-item",{attrs:{text:"音乐",icon:"service"}}),e("van-grid-item",{attrs:{text:"提问",icon:"question"}}),e("van-grid-item",{attrs:{text:"视频",icon:"video"}}),e("van-grid-item",{attrs:{text:"推荐",icon:"thumb-circle"}}),e("van-grid-item",{attrs:{text:"更多",icon:"more"}})],1)],1)},Y=[],tt={data(){return{show:!1}}},et=tt,nt=(0,u.Z)(et,X,Y,!1,null,null,null),at=nt.exports,it=new _.ZP({routes:[{path:"/start",component:O},{path:"/search",component:N},{path:"/club",component:U},{path:"/video",component:W},{path:"/vip",component:at}]});a.ZP.use(S.ZP),a.ZP.use(_.ZP),a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(y),router:it}).$mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],r=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,s=a[0],o=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(e&&e(a);l<s.length;l++)r=s[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkmusic"]=self["webpackChunkmusic"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1443)}));a=n.O(a)})();
//# sourceMappingURL=app.ed1bd427.js.map