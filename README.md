# 🌱 Kaizen

Kaizen is a full-stack self-improvement platform built around the Japanese philosophy of continuous improvement — becoming 1% better every day.

Rather than focusing purely on productivity, Kaizen encourages users to build sustainable habits, reflect on their progress and track their personal growth over time.

## ✨ Features

- 🔐 User registration and login
- 🔑 JWT-based authentication and protected routes
- 🔒 Secure password hashing with bcrypt
- 🔥 Daily login streak tracking
- 🌱 Personal habit creation, completion and deletion
- 📊 Real-time user leaderboard
- ✉️ Letters to your future self
- 🔐 Date-locked time-capsule letters
- 📧 Registration and letter notification emails
- 📈 Personal journey tracking
- 📱 Responsive interface
- 🗑️ Secure account deletion
- 💾 Persistent PostgreSQL storage

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- CSS

### Backend
- Node.js
- Express
- TypeScript
- JWT
- bcrypt
- Nodemailer

### Database
- PostgreSQL

## 🏗️ Architecture

Kaizen uses a full-stack client-server architecture.

The React frontend communicates with a REST API built using Express. Authentication is handled using JSON Web Tokens, while application data is persisted in PostgreSQL.

Protected API endpoints use authentication middleware to associate requests with the currently user.

## 🌿 Philosophy

The project was built around a simple idea:

> Becoming better shouldn't require being disappointed with who you are today.

Small actions compound. Kaizen aims to make that progress visible. 

## 🚧 Future Development

Kaizen is currently an MVP. Planned features include:

- Daily quests
- Quote of the day
- Reflections
- Expanded progress analytics
- Google authentication
- Password recovery
- Improved mobile experience
- Community features
- Richer notification support
- Mobile app deployment

## 👨🏾‍💻 Created By

**Pharrell Duncan**

MSCi Computer Science (Software Engineering)  
Royal Holloway, University of London