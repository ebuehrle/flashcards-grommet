(this["webpackJsonpflashcards-grommet"]=this["webpackJsonpflashcards-grommet"]||[]).push([[0],{66:function(e,t,a){e.exports=a(84)},72:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),s=a.n(i),l=a(8),o=a(18),c=a(7),u=a.n(c),d=a(12),h=a(13),g=a(29),m=a(19),f=a(20),p=a(22),b=a(21),v=(a(72),a(31)),y=a(124),k=a(108),E=a(109),C=a(118),j=a(122),O=a(126),w=a(123),S=a(121),x=a(111),T=a(125),N=a(119),H=a(112),A=a(85),F=a(127),z=a(113),M=a(114),B=a(115),I=a(116),D=a(117),J=a(120),P=a(40),U=a(49),R=a.n(U),K={global:{font:{family:"Raleway"}}},W=/(#[^#\s!?.,:]+)/g,G=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{as:"span",style:{display:"inline"},background:"brand",round:!0,pad:{vertical:"xxsmall",horizontal:"xsmall"}},this.props.text)}}]),a}(r.a.Component),L=function(e){var t=r.a.useRef(),a=r.a.useState("auto"),n=Object(g.a)(a,2),i=n[0],s=n[1],l=r.a.useState("auto"),o=Object(g.a)(l,2),c=o[0],u=o[1];r.a.useEffect((function(){u("".concat(t.current.scrollHeight,"px")),s("".concat(t.current.scrollHeight,"px"))}));return r.a.createElement("div",{style:{minHeight:i}},r.a.createElement(y.a,Object.assign({},e,{ref:t,style:{height:c},onChange:function(a){u("auto"),s("".concat(t.current.scrollHeight,"px")),e.onChange&&e.onChange(a)}})))},Y=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={flipped:!1},n}return Object(f.a)(a,[{key:"handleFlip",value:function(){this.setState({flipped:!this.state.flipped})}},{key:"highlightTags",value:function(e){return e.replace(W,(function(e){return"<Tag text='".concat(e,"' />")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card-flip "+(this.state.flipped?"flipped":"")},r.a.createElement("div",{className:"flip"},r.a.createElement("div",{className:"front"},r.a.createElement(k.a,{border:this.props.border,margin:"small",background:"light-1",width:"medium",height:{min:"small"}},r.a.createElement(E.a,{pad:"medium",onClick:function(){return e.handleFlip()}},this.props.editing?r.a.createElement(L,{autoFocus:!this.state.flipped,fill:!0,resize:"vertical",value:this.props.front,onClick:function(e){return e.stopPropagation()},onKeyDown:function(e){return e.stopPropagation()},onChange:function(t){return e.props.onChangeFront(t)}}):r.a.createElement(C.a,{style:{display:this.state.flipped?"none":"block"},options:{overrides:{Tag:G}}},this.highlightTags(this.props.front))))),r.a.createElement("div",{className:"back"},r.a.createElement(k.a,{border:this.props.border,margin:"small",background:"light-1",elevation:"large",width:"medium",height:{min:"small"}},r.a.createElement(E.a,{pad:"medium",onClick:function(){return e.handleFlip()}},this.props.editing?r.a.createElement(L,{autoFocus:this.state.flipped,fill:!0,resize:"vertical",value:this.props.back,onClick:function(e){return e.stopPropagation()},onKeyDown:function(e){return e.stopPropagation()},onChange:function(t){return e.props.onChangeBack(t)}}):r.a.createElement(C.a,{style:{display:this.state.flipped?"block":"none"},options:{overrides:{Tag:G}}},this.highlightTags(this.props.back))),this.props.footer))))}}]),a}(r.a.Component),$=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={show:!0,timeout:null},n}return Object(f.a)(a,[{key:"hide",value:function(){null!==this.state.timeout&&clearTimeout(this.state.timeout),this.setState({show:!1,timeout:null})}},{key:"componentDidMount",value:function(){var e=this;null===this.state.timeout&&this.setState({timeout:setTimeout((function(){return e.hide()}),3e3)})}},{key:"render",value:function(){var e=this;return this.state.show&&r.a.createElement(j.a,{position:"bottom-left",margin:"large",plain:!0,modal:!1},r.a.createElement(k.a,{direction:"row",pad:"medium",gap:"large",align:"baseline",background:"dark-3",elevation:"large"},this.props.text,r.a.createElement(v.a,{onClick:function(){return e.hide()}},this.props.action)))}}]),a}(r.a.Component),q=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;Object(m.a)(this,a),n=t.call(this,e);var r=[{id:Object(J.a)(),front:"Hey!",back:"Nice to meet you!",editing:!1,progress:{category:"Hard"}},{id:Object(J.a)(),front:"This is a little flash cards app. Click cards to flip and edit them.",back:"Isn't that neat?",editing:!1,progress:{category:"Medium"}},{id:Object(J.a)(),front:"You can add #tags to cards. Tags will show up at the bottom of the screen.",back:"Also, you can track your progress using the three coloured dots below. Go ahead and add your first card!",editing:!1,progress:{category:"Easy"}}];return n.state={boxTitle:"Cards",cards:r,notifications:[],selectedCategories:new Set(["Easy","Medium","Hard"]),selectedTags:new Set(["Untagged","#tags"])},n}return Object(f.a)(a,[{key:"getSaveState",value:function(){return{boxTitle:this.state.boxTitle,cards:this.state.cards,selectedCategories:Object(h.a)(this.state.selectedCategories),selectedTags:Object(h.a)(this.state.selectedTags)}}},{key:"handleSave",value:function(){Object(P.b)(new Blob([JSON.stringify(this.getSaveState())],{type:"application/json"}),{fileName:R()(this.state.boxTitle,{replacement:"-"})+".json",extensions:[".json"]})}},{key:"handleOpen",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)({mimeTypes:["application/json"]});case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return");case 5:(a=new FileReader).addEventListener("loadend",(function(){var e=JSON.parse(a.result);n.setState({boxTitle:e.boxTitle,cards:e.cards,selectedCategories:new Set(e.selectedCategories),selectedTags:new Set(e.selectedTags)})})),a.readAsText(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getTags",value:function(){var e,t={Untagged:[]},a=Object(o.a)(this.state.cards);try{for(a.s();!(e=a.n()).done;){var n=e.value,r=n.front.match(W),i=n.back.match(W),s=(null!==r?r:[]).concat(null!==i?i:[]);if(s.length){var l,c=Object(o.a)(s);try{for(c.s();!(l=c.n()).done;){var u=l.value;u in t?t[u].push(n):t[u]=[n]}}catch(d){c.e(d)}finally{c.f()}}else t.Untagged.push(n)}}catch(d){a.e(d)}finally{a.f()}return Object.entries(t).map((function(e){var t=Object(g.a)(e,2);return{tag:t[0],cards:t[1]}}))}},{key:"filterCards",value:function(){var e,t=this,a=new Set,n=Object(o.a)(this.getTags());try{for(n.s();!(e=n.n()).done;){var r=e.value;if(this.state.selectedTags.has(r.tag)){var i,s=Object(o.a)(r.cards);try{for(s.s();!(i=s.n()).done;){var l=i.value;a.add(l)}}catch(c){s.e(c)}finally{s.f()}}}}catch(c){n.e(c)}finally{n.f()}return this.state.cards.filter((function(e){return e.editing||t.state.selectedCategories.has(e.progress.category)})).filter((function(e){return e.editing||a.has(e)}))}},{key:"showAll",value:function(){this.setState({selectedCategories:new Set(["Hard","Medium","Easy"]),selectedTags:new Set(this.getTags().map((function(e){return e.tag})))})}},{key:"showNone",value:function(){this.setState({selectedCategories:new Set([]),selectedTags:new Set([])})}},{key:"areAllCardsSelected",value:function(){return this.filterCards().length===this.state.cards.length}},{key:"handleDelete",value:function(e){var t=this,a=this.state.cards.findIndex((function(t){return t===e}));this.notify({text:r.a.createElement(O.a,null,"Card deleted"),action:r.a.createElement(w.a,{label:"Undo",onClick:function(){return t.setState({cards:t.state.cards.slice(0,a).concat(e).concat(t.state.cards.slice(a))})}})}),this.setState({cards:this.state.cards.filter((function(t){return t!==e}))})}},{key:"handleAdd",value:function(){this.setState({cards:this.state.cards.concat({id:Object(J.a)(),front:"",back:"",editing:!0,progress:{category:"Hard"}})})}},{key:"handleEdit",value:function(e){var t=this.state.cards.map((function(t){return t===e?Object(l.a)(Object(l.a)({},t),{},{editing:!t.editing}):t}));this.setState({cards:t})}},{key:"handleChangeFront",value:function(e,t){var a=this.state.cards.map((function(a){return a===e?Object(l.a)(Object(l.a)({},a),{},{front:t.target.value}):a}));this.setState({cards:a})}},{key:"handleChangeBack",value:function(e,t){var a=this.state.cards.map((function(a){return a===e?Object(l.a)(Object(l.a)({},a),{},{back:t.target.value}):a}));this.setState({cards:a})}},{key:"handleSetCategory",value:function(e,t){var a=Object(l.a)(Object(l.a)({},e.progress),{},{category:t}),n=this.state.cards.map((function(t){return t===e?Object(l.a)(Object(l.a)({},t),{},{progress:a}):t}));this.setState({cards:n})}},{key:"notify",value:function(e){var t={id:Object(J.a)(),text:e.text,action:e.action};this.setState({notifications:this.state.notifications.concat(t)})}},{key:"render",value:function(){var e=this,t={Hard:"status-error",Medium:"status-warning",Easy:"status-ok"};return r.a.createElement(S.a,{theme:K,full:!0},r.a.createElement(v.a,{fill:!0,flex:!0,direction:"column"},r.a.createElement(x.a,{elevation:"medium",background:"brand",pad:{horizontal:"medium",vertical:"small"}},r.a.createElement(T.a,{level:"3",margin:"none"},"#cards"),r.a.createElement(v.a,{direction:"row",gap:"small"},r.a.createElement(w.a,{label:"Open",onClick:function(){return e.handleOpen()}}),r.a.createElement(N.a,{value:this.state.boxTitle,onChange:function(t){return e.setState({boxTitle:t.target.value})}}),r.a.createElement(w.a,{label:"Save",onClick:function(){return e.handleSave()}})),r.a.createElement(w.a,{primary:!0,label:"Add",onClick:function(){return e.handleAdd()}})),r.a.createElement(v.a,{flex:{grow:1,shrink:1},overflow:"auto",pad:"medium",direction:"row",wrap:!0,justify:"center",alignContent:"start"},this.filterCards().map((function(a){return r.a.createElement(Y,{key:a.id,front:a.front,back:a.back,editing:a.editing,onChangeFront:function(t){return e.handleChangeFront(a,t)},onChangeBack:function(t){return e.handleChangeBack(a,t)},footer:r.a.createElement(H.a,{background:"light-2",pad:{horizontal:"small"},gap:"xxsmall"},r.a.createElement(w.a,{icon:a.editing?r.a.createElement(z.a,null):r.a.createElement(M.a,null),hoverIndicator:!0,onClick:function(t){return e.handleEdit(a)}}),["Hard","Medium","Easy"].map((function(n){return r.a.createElement(w.a,{key:n,icon:a.progress.category===n?r.a.createElement(B.a,{color:t[n]}):r.a.createElement(I.a,{color:t[n]}),hoverIndicator:!0,onClick:function(){return e.handleSetCategory(a,n)}})})),r.a.createElement(w.a,{icon:r.a.createElement(D.a,null),hoverIndicator:!0,onClick:function(){return e.handleDelete(a)}}))})}))),this.state.notifications.map((function(e){return r.a.createElement($,{key:e.id,text:e.text,action:e.action})})),r.a.createElement(A.a,{pad:"small",background:"light-3",elevation:"medium"},r.a.createElement(F.a,{anchor:"top-right"},this.areAllCardsSelected()?r.a.createElement(w.a,{label:"None",onClick:function(){return e.showNone()},margin:"xsmall"}):r.a.createElement(w.a,{label:"All",onClick:function(){return e.showAll()},margin:"xsmall"}),r.a.createElement(v.a,{className:"blurred",pad:{horizontal:"xsmall"},round:!0,elevation:"small"},r.a.createElement(O.a,null,this.state.cards.length))),r.a.createElement(v.a,{pad:"xxsmall",direction:"row",gap:"xxsmall",overflow:"auto"},["Hard","Medium","Easy"].map((function(a){return r.a.createElement(F.a,{key:a,anchor:"top-right"},r.a.createElement(w.a,{primary:e.state.selectedCategories.has(a),label:a,color:t[a],margin:"xsmall",onClick:function(){return e.setState({selectedCategories:e.state.selectedCategories.has(a)?new Set(Object(h.a)(e.state.selectedCategories).filter((function(e){return e!==a}))):new Set(Object(h.a)(e.state.selectedCategories)).add(a)})}}),r.a.createElement(v.a,{className:"blurred",pad:{horizontal:"xsmall"},round:!0,elevation:"small"},r.a.createElement(O.a,null,e.state.cards.filter((function(e){return e.progress.category===a})).length)))})),this.getTags().map((function(t){return r.a.createElement(F.a,{key:t.tag,anchor:"top-right"},r.a.createElement(w.a,{label:t.tag,primary:e.state.selectedTags.has(t.tag),margin:"xsmall",onClick:function(){return e.setState({selectedTags:e.state.selectedTags.has(t.tag)?new Set(Object(h.a)(e.state.selectedTags).filter((function(e){return e!==t.tag}))):new Set(Object(h.a)(e.state.selectedTags)).add(t.tag)})}}),r.a.createElement(v.a,{className:"blurred",pad:{horizontal:"xsmall"},round:!0,elevation:"small"},r.a.createElement(O.a,null,t.cards.length)))}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.ac8f1ad3.chunk.js.map