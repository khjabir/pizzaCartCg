angular.module('admin', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('admin').config(function($routeProvider) {

    $routeProvider.
    	when('/admin', {
    		templateUrl: 'admin/login/login.html',
    		controller: 'AdminCtrl',
    		controllerAs: 'adminCtrl'
    	});
    $routeProvider.when('/viewOrders', {
    	templateUrl: 'admin/viewOrders/viewOrders.html',
    	controller: 'ViewordersCtrl',
    	controllerAs: 'ordersCtrl'
    });
    $routeProvider.when('/delivered', {
    	templateUrl: 'admin/viewDelivered/viewDelivered.html',
    	controller: 'ViewdeliveredCtrl',
    	controllerAs: 'delivered'
    });
    /* Add New Routes Above */

});

