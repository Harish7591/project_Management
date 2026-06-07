# Project Management System - Backend

## Overview

Backend service for the Project Management System. Provides APIs for authentication, project management, developer management, and task management.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Harish7591/project_Management.git
```

### Navigate to Project

```bash
cd project-management-backend
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add the required environment variables:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
```

### Create Admin User

Before starting the server, create the initial admin account:

```bash
node createAdmin.js
```

### Start Development Server

```bash
npm run dev
```

---

## Main Modules

* Authentication
* Projects
* Developers
* Tasks

## Database

* MongoDB Atlas

## Author

Harish Kumar
