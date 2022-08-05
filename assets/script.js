
var starbtn = document.getElementById("startButton");
var qlength = document.querySelector("#length");
var answers = document.querySelector("#answers");
var settingscont = document.querySelector("#settingscont")

// var questcat ="11";
var difcat = document.querySelector(`#difficulty`);
var questDif = ``;

var questlength = 1;

var requestUrl = "";

var coctailNameSave = ""

points = 0;

var newpar = null ;

// if(questcat == "Any Category" && difcat =="Any Type"){
//     requesturl = "https://opentdb.com/api.php?amount=25&type=multiple";
// } else if (questcat == "Any Category" && difcat !=="Any Type"){
//     requestUrl= "https://opentdb.com/api.php?amount=25&difficulty=" + difcat +"&type=multiple";
// } else if (questcat !== "Any Category" && difcat !== "Any Type"){
//     requestUrl = "https://opentdb.com/api.php?amount=25&category=" + questcat + "&difficulty=" + difcat+ "&type=multiple";
// } else if (questcat !== "Any Category" && difcat =="Any Type"){
//     requestUrl= "https://opentdb.com/api.php?amount=25&category=" + questcat + "&type=multiple";
// }


starbtn.addEventListener ("click", function(){

    starbtn.style.display="none";
    starbtn.textContent = "Next";
    

    starbtn.textContent="Next Question";
    questlength =  1; 

    questDif = difcat.value;

    requestUrl = `https://opentdb.com/api.php?amount=${questlength}&difficulty=${questDif}&type=multiple`;

    clearanswer();

    fetch(requestUrl)
    .then(function (response){
        return response.json();
        console.log(response);

    })
    .then(function (data) {
        console.log(data);
        randomquestions(data);
    });

    var randomquestions = function(data){
        var randomquestion = Math.floor(Math.random() *questlength);
        var randqs = (data.results[randomquestion].question);
       
        var newh1 = document.createElement("h1");
        answers.appendChild(newh1);
        newh1.innerHTML= randqs;

        var list = document.createElement ("ul");
        var answ1 = document.createElement("button")
        var answ2 = document.createElement("button");
        var answ3 = document.createElement("button");
        var answ4 = document.createElement("button");

        newh1.appendChild(list);
    
        list.appendChild(answ1);
        list.appendChild(answ2);
        list.appendChild(answ3);
        list.appendChild(answ4);

    
        

        var scransw4 = data.results[randomquestion].correct_answer;
        var scransw1 = data.results[randomquestion].incorrect_answers[0];
        var scransw2 = data.results[randomquestion].incorrect_answers[1];
        var scransw3 = data.results[randomquestion].incorrect_answers[2];

        var initialarray = [scransw1,scransw4,scransw2, scransw3];

        function shuffle(array){
            array.sort(() => Math.random()-.5);
        }

        // shuffle(initialarray);

      

        var actualresponse1 = initialarray[0];
        var actualresponse2 = initialarray[1];
        var actualresponse3 = initialarray[2];
        var actualresponse4 = initialarray[3];

   

        answ1.innerHTML = actualresponse1;
        answ2.innerHTML = actualresponse2;
        answ3.innerHTML = actualresponse3;
        answ4.innerHTML = actualresponse4;


        console.log("correct answer" + data.results[randomquestion].correct_answer);

        console.log("break");

        console.log(`response 1: ${actualresponse1}`);
        console.log(`response 2: ${actualresponse2}`);
        console.log(`response 3: ${actualresponse3}`);
        console.log(`response 4: ${actualresponse4}`);

        
        function hidquestion(){
            starbtn.style.display="inline-block";
            list.remove();
            newh1.remove();

        }

        answ1.addEventListener("click", function(){
            if(actualresponse1 == data.results[randomquestion].correct_answer){
                clearanswer();
                points++;
                hidquestion();
                cocktail();
            } else { 
                points--;
                wronganswer();
                clearanswer();
            }
        })
        
        answ2.addEventListener("click", function(){
            if(actualresponse2 == data.results[randomquestion].correct_answer){
                clearanswer();
                points++;
                hidquestion();
                cocktail();
            } else { 
                
                points--;
                wronganswer();
                clearanswer();
            }
        })
        
        answ3.addEventListener("click", function(){
            if(actualresponse3 == data.results[randomquestion].correct_answer){
                clearanswer();
                points++;
                hidquestion();
                cocktail();
            } else { 
                
                points--;
                wronganswer();
                clearanswer();
            }
        })
        
        answ4.addEventListener("click", function(){
            if(actualresponse4 == data.results[randomquestion].correct_answer){    
                clearanswer();
                points++;
                hidquestion();
                cocktail();
            } else { 
                
                points--;
                wronganswer();
                clearanswer();
            }
        })
    }



});


console.log(points)

// Cocktail API work
function cocktail() {
fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
.then(function (response){
    return response.json();
})
.then(function (data) {
    console.log(data);
    var drinkArray = data.drinks[0];
    var drinkName = drinkArray.strDrink;
    var ingredients = [];
    // If functions to check ingredients
    if (drinkArray.strIngredient1 != null){
        ingredients.push(drinkArray.strIngredient1);
    };
    if (drinkArray.strIngredient2 != null){
        ingredients.push(drinkArray.strIngredient2);
    };
    if (drinkArray.strIngredient3 != null){
        ingredients.push(drinkArray.strIngredient3);
    };
    if (drinkArray.strIngredient4 != null){
        ingredients.push(drinkArray.strIngredient4);
    };
    if (drinkArray.strIngredient5 != null){
        ingredients.push(drinkArray.strIngredient5);
    };
    if (drinkArray.strIngredient6 != null){
        ingredients.push(drinkArray.strIngredient6);
    };
    if (drinkArray.strIngredient7 != null){
        ingredients.push(drinkArray.strIngredient7);
    };
    if (drinkArray.strIngredient8 != null){
        ingredients.push(drinkArray.strIngredient8);
    };
    if (drinkArray.strIngredient9 != null){
        ingredients.push(drinkArray.strIngredient9);
    };
    if (drinkArray.strIngredient10 != null){
        ingredients.push(drinkArray.strIngredient10);
    };
    if (drinkArray.strIngredient11 != null){
        ingredients.push(drinkArray.strIngredient11);
    };
    if (drinkArray.strIngredient12 != null){
        ingredients.push(drinkArray.strIngredient12);
    };
    if (drinkArray.strIngredient13 != null){
        ingredients.push(drinkArray.strIngredient13);
    };
    if (drinkArray.strIngredient14 != null){
        ingredients.push(drinkArray.strIngredient14);
    };
    if (drinkArray.strIngredient15 != null){
        ingredients.push(drinkArray.strIngredient15);
    };
    // Portion to display Cocktail info
    $(`#cocktailName`).text(`${drinkName}`);
    $(`#ingredients`).text(`Ingredients: ${ingredients}`);
    // Portion to display save button
    $(`#saveButton`).css(`display`, `unset`);
});
};

// Click function for save button
$(`#saveButton`).click(function(){
    var key = $(this).parent().children(`h3`).text();
    cocktailNameSave = key;
    var content = $(this).parent().children(`p`).text();
    window.localStorage.setItem(`${key}`, `${content}`);
    // Function portion to allow list item to be displayed 
          // Var for creation & content
          var saveItem = document.createElement(`p`);
          var saveValue = localStorage.key(cocktailNameSave);
          var saveInfo = `${saveValue}`;
          var saveButton = document.createElement(`p`);
          var returnButton = `<button class="saveBtn">Ingredients</button>`;
          var contain = document.createElement(`div`);
      // Actions to display info
          $(saveItem).html(cocktailNameSave);
          $(saveItem).attr(`class`, `savedCocktail col-6`)
          $(saveButton).attr(`class`, `ingredients`)
          $(saveButton).html(returnButton);
          $(contain).append(saveItem);
          $(contain).append(saveButton);
          $(contain).attr(`class`, `saveContain row`);
          $(`#savedCocktails`).append(contain); 
          alert(cocktailNameSave);
});

// Function to display saved cocktails on load
$(document).ready( function() {
    // For function allowing elements to be created for each avalible key
    for (let i = 0; i < localStorage.length; i++ ) {
      // Var for creation & content
      var saveItem = document.createElement(`p`);
      var saveValue = localStorage.key(i);
      var saveInfo = `${saveValue}`;
      var saveButton = document.createElement(`p`);
      var returnButton = `<button class="saveBtn">Ingredients</button>`;
      var contain = document.createElement(`div`);
  // Actions to display info
      $(saveItem).html(saveInfo);
      $(saveItem).attr(`class`, `savedCocktail col-6`)
      $(saveButton).attr(`class`, `ingredients`)
      $(saveButton).html(returnButton);
      $(contain).append(saveItem);
      $(contain).append(saveButton);
      $(contain).attr(`class`, `saveContain row`);
      $(`#savedCocktails`).append(contain); 
    }
  });
  // Function removing elements and keys from local storage when "clear" button is selected
$(`#clearButton`).click( function () {
    $(`#savedCocktails`).children(`div`).remove();
  localStorage.clear();
})
// Function for displaying ingredients in saved cocktail list
$(document).on(`click`, `.ingredients`, function() {
    var city = $(this).parent().children(`.savedCocktail`).text();
    var ingredients = window.localStorage.getItem(city);
    var content = document.createElement(`p`);
    $(content).html(ingredients);
    $(this).parent().append(content);
    $(this).css(`display`, `none`);
});

// for(var i=0; i<newarray.length; i++){
//     var removedEl = Math.floor(Math.random()*newarray.length);
//     console.log(removedEl);
   
//     var response[i]= newarray[removedEl];
//     newarray.splice(removedEl,1);
//     console.log(response1);
//     console.log(newarray);

// }

    


// Category: 
// Any Category-- Removed
// General Knowledge--9
// Entertainment: Books--10 
// Entertainment: Music--11
// Difficulty: easy=easy, medium=medium, hard= hard



function wronganswer(){

    var randomfacturl =   "https://api.api-ninjas.com/v1/facts?limit=1"
  

    fetch(randomfacturl, {
        method: 'GET',
        headers: { 'X-Api-Key': 'LeEU0FJqY5POXfUkaonQlQ==UynTFBrXcvGeU0yY'},
        contentType: 'application/json',
    })
    .then(function (response){
        return response.json();
        console.log(response);

    })
    .then(function (data) {
        console.log(data);
        var newpar = document.createElement("p")
        settingscont.appendChild(newpar);
        newpar.setAttribute("id","wrongresponse")
        newpar.innerHTML= "You dont seem so smart. Here is some information for ya: " + data[0].fact;

    });


}

function clearanswer(){
    if( document.querySelector("#wrongresponse") !== null){
    document.querySelector("#wrongresponse").remove();
    }
};