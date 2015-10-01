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
    	})
    	.when('/order', {
    		templateUrl: 'user/viewCart/viewCart.html',
    		controller: 'viewCartCtrl',
    		controllerAs: 'cartCtrl'
    	})
    	.when('/userdetails', {
    		templateUrl: 'user/userDetails/userDetails.html',
    		controller: 'userDetailCtrl',
    		controllerAs: 'userCtrl'
    	});
    /* Add New Routes Above */

});

