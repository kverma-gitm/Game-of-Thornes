myApp.controller('characterdataController',['apiService','$routeParams',function(apiService,$routeParams){
var main = this;
this.characters = [];
this.characterName = '';
this.gender = '';
this.culture ='';
this.realName ='';
this.playedBy = '';
this.name = $routeParams.name;

this.loadCharacter = function(){
  // function to get all the data of the clicked character

  apiService.getCharacters()

  .then(function successCallback(response){
    main.characters = response.data;
        
        for(i in main.characters){
          if(main.characters[i].aliases[0] == main.name){
            main.characterName = main.characters[i].aliases[0];
            main.gender = main.characters[i].gender;
            main.culture = main.characters[i].culture;
            main.realName = main.characters[i].name;
            main.playedBy = main.characters[i].playedBy[0];
          }

        }

  },
  function errorCallback(response) {
        alert("404 error not found");
        
      });
   
   
    
  }; //function end
 

}]); //end controller