(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),s=(a(15),a(4)),i=a(1),l=a(5),d=a(6),u=a(8),m=a(7),p=a(9),f=(a(16),a(17),function(e){var t=e.user;return n.a.createElement("p",null,"User: ",t.name)}),h=function(e){var t=e.todo,a=t.completed,r=t.title,o=t.user,c=a?"todo-list__item--is-completed":"";return n.a.createElement("div",{className:"col-md-6 col-lg-4 mb-5"},n.a.createElement("div",{className:"todo-list__item ".concat(c)},n.a.createElement("h2",null,r),n.a.createElement(f,{user:o})))},E=function(e){var t=e.todos;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"todo-list row"},t.map(function(e){return n.a.createElement(h,{todo:e,key:e.id})})))},b=(a(18),function(e){var t=e.isLoading,a=e.isLoaded,r=e.hasError,o=e.getData,c=t?"Okay, okay, already loading...":"GET TODOS RIGHT NOW!!!";return n.a.createElement("div",{className:"container mb-5"},n.a.createElement("div",{className:"row"},n.a.createElement("header",{className:"header col text-center"},n.a.createElement("h1",{className:"mb-5"},"Dynamic list of todos"),!a&&n.a.createElement("button",{onClick:o,disabled:t},c),r&&n.a.createElement("h2",{className:"mt-3"},"Some kind of mistake, nevermind...",n.a.createElement("br",null),"just kick the admin."))))});function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var g="https://jsonplaceholder.typicode.com/users",v="https://jsonplaceholder.typicode.com/todos",j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={preparedTodos:[],isLoading:!1,isLoaded:!1,hasError:!1},a.loadData=function(){return Promise.all([fetch(g),fetch(v)]).then(function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];return Promise.all([a.json(),r.json()])})},a.getData=function(){a.setState({isLoading:!0,isLoaded:!1,hasError:!1}),a.loadData().then(function(e){var t=Object(i.a)(e,2),r=t[0],n=t[1];a.setState({preparedTodos:a.getTodosWithUsers(n,r),isLoading:!1,isLoaded:!0})}).catch(function(){a.setState({hasError:!0,isLoading:!1})})},a.getTodosWithUsers=function(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.preparedTodos,a=e.isLoading,r=e.isLoaded,o=e.hasError;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,{isLoading:a,isLoaded:r,hasError:o,getData:this.getData}),n.a.createElement(E,{todos:t}))}}]),t}(n.a.Component);c.a.render(n.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2c89f502.chunk.js.map