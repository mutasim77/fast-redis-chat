![Banner](https://github.com/user-attachments/assets/7c03832d-c6d9-47f1-8871-01aa753e8bb0)

<h1 align="center">
  Real-time Scalable Messaging 🚀
</h1>


## 🌟 Introduction
FastChat is a high-performance, real-time chat application that demonstrates the power of WebSockets and Redis for scalable messaging. Built with modern web technologies, it offers a seamless chatting experience that can easily scale to handle a large number of concurrent users.

## 🎯 Features
- ✉️ Real-time messaging using WebSockets
- 👥 Live user `connection count` across multiple instances using Redis [Pub/Sub](https://github.com/mutasim77/knowledge-sharing/tree/master/Redis#pubsub-messaging-)
- 🚀 Horizontally scalable architecture with multiple backend instances
- ⚖️ Load balancing with Caddy as a reverse proxy
- 🖥️ Sleek, responsive UI built with Next.js and Tailwind CSS
- 🐳 Dockerized for easy deployment and scaling

## 🛠️ Tech Stack

### Backend 🖥️
- ⚡ Fastify: Fast and low overhead web framework
- 🔌 Socket.io: Real-time bidirectional event-based communication
- 🗄️ Redis (Upstash): In-memory data structure store, used as a database, cache, and message broker
- 🐳 Docker & docker-compose: Containerization and multi-container Docker applications
- 🌐 Caddy: Open source web server with automatic HTTPS

Frontend 🎨
- ⚛️ Next.js: React framework for production-grade applications
- 🎭 Tailwind CSS: Utility-first CSS framework
- 🔗 Socket.io-client: Client-side library for real-time web applications

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- pnpm || yarn || npm
- Docker and docker-compose
- Redis instance ([Upstash](https://upstash.com/) account)
- Make (usually pre-installed on most systems)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mutasim77/fast-redis-chat.git
   cd fast-redis-chat
   ```

2. Set up environment variables:
  - Create a `.env` file in the server directory with:
    ```bash
    UPSTASH_REDIS_REST_URL=rediss://.....
    ```
    Replace `...` with your actual Upstash Redis URL.
  - Create a `run.sh` file in  the server directory and populate it with:
    ```bash
    docker-compose down
    
    export UPSTASH_REDIS_REST_URL=rediss://...
    export CORS_ORIGIN=http://localhost:3000  # or your specific CORS origin
    
    docker-compose -p chat_project up -d --build
    ```
    Replace `...` in the UPSTASH_REDIS_REST_URL with your actual Upstash Redis URL.

  - Make sure to make the `run.sh` file executable by running:
    ```bash
    chmod +x run.sh
    ```

3. Use the Makefile to install dependencies and run the application:
  ```bash
  # Install dependencies for both client and server
  make install
  
  # Run both the backend and frontend
  make run

  # Or simply just run
  make all
  ```
> This will start the backend server using the `run.sh` script and the frontend development server.

## 💻 Usage
Once you've run `make run` or `make all`:
1. Open your browser and navigate to `http://localhost:3000`
2. Click Start Chatting
3. Start sending messages in real-time!

> To stop the application, press Ctrl+C in the terminal where you ran `make run`.
> To clean up the project (remove node_modules, etc.), you can run:
  ```bash
  make clean  
  ```

## 📸 Preview
<img width="1300" alt="Home Page" src="https://github.com/user-attachments/assets/6e51dc6d-618d-4222-b29d-91a73aca5ea5">
<img width="1300" alt="Chat SS" src="https://github.com/user-attachments/assets/9ac7a857-ce73-4e4c-a5a3-4a74bbf0f75a">

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

<p align="center"> Made with ❤️ by Mutasim </p>
