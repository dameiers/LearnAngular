angular.module(
    'de.cismet.todoApp.filters'
    ).filter(
    'shorten',
    [
        function () {
            return function (input, limit) {
                var out = input;
                // ww need input to be a string...
                if (angular.isNumber(input))
                    input = input.toString();
                if (!angular.isString(input)) {
                    return input;
                }

                // if no limit number was provided assume infinty as limit
                limit = angular.isNumber(limit) ? limit : Infinity;

                //check that limit is not null...
                if (input) {
                    if(input.length > limit){
                        out = input.slice(0, limit)+'...';
                    }
                }

                return out;
            };
        }
    ]
);