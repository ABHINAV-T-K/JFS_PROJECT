Note: This application uses a local MongoDB instance for data storage. All contact information is stored locally on the host
machine. Screenshots of the MongoDB Compass interface showing the stored data are included in the project presentation
for verification purposes.

Contact App

 A full-stack contact management application built with Spring Boot backend and React frontend.

//Project Structure:
ContactApp/
├── contact/          # Spring Boot Backend (Java)
└── ContactReact/     # React Frontend
└── contact/      # React Application

//Technologies Used:

// Backend (Spring Boot):
- Java 17
- Spring Boot 3.5.5
- Spring Data MongoDB
- Spring Web
- Maven

// Frontend (React):
- React 19.1.1
- React DOM
- React Scripts
- Axios for API calls

// Prerequisites:
Before running this application, make sure you have the following installed:
- **Java 17** or higher
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (running locally or connection to MongoDB Atlas)
- **Maven** (or use the included Maven wrapper)

//Setup Instructions
1. Clone the Repository
```bash
git clone <your-repository-url>
cd ContactApp
```
2. Backend Setup (Spring Boot)
Navigate to the backend directory:
```bash
cd contact
```
i) Configure MongoDB
- Ensure MongoDB is running on your system
- Update `application.properties` or `application.yml` with your MongoDB connection details

ii) Run the Backend
Using Maven wrapper (recommended):
```bash
./mvnw spring-boot:run
```
Or using Maven:
```bash
mvn spring-boot:run
```
The backend will start on `http://localhost:8080`

3. Frontend Setup (React)
Open a new terminal and navigate to the frontend directory:
```bash
cd ContactReact/contact

i) Install Dependencies
```bash
npm install
```
ii) Run the Frontend
```bash
npm start
```
The frontend will start on `http://localhost:3000`

iii) Running the Application
 1. Start MongoDB (if running locally)
 2. Start the Backend (Spring Boot) - runs on port 8080
 3. Start the Frontend (React) - runs on port 3000
 4. Access the application at `http://localhost:3000`

// API Endpoints
The backend provides REST API endpoints for contact management. Common endpoints include:
-`GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Create a new contact
- `GET /api/contacts/{id}` - Get contact by ID
- `PUT /api/contacts/{id}` - Update contact
- `DELETE /api/contacts/{id}` - Delete contact

//Development
i) Backend Development
- The backend uses Spring Boot DevTools for hot reloading
- Make changes to Java files and the application will restart automatically
2) Frontend Development
- React development server supports hot reloading
- Changes to React components will be reflected immediately

//Troubleshooting
1.	Port conflicts: Ensure ports 3000 and 8080 are available
2. MongoDB connection: Verify MongoDB is running and connection details are correct
3. CORS issues: Backend is configured to allow requests from the React frontend
4. Dependencies: Run `npm install` if you encounter missing dependency errors
