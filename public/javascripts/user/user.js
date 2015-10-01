angular.module('user', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('user').config(function($routeProvider) {

    $routeProvider
    	.when('/',{
    		templateUrl: 'user/pizzaList/pizzaList.html',
    		controller: 'pizzaListCtrl',
    		controllerAs: 'pizzaCtrl'
    	});
    /* Add New Routes Above */

});

