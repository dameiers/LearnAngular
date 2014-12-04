describe('TodoList Item Test', function () {
    var $compile, $rootScope, todoItem, scope;

    todoItem = {
        id: 1,
        $self: '/CIDS.todos/1',
        title: 'My fancy test Todo',
        dueDate: null,
        notes: 'this is a todo for testing..',
        done: 50,
        category: {"$self": "/CIDS.todoCategory/3", "name": "Nearly Done - Dont Worry", "class": "panel-success"}
    };

    beforeEach(function () {
        module('de.cismet.todoApp.directives');
        module('my.templates');
    });

    beforeEach(
        inject(
            [
                '$compile',
                '$rootScope',
                function (_$compile_, _$rootScope_) {
                    $compile = _$compile_;
                    $rootScope = _$rootScope_;
                }
            ]
            )
        );

    beforeEach(function () {
        scope = $rootScope.$new();
    });

    it('binds the attributes correctly', function () {
        var element;
        scope.todo = todoItem;

        scope.deleteTodo = function () {
            console.log('delete todo called');
        };

        scope.persistTodo = function () {
            console.log('persist todo called');
        };

        element = $compile('<todo-list-item todo="todo" on-todo-delete="deleteTodo(todoItem)" on-todo-persist="persistTodo(todoItem)"></todo-list-item>')(scope);
        scope.$digest();
        expect(element.html()).toContain('<li style="list-style: none">');

    });

    it('sets the correct panel class', function () {
        var element, cssClass;
        scope.todo = todoItem;

        scope.deleteTodo = function () {
            console.log('delete todo called');
        };

        scope.persistTodo = function () {
            console.log('persist todo called');
        };

        element = $compile('<todo-list-item todo="todo" on-todo-delete="deleteTodo(todoItem)" on-todo-persist="persistTodo(todoItem)"></todo-list-item>')(scope);

        scope.$digest();

        cssClass = element.find('.panel').hasClass('panel-success');

        expect(cssClass).toEqual(true);

        scope.todo.category = null;
        scope.$digest();

        cssClass = element.find('.panel').hasClass('panel-success');

        expect(cssClass).toEqual(false);

    });

    it('calls the persist callback', function () {
        var element, saveButton;
        scope.todo = todoItem;

        scope.persistTodo = function () {
            console.log('persist todo called');
        };

        spyOn(scope, 'persistTodo');

        element = $compile('<todo-list-item todo="todo" on-todo-delete="deleteTodo(todoItem)" on-todo-persist="persistTodo(todoItem)"></todo-list-item>')(scope);

        scope.$digest();

        saveButton = element.find('.glyphicon-floppy-disk');
        saveButton.click();

        expect(scope.persistTodo).toHaveBeenCalled();

    });

    it('calls the delete callback', function () {
        var element, saveButton;
        scope.todo = todoItem;

        scope.deleteTodo = function () {
            console.log('persist todo called');
        };

        spyOn(scope, 'deleteTodo');

        element = $compile('<todo-list-item todo="todo" on-todo-delete="deleteTodo(todoItem)" on-todo-persist="persistTodo(todoItem)"></todo-list-item>')(scope);

        scope.$digest();

        saveButton = element.find('.glyphicon-minus-sign');
        saveButton.click();

        expect(scope.deleteTodo).toHaveBeenCalled();

    });

});

