(this["webpackJsonpcarro-repaso"]=this["webpackJsonpcarro-repaso"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(8),i=r.n(o),c=(r(13),r(6)),s=r(2),u=r(3),l=r(5),b=r(4),p=r(0),d={layout:{padding:"40px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},container:{width:"90%"}},j=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("div",{style:d.layout,children:Object(p.jsx)("div",{style:d.container,children:this.props.children})})}}]),r}(n.Component),h={bubble:{backgroundColor:"#E9725A",color:"white",position:"relative",borderRadius:"15px",padding:"2px 10px"}},O=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"getNumber",value:function(e){return e?e>9?"9+":e:""}},{key:"render",value:function(){var e=this.props.value;return Object(p.jsx)("span",{style:h.bubble,children:this.getNumber(e)})}}]),r}(n.Component),m={detallesCarro:{backgroundColor:"#fff",position:"absolute",marginTop:30,boxShadow:"1px 5px 5px rgba(0, 0, 0, 0.3)",borderRadius:"5px",width:"300px",right:50},ul:{margin:0,padding:0},producto:{listStyleType:"none",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"25px 20px",borderBottom:"solid 1px #aaa"},eliminar:{color:"red",border:"none",backgroundColor:"white",cursor:"pointer",fontSize:"1.2rem"}},f=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.eliminar;return Object(p.jsx)("div",{style:m.detallesCarro,children:Object(p.jsx)("ul",{style:m.ul,children:t.map((function(e){return Object(p.jsxs)("li",{style:m.producto,children:[Object(p.jsx)("img",{src:e.img,alt:e.name,width:"50",height:"32"}),e.name,Object(p.jsx)("span",{children:e.cantidad}),Object(p.jsx)("button",{style:m.eliminar,onClick:function(){return r(e)},children:"X"})]},e.name)}))})})}}]),r}(n.Component),x={button:{backgroundColor:"green",color:"white",border:"none",padding:"15px",borderRadius:"15px",cursor:"pointer"},buble:{position:"relative",left:"15px",top:"15px"}},g=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.mostrarCarro,n=e.esCarroVisible,a=e.eliminar,o=t.reduce((function(e,t){return e+t.cantidad}),0);return Object(p.jsxs)("div",{children:[o>0&&Object(p.jsx)("span",{style:x.buble,children:Object(p.jsx)(O,{value:o})}),Object(p.jsx)("button",{style:x.button,onClick:r,children:"Carro"}),n&&Object(p.jsx)(f,{carro:t,eliminar:a})]})}}]),r}(n.Component),v={logo:{fontWeight:"700",fontSize:"2rem"}},y=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("div",{style:v.logo,children:"Shop"})}}]),r}(n.Component),C={navbar:{height:"100px",boxShadow:"0px 2px 3px rgba( 0, 0, 0, 0.1 )",display:"flex",flexDirection:"row",alignItems:"center",padding:"0 50px",position:"relative",justifyContent:"space-between"}},k=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.carro,r=e.mostrarCarro,n=e.esCarroVisible,a=e.eliminar;return Object(p.jsxs)("nav",{style:C.navbar,children:[Object(p.jsx)(y,{}),Object(p.jsx)(g,{carro:t,mostrarCarro:r,esCarroVisible:n,eliminar:a})]})}}]),r}(n.Component),w={button:{backgroundColor:"black",color:"white",border:"none",padding:"15px",borderRadius:"5px",cursor:"pointer"}},S=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("button",Object(c.a)({style:w.button},this.props))}}]),r}(n.Component),A={producto:{border:"1px solid rgba( 0, 0, 0, 0.1 )",boxShadow:"0 3px 3px rgba( 0, 0, 0, 0.1 )",borderRadius:"5px",width:"30%",padding:"20px",margin:"10px"},img:{width:"100%"}},V=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.producto,r=e.agregarAlCarro;return Object(p.jsxs)("div",{style:A.producto,children:[Object(p.jsx)("img",{style:A.img,src:t.img,alt:t.name}),Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("p",{children:t.price}),Object(p.jsx)(S,{onClick:function(){return r(t)},children:"Agregar al carro"})]})}}]),r}(n.Component),R={producto:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},I=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.productos,r=e.agregarAlCarro;return Object(p.jsx)("div",{style:R.producto,children:t.map((function(e){return Object(p.jsx)(V,{producto:e,agregarAlCarro:r},e.name)}))})}}]),r}(n.Component),T={title:{marginBottom:"30px"}},B=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(p.jsx)("h1",{style:T.title,children:"Tienda"})}}]),r}(n.Component),D=function(e){Object(l.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={productos:[{name:"Tomate",price:1500,img:"./productos/tomate.jpg"},{name:"Arbejas",price:2500,img:"./productos/arbejas.jpg"},{name:"Lechuga",price:500,img:"./productos/lechuga.jpg"}],carro:[],esCarroVisible:!1},e.agregarAlCarro=function(t){var r=e.state.carro;if(r.find((function(e){return e.name===t.name}))){var n=r.map((function(e){return e.name===t.name?Object(c.a)(Object(c.a)({},t),{},{cantidad:e.cantidad+1}):e}));return e.setState({carro:n})}return e.setState({carro:e.state.carro.concat(Object(c.a)(Object(c.a)({},t),{},{cantidad:1}))})},e.mostrarCarro=function(){if(e.state.carro.length)return e.setState({esCarroVisible:!e.state.esCarroVisible})},e.eliminar=function(t){var r=e.state.carro;if(r.find((function(e){return e.name===t.name}))){if(t.cantidad>1){var n=r.map((function(e){return e.name===t.name?Object(c.a)(Object(c.a)({},t),{},{cantidad:e.cantidad-1}):e}));return e.setState({carro:n})}var a=r.filter((function(e){return e.name!==t.name}));return e.setState({esCarroVisible:!1,carro:a})}},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state,t=e.esCarroVisible,r=e.carro,n=e.productos;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(k,{carro:r,esCarroVisible:t,mostrarCarro:this.mostrarCarro,eliminar:this.eliminar}),Object(p.jsxs)(j,{children:[Object(p.jsx)(B,{}),Object(p.jsx)(I,{productos:n,agregarAlCarro:this.agregarAlCarro})]})]})}}]),r}(n.Component);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6406aeeb.chunk.js.map