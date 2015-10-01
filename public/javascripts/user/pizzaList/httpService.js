function httpService(http) {

  this.retrieve = function(url) {
    var data = http.get(url).then(function (response) {
      return response.data;
    });
    return data;
  }
}

httpService.$inject = ['$http'];

angular
  .module('user')
  .service('httpService', httpService);
