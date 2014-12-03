angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'bsComboBox',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo, linkFunc;
            
            linkFunc = function(scope, elem, attrs){
                scope.emptyText = attrs.emptyText || 'Element wählen...';
                scope.getDisplayName = function(item){
                    if(item){
                       return item[scope.displayProperty];
                    }
                    return null;
                };
                
                scope.setSelectedItem=function(item){
                  scope.selectedItem=item;  
                };
                
            };

            ddo = {
                templateUrl: 'templates/bsComboBoxTemplate.html',
                restrict: 'E',
                scope: {
                    options:'=',
                    selectedItem:'=',
                    displayProperty:'@'
                },
                link: linkFunc
            };

            return ddo;
        }
    ]
    );