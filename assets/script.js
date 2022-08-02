var starbtn = document.getElementById("startButton");


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

if(difcat == "Any Type"){
    requesturl = "https://opentdb.com/api.php?amount=" + questlength + "&type=multiple";
} else if (difcat !=="Any Type"){
    requestUrl= "https://opentdb.com/api.php?amount=" + questlength +"&difficulty=" + difcat +"&type=multiple";
};



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

var randomquestion = Math.floor(Math.random() * 25);

var randomquestions = function(data){
    console.log(data.results[randomquestion].question);
    console.log(randomquestion)
}


starbtn.addEventListener ("click", function(){
    starbtn.style.visibility="hidden";
    
})


// Category: 
// Any Category-- Removed
// General Knowledge--9
// Entertainment: Books--10 
// Entertainment: Music--11
// Difficulty: easy=easy, medium=medium, hard= hard