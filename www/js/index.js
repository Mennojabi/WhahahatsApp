function onSuccess(imageData) {
    alert("Je zegt haha");
    var $image = $("<img />");
    $image.attr("src", "data:image/jpeg;base64," + imageData);
    var newHahaBox = $('<div class="message haha" />');
    newHahaBox.append($image);
    $("#message-container").append(newHahaBox);
}

function onFail(message) {
    alert('Failed because: ' + message);
}

$("#the-submit-button").on("click", function(e){
    e.preventDefault();
    var messageText = $("textarea").val();
    $("textarea").val("");
    var newChatBox = $('<div class="message">' + messageText + '</div>');
    $("#message-container").append(newChatBox);
    if (messageText.match(/haha/i)) {
        navigator.camera.getPicture(onSuccess, onFail,
        { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    }

});