var starbtn = document.getElementById("startButton");
var qlength = document.querySelector("#length");
var answers = document.querySelector("#answers");

// var questcat ="11";
var difcat = document.querySelector(`#difficulty`);
var questDif = ``;

var questlength = "";

var requestUrl = "";

points = 0;

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
    starbtn.textContent="Next Question";
    questlength = qlength.value; 
    questDif = difcat.value;

    requestUrl = `https://opentdb.com/api.php?amount=${questlength}&difficulty=${questDif}&type=multiple`;


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
        var answ4 = document.createElement("button")
        var answ1 = document.createElement("button");
        var answ2 = document.createElement("button");
        var answ3 = document.createElement("button");

        newh1.appendChild(list);
        list.appendChild(answ4);
        list.appendChild(answ1);
        list.appendChild(answ2);
        list.appendChild(answ3);


        var scransw4 = data.results[randomquestion].correct_answer;
        var scransw1 = data.results[randomquestion].incorrect_answers[0];
        var scransw2 = data.results[randomquestion].incorrect_answers[1];
        var scransw3 = data.results[randomquestion].incorrect_answers[2];

        var initialarray = [scransw4,scransw1, scransw2, scransw3];

        function shuffle(array){
            array.sort(() => Math.random()-.5);
        }

        shuffle(initialarray);

      

        var actualresponse1 = initialarray[0];
        var actualresponse2 = initialarray[1];
        var actualresponse3 = initialarray[2];
        var actualresponse4 = initialarray[3];

   

        answ1.textContent = actualresponse1;
        answ2.textContent = actualresponse2;
        answ3.textContent = actualresponse3;
        answ4.textContent = actualresponse4;


        console.log(data.results[randomquestion].correct_answer)


        answ1.addEventListener("click", function(){
            if(answ1.textContent == data.results[randomquestion].correct_answer){
                points++;
                alert(points);
            } else { 
                alert("Incorrect");
                points--;
            }
        })
        
        answ2.addEventListener("click", function(){
            if(answ2.textContent == data.results[randomquestion].correct_answer){
          
                points++;
                alert(points);
            } else { 
                alert("Incorrect");
                points--;
            }
        })
        
        answ3.addEventListener("click", function(){
            if(answ3.textContent == data.results[randomquestion].correct_answer){
                points++;
                alert(points);
            } else { 
                alert("Incorrect");
                points--;
            }
        })
        
        answ4.addEventListener("click", function(){
            if(answ4.textContent = data.results[randomquestion].correct_answer){    
                points++;
                alert(points);
            } else { 
                alert("Incorrect"); 
                points--;
            }
        })
    }



})


console.log(points)

// Cocktail API work

fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
.then(function (response){
    return response.json();
})
.then(function (data) {
    console.log(data);
    var drinkArray = data.drinks[0];
    var drinkName = drinkArray.strDrink;
    if (drinkArray.strIngredient1 != null){
        alert(drinkArray.strIngredient1)
    }
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