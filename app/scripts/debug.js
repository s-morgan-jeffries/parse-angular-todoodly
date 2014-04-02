'use strict';

var C1 = function() {},
  C2 = function() {};

C1.prototype.prop1 = false;
C2.prototype = new C1();
var src = new C2();
src.prop2 = false;
src.prop3 = false;
src.prop4 = false;
var dest = {
  prop1: true,
  prop2: true,
  prop3: true
};

var $injector,
  $scope,
  Todo,
  todos,
  todo,
  newTodo,
  newTodo2,
  session,
  promise,
  savePromise,
//  Test,
//  queryData,
//  ParseUser,
  User,
  userExists,
  exists;

var helloCloud,
  hello;

var parseCloudFunction;

setTimeout(function() {
  var el = angular.element(document.body);
  $injector = el.injector();
  $scope = el.scope();

//  helloCloud = $injector.get('helloCloud');
//  hello = helloCloud();
  parseCloudFunction = $injector.get('parseCloudFunction');
  hello = parseCloudFunction('hello');
//  userExists = $injector.get('userExists');
//  exists = userExists('poopface@mon.key');

  session = $injector.get('session');
  User = $injector.get('User');
  var $location = $injector.get('$location');
  $location.path('/profile');
  $location.replace();
////  var auth = $injector.get('auth');
//  User.signIn('s.morgan.jeffries@gmail.com', 'password').$promise
//    .then(function() {
//      var $location = $injector.get('$location');
//      $location.path('/profile');
//      $location.replace();
//    });
//
//////  console.log(promise);
//  promise.then(function() {
//    Todo = $injector.get('Todo');
////      var todo = {
////        content: 'new poopoo'
////      };
////      Todo.save(todo);
////    Todo.query(function(data) {
//////      todos = data.results;
////      console.log(data);
////      queryData = data;
////    });
//
////    Todo.query(/*{order: '-createdAt'},*/ function(results) {
////      var newTodoProps = {
////        content: 'new todo content',
////        isDone: false,
////        user: {
////          __type: 'Pointer',
////          className: '_User',
////          objectId: session.userId
////        },
////        ACL: {}
////      };
////      newTodoProps.ACL[session.userId] = {
////        read: true,
////        write: true
////      };
////
////      newTodo = new Todo(newTodoProps);
////      newTodo.$save();
////      newTodo2 = new Todo(newTodoProps);
////      savePromise = Todo.save(newTodo2);
////
////      todos = results;
////      todo = todos[0];
//////      console.log('results:');
//////      console.log(results);
//////      console.log('todo:');
//////      console.log(todo);
//////      todo.toggleDone();
////    });
//
//  });

//  Test = $injector.get('Test');
//  Test.query();
}, 2000);
