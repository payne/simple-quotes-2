"use strict";define("simple-quotes-2/app",["exports","ember","simple-quotes-2/resolver","ember-load-initializers","simple-quotes-2/config/environment"],function(e,t,n,o,a){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,o.default)(i,a.default.modulePrefix),e.default=i}),define("simple-quotes-2/components/app-version",["exports","ember-cli-app-version/components/app-version","simple-quotes-2/config/environment"],function(e,t,n){var o=n.default.APP.name,a=n.default.APP.version;e.default=t.default.extend({version:a,name:o})}),define("simple-quotes-2/components/simple-quotes",["exports","ember"],function(e,t){e.default=t.default.Component.extend({quotes:{data:[{id:0,text:"I urge you to please notice when you are happy,\n    and exclaim or murmur or think at some point,\n    “If this isn’t nice, I don’t know what is.”",author:"Kurt Vonnegut"},{id:1,text:"I tell you, we are here on Earth to fart around, and don't let anybody tell you different.",author:"Kurt Vonnegut"},{id:2,text:"We are what we pretend to be, so we must be careful about what we pretend to be.",author:"Kurt Vonnegut"},{id:3,text:"I want to stay as close to the edge as I can without going over.\n     Out on the edge you see all kinds of things you can't see from the center.",author:"Kurt Vonnegut"},{id:4,text:"Laughter and tears are both responses to\n    frustration and exhaustion. I myself prefer to laugh,\n    since there is less cleaning up to do afterward.",author:"Kurt Vonnegut"},{id:5,text:"Everything was beautiful and nothing hurt.",author:"Kurt Vonnegut"},{id:6,text:"A purpose of human life, no matter who is controlling it,\n    is to love whoever is around to be loved.",author:"Kurt Vonnegut"},{id:7,text:"Here we are, trapped in the amber of the moment. There is no why.",author:"Kurt Vonnegut"},{id:8,text:"True terror is to wake up one morning and discover that your high school class is running the country.",author:"Kurt Vonnegut"},{id:9,text:"Maturity is a bitter disappointment for which no remedy exists,\n    unless laughter can be said to remedy anything.",author:"Kurt Vonnegut"},{id:10,text:"Tiger got to hunt, bird got to fly;\n    Man got to sit and wonder, 'Why, why, why?' Tiger got to sleep,\n    bird got to land; Man got to tell himself he understand.",author:"Kurt Vonnegut"},{id:11,text:" There's only one rule that I know of, babies—God damn it,\n    you've got to be kind.",author:"Kurt Vonnegut"},{id:12,text:"She was a fool, and so am I, and so is anyone who thinks\n    he sees what God is doing.",author:"Kurt Vonnegut"},{id:13,text:"Many people need desperately to receive this message:\n    'I feel and think much as you do, care about many of the things\n    you care about, although most people do not care about them.\n    You are not alone.",author:"Kurt Vonnegut"},{id:14,text:"There are plenty of good reasons for fighting,\n    but no good reason ever to hate without reservation,\n    to imagine that God Almighty Himself hates with you, too.",author:"Kurt Vonnegut"},{id:15,text:"Since Alice had never received any religious\n    instruction, and since she had led a blameless life, she never\n    thought of her awful luck as being anything but accidents in a\n    very busy place. Good for her.",author:"Kurt Vonnegut"},{id:16,text:"That is my principal objection to life, I think:\n    It's too easy, when alive, to make perfectly horrible mistakes.",author:"Kurt Vonnegut"},{id:17,text:"Literature should not disappear up its own asshole, so to speak.",author:"Kurt Vonnegut"},{id:18,text:"So it goes.",author:"Kurt Vonnegut"}]},quote:{id:0,text:"I urge you to please notice when you are happy,\n    and exclaim or murmur or think at some point,\n    “If this isn’t nice, I don’t know what is.”",author:"Kurt Vonnegut"},number:{value:0},actions:{nextQuote:function(){console.log("In nextQuote");var e=t.default.get(this.number,"value")+1,n=t.default.get(this.quotes,"data");console.log(n.length),e%=n.length,t.default.set(this.number,"value",e),console.log("data="+n[e].text),t.default.set(this.quote,"text",n[e].text)}}})}),define("simple-quotes-2/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("simple-quotes-2/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("simple-quotes-2/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","simple-quotes-2/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("simple-quotes-2/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("simple-quotes-2/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("simple-quotes-2/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("simple-quotes-2/initializers/export-application-global",["exports","ember","simple-quotes-2/config/environment"],function(e,t,n){function o(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var a,i=n.default.exportApplicationGlobal;a="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("simple-quotes-2/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("simple-quotes-2/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("simple-quotes-2/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("simple-quotes-2/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("simple-quotes-2/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("simple-quotes-2/router",["exports","ember","simple-quotes-2/config/environment"],function(e,t,n){var o=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});o.map(function(){}),e.default=o}),define("simple-quotes-2/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("simple-quotes-2/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"simple-quotes-2/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var o=new Array(1);return o[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),o},statements:[["content","simple-quotes",["loc",[null,[1,0],[1,17]]],0,0,0,0]],locals:[],templates:[]}}())}),define("simple-quotes-2/templates/components/simple-quotes",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.3",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"simple-quotes-2/templates/components/simple-quotes.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("body");e.setAttribute(n,"class","Site");var o=e.createTextNode("\n");e.appendChild(n,o);var o=e.createElement("header"),a=e.createTextNode("2");e.appendChild(o,a),e.appendChild(n,o);var o=e.createTextNode("\n");e.appendChild(n,o);var o=e.createElement("main");e.setAttribute(o,"class","Site-content");var a=e.createTextNode("\n  ");e.appendChild(o,a);var a=e.createElement("p"),i=e.createComment("");e.appendChild(a,i),e.appendChild(o,a);var a=e.createTextNode("\n");e.appendChild(o,a);var a=e.createElement("img");e.setAttribute(a,"src","Vonnegut-0ccfcc719305888bdfada2a260ce6864.jpg"),e.appendChild(o,a);var a=e.createTextNode("\n");e.appendChild(o,a);var a=e.createElement("p"),i=e.createComment("");e.appendChild(a,i),e.appendChild(o,a);var a=e.createTextNode("\n  ");e.appendChild(o,a),e.appendChild(n,o);var o=e.createTextNode("\n  ");e.appendChild(n,o);var o=e.createElement("footer"),a=e.createTextNode("\n      ");e.appendChild(o,a);var a=e.createElement("button"),i=e.createTextNode("Next");e.appendChild(a,i),e.appendChild(o,a);var a=e.createTextNode("\n      ");e.appendChild(o,a),e.appendChild(n,o);var o=e.createTextNode("\n");e.appendChild(n,o),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var o=e.childAt(t,[0]),a=e.childAt(o,[3]),i=e.childAt(o,[5,1]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(e.childAt(a,[5]),0,0),r[2]=e.createElementMorph(i),r},statements:[["content","quote.text",["loc",[null,[4,5],[4,19]]],0,0,0,0],["content","quote.author",["loc",[null,[6,3],[6,19]]],0,0,0,0],["element","action",["nextQuote"],[],["loc",[null,[9,14],[9,36]]],0,0]],locals:[],templates:[]}}())}),define("simple-quotes-2/config/environment",["ember"],function(e){var t="simple-quotes-2";try{var n=t+"/config/environment",o=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(o)),i={default:a};return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("simple-quotes-2/app").default.create({name:"simple-quotes-2",version:"0.0.0+79979172"});