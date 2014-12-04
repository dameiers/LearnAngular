angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoCtrl',
    [
        '$scope',
        'shortenFilter',
        'ToDoResource',
        function ($scope, shortenFilter, todoResource) {
//        function ($scope,shortenFilter) {

            $scope.name = 'Mr. X';
            $scope.todos = [];


            todoResource.query({level:3,deduplicate:true},function (data) {
                $scope.todos = data;
            });
            

            $scope.addTodo = function () {
                var newTodo, newId;
                newId = $scope.todos.length+1;
                newTodo = {
                    $self:'/CIDS.todos/'+newId,
                    id:newId,
                    title: shortenFilter($scope.newTodo, 10),
                    done: 0,
                    category:null
                }
                $scope.todos.push(newTodo);
                todoResource.update(newTodo);
                $scope.newTodo = '';
            };

            $scope.remaining = function () {
                var i, remaining;
                remaining = $scope.todos.length;
                for (i = 0; i < $scope.todos.length; i++) {
                    if ($scope.todos[i].done >= 100) {
                        remaining--;
                    }
                }

                return remaining;
            };

            $scope.archive = function () {
                var i, newTodos;

                newTodos = [];

                for (i = 0; i < $scope.todos.length; i++) {
                    if (!$scope.todos[i].done) {
                        newTodos.push($scope.todos[i]);
                    }
                }
                $scope.todos = newTodos;

            };

            $scope.knobVal = 88;
            $scope.knobOptions = {
                'height': 80,
                'displayInput': true,
            };

            $scope.deleteTodo = function (todoItem) {
                var i, indexToRemove;
                indexToRemove = -1
                for (i = 0; i < $scope.todos.length; i++) {
                    if ($scope.todos[i].$self === todoItem.$self) {
                        indexToRemove = i;
                        break;
                    }
                }
                if (indexToRemove >= 0) {
                    $scope.todos.splice(i, 1);
                    todoResource.delete({todoId:todoItem.id});
                }else{
                    console.error("could not delete todo"+JSON.stringify(todoItem))
                }
            };

            $scope.persistTodo = function (todoItem) {
                todoItem.$update();
            };

        }
    ]
    );