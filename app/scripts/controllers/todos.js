'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('TodosCtrl', function ($scope, session/*, Todo*/) {

    if (!session.isAuthenticated) {
      return;
    }

    var user = session.user,
      todos = $scope.todos = session.todos;

    user.getTodos();

    $scope.addTodo = function() {
      var todo = user.addTodo(this.addTodoContent);

      todos.unshift(todo);
      this.addTodoContent = '';
    };

    $scope.toggleDone = function(todo) {
      todo.toggleDone();
    };

    $scope.editTodo = function(todo) {
      $scope.editedTodo = todo;
      $scope.originalTodoContent = todo.content;
    };

    $scope.doneEditing = function(todo) {
      $scope.originalTodoContent = $scope.editedTodo = null;
      todo.content = todo.content.trim();
      todo.$save();
      if (!todo.content) {
        $scope.deleteTodo(todo);
      }
    };

    $scope.revertEditing = function(todo) {
      todo.content = $scope.originalTodoContent;
      $scope.originalTodoContent = $scope.editedTodo = null;
    };

    $scope.deleteTodo = function(todo) {
      todos.splice(todos.indexOf(todo), 1);
      todo.$delete();
    };

  });
