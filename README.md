# DevDiaries

A comprehensive blog platform with a robust backend and an interactive frontend, designed to handle secure user authentication, dynamic blog management, and responsive user interactions.

https://github.com/user-attachments/assets/26933226-a405-4846-9914-2e32813408e4

---

## Features

### Backend
- **User Authentication**:
  - User registration with secure password hashing using bcrypt.
  - JWT-based authentication for login and secured routes.
- **Blog Management**:
  - Create, read, update, and delete posts.
  - AI-powered summaries for quick previews (first 100 characters of the content).
  - Authorization to ensure only post authors can modify or delete their posts.
- **Database Integration**:
  - MongoDB for scalable data storage.
  - Mongoose for schema validation and efficient querying.
- **Security**:
  - Middleware for authentication and ownership checks.
- **Endpoints**:
  - `/auth/register`: User registration.
  - `/auth/login`: User login.
  - `/posts`: Create or retrieve all posts.
  - `/posts/:id`: Retrieve, update, or delete a specific post.
  - `/health`: Verifies server uptime.

### Frontend
- **User Interface**:
  - Built with React.js, TypeScript, and Material-UI for a clean, modern look.
  - Fully responsive layout for seamless viewing on any device.
- **Dynamic Blog Management**:
  - Real-time creation, editing, and deletion of posts.
  - Display auto-generated summaries for better usability.
- **Animations and Interactions**:
  - Integrated Framer Motion for smooth transitions and engaging animations.
- **Error Handling**:
  - Friendly notifications for API and authentication errors.
- **Integration**:
  - Seamless interaction with backend APIs for data management.

---

## Technologies Used

### Backend:
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- Bcrypt

### Frontend:
- React.js
- TypeScript
- TailwindCSS
- Framer Motion

---


## How to Run Locally

### Prerequisites
- Node.js and npm/yarn installed.
- MongoDB connection string.

### Backend Setup
1. Clone the repository and navigate to the backend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your Secret Key>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## Contributing
Pull requests are welcome! For significant changes, please open an issue first to discuss what you would like to change.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
