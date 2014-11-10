angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoCtrl',
    [
        '$scope',
        'shortenFilter',
        function ($scope, shortenFilter) {
            
            $scope.name='Mr. X';
            
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
                    title: shortenFilter($scope.newTodo,10),
                    done:false
                });
                $scope.newTodo = '';
            };
            
            $scope.remaining = function(){
                var i, remaining;
                remaining=$scope.todos.length;
                for(i=0; i<$scope.todos.length; i++){
                    if($scope.todos[i].done){
                        remaining--;
                    }
                }
                
                return remaining;
            };
            
            $scope.archive = function(){
                var i, newTodos;
                
                newTodos = [];
                
                for(i=0; i<$scope.todos.length; i++){
                    if(!$scope.todos[i].done){
                       newTodos.push($scope.todos[i]);
                    }
                }
                $scope.todos = newTodos;
                
            };
        }
    ]
    );