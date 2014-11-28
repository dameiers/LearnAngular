angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'myAlert',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo, linkFunction;


            linkFunction = function (scope, elem) {
                elem.find('#myModal').modal();
//                scope.title="Foobar";
            };

            ddo = {
                templateUrl: 'templates/myAlertTemplate.html',
                restrict: 'E',
                scope: {
                    title: '@',
                    onOk: '&',
                    onCancel:'&'
                },
                transclude:true,
                link:linkFunction
            };

            return ddo;
        }
    ]
    );