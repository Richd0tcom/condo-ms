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
   git clone [your-repo-url]
   cd condo-ms
   ```



2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Update the .env file with your configuration
   ```
. **Run docker compose**
   ```bash
   docker-compose up -d
   ```
   # Development
   pnpm run start:dev <app-name>
   
   # Production
   pnpm run build
   pnpm run start:prod
   ```

## 🧪 Running Tests

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e
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
- Swagger UI: `http://localhost:3000/docs`

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
