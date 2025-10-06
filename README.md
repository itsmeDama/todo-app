🧾 Full Stack To-Do Web Application

A simple, full-stack To-Do task web application built using React (Vite + TypeScript), Node.js (Express + Prisma), and PostgreSQL, fully containerized using Docker Compose.

Users can:

✅ Create tasks (title + description)

✅ View the 5 most recent uncompleted tasks

✅ Mark tasks as Done, removing them from the list

🚀 Tech Stack
Layer	Technology
Frontend	React + Vite + TypeScript + Tailwind CSS
Backend	Node.js + Express + TypeScript + Prisma ORM
Database	PostgreSQL
Containerization	Docker + Docker Compose
🧱 Architecture Overview
Frontend (React)
     ↓
Backend API (Express + Prisma)
     ↓
Database (PostgreSQL)


Each part runs in its own Docker container.

⚙️ Setup Instructions
🧩 1. Clone the Repository
git clone https://github.com/Pasindu-Adhikari/todo-app.git
cd todo-app

🧾 2. Environment Variables Setup

Before running, you need .env files for backend and frontend.
You can either copy from the included .env.example files or create them manually.

🔹 Backend – /backend/.env
DATABASE_URL=postgres://user:password@db:5432/todoapp?schema=public
PORT=4000


⚠️ If you run the backend without Docker, replace @db with @localhost.

🔹 Frontend – /frontend/.env
VITE_API_BASE_URL=http://backend:4000/api/tasks


⚠️ If you run the frontend without Docker, use:

VITE_API_BASE_URL=http://localhost:4000/api/tasks

🧩 3. Example .env.example Files

You can safely commit these to GitHub.
They help evaluators create the actual .env files.

/backend/.env.example
DATABASE_URL=postgres://user:password@db:5432/todoapp?schema=public
PORT=4000

/frontend/.env.example
VITE_API_BASE_URL=http://backend:4000/api/tasks

🐳 Running with Docker (Recommended)

This project is fully containerized.
Make sure Docker and Docker Compose are installed on your system.

▶️ Step 1 — Build and Run Containers

From the project root, run:

docker-compose up --build


This will:

Pull PostgreSQL image

Build backend and frontend images

Start all 3 containers (database, backend, frontend)

🔍 Step 2 — Verify Services

Once everything is up, you’ll see logs like:

backend  | 🚀 Server running on port 4000
frontend | nginx entered RUNNING state


Now open your browser:

Service	URL	Description
🖥 Frontend	http://localhost:5173
	React app
⚙️ Backend	http://localhost:4000/api/tasks
	REST API
🗃 Database	localhost:5432	PostgreSQL
🧩 Step 3 — Run Prisma Migration (First Time Only)

To create the task table in the PostgreSQL database, run:

docker exec -it backend npx prisma migrate deploy


Now your database is ready to store tasks 🎉

🧪 Step 4 — Test the App

Open http://localhost:5173

Add a new task → appears in the list

Click Done → disappears instantly

🧹 Step 5 — Stop and Clean Containers

Stop all running containers:

docker-compose down


Remove containers and volumes (reset everything):

docker-compose down -v

🧰 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Fetch last 5 uncompleted tasks
POST	/api/tasks	Create a new task
PATCH	/api/tasks/:id/done	Mark a task as done
🧩 Running Locally (Without Docker)

You can also run each component manually.

Backend:
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev

Frontend:
cd frontend
npm install
npm run dev


Then open:

Frontend → http://localhost:5173

Backend → http://localhost:4000/api/tasks

🧱 Folder Structure
todo-app/
├── backend/
│   ├── src/
│   ├── prisma/
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
└── README.md

📦 Docker Compose Services
Service	Purpose	Port
db	PostgreSQL database	5432
backend	Node.js Express API	4000
frontend	React app served via Nginx	5173
🧩 Features Recap

✅ Create tasks with title and description
✅ View only 5 latest uncompleted tasks
✅ Mark tasks as “Done” → removed from UI
✅ REST API with Prisma ORM
✅ Responsive, clean Tailwind UI
✅ Fully Dockerized setup

🏁 Summary

✔️ Works locally or in Docker
✔️ Clearly documented setup process
✔️ Meets all assignment requirements
✔️ Ready for GitHub submission

👨‍💻 Author: Pasindu Adhikari
📧 Email: pasinduadhikari.dev@gmail.com
🌐 GitHub: https://github.com/Pasindu-Adhikari/todo-app