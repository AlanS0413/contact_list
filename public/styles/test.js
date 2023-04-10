const messagesWrapper = document.querySelector(".messagesWrapper-RpOMA3");

const messages = messagesWrapper.querySelectorAll(".markup-2BOw-j");

messages.forEach((message) => {
 
  const messageText = message.textContent;

 
  if (/^[0-9]+$/.test(messageText)) {
  
    const nextNumber = parseInt(messageText) + 1;

    const inputField = document.querySelector(".inputField-1L8TqC");
    inputField.value = nextNumber;

    const sendButton = document.querySelector(".button-2KoZ9L");
    sendButton.click();
  }
});