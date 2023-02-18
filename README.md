# xkavate
This project is an Admin Dashboard built using the MERN (MongoDB, Express, React, Node.js) stack, with a focus on the backend development and data modeling.
The frontend is built using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit, and Redux Toolkit Query, while the backend is built using Node.js, Express.js, Mongoose, and MongoDB.
In this README, I go through the steps required to deploy the application, create the data model using entity relationship diagrams, and make aggregate calls in MongoDB. 

## Deployment
To deploy the application, follow these steps:

1. Clone the repository to your local machine
2. Install the required packages for both frontend and backend by running npm install in the respective directories
3. Create a .env file in the backend directory with the following variables:

```makefile
PORT=5000
MONGODB_URI=<your MongoDB URI>
JWT_SECRET=<your JWT secret>
```

4. Run the backend by running npm start in the backend directory
Create a .env file in the frontend directory with the following variables:
5. Run the backend by running npm start in the backend directory
Create a .env file in the frontend directory with the following variables:

```javascript
REACT_APP_API_URL=http://localhost:5000
```

6. Run the frontend by running npm start in the frontend directory

## Data Modeling
To create the data model, I used an Entity Relationship Diagrams (ERDs).
An ERD is a diagram that represents the entities, attributes, and relationships between them in a system. 
Lucidchart is another great tool for creating them and other types of diagrams. 
It is used in conjunction with this project to model the database schema.
![image | 600 ](https://user-images.githubusercontent.com/45074124/219900427-8e03e168-8669-4f2a-97da-fb3de26151e5.png)

## Aggregate Calls in MongoDB
MongoDB is a document-based NoSQL database, which allows for flexible and scalable data storage.
In this project, I aggregated calls to retrieve data from the database.

## Frontend
The frontend of the project is built using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit, and Redux Toolkit Query.
Material UI provides a set of pre-built React components that follow Google's Material Design guidelines.
Material UI Data Grid is a high-performance grid component for displaying and manipulating large amounts of data.
Nivo Charts is a React-based library for building custom charts and visualizations. 
Redux Toolkit and Redux Toolkit Query are libraries for managing state and making API requests in a more efficient and streamlined way.

## Backend
The backend of the project is built using Node.js, Express.js, Mongoose, and MongoDB. 
Node.js is a server-side JavaScript runtime, while Express.js is a lightweight framework for building web applications. 
Mongoose is a library for MongoDB that provides a schema-based solution to model application data.

## Conclusion
This Admin Dashboard is a great starting point for building an application with the MERN stack. 
It provides a solid foundation for both frontend and backend development, as well as data modeling and database management.
