//elements 
var sendBtn = document.getElementById('sendBtn');
var textBox = document.getElementById('textBox');
var chatContainer = document.getElementById('chatContainer');

// function sendMessage

function sendMessage(MessageText) {

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span>You: </span>" +
        "<span style=" + "margin-top: 10px; padding: 10px;" + ">" + MessageText + "</span>";

        chatContainer.appendChild(messageElement);
}

sendBtn.addEventListener('click', function () {

    let MessageText = textBox.value;
    sendMessage(MessageText);
});