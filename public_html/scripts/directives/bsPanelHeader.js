angular.module(
    'de.cismet.todoApp.directives'
).directive(
    'bsPanelHeader',
[
        function () {
            'use strict';
            // define the directive definition template
            var ddo;

            ddo = {
                templateUrl: 'templates/bsPanelHeaderTemplate.html',
                restrict: 'E',
                scope: {
                    title: '@'
                },
                transclude:true
            };

            return ddo;
        }
]
);