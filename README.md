<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## NestJS Boilerplate

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Features

<ul style="list-style-type: '⭐'">
<li>
 Linting with prettier + eslint + lint-staged
 </li>
 <li>
Yarn
 </li>
 <li>
 Swagger docs
 </li>
 <li>
TypeORM
 </li>
 <li>
Postgres DB with docker
 </li>
</ul>

## Installation

```bash
$ yarn
$ cp .env.example .env
```

## Database (development)

```bash
# start the database
$ docker-compose up -d

# run migrations
$ npm run typeorm migration:run
```

## Running the app

```bash

# development
$ yarn dev

# production
$ yarn start
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
