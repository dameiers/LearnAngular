describe('Todo Controller', function () {
    'use strict';

    var $controller, shortenFilter, todoResource;
    var $httpBackend;

    beforeEach(function () {
        module('ngResource');
        module('de.cismet.todoApp.controllers');
        module('de.cismet.todoApp.services');

    });



    beforeEach(
        inject(
            [
                '$controller',
                'shortenFilter',
                'ToDoResource',
                function (_$controller_, _shorten_, _todoResource_) {
                    $controller = _$controller_;
                    shortenFilter = _shorten_;
                    todoResource = _todoResource_;
                }
            ]
            )
        );

    beforeEach(
        inject(
            [
                '$httpBackend',
                function (_$httpBackend_) {
                    $httpBackend = _$httpBackend_;
                }
            ])
        );

    describe('Scope init name', function () {
        var controller, scope;
        beforeEach(function () {
            scope = {};
            controller = $controller('TodoCtrl', {
                $scope: scope,
                shortenFilter: shortenFilter,
                ToDoResource: todoResource
            });
        });

        it('should initialize name with "Mr. X"', function () {
            expect(scope.name).toEqual('Mr. X');
        });

    });

    describe('scope init todos', function () {
        var testTodos, scope, controller;
        testTodos = {
            $collection: [
                {
                    id: 1,
                    $self: '/CIDS.todos/1',
                    title: 'test',
                    category: null,
                    done: 50,
                    dueDate: null,
                    notes: "test"
                },
                {
                    id: 2,
                    $self: '/CIDS.todos/2',
                    title: 'test 2',
                    category: null,
                    done: 100,
                    dueDate: null,
                    notes: "test 2"
                }
            ]
        };

        beforeEach(function () {
            $httpBackend.expectGET('http://localhost:8890/CIDS.todos?deduplicate=true&level=3&omitNullValues=false')
                .respond(JSON.stringify(testTodos));
            scope = {};
            controller = $controller('TodoCtrl', {
                $scope: scope,
                shortenFilter: shortenFilter,
                ToDoResource: todoResource
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should fetch the projects lists', function () {
            expect(scope.todos.length).toEqual(0);
            $httpBackend.flush();
            expect(scope.todos.length).toEqual(2);
        });

        it('should initialize todos with empty array', function () {
            expect(scope.todos).toEqual([]);
            expect(scope.todos.length).toEqual(0);
            $httpBackend.flush();
        });

        it('should contain one todo after adding a todo and persist the todo', function () {
            $httpBackend.flush();
            expect(scope.todos.length).toEqual(2);
            $httpBackend.expectPUT('http://localhost:8890/CIDS.todos/3?deduplicate=false&level=1&omitNullValues=false').respond('');
            scope.addTodo();
            $httpBackend.flush();
            expect(scope.todos.length).toEqual(3);
        });

    });

});