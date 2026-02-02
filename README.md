🔑 Core Features 
User Authentication

POST /users/register — Register new users with validation, hashed passwords, and JWT generation.
Supports:
JSON{  "fullname": {    "firstname": "Sample",    "lastname": "User"  },  "email": "sample@sample.com",  "password": "password123"}

POST /users/login — Log in users and return a JWT token for auth‑protected routes.

Captain (Driver) Module

Captain registration handled inside services/ (as per commit history).

Backend includes:

Captain signup/login
Driver‑specific logic (role assignment, validation)
Support for accepting and confirming rides



Ride Management

Backend updates: 

Captain Accept Ride — Added in /db and controller updates
Captain Confirm Ride — Confirms pickup/start
Finish‑Ride UI + Backend Support — As per frontend & backend commit logs
Ride State Transitions implemented in controllers/services
Proper flow:
Rider requests → Captain accepts → Captain confirms → Ride completes



Frontend (React + Vite)

Built with React + Vite

UI updates include:

Location panel improvements
Vehicle options for user
Map integration for both User and Captain
Smoothened UI (scrollbar removal, improved layout)


Uses:

Map APIs for location search & display
Separate UI flows for Rider and Captain
Dedicated finish‑ride screen




🧱 Project Structure

Backend

controllers/     → login, logout, ride actions
middlewares/     → auth, validation
models/          → User, Captain, Ride schemas
routes/          → user, captain, ride endpoints
services/        → captain registration & business logic
db/              → ride accept/confirm logic updates
app.js           → main app setup
server.js        → server entry point

Frontend

public/          → assets
src/             → UI pages, components, map panel, vehicle UI
index.html       → entry template
vite.config.js   → Vite setup

