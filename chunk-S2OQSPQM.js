import{c as A}from"./chunk-QWPOVLGS.js";import{a as st}from"./chunk-FPW34I5S.js";import{$ as J,Da as v,Ga as $,Ha as K,Ia as X,Ja as N,K as V,Ka as f,La as d,Ma as G,Na as Z,Oa as F,P as b,Pa as tt,S as I,Ta as y,U as T,Ua as W,Va as et,Wa as O,Xa as _,Ya as P,Z as q,Za as j,_ as B,_a as nt,ha as Q,na as U,pb as rt,qa as l,qb as ot,vb as at,wa as k,xb as it}from"./chunk-SU74KC43.js";var ct=(()=>{let e=class e{transform(o){return o.split("").reverse().join("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=T({name:"reverse",type:e,pure:!0,standalone:!0});let t=e;return t})();function s(t){let e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}var kt=Math.pow(10,8)*24*60*60*1e3,le=-kt;var C=43200,R=1440;var Ft=3600;var ut=Ft*24,fe=ut*7,Wt=ut*365.2425,Ot=Wt/12,pe=Ot*3;var _t={};function dt(){return _t}function H(t){let e=s(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function M(t,e){let n=s(t),o=s(e),r=n.getTime()-o.getTime();return r<0?-1:r>0?1:r}function mt(t,e){let n=s(t),o=s(e),r=n.getFullYear()-o.getFullYear(),a=n.getMonth()-o.getMonth();return r*12+a}function lt(t){return e=>{let o=(t?Math[t]:Math.trunc)(e);return o===0?0:o}}function ft(t,e){return+s(t)-+s(e)}function pt(t){let e=s(t);return e.setHours(23,59,59,999),e}function ht(t){let e=s(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function gt(t){let e=s(t);return+pt(e)==+ht(e)}function yt(t,e){let n=s(t),o=s(e),r=M(n,o),a=Math.abs(mt(n,o)),c;if(a<1)c=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*a);let i=M(n,o)===-r;gt(s(t))&&a===1&&M(t,o)===1&&(i=!1),c=r*(a-Number(i))}return c===0?0:c}function xt(t,e,n){let o=ft(t,e)/1e3;return lt(n?.roundingMethod)(o)}var jt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bt=(t,e,n)=>{let o,r=jt[t];return typeof r=="string"?o=r:e===1?o=r.one:o=r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o};function Y(t){return(e={})=>{let n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var At={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Lt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Yt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vt={date:Y({formats:At,defaultWidth:"full"}),time:Y({formats:Lt,defaultWidth:"full"}),dateTime:Y({formats:Yt,defaultWidth:"full"})};var Et={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Mt=(t,e,n,o)=>Et[t];function w(t){return(e,n)=>{let o=n?.context?String(n.context):"standalone",r;if(o==="formatting"&&t.formattingValues){let c=t.defaultFormattingWidth||t.defaultWidth,i=n?.width?String(n.width):c;r=t.formattingValues[i]||t.formattingValues[c]}else{let c=t.defaultWidth,i=n?.width?String(n.width):t.defaultWidth;r=t.values[i]||t.values[c]}let a=t.argumentCallback?t.argumentCallback(e):e;return r[a]}}var Xt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Nt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Rt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ht={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},zt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Vt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},qt=(t,e)=>{let n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},wt={ordinalNumber:qt,era:w({values:Xt,defaultWidth:"wide"}),quarter:w({values:Nt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:w({values:Rt,defaultWidth:"wide"}),day:w({values:Ht,defaultWidth:"wide"}),dayPeriod:w({values:zt,defaultWidth:"wide",formattingValues:Vt,defaultFormattingWidth:"wide"})};function D(t){return(e,n={})=>{let o=n.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],a=e.match(r);if(!a)return null;let c=a[0],i=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],p=Array.isArray(i)?Jt(i,S=>S.test(c)):Bt(i,S=>S.test(c)),m;m=t.valueCallback?t.valueCallback(p):p,m=n.valueCallback?n.valueCallback(m):m;let h=e.slice(c.length);return{value:m,rest:h}}}function Bt(t,e){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Jt(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Dt(t){return(e,n={})=>{let o=e.match(t.matchPattern);if(!o)return null;let r=o[0],a=e.match(t.parsePattern);if(!a)return null;let c=t.valueCallback?t.valueCallback(a[0]):a[0];c=n.valueCallback?n.valueCallback(c):c;let i=e.slice(r.length);return{value:c,rest:i}}}var Qt=/^(\d+)(th|st|nd|rd)?/i,Ut=/\d+/i,$t={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Kt={any:[/^b/i,/^(a|c)/i]},Gt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Zt={any:[/1/i,/2/i,/3/i,/4/i]},te={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ee={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ne={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},re={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},oe={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ae={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},St={ordinalNumber:Dt({matchPattern:Qt,parsePattern:Ut,valueCallback:t=>parseInt(t,10)}),era:D({matchPatterns:$t,defaultMatchWidth:"wide",parsePatterns:Kt,defaultParseWidth:"any"}),quarter:D({matchPatterns:Gt,defaultMatchWidth:"wide",parsePatterns:Zt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:D({matchPatterns:te,defaultMatchWidth:"wide",parsePatterns:ee,defaultParseWidth:"any"}),day:D({matchPatterns:ne,defaultMatchWidth:"wide",parsePatterns:re,defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:oe,defaultMatchWidth:"any",parsePatterns:ae,defaultParseWidth:"any"})};var z={code:"en-US",formatDistance:bt,formatLong:vt,formatRelative:Mt,localize:wt,match:St,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Pt(t,e,n){let o=dt(),r=n?.locale??o.locale??z,a=2520,c=M(t,e);if(isNaN(c))throw new RangeError("Invalid time value");let i=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:c}),p,m;c>0?(p=s(e),m=s(t)):(p=s(t),m=s(e));let h=xt(m,p),S=(H(m)-H(p))/1e3,u=Math.round((h-S)/60),x;if(u<2)return n?.includeSeconds?h<5?r.formatDistance("lessThanXSeconds",5,i):h<10?r.formatDistance("lessThanXSeconds",10,i):h<20?r.formatDistance("lessThanXSeconds",20,i):h<40?r.formatDistance("halfAMinute",0,i):h<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):u===0?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",u,i);if(u<45)return r.formatDistance("xMinutes",u,i);if(u<90)return r.formatDistance("aboutXHours",1,i);if(u<R){let g=Math.round(u/60);return r.formatDistance("aboutXHours",g,i)}else{if(u<a)return r.formatDistance("xDays",1,i);if(u<C){let g=Math.round(u/R);return r.formatDistance("xDays",g,i)}else if(u<C*2)return x=Math.round(u/C),r.formatDistance("aboutXMonths",x,i)}if(x=yt(m,p),x<12){let g=Math.round(u/C);return r.formatDistance("xMonths",g,i)}else{let g=x%12,E=Math.trunc(x/12);return g<3?r.formatDistance("aboutXYears",E,i):g<9?r.formatDistance("overXYears",E,i):r.formatDistance("almostXYears",E+1,i)}}var Ct=(()=>{let e=class e{transform(o){let r=new Date(o);return Pt(new Date,r)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=T({name:"timeAgo",type:e,pure:!0,standalone:!0});let t=e;return t})();var ie=t=>["product/",t],It=(()=>{let e=class e{constructor(){this.addToCart=new Q}addToCartHandler(){this.addToCart.emit(this.product)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=I({type:e,selectors:[["app-product"]],inputs:{product:"product"},outputs:{addToCart:"addToCart"},standalone:!0,features:[O],decls:16,vars:19,consts:[[1,"group","rounded-lg","border"],[1,"w-full","overflow-hidden","rounded-t-lg","bg-gray-200",3,"routerLink"],[1,"h-full","w-full","object-cover","object-center","group-hover:opacity-75",3,"src","alt"],[1,"flex","flex-col","space-y-2","p-4"],[1,"text-sm","text-gray-700"],[1,"text-lg","font-medium","text-gray-900"],[1,"text-black","bg-gray-200","font-medium","rounded-lg","text-sm","px-5","py-2.5","w-full",3,"click"]],template:function(r,a){r&1&&(f(0,"div",0)(1,"a",1),G(2,"img",2),d(),f(3,"div",3)(4,"h3",4),y(5),P(6,"uppercase"),P(7,"reverse"),d(),f(8,"p",5),y(9),P(10,"currency"),d(),f(11,"h3",4),y(12),P(13,"timeAgo"),d(),f(14,"button",6),F("click",function(){return a.addToCartHandler()}),y(15,"Add to cart"),d()()()),r&2&&(l(),v("routerLink",_(17,ie,a.product.id)),l(),v("src",a.product.images[0],U)("alt",a.product.title),l(3),W(j(7,8,j(6,6,a.product.title))),l(4),W(nt(10,10,a.product.price,"$","symbol","1.0")),l(3),W(j(13,15,a.product.creationAt)))},dependencies:[ot,rt,ct,Ct,A]});let t=e;return t})();var Tt=(()=>{let e=class e{constructor(){this.http=b(at)}getCategories(){return this.http.get("https://api.escuelajs.co/api/v1/categories")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var se=t=>({category_id:t});function ce(t,e){if(t&1&&(f(0,"li")(1,"a",5),y(2),d()()),t&2){let n=e.$implicit;l(),v("queryParams",_(2,se,n.id)),l(),et(" ",n.name,"")}}function ue(t,e){if(t&1){let n=Z();f(0,"app-product",6),F("addToCart",function(r){B(n);let a=tt();return J(a.addToCart(r))}),d()}if(t&2){let n=e.$implicit;v("product",n)}}var qn=(()=>{let e=class e{constructor(){this.produtSignal=k([]),this.categorySignal=k([]),this.cart=k([]),this.cartService=b(it),this.productService=b(st),this.categoryService=b(Tt)}ngOnInit(){this.getCategories()}ngOnChanges(o){this.getProducts()}addToCart(o){this.cartService.addToCart(o)}getProducts(){this.productService.getProducts(this.category_id).subscribe({next:o=>{this.produtSignal.set(o)},error:o=>{}})}getCategories(){this.categoryService.getCategories().subscribe({next:o=>{this.categorySignal.set(o)},error:o=>{}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=I({type:e,selectors:[["app-list"]],inputs:{category_id:"category_id"},standalone:!0,features:[q,O],decls:11,vars:0,consts:[[1,"flex","space-x-4","mt-5"],[1,"w-80"],["routerLink","/"],[1,"grid","grid-cols-4","gap-8","w-full"],[3,"product"],["routerLink","/",3,"queryParams"],[3,"addToCart","product"]],template:function(r,a){r&1&&(f(0,"div",0)(1,"div",1)(2,"ul")(3,"li")(4,"a",2),y(5,"All"),d()(),X(6,ce,3,4,"li",null,K),d()(),f(8,"div",3),X(9,ue,1,1,"app-product",4,$),d()()),r&2&&(l(6),N(a.categorySignal()),l(3),N(a.produtSignal()))},dependencies:[It,A]});let t=e;return t})();export{qn as default};