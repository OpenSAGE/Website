(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(s,e,j){var t={"./af":119,"./af.js":119,"./ar":120,"./ar-dz":121,"./ar-dz.js":121,"./ar-kw":122,"./ar-kw.js":122,"./ar-ly":123,"./ar-ly.js":123,"./ar-ma":124,"./ar-ma.js":124,"./ar-sa":125,"./ar-sa.js":125,"./ar-tn":126,"./ar-tn.js":126,"./ar.js":120,"./az":127,"./az.js":127,"./be":128,"./be.js":128,"./bg":129,"./bg.js":129,"./bm":130,"./bm.js":130,"./bn":131,"./bn.js":131,"./bo":132,"./bo.js":132,"./br":133,"./br.js":133,"./bs":134,"./bs.js":134,"./ca":135,"./ca.js":135,"./cs":136,"./cs.js":136,"./cv":137,"./cv.js":137,"./cy":138,"./cy.js":138,"./da":139,"./da.js":139,"./de":140,"./de-at":141,"./de-at.js":141,"./de-ch":142,"./de-ch.js":142,"./de.js":140,"./dv":143,"./dv.js":143,"./el":144,"./el.js":144,"./en-au":145,"./en-au.js":145,"./en-ca":146,"./en-ca.js":146,"./en-gb":147,"./en-gb.js":147,"./en-ie":148,"./en-ie.js":148,"./en-il":149,"./en-il.js":149,"./en-nz":150,"./en-nz.js":150,"./eo":151,"./eo.js":151,"./es":152,"./es-do":153,"./es-do.js":153,"./es-us":154,"./es-us.js":154,"./es.js":152,"./et":155,"./et.js":155,"./eu":156,"./eu.js":156,"./fa":157,"./fa.js":157,"./fi":158,"./fi.js":158,"./fo":159,"./fo.js":159,"./fr":160,"./fr-ca":161,"./fr-ca.js":161,"./fr-ch":162,"./fr-ch.js":162,"./fr.js":160,"./fy":163,"./fy.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-latn":166,"./gom-latn.js":166,"./gu":167,"./gu.js":167,"./he":168,"./he.js":168,"./hi":169,"./hi.js":169,"./hr":170,"./hr.js":170,"./hu":171,"./hu.js":171,"./hy-am":172,"./hy-am.js":172,"./id":173,"./id.js":173,"./is":174,"./is.js":174,"./it":175,"./it.js":175,"./ja":176,"./ja.js":176,"./jv":177,"./jv.js":177,"./ka":178,"./ka.js":178,"./kk":179,"./kk.js":179,"./km":180,"./km.js":180,"./kn":181,"./kn.js":181,"./ko":182,"./ko.js":182,"./ku":183,"./ku.js":183,"./ky":184,"./ky.js":184,"./lb":185,"./lb.js":185,"./lo":186,"./lo.js":186,"./lt":187,"./lt.js":187,"./lv":188,"./lv.js":188,"./me":189,"./me.js":189,"./mi":190,"./mi.js":190,"./mk":191,"./mk.js":191,"./ml":192,"./ml.js":192,"./mn":193,"./mn.js":193,"./mr":194,"./mr.js":194,"./ms":195,"./ms-my":196,"./ms-my.js":196,"./ms.js":195,"./mt":197,"./mt.js":197,"./my":198,"./my.js":198,"./nb":199,"./nb.js":199,"./ne":200,"./ne.js":200,"./nl":201,"./nl-be":202,"./nl-be.js":202,"./nl.js":201,"./nn":203,"./nn.js":203,"./pa-in":204,"./pa-in.js":204,"./pl":205,"./pl.js":205,"./pt":206,"./pt-br":207,"./pt-br.js":207,"./pt.js":206,"./ro":208,"./ro.js":208,"./ru":209,"./ru.js":209,"./sd":210,"./sd.js":210,"./se":211,"./se.js":211,"./si":212,"./si.js":212,"./sk":213,"./sk.js":213,"./sl":214,"./sl.js":214,"./sq":215,"./sq.js":215,"./sr":216,"./sr-cyrl":217,"./sr-cyrl.js":217,"./sr.js":216,"./ss":218,"./ss.js":218,"./sv":219,"./sv.js":219,"./sw":220,"./sw.js":220,"./ta":221,"./ta.js":221,"./te":222,"./te.js":222,"./tet":223,"./tet.js":223,"./tg":224,"./tg.js":224,"./th":225,"./th.js":225,"./tl-ph":226,"./tl-ph.js":226,"./tlh":227,"./tlh.js":227,"./tr":228,"./tr.js":228,"./tzl":229,"./tzl.js":229,"./tzm":230,"./tzm-latn":231,"./tzm-latn.js":231,"./tzm.js":230,"./ug-cn":232,"./ug-cn.js":232,"./uk":233,"./uk.js":233,"./ur":234,"./ur.js":234,"./uz":235,"./uz-latn":236,"./uz-latn.js":236,"./uz.js":235,"./vi":237,"./vi.js":237,"./x-pseudo":238,"./x-pseudo.js":238,"./yo":239,"./yo.js":239,"./zh-cn":240,"./zh-cn.js":240,"./zh-hk":241,"./zh-hk.js":241,"./zh-tw":242,"./zh-tw.js":242};function n(s){var e=a(s);return j(e)}function a(s){var e=t[s];if(e+1)return e;var j=new Error("Cannot find module '"+s+"'");throw j.code="MODULE_NOT_FOUND",j}n.keys=function(){return Object.keys(t)},n.resolve=a,(s.exports=n).id=243},42:function(s,e,j){"use strict";j.r(e);var t=j(0),n=j.n(t),a=j(21),r=j(17),l=j(118),u=j.n(l),c=j(244),o=function(s){var e=s.post;return n.a.createElement("li",{key:e.id},n.a.createElement(r.Link,{to:"/blog/post/".concat(e.id,"/")},e.title," (",e.publishedDate,")"))};e.default=Object(a.withRouteData)(function(s){var e=s.posts,j=Object(c.groupBy)(e,function(s){return u()(s.publishedDate).year()}),t=Object(c.orderBy)(Object(c.uniq)(Object.keys(j))).reverse();return n.a.createElement(n.a.Fragment,null,n.a.createElement(a.Head,null,n.a.createElement("title",null,"Blog - OpenSAGE")),n.a.createElement("h1",null,"The OpenSAGE blog"),t.map(function(s){return n.a.createElement(n.a.Fragment,{key:s},n.a.createElement("h2",{key:s},s),n.a.createElement("ul",null,j[s].map(function(s){return n.a.createElement(o,{key:s.id,post:s})})))}))})}}]);
//# sourceMappingURL=src-pages-blog.db69bdb0.js.map