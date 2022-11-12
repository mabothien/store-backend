# STORE BACKEND

## Setup

```sh
npm install
```

## Run

Starts the application in development environment.

```sh
npm run dev
```

## build

Builds the app at `build`, cleaning the folder first.

```sh
npm run build
```

Starts building the project with`npm run build`, and then executing the compiled JavaScript at`build/index.js`.

```sh
npm run start
```

## Test

Test source code

```sh
npm run test-source
```

Test all

```sh
npm run test
```

Runs the `jasmine` tests once.

## Format

Lint

```sh
npm run lint
```

pretitter

```sh
npm run prettier-format
```

## End point List

USER:

`Index`: <http://localhost:8000/api/user>

`Show`: <http://localhost:8000/api/user/1>

`Create`: <http://localhost:8000/api/user?firstname=long&lastname=tran&username=longtran&password=123>

PRODUCT:

`Index`: <http://localhost:8000/api/product>

`Show`: <http://localhost:8000/api/product/1>

`Create`: <http://localhost:8000/api/product?name=test&price=20000>

ORDER:

`Get order by user id`: <http://localhost:8000/api/order?id=1>

## Migrate database

```sh
db-migrate up initialize
```
