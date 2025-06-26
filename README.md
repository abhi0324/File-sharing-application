# File Sharing Application

A modern, full-stack file sharing application built with **React**, **Express**, and **MongoDB**. Instantly upload files and share secure download links with anyone.

---

## ✨ Features
- **Easy File Upload:** Upload any file and get a unique, shareable download link.
- **Download Tracking:** Each file's download count is tracked.
- **Modern UI:** Clean, responsive React interface.
- **REST API:** Robust backend with Express and MongoDB.

---

## 🖥️ Tech Stack
- **Frontend:** React, Vite, Axios
- **Backend:** Node.js, Express, Multer, Mongoose
- **Database:** MongoDB

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd File-sharing-application
```

### 2. Install dependencies
#### Backend
```bash
cd server
npm install
```
#### Frontend
```bash
cd ../client
npm install
```

### 3. Set up environment variables
Create a `.env` file in the `server` directory:
```
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the servers
#### Backend
```bash
cd server
npm run dev
```
#### Frontend
```bash
cd ../client
npm run dev
```

---

## 📦 Project Structure
```
File-sharing-application/
├── client/         # React frontend
│   └── src/
│       ├── App.jsx
│       └── service/api.js
├── server/         # Express backend
│   ├── controller/
│   │   └── image-controller.js
│   ├── models/
│   │   └── file.js
│   ├── routes/
│   │   └── routes.js
│   ├── utils/
│   │   └── upload.js
│   ├── database/
│   │   └── db.js
│   └── server.js
```

---

## 🛠️ API Endpoints
- `POST /upload` — Upload a file (multipart/form-data, field: `file`)
- `GET /file/:fileId` — Download a file by its unique ID

---

## 🖼️ UI Preview
![Screenshot](https://github.com/user-attachments/assets/7ddf59ac-f64e-4965-8350-28f7326b0d60) <!-- Add your screenshot here -->

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License
[MIT](LICENSE) 