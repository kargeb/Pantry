(this.webpackJsonppantry=this.webpackJsonppantry||[]).push([[0],{27:function(n){n.exports=JSON.parse('{"products":[{"id":"9bb85eda-23d2-488f-bb04-f71dc231e57c","name":"M\u0105ka","quantity":"2","unit":"kg","category":"Artyku\u0142y spo\u017cywcze","min":"2"},{"id":"fb5d383f-3e95-477e-9bba-14098213bc4f","name":"Coca-cola","quantity":"3","unit":"l","category":"Napoje / Alkohol","min":"2"},{"id":"fb5d383f-3e95-477e-9bba-12298213bc4f","name":"Tyskie","quantity":"3","unit":"l","category":"Napoje / Alkohol","min":"4"},{"id":"21fcbe45-048e-4905-a517-3a0919e599ac","name":"Biszkopty","quantity":"1","unit":"szt","category":"S\u0142odycze","min":"3"}],"categories":["S\u0142odycze","Napoje / Alkohol","Owoce / Warzywa","Piewczywo","Artyku\u0142y spo\u017cywcze","Kosmetyki","Chemia"]}')},36:function(n,t,e){n.exports=e(47)},47:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(30),o=e.n(i),c=e(22),u=e(10),l=e(14),d=e(15),s=e(16),f=e(17),p=e(7),m=e(12),h=e(49),g=e(2),b=e(1),v=e(6),y=e(4);function x(){var n=Object(g.a)(["\n  cursor: pointer;\n  line-height: 40px;\n  margin: 0 10px;\n  color: red;\n"]);return x=function(){return n},n}function E(){var n=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  left: -10%;\n"]);return E=function(){return n},n}function j(){var n=Object(g.a)(["\n  margin-right: 5%;\n"]);return j=function(){return n},n}function O(){var n=Object(g.a)(["\n  position: absolute;\n  display: flex;\n  top: 25%;\n  left: 25%;\n  width: %;\n  height: 50%;\n  margin: 0 auto;\n  flex-direction: column;\n  align-items: center;\n  padding: 10%;\n  background-color: white;\n"]);return O=function(){return n},n}function w(){var n=Object(g.a)(["\n  margin-left: 5px;\n  text-transform: capitalize;\n  text-align: center;\n"]);return w=function(){return n},n}function k(){var n=Object(g.a)(["\n  font-weight: 900;\n  text-align: center;\n"]);return k=function(){return n},n}function P(){var n=Object(g.a)(["\n  cursor: pointer;\n  line-height: 40px;\n  margin: 0 10px;\n  color: rgba(0, 0, 0, 0.54);\n"]);return P=function(){return n},n}function S(){var n=Object(g.a)(["\n  display: flex;\n  position: relative;\n  width: 55%;\n"]);return S=function(){return n},n}function z(){var n=Object(g.a)(["\n  display: flex;\n  width: 25%;\n"]);return z=function(){return n},n}function C(){var n=Object(g.a)(["\n  display: flex;\n  width: 30%;\n"]);return C=function(){return n},n}function L(){var n=Object(g.a)(["\n  text-transform: capitalize;\n  word-break: break-all;\n"]);return L=function(){return n},n}function F(){var n=Object(g.a)(["\n  width: 40px;\n  /* cursor: auto !important; */\n"]);return F=function(){return n},n}function q(){var n=Object(g.a)(["\npadding-left: 5%;\n  min-height: 40px;\n  line-height: 40px;\n  display: flex;\n  /* color: ","; */\n  justify-content: space-between;\n/* word-wrap: break-word; */\n"]);return q=function(){return n},n}var D=b.c.div(q(),(function(n){return n.fontColor})),Q=b.c.div(F()),V=b.c.div(L()),M=b.c.div(C()),N=b.c.div(z()),A=b.c.div(S()),T=Object(b.c)(v.a)(P()),I=b.c.div(k()),J=b.c.div(w()),R=b.c.div(O()),B=b.c.div(j()),K=b.c.div(E()),U=Object(b.c)(v.a)(x()),W=function(n){var t=n.handleDelete,e=n.deleteProduct,r=n.id,i=n.name;return a.a.createElement(R,null,a.a.createElement("p",null,"Usun\u0105c ?"),a.a.createElement("p",null,i),a.a.createElement("button",{onClick:function(){return e(r)}},"tak"),a.a.createElement("button",{onClick:t},"nie"))},Y=function(n){Object(f.a)(e,n);var t=Object(s.a)(e);function e(){var n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={isPromptVisibile:!1},n.handleDelete=function(){n.setState({isPromptVisibile:!n.state.isPromptVisibile})},n}return Object(d.a)(e,[{key:"render",value:function(){var n=this.props,t=n.name,e=n.quantity,r=n.unit,i=n.addProductQuantity,o=n.subtractProductQuantity,c=n.deleteProduct,u=n.editProduct,l=n.min,d=n.id,s=e<l,f=!e;return a.a.createElement(D,null,a.a.createElement(A,null,a.a.createElement(K,null,f&&a.a.createElement(U,{icon:y.e})),a.a.createElement(Q,null,s&&a.a.createElement(T,{icon:y.i})),a.a.createElement("div",null,a.a.createElement(V,null,t))),a.a.createElement(M,null,a.a.createElement("div",null,a.a.createElement(T,{icon:y.f,onClick:function(){return o(d)}})),a.a.createElement(I,null,e),a.a.createElement(J,null,r),a.a.createElement("div",null,a.a.createElement(T,{icon:y.h,onClick:function(){return i(d)}}))),a.a.createElement(N,null,a.a.createElement("div",null,a.a.createElement(T,{icon:y.g,onClick:function(){return u(d)}})),a.a.createElement(B,null,a.a.createElement(T,{icon:y.m,onClick:this.handleDelete}))),this.state.isPromptVisibile&&a.a.createElement(W,{handleDelete:this.handleDelete,id:d,deleteProduct:c,name:t}))}}]),e}(a.a.Component),Z=function(n){var t=n.products,e=n.addProductQuantity,r=n.subtractProductQuantity,i=n.deleteProduct,o=n.editProduct;return a.a.createElement("ul",null,t.map((function(n){var t=n.name,c=n.quantity,u=n.unit,l=n.id,d=n.min;return a.a.createElement("li",{key:t},a.a.createElement(Y,{id:l,name:t,min:d,quantity:c,unit:u,addProductQuantity:e,subtractProductQuantity:r,deleteProduct:i,editProduct:o}))})))},G=e(21);function H(){var n=Object(g.a)(["\n  border: none;\n  background-color: white;\n"]);return H=function(){return n},n}function X(){var n=Object(g.a)(["\n  margin-bottom: 10px;\n"]);return X=function(){return n},n}function $(){var n=Object(g.a)(["\n  font-size: 40px;\n  color: rgba(0, 0, 0, 0.54);\n"]);return $=function(){return n},n}function _(){var n=Object(g.a)(["\n  font-size: 40px;\n  color: #01a39d;\n"]);return _=function(){return n},n}function nn(){var n=Object(g.a)(["\n  display: flex;\n  width: 130px;\n  justify-content: space-between;\n  margin-top: 20px;\n"]);return nn=function(){return n},n}function tn(){var n=Object(g.a)(["\n  width: 50px;\n"]);return tn=function(){return n},n}function en(){var n=Object(g.a)(["\n  width: 150px;\n"]);return en=function(){return n},n}function rn(){var n=Object(g.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  background-color: white;\n  box-shadow: 1px 0px 18px 4px rgba(0, 0, 0, 0.66);\n"]);return rn=function(){return n},n}function an(){var n=Object(g.a)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10%;\n  background-color: white;\n"]);return an=function(){return n},n}var on=b.c.form(an()),cn=b.c.div(rn()),un=b.c.input(en()),ln=b.c.input(tn()),dn=b.c.div(nn()),sn=Object(b.c)(v.a)(_()),fn=Object(b.c)(v.a)($()),pn=b.c.label(X()),mn=b.c.button(H()),hn=function(n){Object(f.a)(e,n);var t=Object(s.a)(e);function e(n){var r;Object(l.a)(this,e),(r=t.call(this,n)).handleForm=function(n){console.log(n.target.value),console.log(n.target.id),r.setState(Object(G.a)({},n.target.id,n.target.value))},r.handleSubmit=function(n){n.preventDefault();var t=r.state,e=t.name,a=t.quantity,i=t.category,o=t.min,c=t.unit,u=t.id;if(e&&a&&i&&o&&c){var l={name:e,quantity:a,category:i,min:o,unit:c,id:u};console.log("wypelnoine wszystkie"),r.props.addNewProduct(l),r.setState({name:"",quantity:"",category:"",min:"1",unit:"szt",id:null}),r.props.handleFormVisibility()}else console.log("WYPE\u0141NIJ  SZYSTKIE POLA")},r.handleCloseForm=function(n,t){t(),n()};var a=n.defaultProduct,i=a.name,o=a.quantity,c=a.category,u=a.min,d=a.unit,s=a.id;return console.log(d),r.state={name:i,quantity:o,category:c,min:u,unit:d,id:s},r}return Object(d.a)(e,[{key:"render",value:function(){var n=this,t=this.props,e=t.categories,r=t.handleFormVisibility,i=t.resetDefaultProduct;return a.a.createElement(cn,null,a.a.createElement(on,null,a.a.createElement(pn,{htmlFor:"name"},"Nazwa:",a.a.createElement(un,{id:"name",placeholder:"nazwa",type:"text",onChange:this.handleForm,value:this.state.name})),a.a.createElement(pn,{htmlFor:"quantity"},"Ilo\u015b\u0107:",a.a.createElement(ln,{id:"quantity",placeholder:"ilo\u015b\u0107",type:"number",onChange:this.handleForm,value:this.state.quantity})),a.a.createElement(pn,{htmlFor:"unit"},"Jednostka:",a.a.createElement("select",{id:"unit",onChange:this.handleForm,value:this.state.unit},a.a.createElement("option",{value:"szt"},"szt"),a.a.createElement("option",{value:"l"},"l"),a.a.createElement("option",{value:"kg"},"kg"))),a.a.createElement(pn,{htmlFor:"min"},"Minimalna ilo\u015b\u0107:",a.a.createElement(ln,{id:"min",type:"number",placeholder:"minimalna ilo\u015b\u0107",onChange:this.handleForm,value:this.state.min})),a.a.createElement(pn,{htmlFor:"category"},"Kategoria:",a.a.createElement("select",{id:"category",onChange:this.handleForm,value:this.state.category},a.a.createElement("option",{value:"",disabled:!0,hidden:!0}),e.map((function(n){return a.a.createElement("option",{key:n,value:n},n)})))),a.a.createElement(dn,null,a.a.createElement(mn,{type:"submit",onClick:this.handleSubmit},a.a.createElement(sn,{icon:y.b})),a.a.createElement(mn,{type:"button",onClick:function(){return n.handleCloseForm(r,i)}},a.a.createElement(fn,{icon:y.j})))))}}]),e}(a.a.Component),gn=a.a.createContext();function bn(){var n=Object(g.a)(["\n  position: relative;\n"]);return bn=function(){return n},n}function vn(){var n=Object(g.a)(["\n  height: calc(100vh - 120px);\n  /* height: 1000px; */\n  /* background-color: white; */\n"]);return vn=function(){return n},n}function yn(){var n=Object(g.a)(["\n  background-color: #fff;\n  color: #6202ee;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  margin-left: 2px;\n  font-weight: 900;\n"]);return yn=function(){return n},n}function xn(){var n=Object(g.a)(["\n  border: none;\n  width: 100px;\n  height: 40px;\n  background: #6202ee;\n  border-radius: 200px;\n  color: #fff;\n  text-transform: uppercase;\n"]);return xn=function(){return n},n}function En(){var n=Object(g.a)(["\n  background-color: #fff;\n  text-align: center;\n  padding: 15px 0;\n"]);return En=function(){return n},n}function jn(){var n=Object(g.a)(["\n  padding: 5px 0 5px 20px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23px;\n"]);return jn=function(){return n},n}function On(){var n=Object(g.a)(["\n  /* background-color: #fff; */\n"]);return On=function(){return n},n}function wn(){var n=Object(g.a)(["\n      color: #333;\n      background-color: #fff;\n      font-weight: 900 ",";\n      letter-spacing: 0.15px;\n    "]);return wn=function(){return n},n}function kn(){var n=Object(g.a)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  width: 50%;\n  font-size: 20px;\n  line-height: 30px;\n  padding: 20px 0;\n  text-align: center;\n  background-color: #6202ee;\n\n  ",";\n"]);return kn=function(){return n},n}function Pn(){var n=Object(g.a)(["\n  height: 100%;\n  padding: 5px;\n  font-size: 30px;\n  line-height: 40px;\n  /* background-color: green; */\n"]);return Pn=function(){return n},n}function Sn(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #6202ee;\n\n  height: 70px;\n  color: white;\n"]);return Sn=function(){return n},n}function zn(){var n=Object(g.a)(["\n  display: flex;\n  height: 50px;\n  background-color: #202020;\n  color: white;\n  /* font-size: 20px; */\n"]);return zn=function(){return n},n}var Cn=b.c.header(zn()),Ln=b.c.nav(Sn()),Fn=b.c.div(Pn()),qn=b.c.div(kn(),(function(n){return n.active&&Object(b.b)(wn(),"")})),Dn=b.c.ul(On()),Qn=b.c.div(jn()),Vn=b.c.div(En()),Mn=b.c.button(xn()),Nn=b.c.div(yn()),An=b.c.main(vn()),Tn=b.c.div(bn()),In=function(){return a.a.createElement(gn.Consumer,null,(function(n){return a.a.createElement(Tn,null,a.a.createElement(Cn,null,a.a.createElement(p.b,{to:"/settings"},a.a.createElement(Fn,null,a.a.createElement(v.a,{icon:y.d})))),a.a.createElement(Ln,null,a.a.createElement(qn,{active:!0},"Products"),a.a.createElement(qn,null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/shoppinglist"},"Shopping List")),a.a.createElement(Nn,null,n.shoppingList.length))),a.a.createElement(An,null,a.a.createElement(Dn,null,n.categories.map((function(t){var e=n.products.filter((function(n){return n.category===t}));if(e.length)return console.log("w categorii: ".concat(t," mamy nastepujace produkty")),console.log(e),a.a.createElement("li",null,a.a.createElement(Qn,null,t),a.a.createElement(Z,{products:e,addProductQuantity:n.addProductQuantity,subtractProductQuantity:n.subtractProductQuantity,deleteProduct:n.deleteProduct,editProduct:n.editProduct}))}))),a.a.createElement(Vn,null,a.a.createElement(Mn,{type:"button",onClick:n.handleFormVisibility},"Dodaj"))),n.isFormVisible&&a.a.createElement(hn,{resetDefaultProduct:n.resetDefaultProduct,defaultProduct:n.defaultProduct,handleFormVisibility:n.handleFormVisibility,addNewProduct:n.addNewProduct,categories:n.categories}))}))};function Jn(){var n=Object(g.a)(["\n  width: 50%;\n"]);return Jn=function(){return n},n}function Rn(){var n=Object(g.a)(["\n  border: none;\n  width: 50px;\n  height: 30px;\n  background: #6202ee;\n  border-radius: 200px;\n  color: #fff;\n  text-transform: uppercase;\n"]);return Rn=function(){return n},n}function Bn(){var n=Object(g.a)(["\n  cursor: pointer;\n  line-height: 40px;\n  margin: 0 10px;\n  color: #fff;\n"]);return Bn=function(){return n},n}function Kn(){var n=Object(g.a)(["\n  cursor: pointer;\n  line-height: 40px;\n  margin: 0 10px;\n  color: rgba(0, 0, 0, 0.54);\n"]);return Kn=function(){return n},n}function Un(){var n=Object(g.a)(["\npadding-left: 5%;\n  min-height: 50px;\n  line-height: 50px;\n  display: flex;\n  align-items: baseline;\n  /* color: ","; */\n  justify-content: center;\n/* word-wrap: break-word; */\n"]);return Un=function(){return n},n}function Wn(){var n=Object(g.a)(["\n  background-color: #fff;\n"]);return Wn=function(){return n},n}var Yn=b.c.ul(Wn()),Zn=b.c.div(Un(),(function(n){return n.fontColor})),Gn=Object(b.c)(v.a)(Kn()),Hn=Object(b.c)(v.a)(Bn()),Xn=b.c.button(Rn()),$n=b.c.div(Jn()),_n=function(){return a.a.createElement(gn.Consumer,null,(function(n){return a.a.createElement(Yn,null,console.log("jestem w KOMPONENTCIE shopping list"),n.shoppingList.map((function(t){return a.a.createElement("li",null,a.a.createElement(Zn,null,a.a.createElement("div",null,a.a.createElement(Gn,{icon:y.c})),a.a.createElement($n,null,t.name),a.a.createElement(Xn,{onClick:function(){return n.completeProductQuantityToMin(t.id)}},a.a.createElement(Hn,{icon:y.a}))))})))}))};function nt(){var n=Object(g.a)(["\n  height: calc(100vh - 120px);\n  /* height: 1000px; */\n  background-color: white;\n"]);return nt=function(){return n},n}function tt(){var n=Object(g.a)(["\n  background-color: #6202ee;\n  color: #fff;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  margin-left: 2px;\n  font-weight: 900;\n"]);return tt=function(){return n},n}function et(){var n=Object(g.a)(["\n      color: #333;\n      background-color: #fff;\n      font-weight: 900 ",";\n      letter-spacing: 0.15px;\n    "]);return et=function(){return n},n}function rt(){var n=Object(g.a)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  width: 50%;\n  font-size: 20px;\n  line-height: 30px;\n  padding: 20px 0;\n  text-align: center;\n  background-color: #6202ee;\n\n  ",";\n"]);return rt=function(){return n},n}function at(){var n=Object(g.a)(["\n  height: 100%;\n  padding: 5px;\n  font-size: 30px;\n  line-height: 40px;\n  /* background-color: green; */\n"]);return at=function(){return n},n}function it(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #6202ee;\n\n  height: 70px;\n  color: white;\n"]);return it=function(){return n},n}function ot(){var n=Object(g.a)(["\n  display: flex;\n  height: 50px;\n  background-color: #202020;\n  color: white;\n  /* font-size: 20px; */\n"]);return ot=function(){return n},n}var ct=b.c.header(ot()),ut=b.c.nav(it()),lt=b.c.div(at()),dt=b.c.div(rt(),(function(n){return n.active&&Object(b.b)(et(),"")})),st=b.c.div(tt()),ft=b.c.main(nt()),pt=function(){return a.a.createElement(gn.Consumer,null,(function(n){return a.a.createElement("div",null,a.a.createElement(ct,null,a.a.createElement(p.b,{to:"/settings"},a.a.createElement(lt,null,a.a.createElement(v.a,{icon:y.d})))),a.a.createElement(ut,null,a.a.createElement(dt,null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/"},"Products"))),a.a.createElement(dt,{active:!0},a.a.createElement("div",null,a.a.createElement(p.b,{to:"/shoppinglist"},"Shopping List")),a.a.createElement(st,null,n.shoppingList.length))),a.a.createElement(ft,null,a.a.createElement(_n,null)))}))},mt=e(27);function ht(){var n=Object(g.a)(["\n\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,500&display=swap');\n\n    *,*::before, *::after{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    html{\n        color: #333;\n        background-color: #0d0d0d;\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='78' height='78' fill-opacity='0.54' fill='%23292626'/%3E%3C/svg%3E\");\n    }\n\n    body{\n        font-family: 'Roboto', sans-serif;\n        max-width: 600px;\n        margin: 0 auto;\n        height: 100vh;\n        background-color: white;\n        color: black\n    }\n\n    ul{\n        list-style-type: none;\n    }\n\n    a{\n        text-decoration: none;\n        color: inherit\n    }\n\n"]);return ht=function(){return n},n}var gt=Object(b.a)(ht());function bt(){var n=Object(g.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,500&display=swap');\n\n    *,*::before, *::after{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n \n    html{\n        color: white;\n        background-color: #0d0d0d;\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='78' height='78' fill-opacity='0.54' fill='%23292626'/%3E%3C/svg%3E\");\n        \n    }\n\n    \n    body{\n        background-color: black;\n        font-family: 'Roboto', sans-serif;\n        max-width: 600px;\n        margin: 0 auto;\n        height: 100vh;\n        color: white\n    }\n\n    ul{\n        list-style-type: none;\n    }\n\n    a{\n        text-decoration: none;\n        color: inherit\n    }\n\n"]);return bt=function(){return n},n}var vt=Object(b.a)(bt());function yt(){var n=Object(g.a)(["\n  margin-top: 10px;\n  display: flex;\n"]);return yt=function(){return n},n}function xt(){var n=Object(g.a)(["\n  margin-top: 10px;\n  font-size: 20px;\n  font-weight: 900;\n"]);return xt=function(){return n},n}function Et(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* padding-top: 50px; */\n  width: 100%;\n  /* background-color: grey; */\n"]);return Et=function(){return n},n}function jt(){var n=Object(g.a)(["\n  height: calc(100vh - 120px);\n  /* height: 1000px; */\n  /* background-color: white; */\n"]);return jt=function(){return n},n}function Ot(){var n=Object(g.a)(["\n  background-color: #6202ee;\n  color: #fff;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  margin-left: 2px;\n  font-weight: 900;\n"]);return Ot=function(){return n},n}function wt(){var n=Object(g.a)(["\n      color: #333;\n      background-color: #fff;\n      font-weight: 900 ",";\n      letter-spacing: 0.15px;\n    "]);return wt=function(){return n},n}function kt(){var n=Object(g.a)(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  width: 50%;\n  font-size: 20px;\n  line-height: 30px;\n  padding: 20px 0;\n  text-align: center;\n  background-color: #6202ee;\n\n  ",";\n"]);return kt=function(){return n},n}function Pt(){var n=Object(g.a)(["\n  height: 100%;\n  padding: 5px;\n  font-size: 30px;\n  line-height: 40px;\n  /* background-color: green; */\n"]);return Pt=function(){return n},n}function St(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: #6202ee;\n\n  height: 70px;\n  color: white;\n"]);return St=function(){return n},n}function zt(){var n=Object(g.a)(["\n  display: flex;\n  height: 50px;\n  background-color: #202020;\n  color: white;\n  /* font-size: 20px; */\n"]);return zt=function(){return n},n}var Ct=b.c.header(zt()),Lt=b.c.nav(St()),Ft=b.c.div(Pt()),qt=b.c.div(kt(),(function(n){return n.active&&Object(b.b)(wt(),"")})),Dt=b.c.div(Ot()),Qt=b.c.main(jt()),Vt=b.c.div(Et()),Mt=b.c.div(xt()),Nt=b.c.div(yt()),At=function(){return a.a.createElement(gn.Consumer,null,(function(n){return a.a.createElement("div",null,a.a.createElement(Ct,null,a.a.createElement(p.b,{to:"/settings"},a.a.createElement(Ft,null,a.a.createElement(v.a,{icon:y.d})))),a.a.createElement(Lt,null,a.a.createElement(qt,null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/"},"Products"))),a.a.createElement(qt,null,a.a.createElement("div",null,a.a.createElement(p.b,{to:"/shoppinglist"},"Shopping List")),a.a.createElement(Dt,null,n.shoppingList.length))),a.a.createElement(Qt,null,a.a.createElement(Vt,null,a.a.createElement(Mt,null,"Settings"),a.a.createElement(Nt,null,a.a.createElement("div",null,"Toggle Dark Mode:"),a.a.createElement("div",null,a.a.createElement("button",{onClick:n.toggleDarkmode},console.log("constextDarkMode: ".concat(n.darkMode)),n.darkMode?a.a.createElement(v.a,{icon:y.l}):a.a.createElement(v.a,{icon:y.k})))))))}))},Tt=function(n){Object(f.a)(e,n);var t=Object(s.a)(e);function e(){var n;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=t.call.apply(t,[this].concat(a))).state={products:Object(u.a)(mt.products),categories:Object(u.a)(mt.categories),isFormVisible:!1,shoppingList:[],defaultProduct:{name:"",quantity:"",category:"",min:"3",unit:"szt",id:null},darkMode:!1,isShoppingListPromptVisible:!1},n.checkShoppingList=function(t){if(t.min>t.quantity){n.state.shoppingList.filter((function(n){return n.id===t.id})).length||n.setState((function(n){return{shoppingList:[].concat(Object(u.a)(n.shoppingList),[t])}}))}else{var e=n.state.shoppingList.filter((function(n){return n.id!==t.id}));n.setState({shoppingList:Object(u.a)(e)})}},n.addProductQuantity=function(t){var e=n.state.products.map((function(e){return e.id===t&&(e.quantity++,n.checkShoppingList(e)),e}));n.setState({products:Object(u.a)(e)})},n.subtractProductQuantity=function(t){var e=n.state.products.map((function(e){return e.id===t&&e.quantity>0&&(e.quantity--,n.checkShoppingList(e)),e}));n.setState({products:Object(u.a)(e)})},n.deleteProduct=function(t){var e=n.state.products.filter((function(n){return n.id!==t})),r=n.state.shoppingList.filter((function(n){return n.id!==t}));n.setState({products:Object(u.a)(e),shoppingList:Object(u.a)(r)}),console.log(e)},n.addNewProduct=function(t){if(console.log(t),console.log("ID : ".concat(t.id)),t.id){var e=n.state.products.map((function(n){return n.id===t.id?n=Object(c.a)({},t):n}));n.setState({products:Object(u.a)(e)})}else t.id=Object(h.a)(),n.setState((function(n){return{products:[].concat(Object(u.a)(n.products),[t])}}));n.setState({defaultProduct:{name:"",quantity:"",category:"",min:"3",unit:"szt",id:null}})},n.editProduct=function(t){var e=n.state.products.filter((function(n){return n.id===t}))[0];n.setState({defaultProduct:Object(c.a)({},e)}),n.handleFormVisibility(),console.log("product do edycji"),console.log(e)},n.handleFormVisibility=function(){n.setState((function(n){return{isFormVisible:!n.isFormVisible}}))},n.completeProductQuantityToMin=function(t){var e=n.state.products.map((function(e){return e.id===t&&(e.quantity=e.min,n.checkShoppingList(e)),e}));n.setState({products:Object(u.a)(e)})},n.toggleDarkmode=function(){n.setState({darkMode:!n.state.darkMode})},n.toggleShoppingListPrompt=function(){n.setState({isShoppingListPromptVisible:!n.state.isShoppingListPromptVisible})},n.resetDefaultProduct=function(){n.setState({defaultProduct:{name:"",quantity:"",category:"",min:"3",unit:"szt",id:null}})},n}return Object(d.a)(e,[{key:"componentDidMount",value:function(){var n=this;this.state.products.forEach((function(t){return n.checkShoppingList(t)}))}},{key:"componentDidUpdate",value:function(){console.log("UPDATE")}},{key:"render",value:function(){var n=Object(c.a)({czosz:"czosz"},this.state,{handleFormVisibility:this.handleFormVisibility,editProduct:this.editProduct,addNewProduct:this.addNewProduct,deleteProduct:this.deleteProduct,subtractProductQuantity:this.subtractProductQuantity,addProductQuantity:this.addProductQuantity,completeProductQuantityToMin:this.completeProductQuantityToMin,toggleDarkmode:this.toggleDarkmode,toggleShoppingListPrompt:this.toggleShoppingListPrompt,resetDefaultProduct:this.resetDefaultProduct});return a.a.createElement(p.a,null,this.state.darkMode?a.a.createElement(vt,null):a.a.createElement(gt,null),a.a.createElement(gn.Provider,{value:n},a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:In}),a.a.createElement(m.a,{path:"/shoppinglist",component:pt}),a.a.createElement(m.a,{path:"/settings",component:At}))))}}]),e}(a.a.Component),It=document.getElementById("root");o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Tt,null)),It)}},[[36,1,2]]]);
//# sourceMappingURL=main.3e591700.chunk.js.map