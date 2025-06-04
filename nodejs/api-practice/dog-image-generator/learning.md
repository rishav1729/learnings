## 📘 Learning (Beginner Notes)

This section explains important concepts used in this project so beginners can understand everything end-to-end.

### 1. What is an API?

An API (Application Programming Interface) allows two programs to talk to each other. In this case, our browser or Node server is talking to the **Dog API** to get a random image.

---

### 2. What is `fetch`?

`fetch` is a built-in JavaScript function used to make network requests. It's available in browsers and in Node.js via `node-fetch`.

```js
const res = await fetch("https://example.com/api");
const data = await res.json();
```

---

### 3. What is `async/await`?

When you call an API, it doesn’t respond instantly — it’s asynchronous.

async/await helps you write cleaner code to wait for the response.

```js
async function getData() {
  const res = await fetch("...");
  const data = await res.json();
}
```

---

### 4. Why do we need CORS?

Browsers block requests to other origins by default. **CORS (Cross-Origin Resource Sharing)** allows our frontend to talk to our Node backend without getting blocked.
CORS (Cross-Origin Resource Sharing) is a browser security feature.

By default, browsers block frontend JS from calling a server with a different origin.

Our Node.js backend uses the cors middleware to allow this communication.

We use `cors()` in Express to enable this:

```js
const cors = require('cors');
app.use(cors());
```

---

### 5. Folder Breakdown

```
dog-image-generator/
├── backend/         → Node.js + Express API server
│   ├── index.js     → Handles fetching from Dog API
│   └── package.json → Contains dependencies
│
├── frontend/        → HTML page with JavaScript to fetch image
│   └── index.html   → Browser-based UI
│
└── README.md        → This file (docs + learning)

```

---

### 6. What is Node.js?

Node.js allows you to run JavaScript on the backend. It uses modules like `express` to set up web servers.

---

### 7. What is Express?

Express is a popular Node.js web framework to build APIs and handle HTTP requests.
Express is a minimal and flexible Node.js web framework used to build APIs.
It lets you define routes and handle HTTP requests.

---

With this foundation, you can now fetch data from any public API and display it dynamically in your web apps!

---

## ✅ What You Practice

✅ Making API calls using fetch

✅ Handling async code using async/await

✅ Setting up a simple Express server

✅ Understanding CORS

✅ Connecting frontend and backend

✅ Organizing a full-stack JS project

