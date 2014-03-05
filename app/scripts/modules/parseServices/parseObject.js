'use strict';

angular.module('ParseServices')
  .factory('ParseObject', ['ParseQuery', function(ParseQuery){

    return function (parseData, fields){

      //verify parameters
      if(parseData == undefined) throw new Error('Missing parseData');
      if(fields == undefined) throw new Error('Missing fields.');

      //internal parse object reference
      var	parseObject = parseData;
      var model;

      //instantiate new parse object from string
      if(typeof parseData == 'string')
      {
        var ParseModel = Parse.Object.extend(parseData);
        parseObject = new ParseModel();
      }

      //expose underlying parse obejct through data property
      Object.defineProperty(this, 'data', { get : function(){ return parseObject; } });

      //add dynamic properties from fields array
      var self = this;
      for(var i=0; i<fields.length; i++)
      {
        //add closure
        (function() {
          var propName = fields[i];
          Object.defineProperty(self, propName, {
            get : function(){ return parseObject.get(propName); },
            set : function(value){ parseObject.set(propName, value); }
          });
        })();
      }

      //instance methods
      this.save = function(){
        return ParseQuery(parseObject, {functionToCall:'save', params:[null]})
      };
      this.delete = function(){
        return ParseQuery(parseObject, {functionToCall:'destroy'});
      };
      this.fetch = function(){
        return ParseQuery(parseObject, {functionToCall:'fetch'});
      }
    };

  }]);