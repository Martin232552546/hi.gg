var responses = {
  "hi": "Hello! How can I help you today?",
  "how are you": "I'm doing well, thank you for asking!",
  "help": "Sure, what do you need help with?",
  "ahoj": "Hello! How can I help you today?",
  "thanks": "You're welcome!"
};

var sendButton = document.getElementById("send-button");
var chatInput = document.getElementById("chat-input");
var chatLogs = document.querySelector(".chatlogs");

sendButton.addEventListener("click", function() {
  var userInput = chatInput.value;
  var botResponse = generateResponse(userInput);
  displayMessage(userInput, "user");
  displayMessage(botResponse, "bot");
  chatLogs.scrollTop = chatLogs.scrollHeight;
  chatInput.value = "";
});

function generateResponse(input) {
  var inputLower = input.toLowerCase();
  for (var key in responses) {
    if (inputLower.includes(key)) {
      return responses[key];
    }
  }
  return "I'm sorry, I don't understand. Can you please rephrase your question?";
}

function displayMessage(message, sender) {
  var chatLogs = document.querySelector(".chatlogs");
  var div = document.createElement("div");
  div.className = "chat " + sender;
  var p = document.createElement("p");
  p.innerText = message;
  div.appendChild(p);
  chatLogs.appendChild(div);
}
