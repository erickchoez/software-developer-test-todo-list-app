## Software Developer Fullstack Test "To Do List APP"

Implement an application that allows for our registered users the management of a "To Do List.", with the following features:

* We need a Login with Registration form support.
* The user can create tasks with a title and a description.
* The due date of the task will be suggested.
* The user can change the status of tasks from:
  * pending to in progress.
  * in progress to complete.
  * pending to complete.
* The user can filter tasks by status.
* The user can sort tasks by custom order and due date.
* The user can delete tasks.
* The database MUST BE created using a migration CLI for [example](https://laravel.com/docs/12.x/migrations).
* The frontend SHOULD BE written in Vue + Vuetify or React + MUI.
* You MAY use full stack frameworks like [Laravel](https://laravel.com/) or [AdonisJS](https://adonisjs.com/).
* The UI/UX of the application is at your free will, but it MUST BE mobile first and responsive design.

### Data Model

Each task MUST have the following attributes:

* **id** (auto-generated)
* **uuid** (v4 implementation)
* **title**
* **description**
* **due_date**
* **order**
* **status** (pending, in progress, or complete)
* **created_at**
* **updated_at**

> Other attributes MAY BE added at your discretion.

### The Backend API to manage the tasks SHOULD look something like this:

* **GET /tasks**: Retrieve the list of tasks and may.
* **GET /tasks/{uuid}**: Retrieve a specific task by its ID.
* **POST /tasks**: Create a new task.
* **PUT /tasks/{uuid}**: Update an existing task.
* **DELETE /tasks/{uuid}**: Delete a task by its ID.

## Technical Requirements

* You MUST provide a **Dockerfile** for the production environment.
* You MUST provide a **docker-compose.yml** file for the local development environment.
* You MUST provide a **.env.example** with all the variables with default values for local development.
* You MUST provide a **README** file with the instructions for setting up and running the application in the local development environment.
* Please review this hello world, for example.

## Final concerns

This project MUST BE completed using the provided repository as a response to the test. This is a single monolith repository, we expect a pull request with the code that solves this problem.

In case you use microservices architecture, you MAY use multiple Dockerfile and docker-compose files, and you MUST add an openapi.yml file with the API specification.

When delivering the code, please keep in mind the following practices:

* You MUST create a new branch named `feature/{first-name}-{last-name}-task-list`.
* You MUST assign a pull request from your new branch to the original project.
* Update this **README** to include the instructions for setting up and running the application.
* The code must be written in English.

One again the solution MUST BE provided in a single repository, no other repositories will be assessed.

## Installation and Execution (example)

1º First, create a .env file
```bash
  cp .env.example .env
```
2º Then raise all the services using the docker-compose file
```bash
  docker compose up -d
```
3º Finally, test the app
```bash
  curl http://localhost:8080
```

> Make sure the ports used in the docker-compose file are available, you MAY use the .env variables to change the values
