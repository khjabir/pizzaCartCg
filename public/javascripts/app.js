angular.module('pizzaApp', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'user']);

angular.module('pizzaApp').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});

angular.module('pizzaApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
