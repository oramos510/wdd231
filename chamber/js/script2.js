fetch('data/items.json')
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.getElementById('cards-container');
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${item.title}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.title}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn more</button>
            `;
            cardsContainer.appendChild(card);
        });
    });

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = new Date().getTime();
const message = document.getElementById("visit-message");

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceVisit < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else {
        message.textContent = `You last visited ${daysSinceVisit} day${daysSinceVisit > 1 ? 's' : ''} ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);
