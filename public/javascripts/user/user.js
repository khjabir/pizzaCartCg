angular.module('user', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('user').config(function($routeProvider) {

    $routeProvider
    	.when('/', {
    		templateUrl: 'user/pizzaList/pizzaList.html',
    		controller: 'pizzaListCtrl',
    		controllerAs: 'pizzaCtrl'
    	})
    	.when('/pizza/:pizzadetails', {
    		templateUrl: 'user/pizzaDetails/pizzaDetails.html',
    		controller: 'pizzaDetailCtrl',
    		controllerAs: 'detailCtrl'
    	});
    /* Add New Routes Above */

});

