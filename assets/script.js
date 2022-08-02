

var requestUrl = "https://opentdb.com/api.php?amount=25&type=multiple";

fetch(requestUrl)
.then(function (response){
    return response.json();
    console.log(response);
})
.then(function (data) {
    console.log(data);

    
});