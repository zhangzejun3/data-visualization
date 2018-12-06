(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(26)},15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),o=n.n(i),l=(n(15),n(1)),r=n(2),c=n(4),u=n(3),h=n(5),p=(n(17),n(19),n(21),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"componentDidUpdate",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this;return s.a.createElement("input",{type:"text",value:this.props.content,onKeyPress:this.submit.bind(this),onChange:this.changeTitle.bind(this),ref:function(t){e.input=t},placeholder:"\u5728\u6b64\u8f93\u5165"})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(a.Component)),d=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"itemWrapper"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",null,this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}}]),t}(a.Component),m=(n(23),n(9)),g=n(6),f=n.n(g);f.a.init({appId:"rrfsGl7WT9nC6eSI9EsKgf98-gzGzoHsz",appKey:"zoP5Iwsm3ugh9FwLRhweO8jq"});f.a;function v(){var e=f.a.User.current();return e?b(e):null}function b(e){return Object(m.a)({id:e.id},e.attributes)}var E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={selected:"signUp",formData:{username:"",password:""}},e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(e){this.setState({selected:e.target.value})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){f.a.User.logIn(e,t).then(function(e){var t=b(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){alert(e)})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){var s=new f.a.User;s.setUsername(e),s.setPassword(t),s.signUp().then(function(e){var t=b(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignUp.call(null,e)},function(e){alert(e)})}},{key:"changeFormData",value:function(e,t){var n=JSON.parse(JSON.stringify(this.state));n.formData[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){var e=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),t=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55")));return s.a.createElement("div",{className:"UserDialogWrapper"},s.a.createElement("div",{className:"UserDialog"},s.a.createElement("nav",null,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.toggle.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.toggle.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"formWrapper"},"signIn"===this.state.selected?t:e)))}}]),t}(a.Component),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={user:v||{},newTodo:"",todoList:[]},e}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,n){return s.a.createElement(d,{todo:t,key:n,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)})});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"","Todos"),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(p,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),s.a.createElement("ol",null,t),this.state.user.id?null:s.a.createElement(E,{onSignUp:this.onSignUp.bind(this),onSignIn:this.onSignIn.bind(this)}))}},{key:"onSignUp",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"onSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"delete",value:function(e,t){t.deleted=!0,this.setState(this.state)}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"addTodo",value:function(e){var t=this.state.todoList;t.push({id:k+=1,title:e.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:t}),console.log(t[t.length-1].title)}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}}]),t}(a.Component),k=0;var w=y;o.a.render(s.a.createElement(w,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.93940493.chunk.js.map