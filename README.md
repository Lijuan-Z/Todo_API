## To-do list API

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)
* [Getting Started](#getting-started)
* [Example Usage](#example-usage)

## General Info
This is a CRUD API for managing todo items with user authentication built with Node.js, GraphQL, and MongoDB. The API allows users to create, read, update, and delete todo items, and search for items by various filters. The API also supports user authentication and authorization, so that only the owner of a todo item can update or delete it.

## Technologies
Technologies used for this app:
* Node.js
* Express
* MongoDB 
* GraphQL
	
## Content
Content of the project folder:
```
├── config               
    /db.js	         # dataBase configure file
├── index.js             # main app file
├── models               
    /todo.js 		 # Mongoose model file for Todo
    /user.js 		 # Mongoose model file for User
├── resolvers 		 # 
    /resolvers.js 	 # GraphQL resolvers file
├── schema 		 # 
    /schema.js 		 # (GraphQL schema file)
├── image
    /createTodo.png
    /TodoByCategory.png 
├── node_modules         
├── package-lock.json    
├── package.json
└── README.md
```

## Getting Started
To get started with the API, follow these steps:

* Clone the repository to your local machine.
* Install Node.js and Mongoose if you haven't already.
* Replace the database URI with your own MongoDB Atlas URI.
* Install the dependencies by running npm install in the root directory of the application.
* Run npm start in the root directory of the application to start the server.
* Open your web browser and type 'localhost:4000/graphql' to access the GraphQL Playground and test the API endpoints.

## API Endpoints
Query
* getTodos: Get all the todos in the database.
* getTodoByCategory(category: String): Get the todos that belong to the specified category.
* getTodoByOwner(owner: String): Get the todos that belong to the specified owner's name.

Mutation
* register(input: UserInput): Create a new user account.
* login(email: String!, password: String!): Authenticate the user and generate a JWT token.
* createTodo(input: TodoInput): Create a new todo for the specified owner.
* updateTodo(id: ID!, input: TodoInput): Update the specified todo.
* deleteTodo(id: ID!, username: String!): Delete the specified todo.


## Example Usage

* To filter todos by category:
![image](https://github.com/Lijuan-Z/Todo_API/blob/main/image/TodoByCategory.png)

* To create a new todo:
![image](https://github.com/Lijuan-Z/Todo_API/blob/main/image/createTodo.png)
