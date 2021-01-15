function whazzappSpam() {
    let message = prompt("lul", "Warning! Do not spam people");
    var message_input = document.querySelector("#main [contenteditable~=true]");
    var splitMessage = message.split(' ');
    setTimeout(() => {
        for (var i = 0; i < splitMessage.length; i++) {
            message_input.innerHTML = splitMessage[i];
            message_input.dispatchEvent(new Event("input", {bubbles: true}));
            var send_message_button = document.querySelector('button>span[data-testid="send"]').parentElement;
            send_message_button.click();
        }
    }, 100);
}
whazzappSpam();