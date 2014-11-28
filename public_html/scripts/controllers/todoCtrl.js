angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoCtrl',
    [
        '$scope',
        'shortenFilter',
        'ToDoResource',
        '$timeout',
        function ($scope, shortenFilter, todoResource, $timeout) {


            $scope.name = 'Mr. X';
            $scope.todos = [];


            todoResource.query(function (data) {
                $scope.todos = data;
//                $scope.firstTodo = $scope.todos[0];
//                $scope.firstTodo.done = false;
//                $scope.firstTodo.$update();
            });

            $scope.addTodo = function () {
                $scope.todos.push({
                    title: shortenFilter($scope.newTodo, 10),
                    done: false
                });
                $scope.newTodo = '';
            };

            $scope.remaining = function () {
                var i, remaining;
                remaining = $scope.todos.length;
                for (i = 0; i < $scope.todos.length; i++) {
                    if ($scope.todos[i].done) {
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
            
            $timeout(function(){
            $scope.knobVal = 50;    
            },2000)

        }
    ]
    );