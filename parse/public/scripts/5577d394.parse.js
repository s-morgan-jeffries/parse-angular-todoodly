"use strict";angular.module("parseRestApi",["ngResource","ngStorage"]),angular.module("parseRestApi").factory("parseConfig",function(){return{restApiBaseUrl:"https://api.parse.com/1"}}),angular.module("parseRestApi").factory("parseSession",["$sessionStorage",function(a){var b=a;return b}]),angular.module("parseRestApi").factory("parseRestApiInterceptor",["$q","parseSession","parseConfig",function(a,b,c){var d=function(){var a={"X-Parse-Application-Id":c.applicationId,"X-Parse-REST-API-Key":c.restKey};return b.isAuthenticated&&(a["X-Parse-Session-Token"]=b.sessionToken),a},e=RegExp(c.restApiBaseUrl),f=function(a){return e.test(a)};return{request:function(b){return f(b.url)&&(b.headers=b.headers||{},angular.extend(b.headers,d())),b||a.when(b)}}}]),angular.module("parseRestApi").factory("parseResourceFactory",["$resource",function(a){return function(b,c,d){var e;return d=d||{},d.query={method:"GET",isArray:!0,transformResponse:function(a){return a=JSON.parse(a).results,a?_.map(a,function(a){return new e(a)}):[]}},d.create={method:"POST"},d.update={method:"PUT"},e=a(b,c,d),e.save=function(){var a=e.create,b=e.update;delete e.create,delete e.update,delete e.prototype.$create,delete e.prototype.$update;var c=function(a){return a instanceof e},d=function(a){return"object"==typeof a&&!c(a)};return function(){var f=Array.prototype.slice.call(arguments,0),g=_.find(f,d)||{},h=_.find(f,c)||new e(g),i=_.extend(_.omit(_.pick(h,_.keys(h)),_.methods(h)),g),j=_.findLast(f,angular.isFunction)||angular.noop,k=_.find(f,angular.isFunction)||angular.noop,l=function(a,b){_.defaults(a,i),k(a,b)},m=h.isNew()?a:b;return j=j===k?angular.noop:j,m.call(this,g,h,l,j)}}(),e}}]),angular.module("parseRestApi").factory("parseAbstractObjectFactory",["parseResourceFactory",function(a){return function(b,c,d,e){var f=a(c,d,e);return f.prototype.isNew=function(){return!this.objectId},f.prototype.getPointer=function(){return{__type:"Pointer",className:b,objectId:this.objectId}},f.prototype.setUserPriveleges=function(a,b,c){this.ACL=this.ACL||{},this.ACL[a.objectId]={read:b,write:c}},f}}]),angular.module("parseRestApi").factory("parseObjectFactory",["parseAbstractObjectFactory","parseConfig",function(a,b){return function(c,d,e){var f,g=b.restApiBaseUrl+"/classes/"+c+"/:objectId";return e=e||{},d=_.extend(d||{},{objectId:"@objectId"}),f=a(c,g,d,e)}}]),angular.module("parseRestApi").factory("ParseUser",["parseAbstractObjectFactory","parseConfig","parseSession",function(a,b,c){var d=b.restApiBaseUrl+"/:root/:objectId",e={root:"users",objectId:"@objectId"},f=a("_User",d,e);return c.user=c.user&&new f(c.user),Object.defineProperty(c,"sessionToken",{get:function(){return this.user&&this.user.sessionToken},enumerable:!1,configurable:!1}),Object.defineProperty(c,"userId",{get:function(){return this.user&&this.user.objectId},enumerable:!1,configurable:!1}),Object.defineProperty(c,"isAuthenticated",{get:function(){return!!this.userId},enumerable:!1,configurable:!1}),f.signUp=function(a,b,d){return c.user=this.save({username:a,password:b,email:d})},f.signIn=function(a,b){return c.user=this.get({root:"login",username:a,password:b})},f.signOut=function(){c.user=null},f.current=function(){return c.user=this.get({objectId:"me"})},f}]),angular.module("parseRestApi").factory("parseRole",["parseResourceFactory",function(){return{}}]),angular.module("parseRestApi").factory("parseFile",["parseResourceFactory",function(){return{}}]),angular.module("parseRestApi").factory("parseFunction",["$resource","parseConfig",function(a,b){var c,d=d=b.restApiBaseUrl+"/functions/:functionName",e={functionName:"@functionName"},f={cloudCall:{method:"POST"}};return c=a(d,e,f),c.prototype={},function(a,b){return b=b||{},b.functionName=a,c.cloudCall(b)}}]),angular.module("parseRestApi").factory("parseInitialize",["parseConfig",function(a){var b,c,d=function(a,e){b=a,c=e,d=function(){console.warn("Parse application already initialized (application ID: "+b+", REST key: "+c+")!")}};return Object.defineProperty(a,"applicationId",{get:function(){return b},enumerable:!0,configurable:!1}),Object.defineProperty(a,"restKey",{get:function(){return c},enumerable:!0,configurable:!1}),function(a,b){d(a,b)}}]);