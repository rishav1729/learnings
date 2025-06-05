📄 weather-app/README.md
markdown
Copy
Edit
# ⛅ Weather App

This project allows users to fetch real-time weather information for a given city using the OpenWeather API.

---

## 🚀 How to Run

### 📦 Backend (Node.js)

1. Navigate to backend folder:
```bash
cd backend
```
Install dependencies:

```npm install```

Add your OpenWeather API key in index.js:

```const API_KEY = "YOUR_API_KEY";```

```npm start```

Server runs at: http://localhost:3000

🌐 Frontend
Open frontend/index.html in your browser.

Enter a city name and click "Get Weather".

You'll see the temperature and weather condition.

🔗 API Used
OpenWeatherMap API
Endpoint:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric