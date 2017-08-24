
myApp.controller('mainController', ['$http','apiService' ,function($http,apiService){  

	var main=this;
	this.books=[];
	this.characters=[];
	this.houses=[];
	this.bookShow=true;
	this.characterShow=false;
	this.houseShow=false;

	//functions to show and hide books,characters and houses

	this.shBooks=function(){
		main.bookShow=main.bookShow?false:true; //equates to if(main.bookShow='false'){main.bookShow=true}else{main.bookShow=false}
		main.characterShow=false;
		main.houseShow=false;
	};

	this.shHouse=function(){
		main.houseShow=main.houseShow?false:true;
		main.bookShow=false;
		main.characterShow=false;
	};

	this.shCharacter=function(){
		main.characterShow=main.characterShow?false:true;
		main.bookShow=false;
		main.houseShow=false;
	};

  // get book
  this.getBooksFunction = function() {
    apiService.getBooks().then(function successCallback(response) {
        main.books = response.data;
        
      },
		function errorCallback(response) {
        alert("404 error not found");
        
      });
    return main.books;
    
  }; //function end
  this.getBooksFunction();



	  // get characters
  this.getCharactersFunction = function() {
    apiService.getCharacters().then(function successCallback(response) {
        main.characters = response.data;
        console.log(main.characters);
        },
		function errorCallback(response) {
        alert("404 error not found");
        
      });
   
    return main.characters;
    
  }; //function end
  this.getCharactersFunction();

  	  // get house
  this.getHousesFunction = function() {
    apiService.getHouses().then(function successCallback(response) {
        main.houses = response.data;
        console.log(main.houses);
        },
		function errorCallback(response) {
        alert("404 error not found");
        
      });
   
    return main.houses;
    
  }; //function end
  this.getHousesFunction();

}]);  //maincontroller end