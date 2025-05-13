An **HTTP client** is any tool, library, or software that can **send HTTP requests** to a server and **receive HTTP responses**.

---

### 🔁 Summary:

| Role            | Action                                         |
| --------------- | ---------------------------------------------- |
| **HTTP client** | Sends request to server (GET, POST, etc.)      |
| **HTTP server** | Receives request, processes it, sends response |

---

### 🧠 Think of it like:

> **Client = You making a food order**
> **Server = Restaurant preparing and delivering the food**

---

### ✅ Common HTTP Clients:

Here are examples across environments:

#### 🧑‍💻 In JavaScript (Browser)

* `fetch()`
* `XMLHttpRequest`
* Axios (third-party)

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

#### 🖥️ In Terminal

* `curl`

  ```bash
  curl -X GET https://api.example.com/data
  ```
* `httpie`

  ```bash
  http GET https://api.example.com/data
  ```

#### 🧪 For Testing APIs

* **Postman**
* **Insomnia**

#### 📦 In Backend (Node.js)

* `axios`, `node-fetch`, `got`, etc.

```js
const axios = require('axios');

axios.post('https://api.example.com/data', { name: 'Alice' })
  .then(res => console.log(res.data));
```

---

### Final Note:

The **browser is also an HTTP client**—it sends a `GET` request when you visit a URL and renders the response (HTML) from the server.

Would you like a visual diagram of how HTTP client ↔ server communication works?
