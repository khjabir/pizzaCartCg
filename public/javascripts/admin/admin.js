angular.module('admin', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('admin').config(function($routeProvider) {

    $routeProvider.
    	when('/admin', {
    		templateUrl: 'admin/login/login.html',
    		controller: 'AdminCtrl',
    		controllerAs: 'adminCtrl'
    	});
    /* Add New Routes Above */

});

