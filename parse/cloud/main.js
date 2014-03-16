
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define('userExists', function(req, res) {
  var query = new Parse.Query(Parse.User);
  query.equalTo("username", req.params.username);
  query.find({
    success: function(results) {
      console.log(results);
      res.success(results);
    },
    error: function() {
      res.success(false);
    }
  });
});