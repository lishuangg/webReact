(this["webpackJsonpcnode-app"]=this["webpackJsonpcnode-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),r=a.n(l),i=a(1),s=a(2),o=a(4),u=a(3),m=a(5),h=a(6),p=a(12);function d(){return c.a.createElement("div",{className:"headerwrap"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}),c.a.createElement("input",{type:"search"}),c.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},c.a.createElement(h.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(h.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(h.b,{to:"/api"},"API"),c.a.createElement(h.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(h.b,null,"\u6ce8\u518c"),c.a.createElement(h.b,{to:"login"},"\u767b\u5f55"))))}var E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sider"},c.a.createElement("p",null,"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("p",null,"\u60a8\u53ef\u4ee5 ",c.a.createElement("a",{href:"/"},"\u767b\u5f55")," \u6216 ",c.a.createElement("a",{href:"#"},"\u6ce8\u518c")," ,\u4e5f\u53ef\u4ee5"),c.a.createElement("a",{href:"/"},c.a.createElement("button",null,"\u901a\u8fc7GitHub\u767b\u5f55")),c.a.createElement("img",{src:"https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"}),c.a.createElement("img",{src:"https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"}),c.a.createElement("img",{src:"https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"}))}}]),t}(n.Component),v=a(8),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).pageLeft=function(){var t=e.state.pageCurr;t>1&&t--,e.page(t)},e.pageRight=function(){var t=e.state.pageCurr;t<e.state.totalPage&&t++,e.page(t)},e.handlePage=function(t){e.page(t.target.value)},e.state={pageCurr:1,totalPage:10,pages:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=[];e.push(c.a.createElement("li",{onClick:this.pageLeft,key:0},"\u300a"));for(var t=1;t<=this.state.totalPage;t++){var a,n;if(t===this.state.pageCurr)e.push(c.a.createElement("a",null,c.a.createElement("li",(a={onClick:this.pageChange},Object(v.a)(a,"onClick",this.props.handlePage),Object(v.a)(a,"className","active"),Object(v.a)(a,"key",t),Object(v.a)(a,"value",t),a),t)));else e.push(c.a.createElement("a",null,c.a.createElement("li",(n={onClick:this.pageChange},Object(v.a)(n,"onClick",this.props.handlePage),Object(v.a)(n,"key",t),Object(v.a)(n,"value",t),n),t)))}e.push(c.a.createElement("li",{onClick:this.pageRight,key:this.state.totalPage+1},"\u300b")),this.setState({pages:e})}},{key:"page",value:function(e){for(var t=this.state.pages,a=1;a<=this.state.totalPage;a++){var n,l;if(a===e)t[a]=c.a.createElement("a",null,c.a.createElement("li",(n={onClick:this.pageChange},Object(v.a)(n,"onClick",this.props.handlePage),Object(v.a)(n,"className","active"),Object(v.a)(n,"key",a),Object(v.a)(n,"value",a),n),a));else t[a]=c.a.createElement("a",null,c.a.createElement("li",(l={onClick:this.pageChange},Object(v.a)(l,"onClick",this.props.handlePage),Object(v.a)(l,"key",a),Object(v.a)(l,"value",a),l),a))}this.setState({pages:t,pageCurr:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"pages"},c.a.createElement("ul",null,this.state.pages))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handlePage=function(t){e.setState({page:t.target.value})},e.state={page:1,data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=all").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data});for(var a=0;a<e.state.data.length;a++){var n=e.state.data;n[a].newtitle=e.state.data[a].title.length>60?e.state.data[a].title.slice(0,60)+"...":e.state.data[a].title,e.setState({data:n})}}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.page!==this.state.page&&fetch("https://cnodejs.org/api/v1/topics?tab=all&page="+this.state.page).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data});for(var t=0;t<a.state.data.length;t++){var n=a.state.data;n[t].newtitle=a.state.data[t].title.length>60?a.state.data[t].title.slice(0,60)+"...":a.state.data[t].title,a.setState({data:n})}}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"list"},c.a.createElement("ul",null,this.state.data.map((function(e,t){return c.a.createElement("li",{key:t,className:"li"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname}),c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"reply"},e.reply_count),"/",c.a.createElement("span",{className:"visit"},e.visit_count)),c.a.createElement(h.b,{className:"title",to:"/topic/"+e.id},e.newtitle),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:e.author.avatar_url}),c.a.createElement("span",{className:"time"},"2\u5c0f\u65f6\u524d")))}))),c.a.createElement(b,{handlePage:this.handlePage.bind(this)}))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=good").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data});for(var a=0;a<e.state.data.length;a++){var n=e.state.data;n[a].newtitle=e.state.data[a].title.length>60?e.state.data[a].title.slice(0,60)+"...":e.state.data[a].title,e.setState({data:n})}}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(e,t){return c.a.createElement("li",{key:t,className:"li"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname}),c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"reply"},e.reply_count),"/",c.a.createElement("span",{className:"visit"},e.visit_count)),c.a.createElement(h.b,{className:"title",to:"/topic/"+e.id},e.newtitle),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:e.author.avatar_url}),c.a.createElement("span",{className:"time"},"1\u5c0f\u65f6\u524d")))}))),c.a.createElement(b,null))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=share").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data});for(var a=0;a<e.state.data.length;a++){var n=e.state.data;n[a].newtitle=e.state.data[a].title.length>48?e.state.data[a].title.slice(0,48)+"...":e.state.data[a].title,e.setState({data:n})}console.log(e.state.data)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(e,t){return c.a.createElement("li",{key:t,className:"li"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname}),c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"reply"},e.reply_count),"/",c.a.createElement("span",{className:"visit"},e.visit_count)),c.a.createElement(h.b,{className:"title",to:"/topic/"+e.id},e.newtitle),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:e.author.avatar_url}),c.a.createElement("span",{className:"time"},"1\u5c0f\u65f6\u524d")))}))),c.a.createElement(b,null))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=job").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data});for(var a=0;a<e.state.data.length;a++){var n=e.state.data;n[a].newtitle=e.state.data[a].title.length>48?e.state.data[a].title.slice(0,48)+"...":e.state.data[a].title,e.setState({data:n})}console.log(e.state.data)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(e,t){return c.a.createElement("li",{key:t,className:"li"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname}),c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"reply"},e.reply_count),"/",c.a.createElement("span",{className:"visit"},e.visit_count)),c.a.createElement(h.b,{className:"title",to:"/topic/"+e.id},e.newtitle),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:e.author.avatar_url}),c.a.createElement("span",{className:"time"},"1\u5c0f\u65f6\u524d")))}))),c.a.createElement(b,null))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=ask").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data});for(var a=0;a<e.state.data.length;a++){var n=e.state.data;n[a].newtitle=e.state.data[a].title.length>48?e.state.data[a].title.slice(0,48)+"...":e.state.data[a].title,e.setState({data:n})}console.log(e.state.data)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(e,t){return c.a.createElement("li",{key:t,className:"li"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname}),c.a.createElement("div",{className:"count"},c.a.createElement("span",{className:"reply"},e.reply_count),"/",c.a.createElement("span",{className:"visit"},e.visit_count)),c.a.createElement(h.b,{className:"title",to:"/topic/"+e.id},e.newtitle),c.a.createElement("div",{className:"right"},c.a.createElement("img",{src:e.author.avatar_url}),c.a.createElement("span",{className:"time"},"1\u5c0f\u65f6\u524d")))}))),c.a.createElement(b,null))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"test")}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"home"},c.a.createElement(h.b,{to:"/home/all"},"\u5168\u90e8"),c.a.createElement(h.b,{to:"/home/good"},"\u7cbe\u534e"),c.a.createElement(h.b,{to:"/home/share"},"\u5206\u4eab"),c.a.createElement(h.b,{to:"/home/question"},"\u95ee\u7b54"),c.a.createElement(h.b,{to:"/home/job"},"\u62db\u8058"),c.a.createElement(h.b,{to:"/home/test"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),c.a.createElement("div",null,c.a.createElement(p.a,{exact:!0,path:"/",render:function(){return c.a.createElement(g,null)}}),c.a.createElement(p.a,{exact:!0,path:"/home/",render:function(){return c.a.createElement(g,null)}}),c.a.createElement(p.a,{path:"/home/all",component:g}),c.a.createElement(p.a,{path:"/home/good",component:j}),c.a.createElement(p.a,{path:"/home/share",component:f}),c.a.createElement(p.a,{path:"/home/question",component:y}),c.a.createElement(p.a,{path:"/home/job",component:O}),c.a.createElement(p.a,{path:"/home/test",component:k})))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Start")}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Api")}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"About")}}]),t}(n.Component),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={data:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname;fetch("https://cnodejs.org/api/v1"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.content}})}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).login=function(){a.props.history.push("/home")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"login"},c.a.createElement("p",null,c.a.createElement("div",null,"\u7528\u6237\u540d"),c.a.createElement("input",{type:"text"})),c.a.createElement("p",null,c.a.createElement("div",null,"\u5bc6\u7801"),c.a.createElement("input",{type:"password"})),c.a.createElement("p",{className:"loginBtn"},c.a.createElement("button",{onClick:this.login},"\u767b\u5f55"),c.a.createElement("button",{onClick:this.login},"\u901a\u8fc7GitHub\u767b\u5f55"),c.a.createElement("a",null,"\u5fd8\u8bb0\u5bc6\u7801\u4e86\uff1f")))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"content"},c.a.createElement(p.a,{exact:!0,path:"/",component:N}),c.a.createElement(p.a,{path:"/home",component:N}),c.a.createElement(p.a,{path:"/start",component:C}),c.a.createElement(p.a,{path:"/api",component:_}),c.a.createElement(p.a,{path:"/about",component:S}),c.a.createElement(p.a,{path:"/login",component:P}),c.a.createElement(p.a,{path:"/topic",component:w})),c.a.createElement(E,null))))}}]),t}(n.Component);a(33);r.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9ba52e66.chunk.js.map