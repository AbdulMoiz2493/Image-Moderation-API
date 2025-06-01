# 🖼️ Image Moderation App 

This repository contains a full-stack application for **image moderation** using FastAPI (backend) and Vite + React (frontend). The project uses Docker for containerization and GitHub Actions for CI/CD.

---

## 📁 Project Structure

```
.
├── Backend
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── models/
│   │   ├── services/
│   │   ├── __init__.py
│   │   └── main.py
│   ├── .env.example
│   ├── Dockerfile
│   └── requirements.txt
│
├── Frontend
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
└── README.md
```

---

## 🌐 Overview

### Backend (FastAPI)

* Handles API requests, image moderation logic, and database interactions.
* Exposes API on **port 7000**.
* Uses MongoDB for data storage.

### Frontend (Vite + React)

* User interface for uploading and moderating images.
* Communicates with the backend using the API base URL.

---

## 🔑 Environment Variables

### 📦 Backend (`Backend/.env.example`)

| Variable                         | Description                                                   |
| -------------------------------- | ------------------------------------------------------------- |
| `MONGODB_URL`                    | MongoDB connection string (e.g., `mongodb://localhost:27017`) |
| `DATABASE_NAME`                  | Name of the MongoDB database (e.g., `imageModeration`)        |
| `SECRET_KEY`                     | Secret key for JWT token signing                              |
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to your Google credentials JSON file                     |
| `GOOGLE_CLOUD_PROJECT`           | Your Google Cloud project ID                                  |
| `INITIAL_ADMIN_TOKEN`            | Initial admin token for API access                            |

### 🖼️ Frontend (`Frontend/.env.example`)

| Variable            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `VITE_API_BASE_URL` | Base URL for backend API (e.g., `http://localhost:7000`) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AbdulMoiz2493/Image-Moderation-API.git
cd Image-Moderation-API
```

---

## 🔧 Setup Instructions

### 2️⃣ Setup Environment Variables

* **Backend**:
  Copy `.env.example` to `.env` inside the `Backend` folder and update the values:

  ```bash
  cd Backend
  cp .env.example .env
  ```
* **Frontend**:
  Copy `.env.example` to `.env` inside the `Frontend` folder and update the values:

  ```bash
  cd ../Frontend
  cp .env.example .env
  ```

---

## 🐳 Dockerized Setup

### 3️⃣ Build and Run the Project

```bash
docker-compose up --build
```

* **Backend**: Runs on [http://localhost:7000](http://localhost:7000).
* **Frontend**: Runs on [http://localhost:80](http://localhost:80).

---

## ⚙️ Non-Docker Local Development

### Backend

```bash
cd Backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 7000
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 🐳 Dockerfile Overview

### Backend

* Uses a **Python 3.11-slim** base image.
* Installs dependencies and runs FastAPI with Uvicorn on port 7000.

### Frontend

* Uses a **multi-stage build**: Node.js (to build the React app) and Nginx (to serve the static site on port 80).

---

## 🔄 GitHub Actions CI/CD

A GitHub Actions workflow (`.github/workflows/ci-cd.yml`) includes:

* **Linting**: Code formatting with Black, isort, and Flake8.
* **Type Checking**: Static analysis with mypy.
* **Testing**: Executes tests with pytest and generates coverage reports.
* **Docker Build**: Builds Docker images for backend and frontend.
* **Deploy**: Pushes Docker images to Docker Hub on `main` branch push.

---

## 📝 Usage Guide

1. **Copy `.env.example` to `.env`** in both `Backend` and `Frontend` folders and update the required values.
2. **Run with Docker Compose**:

   ```bash
   docker-compose up --build
   ```
3. **Or run locally**:

   * Backend:

     ```bash
     cd Backend
     python3 -m venv venv
     source venv/bin/activate
     pip install -r requirements.txt
     uvicorn app.main:app --reload --port 7000
     ```
   * Frontend:

     ```bash
     cd Frontend
     npm install
     npm run dev
     ```

---

## 📫 Contact

For questions or feedback, email **[abdulmoiz8895@gmail.com](mailto:abdulmoiz8895@gmail.com)**.

---

## 🤝 Contributions

Contributions are always welcome! Please submit a PR or open an issue. 🚀
