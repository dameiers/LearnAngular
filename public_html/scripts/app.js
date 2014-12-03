angular.module(
    'de.cismet.todoApp',
    [
        'ngResource',
        'ngRoute',
        'de.cismet.todoApp.controllers',
        'de.cismet.todoApp.directives',
        'de.cismet.todoApp.filters',
        'de.cismet.todoApp.services',
    ]
    ).config(
    [
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when(
                    '/todo/:id', {
                        controller: 'TodoItemCtrl',
                        templateUrl: 'partials/todoItem.html',
                        resolve:{
                            'todo': ['$route','ToDoResource',function($route,todoRes){
                                return todoRes.get({todoId:$route.current.params.id,level:3,deduplicate:true}).$promise;
                            }]
                        }
                    })
                .when(
                    '/todoList', {
                        controller: 'TodoCtrl',
                        templateUrl: 'partials/todoList.html'
                    })
                .otherwise(
                    {
                        redirectTo: '/todoList'
                    }
                );
        }
    ]
    );