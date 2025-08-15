// Smooth scrolling for navbar anchor links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Chat functionality
const sendButton = document.querySelector('.input-group button');
const chatInput  = document.querySelector('.input-group input');
const chatBox    = document.querySelector('.chat-box');

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage(){
    const message = chatInput.value.trim();
    if(message){
        const userMsg = document.createElement('div');
        userMsg.classList.add('mb-2');
        userMsg.innerHTML = `<strong>You:</strong> ${message}`;
        chatBox.appendChild(userMsg);

        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;

        // Auto reply after a short delay
        setTimeout(()=>{
            const botMsg = document.createElement('div');
            botMsg.classList.add('mb-2','text-end');
            botMsg.innerHTML = `<strong>Friend:</strong> Got it!`;
            chatBox.appendChild(botMsg);
            chatBox.scrollTop = chatBox.scrollHeight;
        },800);
    }
}

// Feedback submission popup
document.querySelector('#feedback form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for your feedback!');
    this.reset();
});
