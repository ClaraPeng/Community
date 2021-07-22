module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=52)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";function r(t){return t.slice(0).sort((function(t,e){var n=t.position(),r=e.position();if(null===n&&null===r)return e.discussionCount()-t.discussionCount();if(null===r)return-1;if(null===n)return 1;var a=t.parent(),o=e.parent();return a===o?n-r:a&&o?a.position()-o.position():a?a===e?1:a.position()-r:o?o===t?-1:n-o.position():0}))}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(9),a=n.n(r);function o(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var r=t&&t.icon(),o=n.useColor,s=void 0===o||o;return e.className=a()([e.className,"icon",r?t.icon():"TagIcon"]),t?(e.style=e.style||{},r?e.style.color=s?t.color():"":e.style.backgroundColor=t.color()):e.className+=" untagged",r?m("i",e):m("span",e)}},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(15),a=n.n(r),o=n(10),s=n.n(o),i=n(3);function c(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=a()(e,"link"),r=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var o=t.color();o&&(e.style.backgroundColor=e.style.color=o,e.className+=" colored"),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()})),t.isChild()&&(e.className+=" TagLabel--child")}else e.className+=" untagged";return m(n?s.a:"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&Object(i.a)(t,{},{useColor:!1})," ",r))}},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(15),a=n.n(r),o=n(5),s=n(2);function i(t,e){void 0===e&&(e={});var n=[],r=a()(e,"link");return e.className="TagsLabel "+(e.className||""),t?Object(s.a)(t).forEach((function(e){(e||1===t.length)&&n.push(Object(o.a)(e,{link:r}))})):n.push(Object(o.a)()),m("span",e,n)}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(4),a=n(0),o=n.n(a),s=n(19),i=n.n(s),c=n(20),u=n.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e}(i()(o.a,{name:o.a.attribute("name"),slug:o.a.attribute("slug"),description:o.a.attribute("description"),color:o.a.attribute("color"),backgroundUrl:o.a.attribute("backgroundUrl"),backgroundMode:o.a.attribute("backgroundMode"),icon:o.a.attribute("icon"),position:o.a.attribute("position"),parent:o.a.hasOne("parent"),children:o.a.hasMany("children"),defaultSort:o.a.attribute("defaultSort"),isChild:o.a.attribute("isChild"),isHidden:o.a.attribute("isHidden"),discussionCount:o.a.attribute("discussionCount"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedDiscussion:o.a.hasOne("lastPostedDiscussion"),isRestricted:o.a.attribute("isRestricted"),canStartDiscussion:o.a.attribute("canStartDiscussion"),canAddToDiscussion:o.a.attribute("canAddToDiscussion"),isPrimary:u()("position","parent",(function(t,e){return null!==t&&!1===e}))}))},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";var r=n(2),a=n(13),o=n(7),s=n(3),i=n(5);e.a={"tags/utils/sortTags":r.a,"tags/models/Tag":a.a,"tags/helpers/tagsLabel":o.a,"tags/helpers/tagIcon":s.a,"tags/helpers/tagLabel":i.a}},function(t,e){t.exports=flarum.core},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e,n){t.exports=n(53)},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},,function(t,e,n){"use strict";var r=n(12),a=n(0),o=n.n(a),s=n(25),i=n.n(s),c=n(6),u=n.n(c),l=n(13),p=n(4),f=n(32),d=n.n(f),h=n(10),g=n.n(h),v=n(14),y=n.n(v),b=n(33),x=n.n(b),T=n(34),O=n.n(T),w=n(3),_=n(5),j=n(2),N=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip")),this.tags=[];var r=app.preloadedApiDocument();r?this.tags=Object(j.a)(r.filter((function(t){return!t.isChild()}))):(this.loading=!0,app.tagList.load(["children","lastPostedDiscussion","parent"]).then((function(){n.tags=Object(j.a)(app.store.all("tags").filter((function(t){return!t.isChild()}))),n.loading=!1,m.redraw()})))},n.view=function(){if(this.loading)return m(y.a,null);var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},u.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,x()(u.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),n=Object(j.a)(t.children()||[]);return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{backgroundColor:t.color()}},m(g.a,{className:"TagTile-info",href:app.route.tag(t)},t.icon()&&Object(w.a)(t,{},{useColor:!1}),m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map((function(t){return[m(g.a,{href:app.route.tag(t)},t.name())," "]}))):""),e?m(g.a,{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),O()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[Object(_.a)(t,{link:!0})," "]}))):"")))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(d.a),L=n(35),P=n.n(L),C=n(7),k=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.post.content()[0],r=e.post.content()[1];function a(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=a(r,n),e.tagsRemoved=a(n,r)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.attrs.tagsAdded.length?this.attrs.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.attrs.tagsAdded.length&&(t.tagsAdded=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:Object(C.a)(this.attrs.tagsAdded,{link:!0}),count:this.attrs.tagsAdded.length})),this.attrs.tagsRemoved.length&&(t.tagsRemoved=app.translator.trans("flarum-tags.forum.post_stream.tags_text",{tags:Object(C.a)(this.attrs.tagsRemoved,{link:!0}),count:this.attrs.tagsRemoved.length})),t},e}(P.a),I=n(26),D=n.n(I);function S(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}var E=function(){function t(){this.loadedIncludes=new Set}return t.prototype.load=function(){var t,e=(t=D.a.mark((function t(e){var n,r=this;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=[]),0!==(n=e.filter((function(t){return!r.loadedIncludes.has(t)}))).length){t.next=4;break}return t.abrupt("return",Promise.resolve(app.store.all("tags")));case 4:return t.abrupt("return",app.store.find("tags",{include:n.join(",")}).then((function(t){return n.forEach((function(t){return r.loadedIncludes.add(t)})),t})));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){S(o,r,a,s,i,"next",t)}function i(t){S(o,r,a,s,i,"throw",t)}s(void 0)}))});return function(t){return e.apply(this,arguments)}}(),t}(),A=n(1),M=n(36),R=n.n(M),B=n(24),H=n.n(B),F=n(9),G=n.n(F),q=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(t){var e=this.attrs.model,n=this.constructor.isActive(this.attrs),r=e&&e.description(),a=G()(["TagLinkButton","hasIcon",this.attrs.className,e.isChild()&&"child"]);return m(g.a,{className:a,href:this.attrs.route,style:n&&e?{color:e.color()}:"",title:r||""},Object(w.a)(e,{className:"Button-icon"}),m("span",{className:"Button-label"},e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")))},e.initAttrs=function(e){t.initAttrs.call(this,e);var n=e.model;e.params.tags=n?n.slug():"untagged",e.route=app.route("tag",e.params)},e}(H.a),K=function(){Object(A.extend)(u.a.prototype,"navItems",(function(t){if(t.add("tags",m(H.a,{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),-10),!app.current.matches(N)){t.add("separator",R.a.component(),-12);var e=app.search.stickyParams(),n=app.store.all("tags"),r=this.currentTag(),a=function(n){var a=r===n;!a&&r&&(a=r.parent()===n),t.add("tag"+n.id(),q.component({model:n,params:e,active:a},null==n?void 0:n.name()),-14)};Object(j.a)(n).filter((function(t){return null!==t.position()&&(!t.isChild()||r&&(t.parent()===r||t.parent()===r.parent()))})).forEach(a);var o=n.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(a),o.length&&t.add("moreTags",m(H.a,{href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.more_link")),-16)}}))},$=n(37),U=n.n($),Y=n(38),z=n.n(Y),J=n(39),Q=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.attrs.model,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{color:"#fff",backgroundColor:e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&Object(w.a)(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(n.n(J).a),V=function(){u.a.prototype.currentTag=function(){var t=this;if(this.currentActiveTag)return this.currentActiveTag;var e=app.search.params().tags,n=null;return e&&(n=app.store.getBy("tags","slug",e)),(e&&!n||n&&!n.isChild()&&!n.children())&&app.store.find("tags",e,{include:"children,children.parent,parent,state"}).then((function(){t.currentActiveTag=app.store.getBy("tags","slug",e),m.redraw()})),n?(this.currentActiveTag=n,this.currentActiveTag):void 0},Object(A.override)(u.a.prototype,"hero",(function(t){var e=this.currentTag();return e?m(Q,{model:e}):t()})),Object(A.extend)(u.a.prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),Object(A.extend)(u.a.prototype,"setTitle",(function(){var t=this.currentTag();t&&app.setTitle(t.name())})),Object(A.extend)(u.a.prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var n=e.color(),r=e.canStartDiscussion()||!app.session.user;n&&(t.get("newDiscussion").attrs.style={backgroundColor:n}),t.get("newDiscussion").attrs.disabled=!r,t.get("newDiscussion").children=app.translator.trans(r?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),Object(A.extend)(z.a.prototype,"params",(function(t){t.tags=m.route.param("tags")})),Object(A.extend)(U.a.prototype,"requestParams",(function(t){if(t.include.push("tags","tags.parent"),this.params.tags){t.filter.tag=this.params.tags;var e=t.filter.q;e&&(t.filter.q=e+" tag:"+this.params.tags)}}))},W=n(40),X=n.n(W),Z=n(27),tt=n.n(Z),et=function(){Object(A.extend)(X.a.prototype,"infoItems",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",Object(C.a)(e),10)})),Object(A.extend)(tt.a.prototype,"view",(function(t){var e=Object(j.a)(this.attrs.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={backgroundColor:n},t.attrs.className+=" DiscussionHero--colored")}})),Object(A.extend)(tt.a.prototype,"items",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",Object(C.a)(e,{link:!0}),5)}))},nt=n(41),rt=n.n(nt),at=n(8),ot=n.n(at),st=n(21),it=n.n(st),ct=n(42),ut=n.n(ct),lt=n(43),pt=n.n(lt),ft=n(28),dt=n.n(ft),mt=n(44),ht=n.n(mt),gt=n(11),vt=n.n(gt);function yt(t){var e=app.store.all("tags");return e=t?e.filter((function(e){return e.canAddToDiscussion()||-1!==t.tags().indexOf(e)})):e.filter((function(t){return t.canStartDiscussion()}))}var bt=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.tagsLoading=!0,this.selected=[],this.filter=vt()(""),this.focused=!1,this.minPrimary=app.forum.attribute("minPrimaryTags"),this.maxPrimary=app.forum.attribute("maxPrimaryTags"),this.minSecondary=app.forum.attribute("minSecondaryTags"),this.maxSecondary=app.forum.attribute("maxSecondaryTags"),this.navigator=new ht.a,this.navigator.onUp((function(){return n.setIndex(n.getCurrentNumericIndex()-1,!0)})).onDown((function(){return n.setIndex(n.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return n.selected.splice(n.selected.length-1,1)})),app.tagList.load(["parent"]).then((function(){n.tagsLoading=!1,n.tags=Object(j.a)(yt(n.attrs.discussion)),n.attrs.selectedTags?n.attrs.selectedTags.map(n.addTag.bind(n)):n.attrs.discussion&&n.attrs.discussion.tags().map(n.addTag.bind(n)),n.index=n.tags[0].id(),m.redraw()}))},n.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},n.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},n.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();e&&-1===this.selected.indexOf(e)&&this.selected.push(e),-1===this.selected.indexOf(t)&&this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},n.className=function(){return"TagDiscussionModal"},n.title=function(){return this.attrs.discussion?app.translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.attrs.discussion.title())}):app.translator.trans("flarum-tags.forum.choose_tags.title")},n.getInstruction=function(t,e){if(t<this.minPrimary){var n=this.minPrimary-t;return app.translator.trans("flarum-tags.forum.choose_tags.choose_primary_placeholder",{count:n})}if(e<this.minSecondary){var r=this.minSecondary-e;return app.translator.trans("flarum-tags.forum.choose_tags.choose_secondary_placeholder",{count:r})}return""},n.content=function(){var t=this;if(this.tagsLoading)return m(y.a,null);var e=this.tags,n=this.filter().toLowerCase(),r=this.primaryCount(),a=this.secondaryCount();e=e.filter((function(e){var n=e.parent();return!1===n||-1!==t.selected.indexOf(n)})),r>=this.maxPrimary&&(e=e.filter((function(e){return!e.isPrimary()||-1!==t.selected.indexOf(e)}))),a>=this.maxSecondary&&(e=e.filter((function(e){return e.isPrimary()||-1!==t.selected.indexOf(e)}))),n&&(e=e.filter((function(t){return t.name().substr(0,n.length).toLowerCase()===n}))),-1===e.indexOf(this.index)&&(this.index=e[0]);var o=Math.max(dt()(this.getInstruction(r,a)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:function(){return t.$(".TagsInput input").focus()}},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},Object(_.a)(e))}))),m("input",{className:"FormControl",placeholder:dt()(this.getInstruction(r,a)),bidi:this.filter,style:{width:o+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},m(ot.a,{type:"submit",className:"Button Button--primary",disabled:!this.meetsRequirements(r,a),icon:"fas fa-check"},app.translator.trans("flarum-tags.forum.choose_tags.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return n||!e.parent()||-1!==t.selected.indexOf(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:G()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:-1!==t.selected.indexOf(e),active:t.index===e}),style:{color:e.color()},onmouseover:function(){return t.index=e},onclick:t.toggleTag.bind(t,e)},Object(w.a)(e),m("span",{className:"SelectTagListItem-name"},pt()(e.name(),n)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))))]},n.meetsRequirements=function(t,e){return!!app.forum.attribute("canBypassTagCounts")||t>=this.minPrimary&&e>=this.minSecondary},n.toggleTag=function(t){-1!==this.selected.indexOf(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.index=this.tags[0]),this.onready()},n.select=function(t){t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index)?this.selected.length&&this.$('button[type="submit"]').click():this.getItem(this.index)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},n.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),r=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var a=n.eq(t);if(this.index=app.store.getById("tags",a.attr("data-index")),m.redraw(),e){var o,s=r.scrollTop(),i=r.offset().top,c=i+r.outerHeight(),u=a.offset().top,l=u+a.outerHeight();u<i?o=s-i+u-parseInt(r.css("padding-top"),10):l>c&&(o=s-c+l+parseInt(r.css("padding-bottom"),10)),void 0!==o&&r.stop(!0).animate({scrollTop:o},100)}},n.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,n=this.selected;e&&e.save({relationships:{tags:n}}).then((function(){app.current.matches(ut.a)&&app.current.get("stream").update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(n),this.hide()},e}(it.a),xt=function(){Object(A.extend)(rt.a,"moderationControls",(function(t,e){e.canTag()&&t.add("tags",m(ot.a,{icon:"fas fa-tag",onclick:function(){return app.modal.show(bt,{discussion:e})}},app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button")))}))},Tt=n(17),Ot=n.n(Tt),wt=function(){Object(A.extend)(u.a.prototype,"newDiscussionAction",(function(t){var e=this.currentTag();if(e){var n=e.parent(),r=n?[n,e]:[e];t.then((function(t){return t.fields.tags=r}))}else app.composer.fields.tags=[]})),Object(A.extend)(Ot.a.prototype,"oninit",(function(){app.tagList.load(["parent"]).then((function(){return m.redraw()}))})),Ot.a.prototype.chooseTags=function(){var t=this;yt().length&&app.modal.show(bt,{selectedTags:(this.composer.fields.tags||[]).slice(0),onsubmit:function(e){t.composer.fields.tags=e,t.$("textarea").focus()}})},Object(A.extend)(Ot.a.prototype,"headerItems",(function(t){var e=this.composer.fields.tags||[],n=yt();t.add("tags",m("a",{className:G()(["DiscussionComposer-changeTags",!n.length&&"disabled"]),onclick:this.chooseTags.bind(this)},e.length?Object(C.a)(e):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),Object(A.override)(Ot.a.prototype,"onsubmit",(function(t){var e=this,n=this.composer.fields.tags||[],r=n.filter((function(t){return null!==t.position()&&!t.isChild()})),a=n.filter((function(t){return null===t.position()})),o=yt();(!n.length||r.length<app.forum.attribute("minPrimaryTags")||a.length<app.forum.attribute("minSecondaryTags"))&&o.length?app.modal.show(bt,{selectedTags:n,onsubmit:function(n){e.composer.fields.tags=n,t()}}):t()})),Object(A.extend)(Ot.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.composer.fields.tags}))},_t=n(22),jt=Object(r.a)(_t.a,{"tags/addTagFilter":V,"tags/addTagControl":xt,"tags/components/TagHero":Q,"tags/components/TagDiscussionModal":bt,"tags/components/TagsPage":N,"tags/components/DiscussionTaggedPost":k,"tags/components/TagLinkButton":q,"tags/addTagList":K,"tags/addTagLabels":et,"tags/addTagComposer":wt}),Nt=n(23);app.initializers.add("flarum-tags",(function(t){t.routes.tags={path:"/tags",component:N},t.routes.tag={path:"/t/:tags",component:u.a},t.route.tag=function(e){return t.route("tag",{tags:e.slug()})},t.postComponents.discussionTagged=k,t.store.models.tags=l.a,t.tagList=new E,i.a.prototype.tags=o.a.hasMany("tags"),i.a.prototype.canTag=o.a.attribute("canTag"),K(),V(),et(),xt(),wt()})),Object(r.a)(Nt.compat,jt)},,function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/Separator"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["states/GlobalSearchState"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(18);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n(30)},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(54),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag",c="object"==typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{(u=e.regeneratorRuntime=c?t.exports:{}).wrap=h;var l={},p={};p[o]=function(){return this};var f=Object.getPrototypeOf,d=f&&f(f(N([])));d&&d!==n&&r.call(d,o)&&(p=d);var m=b.prototype=v.prototype=Object.create(p);y.prototype=m.constructor=b,b.constructor=y,b[i]=y.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(m),t},u.awrap=function(t){return{__await:t}},x(T.prototype),T.prototype[s]=function(){return this},u.AsyncIterator=T,u.async=function(t,e,n,r){var a=new T(h(t,e,n,r));return u.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),m[i]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return s.type="throw",s.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}}}function h(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),s=new j(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return L()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var i=O(s,n);if(i){if(i===l)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=g(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,s),o}function g(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function v(){}function y(){}function b(){}function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function T(t){var e;this._invoke=function(n,a){function o(){return new Promise((function(e,o){!function e(n,a,o,s){var i=g(t[n],t,a);if("throw"!==i.type){var c=i.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,s)}),(function(t){e("throw",t,o,s)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,s)}))}s(i.arg)}(n,a,e,o)}))}return e=e?e.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=g(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}]);
//# sourceMappingURL=forum.js.map