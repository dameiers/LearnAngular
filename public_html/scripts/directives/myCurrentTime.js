angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'myCurrentTime',
    [
        'dateFilter',
        function (dateFilter) {
            var linkFunc;

            linkFunc = function (scope, element, attrs) {
                var timeoutId, updateTime;
                scope.time = '';

                updateTime = function updateTime () {
                    var format;
                    format = scope.format || 'm/d/yy';
                    scope.time = dateFilter(new Date(), format);
                };

                element.on('$destroy', function () {
                    clearInterval(timeoutId);
                });

                // start the UI update process; save the timeoutId for canceling
                // event outside digets loop !!! 
                timeoutId = setInterval(function () {
                    updateTime();
                }, 1000);
            };

            return {
                link: linkFunc,
                scope: {
                    format: "=",
                    time: "="
                },
                restrict: 'A'
            };
        }
    ]
    );