# Condo Management System (Microservices)

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

A microservices-based Condo Management System built with NestJS, Prisma, and Docker. This system provides a scalable backend architecture for managing residential complexes, including unit management, resident tracking, maintenance requests, and more.

## 🚀 Features

- **Modular Architecture**: Built with microservices for better scalability and maintainability
- **Type Safety**: Full TypeScript support
- **Database**: PostgreSQL with Prisma ORM
- **Containerized**: Easy deployment with Docker
- **RESTful APIs**: Well-documented endpoints
- **Authentication**: JWT-based authentication
- **Event-Driven**: Uses Kafka for inter-service communication

## 🛠️ Prerequisites

- Node.js (v18+)
- pnpm
- Docker & Docker Compose
- PostgreSQL

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repo-url]
   cd condo-ms
   ```



2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Update the .env file with your configuration
   ```
3. **Run docker compose**
   ```bash
   docker-compose up -d
   ```

## 📦 Project Structure

```
condo-ms/
├── apps/              # Microservices
├── libs/              # Shared libraries
├── prisma/            # Database schema and migrations
└── docker-compose.yml # Docker configuration
```

## 📝 API Documentation

Once the application is running, access the API documentation at:
- Swagger UI: `http://localhost:4000/docs`

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

