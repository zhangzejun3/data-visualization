(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(26)},15:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),r=a.n(i),o=(a(15),a(1)),l=a(2),c=a(4),u=a(3),h=a(5),m=(a(17),a(19),a(21),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"componentDidUpdate",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this;return s.a.createElement("input",{type:"text",value:this.props.content,onKeyPress:this.submit.bind(this),onChange:this.changeTitle.bind(this),ref:function(t){e.input=t},placeholder:"\u5728\u6b64\u8f93\u5165"})}},{key:"submit",value:function(e){"Enter"===e.key&&""!==e.target.value.trim()&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(n.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"itemWrapper"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",null,this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}}]),t}(n.Component),d=(a(23),function(e){return s.a.createElement("form",{className:"signUp",onSubmit:e.onSubmit.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("input",{placeholder:"\u90ae\u7bb1",type:"text",value:e.formData.email,onChange:e.onChange.bind(this,"email")})),s.a.createElement("div",{className:"row"},s.a.createElement("input",{placeholder:"\u7528\u6237\u540d",type:"text",value:e.formData.username,onChange:e.onChange.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("input",{placeholder:"\u5bc6\u7801",type:"password",value:e.formData.password,onChange:e.onChange.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c")))}),f=function(e){return s.a.createElement("form",{className:"signIn",onSubmit:e.onSubmit.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("input",{placeholder:"\u7528\u6237\u540d",type:"text",value:e.formData.username,onChange:e.onChange.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("input",{placeholder:"\u5bc6\u7801",type:"password",value:e.formData.password,onChange:e.onChange.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55"),s.a.createElement("div",{className:"forgetPasswordWrapper clearfix"},s.a.createElement("a",{href:"#",onClick:e.onClick.bind(this)},"\u5fd8\u8bb0\u5bc6\u7801"))))},g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={selected:"signIn"},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){this.setState({selected:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",{className:"signInOrSignUp"},s.a.createElement("h1",null,"Welcome"),s.a.createElement("div",{className:"formWrapper"},"signIn"===this.state.selected?s.a.createElement(f,{formData:this.props.formData,onSubmit:this.props.onSignIn.bind(this),onChange:this.props.onChange.bind(this),onClick:this.props.onClick.bind(this)}):s.a.createElement(d,{formData:this.props.formData,onSubmit:this.props.onSignUp.bind(this),onChange:this.props.onChange.bind(this)})),s.a.createElement("footer",{className:"clearfix"},s.a.createElement("button",{value:"signUp",onClick:this.toggle.bind(this)},"\u6ce8\u518c"),s.a.createElement("button",{value:"signIn",onClick:this.toggle.bind(this)},"\u767b\u5f55")))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"forgetPassword"},s.a.createElement("h1",null,"\u91cd\u7f6e\u5bc6\u7801"),s.a.createElement("form",{className:"forgetPasswordForm",onSubmit:this.props.onSubmit.bind(this)},s.a.createElement("div",{className:"row"},s.a.createElement("input",{type:"text",value:this.props.formData.email,placeholder:"\u90ae\u7bb1",onChange:this.props.onChange.bind(this,"email")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u53d1\u9001\u91cd\u7f6e\u90ae\u4ef6"),s.a.createElement("a",{href:"#",onClick:this.props.onClick.bind(this)},"\u8fd4\u56de\u767b\u5f55"))))}}]),t}(n.Component),v=a(9),E=a(6),S=a.n(E);S.a.init({appId:"rrfsGl7WT9nC6eSI9EsKgf98-gzGzoHsz",appKey:"zoP5Iwsm3ugh9FwLRhweO8jq"});S.a;function k(){var e=S.a.User.current();return e?O(e):{}}function O(e){return Object(v.a)({id:e.id},e.attributes)}var y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={selectedTab:"signInOrSignUp",formData:{email:"",username:"",password:""}},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"signIn",value:function(e){var t=this;e.preventDefault();var a=this.state.formData;!function(e,t,a,n){S.a.User.logIn(e,t).then(function(e){var t=O(e);a.call(null,t)},function(e){n.call(null,e)})}(a.username,a.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;case 201:alert("\u5bc6\u7801\u4e3a\u7a7a");break;case 200:alert("\u7528\u6237\u540d\u4e3a\u7a7a");break;case 211:alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801");break;default:alert(e)}})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var a=this.state.formData,n=a.email,s=a.username,i=a.password;!function(e,t,a,n,s){var i=new S.a.User;i.setUsername(t||"emptyUsername"),i.setPassword(a||"emptyPassword"),i.setEmail(e),i.signUp().then(function(e){var t=O(e);n.call(null,t)},function(e){s.call(null,e)})}(n,s,i,function(e){t.props.onSignUp.call(null,e)},function(e){switch(""===s?alert("\u7528\u6237\u540d\u4e3a\u7a7a"):""===i&&alert("\u5bc6\u7801\u4e3a\u7a7a"),e.code){case 202:alert("\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528");break;case 203:alert("\u90ae\u7bb1\u5df2\u88ab\u5360\u7528");break;case 125:alert("\u7535\u5b50\u90ae\u7bb1\u5730\u5740\u65e0\u6548");break;default:alert(e)}})}},{key:"changeFormData",value:function(e,t){var a=JSON.parse(JSON.stringify(this.state));a.formData[e]=t.target.value,this.setState(a)}},{key:"render",value:function(){return s.a.createElement("div",{className:"UserDialogWrapper"},s.a.createElement("div",{className:"UserDialog"},"signInOrSignUp"===this.state.selectedTab?s.a.createElement(g,{formData:this.state.formData,onSignIn:this.signIn.bind(this),onSignUp:this.signUp.bind(this),onChange:this.changeFormData.bind(this),onClick:this.showForgetPassword.bind(this)}):s.a.createElement(b,{formData:this.state.formData,onSubmit:this.resetPassword.bind(this),onChange:this.changeFormData.bind(this),onClick:this.returnToSignIn.bind(this)})))}},{key:"showForgetPassword",value:function(){var e=JSON.parse(JSON.stringify(this.state));e.selectedTab="forgetPassword",this.setState(e)}},{key:"resetPassword",value:function(e){var t,a,n;e.preventDefault(),t=this.state.formData.email,S.a.User.requestPasswordReset(t).then(function(){alert("\u53d1\u9001\u6210\u529f"),a.call()},function(e){switch(console.log(e.code),e.code){case 1:alert("\u8bf7\u4e0d\u8981\u5f80\u540c\u4e00\u4e2a\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u592a\u591a\u90ae\u4ef6");break;case 204:alert("\u6ca1\u6709\u63d0\u4f9b\u7535\u5b50\u90ae\u7bb1\u5730\u5740");break;case 205:alert("\u627e\u4e0d\u5230\u7535\u5b50\u90ae\u7bb1\u5730\u5740\u5bf9\u5e94\u7684\u7528\u6237");break;default:alert(e)}n.call(null,e)})}},{key:"returnToSignIn",value:function(e){e.preventDefault();var t=JSON.parse(JSON.stringify(this.state));t.selectedTab="signInOrSignUp",this.setState(t)}}]),t}(n.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={user:k,newTodo:"",todoList:[]},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,a){return s.a.createElement(p,{todo:t,key:a,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)})});return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684Todos",this.state.user.id?s.a.createElement("button",{onClick:this.onSignOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(m,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),s.a.createElement("ol",null,t),this.state.user.id?null:s.a.createElement(y,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}},{key:"onSignUpOrSignIn",value:function(e){var t=JSON.parse(JSON.stringify(this.state));t.user=e,this.setState(t)}},{key:"onSignOut",value:function(){S.a.User.logOut();var e=JSON.parse(JSON.stringify(this.state));e.user={},this.setState(e)}},{key:"delete",value:function(e,t){t.deleted=!0,this.setState(this.state)}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"addTodo",value:function(e){var t=this.state.todoList;t.push({id:C+=1,title:e.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:t})}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}}]),t}(n.Component),C=0;var j=w;r.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.6518aa23.chunk.js.map