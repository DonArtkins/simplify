# Simplify - A Simple Task Management App

Simplify. is a basic CRUD application for managing tasks, built using Vue.js (with Pinia), Express.js, and Neon Postgres.

## Features

*   Create, Read, Update, and Delete tasks.
*   Mark tasks as complete.
*   Simple and intuitive user interface.

## Technologies Used

*   **Frontend:** Vue.js, Pinia, Axios
*   **Backend:** Express.js, Node.js
*   **Database:** Neon Postgres

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <your_repository_url>
    cd simplify
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    Create a `.env` file with your Neon Postgres connection string (DATABASE_URL).
    Run the server: `npm run dev`
    ```

3.  **Frontend Setup:**
    ```bash
    cd frontend
    cd simplify
    npm install
    Create a `.env` file with `VITE_API_BASE_URL=http://localhost:3000/api`.
    Run the client: `npm run dev`
    ```

## Deployment

See the [Deployment](#deployment) section for instructions on deploying to Vercel.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute.

## Author

Artkins