
// Controller to get data for single book
myApp.controller('bookdataController',['apiService','$routeParams',function(apiService,$routeParams){
var main = this;
this.books =[];
this.bookName ='';
this.author = '';
this.origin ='';
this.totalPages = 0;
this.mediaType ='';
this.publisher = '';
this.releasedDate ='';
this.totalCharacters ='';

this.name = $routeParams.name;
this.loadBook = function(){

// function to get all the data of the clicked book
  apiService.getBooks()
  .then(function successCallback(response){
    main.books=response.data;

    for(i in main.books){
      if(main.books[i].name == main.name){
        main.bookName = main.books[i].name;
        main.author = main.books[i].authors[0];
        main.origin = main.books[i].country;
        main.totalPages =main.books[i].numberOfPages;
        main.mediaType = main.books[i].mediaType;
        main.publisher = main.books[i].publisher;
        main.releasedDate = main.books[i].released;
        main.totalCharacters = main.books[i].characters.length;

      }
    }

  } ,
  function errorCallback(response) {
        alert("404 error not found");
        
      });
   
    
    
  }; //function end
  

}]); //end controller