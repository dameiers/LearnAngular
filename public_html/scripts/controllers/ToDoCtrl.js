angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoCtrl',
    [
        '$scope',
        function ($scope) {
            $scope.todos = [{
                    title: 'Learn Bower',
                    done: false
                }, {
                    title: 'Learn Angular Basic Concepts',
                    done: false
                }, {
                    title: 'Learn Angular Directives',
                    done: false
                }, {
                    title: 'Learn Angular Routing',
                    done: false
                }, {
                    title: 'Implement Html 5 SIP',
                    done: false
                }, {
                    title: 'Implement Html 5 Navigator',
                    done: false
                }
            ];
            
            $scope.addTodo = function(){
                $scope.todos.push({
                    title: $scope.newTodo,
                    done:false
                });
                $scope.newTodo = '';
            };
        }
    ]
    );