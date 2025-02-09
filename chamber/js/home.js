document.addEventListener('DOMContentLoaded', () => {

    const weatherDetails = document.getElementById('weather-details');

    async function getWeather() {
    const apiKey = '5955c01d8689a9e39706e25b12d323a5';
    const city = 'Hayward';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const weatherDescription = data.weather.map(item => item.description).join(", ").toUpperCase();
        const forecast = data.main.temp_min + "°C / " + data.main.temp_max + "°C";

        weatherDetails.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${weatherDescription}</p>
        <p>Forecast: ${forecast}</p>
        `;
    } catch (error) {
        weatherDetails.innerHTML = 'Weather data could not be loaded.';
    }
    }

    getWeather();

    async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const spotlightMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
    
    const randomSpotlights = [];
    while (randomSpotlights.length < 3 && spotlightMembers.length) {
        const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
        randomSpotlights.push(spotlightMembers[randomIndex]);
        spotlightMembers.splice(randomIndex, 1);
    }

    const spotlightList = document.getElementById('spotlight-list');
    randomSpotlights.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlight-card');
        memberCard.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership Level: ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
        `;
        spotlightList.appendChild(memberCard);
    });
    }

    loadSpotlights();
});
