myApp.factory('apiService', function apiFactory($http) {

  var baseUrl = 'https://anapioficeandfire.com/api';
  var apiFactory = {};

 
  apiFactory.getBooks = function() {
    return $http.get(baseUrl + '/books');
  }
  apiFactory.getHouses = function(pagenox) {
    return $http.get(baseUrl + '/houses');

  }
  apiFactory.getCharacters = function(pageno) {
    return $http.get(baseUrl + '/characters');
  }

  return apiFactory;


}); //end apiFactory service