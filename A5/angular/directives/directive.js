
//Used in main.html
myApp.directive('bookData', function(){ //To show names of all the books
	
	return {
		
		restrict:"E",
		templateUrl:"views/all-book.html",
		
	};
});

myApp.directive('characterData', function(){//To show names of all the characters
	
	return {

		restrict:"E",
		templateUrl:"views/all-character.html",
		
	};
});

myApp.directive('houseData', function(){//To show names of all the houses
	
	return {

		restrict:"E",
		templateUrl:"views/all-house.html",
		
	};
});


