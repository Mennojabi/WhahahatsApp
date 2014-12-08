$("#the-submit-button").on("click", function(e){
    e.preventDefault();
    var messageText = $("textarea").val();
    $("textarea").val("");
    var newChatBox = $('<div class="message">' + messageText + '</div>');
    $("#message-container").append(newChatBox);
});