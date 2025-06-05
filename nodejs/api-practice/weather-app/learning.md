📘 Learning
See LEARNING.md for complete beginner notes and explanations.

yaml
Copy
Edit

---

### 📄 `weather-app/LEARNING.md`

```markdown
# 📘 Learning (Beginner Notes)

This project teaches how to connect frontend inputs to backend API calls and integrate external weather data.

---

## 1. What is the OpenWeather API?

OpenWeatherMap provides current weather info for cities around the world.

✅ You must register and get an API key.  
✅ Use units=metric to get temperature in Celsius.

**Example URL:**
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

yaml
Copy
Edit

---

## 2. What are query parameters?

They are key-value pairs passed in a URL after a `?`.

Example:
/api/weather?city=London

cpp
Copy
Edit

In backend code, we extract them using:
```js
const city = req.query.city;
3. Using fetch in Backend and Frontend
In Frontend, fetch() sends request to our Node.js backend.

In Backend, fetch() is used to call OpenWeather API.

Frontend JS:

js
Copy
Edit
fetch("/api/weather?city=Delhi")
Backend JS:

js
Copy
Edit
fetch("https://api.openweathermap.org/data/2.5/weather?...")
4. Async/Await in Real Projects
Both frontend and backend use async/await to wait for API data before processing it.

Example:

js
Copy
Edit
const res = await fetch(url);
const data = await res.json();
5. Basic Error Handling
We check the cod property in API response:

js
Copy
Edit
if (data.cod !== 200) {
  res.status(data.cod).json({ error: data.message });
}
This ensures we only respond with good weather data or meaningful error.

6. Backend Concepts Practiced
✅ Setting up an Express server
✅ Enabling CORS
✅ Creating GET endpoint with query param
✅ Fetching from external API
✅ Sending clean response to frontend

7. Folder Structure
pgsql
Copy
Edit
weather-app/
├── backend/         → Express server for weather requests
│   ├── index.js     → Main API server logic
│   └── package.json → Dependencies
│
├── frontend/        → Browser HTML & JS
│   └── index.html   → Input and display UI
│
├── README.md        → Project setup and usage
└── LEARNING.md      → Notes for absolute beginners
8. What You Practice Here
✅ Using query parameters
✅ Consuming external public APIs
✅ Handling async data
✅ Connecting backend + frontend
✅ Organizing a full-stack JavaScript project
✅ Writing readable and clean API responses