var inputtext= document.querySelector("#inputTxt");
var translateBtn = document.querySelector("#button");
var output = document.querySelector("#outputTxt");

/**  var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"  **/

 var baseUrl="https://api.funtranslations.com/translate/navi.json" 


function getUrl(txtFrurl){
    return baseUrl + "?" + "text=" + txtFrurl
}


function clickHandler(){

    var inputval = inputtext.value;

    fetch(getUrl(inputval))
        .then(response => response.json())
        .then(result => {
            var translatedText = result.contents.translated;
            output.innerText = translatedText; 
           })
        .catch(errorHandler)
};


    




function errorHandler(error){
    console.log(error)
    alert("Something wrong in the server .Please try again")
}

translateBtn.addEventListener("click", clickHandler)