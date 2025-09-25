<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
<p align="justify">
This project is a <b>ToDo Backend API</b> built with <a href="https://nestjs.com">NestJS</a> and <a href="https://www.mongodb.com">MongoDB</a>. 
It provides endpoints for <b>user management</b> and <b>todo management</b>, allowing users to sign up, log in, 
and perform CRUD operations on their todos. Currently, authentication is basic; 
JWT integration will be added later to secure requests and associate todos with individual users.
</p>

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Dependencies

This project uses the following **manually installed dependencies**:

- `@nestjs/config` — For environment-based configuration.
- `@nestjs/mongoose` — To integrate Mongoose with NestJS.
- `@nestjs/swagger` — To generate API documentation (Swagger).
- `bcryptjs` — For password hashing and security.
- `swagger-ui-express` — To serve Swagger UI for API testing.

> Note: Other dependencies like `@nestjs/core`, `@nestjs/common`, `@nestjs/platform-express`, `mongoose`, `class-validator`, `class-transformer`, `rxjs`, and `reflect-metadata` are automatically installed as part of NestJS setup.

## Configuration

This project uses a `.env` file to manage environment variables.  
Create a `.env` file in the root of your project with the following values:

```env
MONGO_URI=mongodb://localhost:27017/ToDoCheckMateDB
PORT=4000
```

## Author

- [Aadhil Abdulla](https://github.com/aadhilabdulla)

## License

This project is [MIT licensed](LICENSE).
