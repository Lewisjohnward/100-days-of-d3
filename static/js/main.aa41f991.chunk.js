(this["webpackJsonp100-days-of-d3"]=this["webpackJsonp100-days-of-d3"]||[]).push([[0],{129:function(n,t,e){},130:function(n,t,e){"use strict";e.r(t);var r,i,o,c,a,s,d,l,b,x,j,h,u,p,f,g,O,m,w,v,y,k,S,z,E,M,A,C,I,N,F,V,L,D,W,Y,B,P,G,H,J,T,X,q,R,K,Q,U=e(1),Z=e.n(U),$=e(31),_=e.n($),nn=e(5),tn=e(2),en=e(12),rn=e(3),on=e(4),cn=rn.a.div(r||(r=Object(tn.a)(["\n  height: ",";\n  width: ",';\n  background-color: #ddc;\n  border: solid 1vmin #eee;\n  border-bottom-color: #fff;\n  border-left-color: #eee;\n  border-radius: 2px;\n  border-right-color: #eee;\n  border-top-color: #ddd;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,\n    0 5px 10px 5px rgba(0, 0, 0, 0.25);\n\n  position: relative;\n  text-align: center;\n  &:before {\n    border-radius: 2px;\n    bottom: -0.4vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;\n    content: "";\n    left: -0.4vmin;\n    position: absolute;\n    right: -0.4vmin;\n    top: -0.4vmin;\n  }\n  &:after {\n    border-radius: 2px;\n    bottom: -0.5vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);\n    content: "";\n    left: -0.5vmin;\n    position: absolute;\n    right: -0.5vmin;\n    top: -0.5vmin;\n  }\n'])),(function(n){return n.small?"50px":"350px"}),(function(n){return n.small?"250px":"350px"})),an=rn.a.div(i||(i=Object(tn.a)(["\nposition: relative;\nz-index: 999;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 5% 1%;\n  box-sizing: border-box;\n"]))),sn=rn.a.svg(o||(o=Object(tn.a)(["\n  height: ","px;\n  width: ","px;\n  background: white;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  border: solid 2px;\n  border-bottom-color: #ffe;\n  border-left-color: #eed;\n  border-right-color: #eed;\n  border-top-color: #ccb;\n  \n\n  line {\n    stroke: gray;\n    opacity: 0.6;\n    shape-rendering: crispEdges;\n  }\n\n  circle {\n    fill: tomato;\n    \n  }\n\n  text {\n    font-style: italic;\n    fill: gray;\n    \n  }\n\n  rect {\n    stroke: tomato;\n    fill: white;\n  }\n"])),(function(n){return n.height}),(function(n){return n.width})),dn=rn.a.div(c||(c=Object(tn.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  background: white;\n"]))),ln=rn.a.p(a||(a=Object(tn.a)(["\n  text-align: left;\n  font-size: 0.7em;\n"]))),bn=rn.a.p(s||(s=Object(tn.a)(["\n  text-align: left;\n  font-style: italic;\n  font-size: 0.6em;\n"]))),xn=e(0),jn=Object(on.g)(10).map((function(n){return{a:Object(on.f)(10)(),b:n}})),hn=30,un=30,pn=200-hn-30,fn=300-un-30,gn=function(){var n=Object(on.i)().domain([0,Object(on.e)(jn,(function(n){return n.a}))]).range([0,fn]).nice(),t=Object(on.i)().domain([0,Object(on.e)(jn,(function(n){return n.b}))]).range([pn,0]).nice();return Object(xn.jsx)(sn,{height:200,width:300,children:Object(xn.jsxs)("g",{transform:"translate(".concat(un,", ").concat(hn,")"),children:[n.ticks().map((function(t){return Object(xn.jsxs)("g",{transform:"translate(".concat(n(t),", 0)"),children:[Object(xn.jsx)("line",{y2:pn,stroke:"black"}),Object(xn.jsx)("text",{y:pn+21,style:{textAnchor:"middle"},children:t})]})})),t.ticks().map((function(n){return Object(xn.jsxs)("g",{transform:"translate(0, ".concat(t(n),")"),children:[Object(xn.jsx)("line",{x2:fn,stroke:"black"}),Object(xn.jsx)("text",{x:-7,dy:"0.32em",style:{textAnchor:"end"},children:n})]})})),jn.map((function(e){var r=e.a,i=e.b;return Object(xn.jsx)(On,{x:n(r),y:t(i),r:7})}))]})})},On=function(n){var t=n.x,e=n.y,r=n.r,i=Object(U.useState)(!1),o=Object(nn.a)(i,2),c=o[0],a=o[1];return Object(xn.jsxs)(xn.Fragment,{children:[Object(xn.jsx)("circle",{cx:t,cy:e,r:r,fill:"black",onMouseEnter:function(){return a(!c)},onMouseLeave:function(){return a(!c)}}),c&&Object(xn.jsx)("rect",{x:t+10,y:e-25,height:50,width:50,rx:5})]})},mn=function(){return Object(xn.jsx)(cn,{children:Object(xn.jsxs)(an,{children:[Object(xn.jsx)(gn,{}),Object(xn.jsx)(cn,{small:"true",children:Object(xn.jsxs)(dn,{children:[Object(xn.jsx)(ln,{children:"Scatter graph on svg with D3"}),Object(xn.jsx)(bn,{children:"09/10/21 - L Ward"})]})})]})})},wn=rn.a.div(d||(d=Object(tn.a)(["\n  height: ",";\n  width: ",';\n  background-color: #ddc;\n  border: solid 1vmin #eee;\n  border-bottom-color: #fff;\n  border-left-color: #eee;\n  border-radius: 2px;\n  border-right-color: #eee;\n  border-top-color: #ddd;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,\n    0 5px 10px 5px rgba(0, 0, 0, 0.25);\n\n  position: relative;\n  text-align: center;\n  &:before {\n    border-radius: 2px;\n    bottom: -0.4vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;\n    content: "";\n    left: -0.4vmin;\n    position: absolute;\n    right: -0.4vmin;\n    top: -0.4vmin;\n  }\n  &:after {\n    border-radius: 2px;\n    bottom: -0.5vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);\n    content: "";\n    left: -0.5vmin;\n    position: absolute;\n    right: -0.5vmin;\n    top: -0.5vmin;\n  }\n'])),(function(n){return n.small?"50px":"350px"}),(function(n){return n.small?"250px":"350px"})),vn=rn.a.div(l||(l=Object(tn.a)(["\nposition: relative;\nz-index: 999;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 5% 1%;\n  box-sizing: border-box;\n"]))),yn=rn.a.svg(b||(b=Object(tn.a)(["\n  height: ","px;\n  width: ","px;\n  background: white;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  border: solid 2px;\n  border-bottom-color: #ffe;\n  border-left-color: #eed;\n  border-right-color: #eed;\n  border-top-color: #ccb;\n  font-size: 0.7em;\n\n  line {\n    stroke: gray;\n    opacity: 0.6;\n    shape-rendering: crispEdges;\n  }\n\n  text {\n    font-style: italic;\n    fill: gray;\n  }\n\n  rect {\n    fill: tomato;\n    \n  }\n"])),(function(n){return n.height}),(function(n){return n.width})),kn=rn.a.div(x||(x=Object(tn.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  background: white;\n"]))),Sn=rn.a.p(j||(j=Object(tn.a)(["\n  text-align: left;\n  font-size: 0.7em;\n"]))),zn=rn.a.p(h||(h=Object(tn.a)(["\n  text-align: left;\n  font-style: italic;\n  font-size: 0.6em;\n"]))),En=30,Mn=40,An=200-En-30,Cn=300-Mn-30,In=Object(on.k)("%Y"),Nn=function(){var n=function(){var n=Object(U.useState)(null),t=Object(nn.a)(n,2),e=t[0],r=t[1];return Object(U.useEffect)((function(){Object(on.b)("https://gist.githubusercontent.com/Lewisjohnward/f0a82b4cab2cd299ea5d737f759db48f/raw/77d383d3ab9033b806660e98e0e7988eaca7c3b9/lessons.csv",(function(n){return n.date=new Date(n.date),n.teacherName=n.teacherName,n})).then(r)}),[]),e}();if(!n)return null;var t=function(n){return n.date},e=Object(on.j)().domain(Object(on.c)(n,t)).range([0,Cn]).nice(),r=e.domain(),i=Object(nn.a)(r,2),o=i[0],c=i[1],a=Object(on.a)().value(t).domain(e.domain()).thresholds(Object(on.l)(o,c))(n).map((function(n){return{y:n.length,x0:n.x0,x1:n.x1}})),s=Object(on.i)().domain([0,Object(on.e)(a,(function(n){return n.y}))]).range([An,0]).nice();return Object(xn.jsx)(wn,{children:Object(xn.jsxs)(vn,{children:[Object(xn.jsx)(yn,{height:200,width:300,children:Object(xn.jsxs)("g",{transform:"translate(".concat(Mn,", ").concat(En,")"),children:[e.ticks().map((function(n){return Object(xn.jsxs)("g",{transform:"translate(".concat(e(n),", 0)"),children:[Object(xn.jsx)("line",{y2:An,stroke:"black"}),Object(xn.jsx)("text",{y:An+15,style:{textAnchor:"middle"},children:In(n)})]})})),s.ticks().map((function(n){return Object(xn.jsxs)("g",{transform:"translate(0, ".concat(s(n),")"),children:[Object(xn.jsx)("line",{x2:Cn,stroke:"black"}),Object(xn.jsx)("text",{x:-5,dy:"0.32em",style:{textAnchor:"end"},children:n})]})})),Object(xn.jsx)("text",{x:Cn/2,y:An+30,style:{textAnchor:"middle"},children:"Year"}),Object(xn.jsx)("text",{style:{textAnchor:"middle"},transform:"translate(".concat(-25,", ").concat(An/2,") rotate(-90)"),children:"Number of lessons"}),a.map((function(n){var t=n.x0,r=n.x1,i=n.y;return Object(xn.jsx)(Fn,{x:e(t),y:s(i),width:e(r)-e(t),height:An-s(i)})}))]})}),Object(xn.jsx)(wn,{small:"true",children:Object(xn.jsxs)(kn,{children:[Object(xn.jsx)(Sn,{children:"Number of lessons done per month on Italki"}),Object(xn.jsx)(Sn,{children:"Cumulative Bar Chart on SVG With D3"}),Object(xn.jsx)(zn,{children:"09/10/21 - L Ward"})]})})]})})},Fn=function(n){var t=n.x,e=n.y,r=n.width,i=n.height,o=Object(U.useState)(!1),c=Object(nn.a)(o,2),a=c[0],s=c[1];return Object(xn.jsxs)(xn.Fragment,{children:[Object(xn.jsx)("rect",{x:t,y:e,width:r,height:i,fill:"black",onMouseEnter:function(){return s(!a)},onMouseLeave:function(){return s(!a)}}),a&&Object(xn.jsx)("rect",{x:t+10,y:e-25,height:50,width:50,rx:5})]})},Vn=rn.a.div(u||(u=Object(tn.a)(["\n  height: ",";\n  width: ",';\n  background-color: #ddc;\n  border: solid 1vmin #eee;\n  border-bottom-color: #fff;\n  border-left-color: #eee;\n  border-radius: 2px;\n  border-right-color: #eee;\n  border-top-color: #ddd;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,\n    0 5px 10px 5px rgba(0, 0, 0, 0.25);\n\n  position: relative;\n  text-align: center;\n  &:before {\n    border-radius: 2px;\n    bottom: -0.4vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;\n    content: "";\n    left: -0.4vmin;\n    position: absolute;\n    right: -0.4vmin;\n    top: -0.4vmin;\n  }\n  &:after {\n    border-radius: 2px;\n    bottom: -0.5vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);\n    content: "";\n    left: -0.5vmin;\n    position: absolute;\n    right: -0.5vmin;\n    top: -0.5vmin;\n  }\n'])),(function(n){return n.small?"50px":"350px"}),(function(n){return n.small?"250px":"350px"})),Ln=rn.a.div(p||(p=Object(tn.a)(["\nposition: relative;\nz-index: 999;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 5% 1%;\n  box-sizing: border-box;\n"]))),Dn=rn.a.svg(f||(f=Object(tn.a)(["\n  height: ","px;\n  width: ","px;\n  background: white;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  border: solid 2px;\n  border-bottom-color: #ffe;\n  border-left-color: #eed;\n  border-right-color: #eed;\n  border-top-color: #ccb;\n  font-size: 0.7em;\n\n  line {\n    stroke: gray;\n    opacity: 0.6;\n    shape-rendering: crispEdges;\n  }\n\n  text {\n    font-style: italic;\n    fill: gray;\n  }\n\n  .rect {\n    fill: seagreen;\n\n    .five{\n    fill : crimson;\n  }\n  }\n\n  \n"])),(function(n){return n.height}),(function(n){return n.width})),Wn=rn.a.div(g||(g=Object(tn.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  background: white;\n"]))),Yn=rn.a.p(O||(O=Object(tn.a)(["\n  text-align: left;\n  font-size: 0.7em;\n"]))),Bn=rn.a.p(m||(m=Object(tn.a)(["\n  text-align: left;\n  font-style: italic;\n  font-size: 0.6em;\n"]))),Pn=30,Gn=50,Hn=200-Pn-30,Jn=300-Gn-30,Tn=Object(on.k)("%Y"),Xn=function(){var n=function(){var n=Object(U.useState)(null),t=Object(nn.a)(n,2),e=t[0],r=t[1];return Object(U.useEffect)((function(){Object(on.b)("https://gist.githubusercontent.com/Lewisjohnward/8192f90bcb3d1298a9b1723d5d5471be/raw/6fa24f5a3db45f6b6d68d3846ca17b4d0435f60c/worth.csv",(function(n){var t=n.date.split("-"),e=t[1],r=t[0];return n.date=new Date("20".concat(e),r,1),n.basicexp=+n["basic expenditure"],n.extraexp=+n["extra expenditure"],n.totalexp=+n["total expenditure"],n.networth=+n.nw,n[4]=+n[4],n[5]=+n[5],n})).then(r)}),[]),e}();if(!n)return null;var t=Object(on.j)().domain(Object(on.c)(n,(function(n){return n.date}))).range([0,Jn]).nice(),e=Object(on.i)().domain([0,Object(on.e)(n,(function(n){return n.networth}))]).range([Hn,0]).nice();Object(on.i)().domain([0,Object(on.e)(n,(function(n){return.1*n.nw}))]).range([Hn,0]).nice(),n.map((function(n){var t=n.date,e=n.networth;return{date:t,networth:.04*e,networth5:.05*e,networth6:.06*e,basicexp:12*n.basicexp,totalexp:12*n.totalexp}}));return Object(xn.jsx)(Vn,{children:Object(xn.jsxs)(Ln,{children:[Object(xn.jsx)(Dn,{height:200,width:300,children:Object(xn.jsxs)("g",{transform:"translate(".concat(Gn,", ").concat(Pn,")"),children:[t.ticks(4).map((function(n){return Object(xn.jsx)("g",{transform:"translate(".concat(t(n),", 0)"),children:Object(xn.jsx)("text",{dx:"0.32em",y:Hn+15,style:{textAnchor:"middle"},children:Tn(n)})})})),e.ticks().map((function(n){return Object(xn.jsxs)("g",{transform:"translate(0, ".concat(e(n),")"),children:[Object(xn.jsx)("line",{x2:Jn,stroke:"black"}),Object(xn.jsx)("text",{x:-5,dy:"0.32em",style:{textAnchor:"end"},children:n/1e3})]})})),Object(xn.jsx)("text",{x:Jn/2,y:Hn+25,style:{textAnchor:"middle"},children:"Month"}),Object(xn.jsx)("text",{style:{textAnchor:"middle"},transform:"translate(".concat(-35,", ").concat(Hn/2,") rotate(-90)"),children:"Networth (\xa3 1000 )"}),n.map((function(n){var r=n.networth,i=n.date;return Object(xn.jsx)(qn,{fill:"seagreen",x:t(i),y:e(r),width:4,height:Hn-e(r)})}))]})}),Object(xn.jsx)(Vn,{small:"true",children:Object(xn.jsxs)(Wn,{children:[Object(xn.jsx)(Yn,{children:"Number of lessons done per month on Italki"}),Object(xn.jsx)(Yn,{children:"Cumulative Bar Chart on SVG With D3"}),Object(xn.jsx)(Bn,{children:"09/10/21 - L Ward"})]})})]})})},qn=function(n){var t=n.x,e=n.y,r=n.width,i=n.height,o=n.fill,c=Object(U.useState)(!1),a=Object(nn.a)(c,2),s=a[0];a[1];return Object(xn.jsxs)(xn.Fragment,{children:[Object(xn.jsx)("rect",{x:t,y:e,width:r,height:i,fill:o}),s&&Object(xn.jsx)("rect",{x:t+10,y:e-25,height:50,width:50,rx:5})]})},Rn=rn.a.div(w||(w=Object(tn.a)(["\n  height: ",";\n  width: ",';\n  background-color: #ddc;\n  border: solid 1vmin #eee;\n  border-bottom-color: #fff;\n  border-left-color: #eee;\n  border-radius: 2px;\n  border-right-color: #eee;\n  border-top-color: #ddd;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,\n    0 5px 10px 5px rgba(0, 0, 0, 0.25);\n\n  position: relative;\n  text-align: center;\n  &:before {\n    border-radius: 2px;\n    bottom: -0.4vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;\n    content: "";\n    left: -0.4vmin;\n    position: absolute;\n    right: -0.4vmin;\n    top: -0.4vmin;\n  }\n  &:after {\n    border-radius: 2px;\n    bottom: -0.5vmin;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);\n    content: "";\n    left: -0.5vmin;\n    position: absolute;\n    right: -0.5vmin;\n    top: -0.5vmin;\n  }\n'])),(function(n){return n.small?"50px":"350px"}),(function(n){return n.small?"250px":"350px"})),Kn=rn.a.div(v||(v=Object(tn.a)(["\nposition: relative;\nz-index: 999;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  padding: 5% 1%;\n  box-sizing: border-box;\n"]))),Qn=rn.a.svg(y||(y=Object(tn.a)(["\n  height: ","px;\n  width: ","px;\n  background: white;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  border: solid 2px;\n  border-bottom-color: #ffe;\n  border-left-color: #eed;\n  border-right-color: #eed;\n  border-top-color: #ccb;\n  font-size: 0.7em;\n\n  line {\n    stroke: gray;\n    opacity: 0.6;\n    shape-rendering: crispEdges;\n  }\n\n  text {\n    font-style: italic;\n    fill: gray;\n  }\n\n  .rect {\n    fill: seagreen;\n\n    .five{\n    fill : crimson;\n  }\n  }\n\n  \n"])),(function(n){return n.height}),(function(n){return n.width})),Un=rn.a.div(k||(k=Object(tn.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n  background: white;\n"]))),Zn=rn.a.p(S||(S=Object(tn.a)(["\n  text-align: left;\n  font-size: 0.7em;\n"]))),$n=rn.a.p(z||(z=Object(tn.a)(["\n  text-align: left;\n  font-style: italic;\n  font-size: 0.6em;\n"]))),_n=30,nt=40,tt=200-_n-30,et=300-nt-30,rt=Object(on.k)("%Y"),it=function(){var n=function(){var n=Object(U.useState)(null),t=Object(nn.a)(n,2),e=t[0],r=t[1];return Object(U.useEffect)((function(){Object(on.b)("https://gist.githubusercontent.com/Lewisjohnward/8192f90bcb3d1298a9b1723d5d5471be/raw/6fa24f5a3db45f6b6d68d3846ca17b4d0435f60c/worth.csv",(function(n){var t=n.date.split("-"),e=t[1],r=t[0];return n.date=new Date("20".concat(e),r,1),n.basicexp=+n["basic expenditure"],n.extraexp=+n["extra expenditure"],n.totalexp=+n["total expenditure"],n.networth=+n.nw,n[4]=+n[4],n[5]=+n[5],n})).then(r)}),[]),e}();if(!n)return null;var t=Object(on.j)().domain(Object(on.c)(n,(function(n){return n.date}))).range([0,et]).nice(),e=(Object(on.i)().domain([0,Object(on.e)(n,(function(n){return n.networth}))]).range([tt,0]).nice(),Object(on.i)().domain([0,Object(on.e)(n,(function(n){return.1*n.nw}))]).range([tt,0]).nice()),r=n.map((function(n){var t=n.date,e=n.networth;return{date:t,networth:.04*e,networth5:.05*e,networth6:.06*e,basicexp:12*n.basicexp,totalexp:12*n.totalexp}}));return Object(xn.jsx)(Rn,{children:Object(xn.jsxs)(Kn,{children:[Object(xn.jsx)(Qn,{height:200,width:300,children:Object(xn.jsxs)("g",{transform:"translate(".concat(nt,", ").concat(_n,")"),children:[t.ticks(4).map((function(n){return Object(xn.jsx)("g",{transform:"translate(".concat(t(n),", 0)"),children:Object(xn.jsx)("text",{dx:"0.32em",y:tt+15,style:{textAnchor:"middle"},children:rt(n)})})})),e.ticks().map((function(n){return Object(xn.jsxs)("g",{transform:"translate(0, ".concat(e(n),")"),children:[Object(xn.jsx)("line",{x2:et,stroke:"black"}),Object(xn.jsx)("text",{x:-5,dy:"0.32em",style:{textAnchor:"end"},children:n/1e3})]})})),Object(xn.jsx)("text",{x:et/2,y:tt+25,style:{textAnchor:"middle"},children:"Month"}),Object(xn.jsx)("text",{style:{textAnchor:"middle"},transform:"translate(".concat(-25,", ").concat(tt/2,") rotate(-90)"),children:"Money (\xa3 1000 )"}),r.map((function(n){var r=n.networth6,i=n.date;return Object(xn.jsx)(ot,{fill:"red",x:t(i),y:e(r),width:3,height:tt-e(r)})})),r.map((function(n){var r=n.networth5,i=n.date;return Object(xn.jsx)(ot,{fill:"tomato",x:t(i),y:e(r),width:3,height:tt-e(r)})})),r.map((function(n){var r=n.networth,i=n.date;return Object(xn.jsx)(ot,{fill:"seagreen",x:t(i),y:e(r),width:3,height:tt-e(r)})})),r.map((function(n){var r=n.totalexp,i=n.date;return Object(xn.jsx)("circle",{fill:"red",cx:t(i),cy:e(r),r:2})})),r.map((function(n){var r=n.basicexp,i=n.date;return Object(xn.jsx)("circle",{fill:"seagreen",cx:t(i),cy:e(r),r:2})}))]})}),Object(xn.jsx)(Rn,{small:"true",children:Object(xn.jsxs)(Un,{children:[Object(xn.jsx)(Zn,{children:"Number of lessons done per month on Italki"}),Object(xn.jsx)(Zn,{children:"Cumulative Bar Chart on SVG With D3"}),Object(xn.jsx)($n,{children:"09/10/21 - L Ward"})]})})]})})},ot=function(n){var t=n.x,e=n.y,r=n.width,i=n.height,o=n.fill,c=Object(U.useState)(!1),a=Object(nn.a)(c,2),s=a[0];a[1];return Object(xn.jsxs)(xn.Fragment,{children:[Object(xn.jsx)("rect",{x:t,y:e,width:r,height:i,fill:o}),s&&Object(xn.jsx)("rect",{x:t+10,y:e-25,height:50,width:50,rx:5})]})},ct=rn.a.div(E||(E=Object(tn.a)(["\n  \n"]))),at=rn.a.div(M||(M=Object(tn.a)(["\n  position: relative;\n"]))),st=rn.a.svg(A||(A=Object(tn.a)(["\n  height: ","px;\n  width: ","px;\n  background: white;\n  margin-left: 10px;\n  margin-top: 10px;\n  font-size: 0.7em;\n  line {\n    stroke: gray;\n    opacity: 0.6;\n    shape-rendering: crispEdges;\n  }\n\n  text {\n    font-style: italic;\n    fill: gray;\n  }\n\n  .rect {\n    fill: seagreen;\n\n    .five {\n      fill: crimson;\n    }\n  }\n"])),(function(n){return n.height}),(function(n){return n.width})),dt=0,lt=0,bt=900-dt-0,xt=900-lt-0,jt=function(){var n=function(){var n=Object(U.useState)(null),t=Object(nn.a)(n,2),e=t[0],r=t[1];return Object(U.useEffect)((function(){Object(on.d)("https://gist.githubusercontent.com/Lewisjohnward/d40f11d1c3489407be05af653a7391e4/raw/0030623ef6b96674f40a2d056c95af37f2af67e3/scheletri-word-list-count.json").then(r)}),[]),e}();if(!n)return null;var t=Object(on.g)(Math.floor(Math.sqrt(n.length))),e=[],r=0;t.forEach((function(i,o){t.forEach((function(t,o){e.push({a:i,b:o,word:Object.getOwnPropertyNames(n[r])[0],count:n[r][Object.getOwnPropertyNames(n[r])[0]]}),r++}))})),console.log(e);var i=function(n){return n.a},o=function(n){return n.b},c=function(n){return n.count},a=Object(on.h)().domain(e.map(i)).range([0,xt]).paddingInner(.2);console.log(a(5));var s=Object(on.h)().domain(e.map(o)).range([bt,0]).paddingInner(.2),d=Object(on.i)().domain([0,Object(on.e)(e,c)]).range(["#3FBF3F","#BF3F3F"]);return Object(xn.jsx)(ct,{children:Object(xn.jsx)(at,{children:Object(xn.jsx)(st,{height:900,width:900,children:Object(xn.jsx)("g",{transform:"translate(".concat(lt,", ").concat(dt,")"),children:Object(xn.jsx)(ht,{data:e,xScale:a,yScale:s,xValue:i,yValue:o,countValue:c,wordValue:function(n){return n.word},width:a.bandwidth(),height:s.bandwidth(),colorScale:d})})})})})},ht=function(n){var t=n.data,e=n.xScale,r=n.yScale,i=n.xValue,o=n.yValue,c=n.countValue,a=n.width,s=n.height,d=n.colorScale,l=n.wordValue,b=Object(U.useState)(!1),x=Object(nn.a)(b,2),j=x[0],h=x[1],u=Object(U.useState)(0),p=Object(nn.a)(u,2),f=p[0],g=p[1],O=Object(U.useState)(0),m=Object(nn.a)(O,2),w=m[0],v=m[1],y=Object(U.useState)(""),k=Object(nn.a)(y,2),S=k[0],z=k[1],E=Object(U.useState)(""),M=Object(nn.a)(E,2),A=M[0],C=M[1];return Object(xn.jsx)(xn.Fragment,{children:Object(xn.jsxs)("g",{children:[t.map((function(n){return Object(xn.jsx)("g",{transform:"translate(".concat(e(i(n)),", ").concat(r(o(n)),")"),children:Object(xn.jsx)("rect",{height:s,width:a,fill:d(c(n)),onMouseEnter:function(){h(!0),g(e(i(n))),v(r(o(n))),z(l(n)),C(c(n))},onMouseLeave:function(){h(!1)}})})})),j&&Object(xn.jsx)(ut,{x:f+20,y:w+20,word:S,count:A})]})})},ut=function(n){var t=n.x,e=n.y,r=n.word,i=n.count;return Object(xn.jsxs)("g",{transform:"translate(".concat(t,", ").concat(e,")"),children:[Object(xn.jsx)("rect",{height:100,width:100,fill:"white",stroke:"black"}),Object(xn.jsx)("text",{x:35,y:30,fill:"black",stroke:"black",children:r}),Object(xn.jsx)("text",{x:35,y:70,fill:"black",stroke:"black",children:i})]})},pt=Object(rn.b)(C||(C=Object(tn.a)(["\n    0% {transform: rotate(0deg);}\n    20% {transform: rotate(-45deg);}\n    100% {transform: rotate(-45deg);}\n"]))),ft=rn.a.div(I||(I=Object(tn.a)(["\n  position: absolute;\n  top: 25%;\n  display: flex;\n  font-size: 10em;\n  \n"]))),gt=rn.a.div(N||(N=Object(tn.a)(["\n  &.fallanimation {\n    transition: transform 1s;\n    transform: translateY(942px);\n  }\n  \n  p {\n    font-weight: ",";\n    &.fallanimation {\n      animation: "," ease-out 1s forwards;\n    }\n  }\n"])),(function(n){return n.bold?600:300}),pt),Ot="D3".split(""),mt="Hello".split(""),wt=window.innerHeight,vt=function(){return Object(xn.jsxs)(ft,{children:[mt.map((function(n){return Object(xn.jsx)(yt,{letter:n})})),Ot.map((function(n){return Object(xn.jsx)(yt,{letter:n,bold:!0})}))]})},yt=function(n){var t=n.letter,e=n.bold,r=Object(U.useState)(!0),i=Object(nn.a)(r,2),o=i[0],c=i[1];return Object(xn.jsx)(gt,{className:!o&&"fallanimation",height:wt,bold:e,children:Object(xn.jsx)("p",{className:!o&&"fallanimation",onMouseEnter:function(){c((function(n){return!n}))},children:t})})},kt=rn.a.div(F||(F=Object(tn.a)(["\n  position: absolute;\n  z-index: 999;\n  bottom: 1%;\n  left: 1%;\n  height: 200px;\n  width: 200px;\n  padding: 0px;\n  margin-bottom: 100px;\n\n  color: black;\n  overflow: hidden;\n  background: rgb(229, 229, 229);\n  opacity: 1;\n  text-shadow: none;\n  font-weight: 300;\n  font-size: 0.9em;\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n"]))),St=rn.a.div(V||(V=Object(tn.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),zt=rn.a.div(L||(L=Object(tn.a)(["\n  position: relative;\n  background: gray;\n  height: 65%;\n  width: 90%;\n  border-radius: 5px 5px 50px 5px;\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);\n"]))),Et=rn.a.div(D||(D=Object(tn.a)(["\n  position: absolute;\n  top: 10%;\n  left: 15%;\n  height: 80%;\n  width: 70%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: palegreen;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  font-size: 1.8em;\n"]))),Mt=rn.a.div(W||(W=Object(tn.a)(["\n  height: 25%;\n  width: 80%;\n  display: flex;\n\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n"]))),At=rn.a.div(Y||(Y=Object(tn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: mediumvioletred;\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);\n  font-size: 1.2em;\n  font-weight: 800;\n  cursor: pointer;\n\n  &:active {\n    transition: transform 0.1s box-shadow 0.1s;\n    transform: translateY(10%);\n  }\n"]))),Ct=rn.a.div(B||(B=Object(tn.a)(["\n  font-weight: 600;\n\n  p {\n    transform: translate(50%, -30%) rotate(-20deg);\n  }\n"]))),It=rn.a.div(P||(P=Object(tn.a)(["\n  position: absolute;\n  top: 58%;\n  left: 20%;\n  font-size: 0.7em;\n  text-decoration: italic;\n\n  .today {\n    right: 0%;\n  }\n"]))),Nt=function(n){n.grid;var t,e=Object(U.useState)(0),r=Object(nn.a)(e,2),i=r[0],o=r[1],c=Object(U.useState)(!1),a=Object(nn.a)(c,2),s=a[0],d=a[1];return Object(U.useEffect)((function(){var n=parseInt(localStorage.getItem("seconds-d3"))||0,t=localStorage.getItem("state-d3")||!1;d(t),o(n)}),[]),Object(U.useEffect)((function(){s&&setTimeout((function(){o((function(n){return n+1}))}),1e3),localStorage.setItem("seconds-d3",i),localStorage.setItem("state-d3",s)}),[s,i]),Object(xn.jsx)(kt,{className:"icon",children:Object(xn.jsxs)(St,{children:[Object(xn.jsx)(zt,{children:Object(xn.jsx)(Et,{children:(t=i,Math.floor(t/3600).toString().padStart(2,"0")+":"+Math.floor(t%3600/60).toString().padStart(2,"0")+":"+Math.floor(t%60).toString().padStart(2,"0"))})}),Object(xn.jsx)(It,{children:"20/10/2021"}),Object(xn.jsxs)(Mt,{children:[Object(xn.jsxs)(Ct,{children:[Object(xn.jsx)(At,{onClick:function(){s||d(!0)}}),Object(xn.jsx)("p",{children:"Go"})]}),s?Object(xn.jsxs)(Ct,{children:[Object(xn.jsx)(At,{onClick:function(){return d(!1)}}),Object(xn.jsx)("p",{children:"Stop"})]}):Object(xn.jsxs)(Ct,{children:[Object(xn.jsx)(At,{onClick:function(){return o(0)}}),Object(xn.jsx)("p",{children:"Reset"})]})]})]})})},Ft=rn.a.div(G||(G=Object(tn.a)(["\n  position: absolute;\n  z-index: 998;\n  height: 100%;\n  width: 400px;\n  overflow: hidden;\n  background: white;\n  padding: 25px 10px 25px 25px;\n  border-right: 1px solid black;\n  > p {\n    font-size: 0.9em;\n  }\n\n  &.open {\n    transition: all 1s ease-in;\n    transform: translateX(0px);\n    position: absolute;\n    z-index: 998;\n  }\n  &.close {\n    transition: all 1s ease-in;\n    transform: translateX(-100%);\n    position: absolute;\n    z-index: 998;\n  }\n"]))),Vt=rn.a.div(H||(H=Object(tn.a)(["\n  font-size: 2em;\n  font-weight: 700;\n  text-align: center;\n"]))),Lt=Object(rn.a)(en.c)(J||(J=Object(tn.a)(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  z-index: 999;\n  font-size: 1em;\n  color: cornflowerblue;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n"]))),Dt=Object(rn.a)(en.a)(T||(T=Object(tn.a)(["\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  z-index: 999;\n  font-size: 1em;\n  color: cornflowerblue;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n"]))),Wt=function(){var n=Object(U.useState)(!1),t=Object(nn.a)(n,2),e=t[0],r=t[1];return Object(xn.jsxs)(xn.Fragment,{children:[e?Object(xn.jsx)(Dt,{onClick:function(){return r((function(n){return!n}))}}):Object(xn.jsx)(Lt,{onClick:function(){return r((function(n){return!n}))}}),Object(xn.jsxs)(Ft,{className:e?"open":"close",children:[Object(xn.jsx)(Vt,{children:"Cheatsheet"}),Object(xn.jsx)("p",{children:"d3.randomInt(1, 5)()-Produces random int from 1 to 5"}),Object(xn.jsx)("p",{children:"d3.randomInt(6)() - Produces random into from 0 to 6"}),Object(xn.jsx)("p",{children:"d3.range(5) - produces an array from 0 to value"}),Object(xn.jsx)("p",{children:"domain - takes the data range"}),Object(xn.jsx)("p",{children:"range - takes the graph dimension and returns array"}),Object(xn.jsx)("pre",{children:Object(xn.jsx)("code",{children:"const binnedData = bin()\n.value(xValue)\n.domain(xScale.domain())\n.thresholds(timeMonths(start, stop))(data)\n.map(array => {\n  console.log(array)\n  return (\n    { \n    y: array.length, \n    x0: array.x0, \n    x1: array.x1\n  }\n  )})"})}),Object(xn.jsx)("pre",{children:Object(xn.jsx)("code",{children:"xScale.ticks(4).map"})}),Object(xn.jsx)("pre",{children:Object(xn.jsx)("code",{children:"const parseTime = d3.timeParse('%Y-%m-%d');"})}),Object(xn.jsx)(Nt,{})]})]})},Yt=rn.a.div(X||(X=Object(tn.a)(["\n  position: relative;\n  z-index: 99;\n  height: ","px;\n  overflow: hidden;\n"])),(function(n){return n.height})),Bt=rn.a.div(q||(q=Object(tn.a)(["\n  display: grid;\n  overflow: scroll;\n  grid-template-columns: repeat(3, 400px);\n  grid-template-rows: repeat(2, 400px);\n  justify-content: center;\n  align-items: start;\n  align-content: start;\n  grid-gap: 0px;\n  padding: 1%;\n"]))),Pt=rn.a.div(R||(R=Object(tn.a)(["\n  width: 100%;\n"]))),Gt=Object(rn.a)(en.b)(K||(K=Object(tn.a)(["\n  position: absolute;\n  bottom: 5%;\n  right: 40%;\n  font-size: 2em;\n  transform: rotate(90deg);\n  cursor: pointer;\n  border: 1px solid black;\n"]))),Ht=rn.a.div(Q||(Q=Object(tn.a)([""]))),Jt=window.innerHeight;var Tt=function(){var n=Object(U.useState)(!1),t=Object(nn.a)(n,2),e=t[0],r=t[1];return Object(xn.jsxs)(Yt,{height:Jt,children:[Object(xn.jsx)(vt,{}),Object(xn.jsx)(Wt,{}),Object(xn.jsx)(Pt,{children:e?Object(xn.jsxs)(Bt,{children:[Object(xn.jsx)(mn,{}),Object(xn.jsx)(Nn,{}),Object(xn.jsx)(Xn,{}),Object(xn.jsx)(it,{})]}):Object(xn.jsx)(Ht,{children:Object(xn.jsx)(jt,{})})}),Object(xn.jsx)(Gt,{onClick:function(){return r((function(n){return!n}))}})]})};e(129);_.a.render(Object(xn.jsx)(Z.a.StrictMode,{children:Object(xn.jsx)(Tt,{})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.aa41f991.chunk.js.map