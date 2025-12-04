//select all cards
const cards = document.querySelectorAll('.project-card');

//check for cards to become visible
function checkCards(){
    const triggerPoint = window.innerHeight*0.95;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
            if (rect.top < triggerPoint) {
                card.classList.add('visible');
            }
    });
}

//check on page open and as user scrolls
window.addEventListener('scroll', checkCards);
window.addEventListener('load', checkCards);