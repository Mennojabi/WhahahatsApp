
// Als er succesvol een foto genomen is
function onSuccess(imageData) {
    alert("Je zegt haha");
    // maak een nieuw image element aan
    var $image = $("<img />");
    // zet de genomen foto als bron van de image
    // gebruikt een zgn data url
    $image.attr("src", "data:image/jpeg;base64," + imageData);
    // maak een nieuwe message div
    var newHahaBox = $('<div class="message haha" />');
    // stop de image in de message div
    newHahaBox.append($image);
    // voeg de message div toe aan de pagina
    $("#message-container").append(newHahaBox);
}

// Als het niet gelukt is een foto te maken
function onFail(message) {
    alert('Failed because: ' + message);
}

// wanneer je op de submit button klikt
$("#the-submit-button").on("click", function(e){
    // zorg dan dat je niet de pagina herlaadt (default gedrag)
    e.preventDefault();
    // zoek de in de textarea getikte tekst op en stop die in een variabele
    var messageText = $("textarea").val();
    // maak de tekstarea leeg
    $("textarea").val("");
    // creeer een nieuwe div die het bericht bevat
    var newChatBox = $('<div class="message">' + messageText + '</div>');
    // voeg deze bericht toe aan de pagina
    $("#message-container").append(newChatBox);
    // als in de tekst van het bericht haha (of Haha, haHa, etc.) voorkomt:
    if (messageText.match(/haha/i)) {
        // probeer een foto te maken
        navigator.camera.getPicture(onSuccess, onFail,
        { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    }

});