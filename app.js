var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong with the server!! Try again after sometime");
}

function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text
}

function clickEventHandler() {
    outputDiv.innerText = txtInput.value;
    var inputText = txtInput.value;


    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;

            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

}


btnTranslate.addEventListener("click", clickEventHandler)