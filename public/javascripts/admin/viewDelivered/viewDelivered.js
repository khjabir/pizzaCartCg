function ViewdeliveredCtrl (location, http, sessionService, httpService) {

	var vm = this;
	vm.orders = {};
	
	if(sessionService.loginStatus()) {

	httpService.retrieve('/delivered').then(function(data) {
		if(data == "Nothing Found") {
			alert('Nothing to display');
		} else { 
			vm.orders = data;
		}
	});

	} else {
		alert('Login Failed\n');
		location.path('admin');
	}
}

ViewdeliveredCtrl.$inject = ['$location', '$http', 'sessionService', 'httpService'];

angular
	.module('admin')
	.controller('ViewdeliveredCtrl',ViewdeliveredCtrl);
