myApp.controller('housesdataController',['apiService','$routeParams',function(apiService,$routeParams){
var main = this;
this.houses =[];
this.houseName = '';
this.description ='';
this.diedOut = '';
this.founded ='';
this.founder ='';
this.region ='';
this.words ='';

this.name = $routeParams.name;

this.loadHouse = function(){

// function to get all the data of the clicked house
  apiService.getHouses()
  .then(function successCallback(response){
    main.houses = response.data;

    for(i in main.houses){
      if(main.houses[i].name == main.name){
        main.houseName = main.houses[i].name;
        main.description = main.houses[i].coatOfArms;
        main.diedOut = main.houses[i].diedOut;
        main.founded = main.houses[i].founded;
        main.founder = main.houses[i].founder.name;
        main.region = main.houses[i].region;
        main.words =main.houses[i].words;


      }
    }

  },
  function errorCallback(response) {
        alert("404 error not found");
        
      });
   
    
  }; //function end
  

}]); //end controller