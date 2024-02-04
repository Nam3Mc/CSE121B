/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Dreiser Morales",
    photo : "images/placeholder.jpg",
    favoriteFood : [
        "sushi",
        "lasaña",
        "arepas"
    ],
    hobbies : [
        "Reading",
        "Running",
        "Rap"
    ],
    placesLived : {} 
} ;

/* Populate Profile Object with placesLive objects */


/* DOM Manipulation - Output */
myProfile.placesLived = [
    {
        place : " Cucuta ",
        length : " 4 Years " 
    }
]



/* Name */
document.querySelector ("#name").textContent = myProfile.name ;

/* Photo with attributes */
document.querySelector ( "#photo" ).setAttribute ("src", myProfile.photo ) ;

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement ( "li" ) ;
    li.textContent = food ;

    document.querySelector ( "#favorite-foods" ).appendChild ( li ) ;
});

/* Hobbies List */
myProfile.hobbies.forEach ( hobby => {
    let li = document.createElement ( "li" ) ;
    li.textContent = hobby ;

    document.querySelector ( "#hobbies" ).appendChild ( li ) ; 
})

/* Places Lived DataList */

myProfile.placesLived.forEach (( placeLived ) => {
    let placesLivedPlace = document.createElement ( "dt" ) ;
    placesLivedPlace.textContent = placeLived.place ;

    let placesLivedLenght = document.createElement ( "dd" ) ;
    placesLivedLenght.textContent = placeLived.length ;

    document.querySelector ( "#places-lived" ).appendChild ( placesLivedPlace ) ;
    document.querySelector ( "#places-lived" ).appendChild ( placesLivedLenght ) ;

});


