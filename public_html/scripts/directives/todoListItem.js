angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'todoListItem',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo, linkFunction;

            linkFunction = function (scope, elem, attrs) {
                var i;

                scope.knobOptions = {
                    width: '150',
                    height: '150',
                    'displayInput': true,
                };

                scope.todoCategories = [
                    {
                        $self: '/CIDS.todoCategory/1',
                        name: 'Really Important',
                        class: 'panel-danger'
                    }, {
                        $self: '/CIDS.todoCategory/2',
                        name: 'Default',
                        class: 'panel-primary'
                    }, {
                        $self: '/CIDS.todoCategory/3',
                        name: 'Nearly Done - Dont Worry',
                        class: 'panel-success'
                    }, {
                        $self: '/CIDS.todoCategory/4',
                        name: 'Info',
                        class: 'panel-info'
                    }, {
                        $self: '/CIDS.todoCategory/5',
                        name: 'Hurry Hup!',
                        class: 'panel-warning'
                    }
                ];

                // we need to map the category 
                if (scope.todoItem.category) {
                    for (i = 0; i < scope.todoCategories.length; i++) {
                        if (scope.todoCategories[i].$self === scope.todoItem.category.$self) {
                            scope.todoItem.category = scope.todoCategories[i];
                            break;
                        }
                    }
                }

            };

            ddo = {
                templateUrl: 'templates/todoListItemTemplate.html',
                scope: {
                    todoItem: '=todo',
                    onTodoPersist: '&',
                    onTodoDelete: '&'
                },
                link: linkFunction
            };

            return ddo;
        }
    ]
    );