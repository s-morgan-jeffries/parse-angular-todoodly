'use strict';

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

setTimeout(function() {
  var el = angular.element(document.body);
  $injector = el.injector();
  $scope = el.scope();

  helloCloud = $injector.get('helloCloud');
  hello = helloCloud();
  userExists = $injector.get('userExists');
  exists = userExists('poopface@mon.key');

//  session = $injector.get('session');
//  User = $injector.get('User');
////  var auth = $injector.get('auth');
//  promise = User.signIn('s.morgan.jeffries@gmail.com', 'password').$promise;
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
