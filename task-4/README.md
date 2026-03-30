# Weather App with Dotenv Configuration

## Objective
The objective is to create a clean and efficient weather application that uses native browser APIs for networking while leveraging the standardized `dotenv` format for managing API keys and URLs.

## Solution Implemented
The application has been simplified to use native browser features for maximum reliability and to overcome local server restrictions. Key implementations include:

- **Dotenv Configuration (config.env)**: THE configuration now uses `config.env` instead of `.env` to bypass common restrictions on browsers and local development servers (like VS Code's Live Server) which often block "dot files" for security.
- **Native Fetch API**: Replaced external networking libraries with the built-in `fetch` for both loading the environment configuration and pulling real-time weather data.
- **ESM.sh Reliability**: Uses `esm.sh` to provide an ESM-compatible version of `dotenv` that works correctly in the browser without Node.js dependencies.
- **Robust Error Handling**: Provides clear, user-facing error messages for missing configuration files, invalid city names, and API connectivity issues.

## Requirements
- **Local Server**: A local server (like Live Server) is mandatory to fetch the environment file and to comply with browser security policies (CORS) for modules.
- **Internet Connectivity**: Required at runtime specifically to fetch the `dotenv` library from the `esm.sh` CDN.

## Setup Instructions
1.  **Configure `config.env`**: Make sure your `config.env` contains:
    ```env
    OPEN_WEATHER_API_KEY=your_actual_key_here
    OPEN_WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
    ```
2.  **Run with Local Server**: Open the root folder in VS Code and use the "Live Server" extension to launch `index.html`.
3.  **Search Weather**: Enter a city name to load its current weather condition.

## Dependencies
- **Dotenv**: Standard zero-dependency module used to load environment variables.
- **OpenWeatherMap API**: The core data provider for current global weather.
- **Native Fetch API**: Built-in browser feature (no external networking libraries required).
