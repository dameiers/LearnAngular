angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'todoList',
    [
        function () {
            'use strict';
            // define the directive definition template
            var directiveDefinition = {
                //configure the various option of a directive here...
                // see https://docs.angularjs.org/api/ng/service/$compile fore more details
                templateUrl: 'templates/todoListTemplate.html'
            }

            return directiveDefinition;
        }
    ]
    ).directive(
    'myCurrentTime',
    [
        '$interval',
        'dateFilter',
        function ($interval, dateFilter) {

            function link (scope, element, attrs) {
                var format, timeoutId, updateTime;

                updateTime = function updateTime () {
                    element.text(dateFilter(new Date(), format));
                }

                scope.$watch(attrs.myCurrentTime, function (value) {
                    format = value;
                    updateTime();
                });

                //listen on angular event
                scope.$on('$destroy', function () {
                    $interval.cancel(timeoutId);
                    scope.foo.text = 'bla';
                });

                timeoutId = $interval(function () {
                    updateTime(); // update DOM
                }, 1000);

                scope.sendDestroy = function () {
                    //send angular event
                    scope.$broadcast('$destroy');
                };



////                listen on DOM Event
//                element.on('$destroy', function () {
//                    clearInterval(timeoutId);
//                    scope.foo.text = 'bla';
//                });
////                 start the UI update process; save the timeoutId for canceling
//                var times =0;
//                timeoutId = setInterval(function () {
//                    times++
//                    if(times<4){
//                        updateTime(); // update DOM
//                    }else{
//                         element.triggerHandler('$destroy');
////                         scope.$apply();
//                    }
//                }, 1000);
//                

            }


            return {
                link: link
            };
        }
    ]
    );