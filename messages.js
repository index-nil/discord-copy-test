function convertToTwitterEmojis(text) {
    // Substitua o emoji do sistema por imagens do Twitter
    let emojiMap = {
        "❤️": '<img src="https://twemoji.maxcdn.com/v/13.1.0/72x72/2764.png" alt="❤️">',
        "😊": '<img src="https://twemoji.maxcdn.com/v/13.1.0/72x72/1f60a.png" alt="😊">'
    };

    // Substitua cada emoji conhecido
    for (let emoji in emojiMap) {
        text = text.replace(new RegExp(emoji, 'g'), emojiMap[emoji]);
    }

    return text;
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("teste")
    const node = document.getElementsByClassName("chatInput")[0];
    node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var message = document.createElement('div');
        message.className = 'messageBox';
        message.innerHTML = '<div class="messageBox"><label class="chatUsername">Indivíduo</label><br><label class="chatMessage">' + this.value + '</label></div>';
        document.querySelector('.chatBox').appendChild(message);
        //clear input
        this.value = '';
    }
});
});