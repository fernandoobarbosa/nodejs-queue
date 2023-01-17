# Queue Using Node, Bull and Redis

NodeJs REST API with Queues

---

## How to execute

### 0 - Prerequisites

Before executing the application, make sure that you have the following prerequesites:

- NodeJs
- Yarn
- Docker or Redis
- Email provider

### 1 - Configure environment variables

The following variables are **REQUIRED** to work.

```
//Environment Variables to send emails
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=

//Redis configuration (you can use the docker-compose redis database)

REDIS_HOST= //docker host : 127.0.0.1
REDIS_PORT= //docker port : 6379
```

### 2 - Start the application

#### 2.2 - Install dependencies

In your project base directory, install all dependencies with the command:

```sh
 yarn
```

Then, simply execute the following command to start the application:

```sh
  yarn dev
```

## Author:

- **Fernando Luiz de Carvalho Barbosa**
