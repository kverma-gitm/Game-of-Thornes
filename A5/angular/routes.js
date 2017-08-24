

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        //To show names of books,chacaters and houses
        .when('/',{
            
        	templateUrl		: 'views/main.html',
            controller      : 'mainController',
            controllerAs    : 'main'
           
        })
        //To show data of single book when clicked
        .when('/book/:name',{
        	templateUrl     : 'views/book-view.html',
        	controller 		: 'bookdataController',
        	controllerAs 	: 'book'
        })
        //To show data of single character when clicked
        .when('/character/:name',{

        	templateUrl     : 'views/character-view.html',
        	controller 		: 'characterdataController',
        	controllerAs 	: 'char'
        })
        //To show data of single house when clicked
        .when('/houses/:name',{

            templateUrl     : 'views/house-view.html',
            controller      : 'housesdataController',
            controllerAs    : 'house'
        })


        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);