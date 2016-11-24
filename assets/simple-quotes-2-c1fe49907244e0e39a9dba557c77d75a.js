"use strict";define("simple-quotes-2/app",["exports","ember","simple-quotes-2/resolver","ember-load-initializers","simple-quotes-2/config/environment"],function(e,t,n,i,a){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,i.default)(o,a.default.modulePrefix),e.default=o}),define("simple-quotes-2/components/app-version",["exports","ember-cli-app-version/components/app-version","simple-quotes-2/config/environment"],function(e,t,n){var i=n.default.APP.name,a=n.default.APP.version;e.default=t.default.extend({version:a,name:i})}),define("simple-quotes-2/components/simple-quotes",["exports","ember"],function(e,t){e.default=t.default.Component.extend({quotes:{data:[{id:0,text:"I urge you to please notice when you are happy,\n    and exclaim or murmur or think at some point,\n    “If this isn’t nice, I don’t know what is.”",author:"Kurt Vonnegut"},{id:1,text:"I tell you, we are here on Earth to fart around, and don't let anybody tell you different.",author:"Kurt Vonnegut"},{id:2,text:"We are what we pretend to be, so we must be careful about what we pretend to be.",author:"Kurt Vonnegut"},{id:3,text:"I want to stay as close to the edge as I can without going over.\n     Out on the edge you see all kinds of things you can't see from the center.",author:"Kurt Vonnegut"},{id:4,text:"Laughter and tears are both responses to\n    frustration and exhaustion. I myself prefer to laugh,\n    since there is less cleaning up to do afterward.",author:"Kurt Vonnegut"},{id:5,text:"Everything was beautiful and nothing hurt.",author:"Kurt Vonnegut"}]},quote:{id:0,text:"I urge you to please notice when you are happy,\n    and exclaim or murmur or think at some point,\n    “If this isn’t nice, I don’t know what is.”",author:"Kurt Vonnegut"},number:{value:0},actions:{nextQuote:function(){console.log("In nextQuote");var e=t.default.get(this.number,"value")+1,n=t.default.get(this.quotes,"data");console.log(n.length),e%=n.length,t.default.set(this.number,"value",e),console.log("data="+n[e].text),t.default.set(this.quote,"text",n[e].text)}}})}),define("simple-quotes-2/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("simple-quotes-2/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("simple-quotes-2/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","simple-quotes-2/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("simple-quotes-2/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("simple-quotes-2/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("simple-quotes-2/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("simple-quotes-2/initializers/export-application-global",["exports","ember","simple-quotes-2/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var i;if("undefined"!=typeof window)i=window;else if("undefined"!=typeof global)i=global;else{if("undefined"==typeof self)return;i=self}var a,o=n.default.exportApplicationGlobal;a="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("simple-quotes-2/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("simple-quotes-2/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("simple-quotes-2/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("simple-quotes-2/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("simple-quotes-2/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("simple-quotes-2/router",["exports","ember","simple-quotes-2/config/environment"],function(e,t,n){var i=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});i.map(function(){}),e.default=i}),define("simple-quotes-2/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("simple-quotes-2/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"simple-quotes-2/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),i},statements:[["content","simple-quotes",["loc",[null,[1,0],[1,17]]],0,0,0,0]],locals:[],templates:[]}}())}),define("simple-quotes-2/templates/components/simple-quotes",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.3",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"simple-quotes-2/templates/components/simple-quotes.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),i=e.createComment("");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),i=e.createTextNode("\n");e.appendChild(n,i);var i=e.createElement("button"),a=e.createTextNode("Next");e.appendChild(i,a),e.appendChild(n,i);var i=e.createTextNode("\n");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[2,1]),a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0]),0,0),a[1]=e.createElementMorph(i),a},statements:[["content","quote.text",["loc",[null,[1,3],[1,17]]],0,0,0,0],["element","action",["nextQuote"],[],["loc",[null,[3,8],[3,30]]],0,0]],locals:[],templates:[]}}())}),define("simple-quotes-2/config/environment",["ember"],function(e){var t="simple-quotes-2";try{var n=t+"/config/environment",i=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(i)),o={default:a};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("simple-quotes-2/app").default.create({name:"simple-quotes-2",version:"0.0.0+250736fc"});