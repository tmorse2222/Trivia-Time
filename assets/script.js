var starbtn = document.getElementById("startButton");
var qlength = document.querySelector("#length");
var answers = document.querySelector("#answers")


// var questcat ="11";
var difcat = "Any Category";

var questlength = "";

var requestUrl = "";

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
    starbtn.style.visibility="hidden";
    questlength = qlength.value; 

    requestUrl = "https://opentdb.com/api.php?amount=" + questlength + "&type=multiple";


    console.log(requestUrl)

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
        console.log(randomquestion)
        var newh1 = document.createElement("h1");
        answers.appendChild(newh1);
        newh1.innerHTML= randqs;

        var list = document.createElement ("ul");
        var answcorrect = document.createElement("button")
        var answ1 = document.createElement("button");
        var answ2 = document.createElement("button");
        var answ3 = document.createElement("button");

        newh1.appendChild(list);
        list.appendChild(answcorrect);
        list.appendChild(answ1);
        list.appendChild(answ2);
        list.appendChild(answ3);


        answcorrect.textContent = data.results[randomquestion].correct_answer;
        answ1.textContent = data.results[randomquestion].incorrect_answers[0];
        answ2.textContent = data.results[randomquestion].incorrect_answers[1];
        answ3.textContent = data.results[randomquestion].incorrect_answers[2];

        var initialarray = [answcorrect,answ1, answ2, answ3];

        // console.log(initialarray)
        // function shuffle(array) {
        //     var arraycount = array.length, randomIndex;

        //     while (initialarray != 0){
        //         randomized = Math.floor(Math.random()*arraycount);
        //         arraycount--;
        //         [array[arraycount], array[randomIndex]] = [
        //             array[randomIndex], array[arraycount]];
            // }
        //     return array;
            
        // }
        // shuffle(initialarray);
        // console.log(initialarray);
    }



})



var newarray = ["ran1","ran2","ran3","ran4"]

for(var i=0; i<newarray.length; i++){
    var removedEl = Math.floor(Math.random()*newarray.length);
    console.log(removedEl);
   
    var response[i]= newarray[removedEl];
    newarray.splice(removedEl,1);
    console.log(response1);
    console.log(newarray);

}

    


// Category: 
// Any Category-- Removed
// General Knowledge--9
// Entertainment: Books--10 
// Entertainment: Music--11
// Difficulty: easy=easy, medium=medium, hard= hard