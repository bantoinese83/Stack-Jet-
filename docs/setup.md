# NexusForge Setup Guide

This guide will walk you through setting up and running the NexusForge project on your local machine for development.

## Prerequisites

- [Docker](https.docs.docker.com/get-docker/)
- [Node.js](https.nodejs.org/en/download/) (for package management, though the app runs in Docker)
- A code editor of your choice (e.g., VS Code)

## Getting Started

1.  **Clone the Repository**
    ```bash
    git clone <your-repo-url>
    cd NexusForge
    ```

2.  **Environment Variables**
    The backend service requires a `.env` file for sensitive information. You can copy the example:
    ```bash
    cp backend/.env.example backend/.env
    ```
    *Note: The `docker-compose.yml` provides default environment variables for the database and Redis, so you don't need to set them for local development unless you want to override them.*

3.  **Build and Run the Application**
    The entire stack (frontend, backend, database, cache) is managed by Docker Compose. To start everything, run:
    ```bash
    docker-compose up --build
    ```
    - The `--build` flag tells Docker to build the images before starting the containers. You only need to use it the first time or after making changes to the `Dockerfile`s or dependencies.
    - The services will now be running in your terminal.

4.  **Accessing the Services**
    - **Frontend**: [http://localhost:3000](http://localhost:3000)
    - **Backend API**: [http://localhost:3001](http://localhost:3001)
    - **PostgreSQL Database**: Connect with a client on port `5432`
    - **Redis**: Connect with a client on port `6379`

5.  **Development Workflow**
    - The frontend and backend services are configured with hot-reloading. Any changes you make to the source code in the `frontend/src` or `backend/src` directories will automatically trigger a rebuild and reload the respective service.
    - You can view logs for all services in the terminal where you ran `docker-compose up`.

6.  **Stopping the Application**
    To stop all the running containers, press `Ctrl + C` in the terminal. To remove the containers and their volumes (which will delete your database data), you can run:
    ```bash
    docker-compose down -v
    ```
