# Project Management System - Backend

## Overview

This is the backend service for the Project Management System. It provides APIs for authentication, project management, developer management, and task management.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

---

## Features

### Authentication

* Admin Login
* Developer Login
* JWT Token Generation
* Protected APIs

### Project Management

* Create Project
* Update Project
* Delete Project
* View Projects

### Developer Management

* Add Developers
* Update Developers
* Delete Developers
* View Developers

### Task Management

* Create Tasks
* Assign Tasks to Developers
* Update Task Status
* View Task Details

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

### Create Admin User

Before starting the server, create the initial admin account:

```bash
node createAdmin.js
```

### Start Development Server

```bash
npm run dev
```

Backend server will start successfully after the admin account is created.

---

## Database

* MongoDB Atlas
* Cloud-hosted database
* Stores Admin, Developers, Projects, and Tasks

---

## API Modules

* Authentication APIs
* Project APIs
* Developer APIs
* Task APIs

---

## Author

Harish Kumar
