import { parse } from 'https://esm.sh/dotenv';

// Global variables for our configuration
let API_KEY = '';
let BASE_URL = '';

// DOM element references
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const errorDisplay = document.getElementById('errorDisplay');

// UI display elements
const cityNameDisplay = document.getElementById('cityNameDisplay');
const tempDisplay = document.getElementById('tempDisplay');
const humidityDisplay = document.getElementById('humidityDisplay');
const conditionDisplay = document.getElementById('conditionDisplay');

async function loadConfig() {
    try {
        const response = await fetch('config.env');
        if (!response.ok) {
            throw new Error('Config file (config.env) not found.');
        }

        const text = await response.text();
        const config = parse(text);
        
        API_KEY = config.OPEN_WEATHER_API_KEY;
        BASE_URL = config.OPEN_WEATHER_URL;

        if (!API_KEY || !BASE_URL) {
            throw new Error('Incomplete configuration in config.env file.');
        }

    } catch (error) {
        console.error('Environment configuration error:', error);
        showError('Application configuration failed. Check your console.');
    }
}

async function fetchWeather(city) {
    if (!API_KEY || !BASE_URL) {
        showError('API configuration is not loaded yet.');
        return;
    }
    hideError();
    hideWeather();
    if (!city.trim()) {
        showError('Please enter a city name.');
        return;
    }

    try {
        const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the name.');
            } else {
                throw new Error(data.message || 'Failed to fetch weather data.');
            }
        }
        updateWeatherUI(data);
        
    } catch (error) {
        showError(error.message);
    }
}

function updateWeatherUI(data) {
    cityNameDisplay.textContent = `${data.name}, ${data.sys.country}`;
    tempDisplay.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
    humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
    conditionDisplay.textContent = `Condition: ${data.weather[0].description}`;
    
    weatherDisplay.classList.remove('hidden');
}

function showError(message) {
    errorDisplay.textContent = message;
    errorDisplay.classList.remove('hidden');
}

function hideError() {
    errorDisplay.classList.add('hidden');
}

function hideWeather() {
    weatherDisplay.classList.add('hidden');
}

// Event Listeners
getWeatherBtn.addEventListener('click', () => {
    fetchWeather(cityInput.value);
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchWeather(cityInput.value);
    }
});

loadConfig();
