# STORE BACKEND

## Setup

```sh
npm install
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

## Run

Starts the application in development environment.

```sh
npm run dev
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
first of all : create user to generate token
`api/user/create`
with json : {
   "firstName":"long",
   "lastName":"tran",
   "username":"longtran",
   "password":"long123"
}
Step 2: copy token to authorization of postman when you want to call api

`Index`: <http://localhost:8000/api/user>

`Show`: <http://localhost:8000/api/user/1>

PRODUCT:

`Index`: <http://localhost:8000/api/product>

`Show`: <http://localhost:8000/api/product/1>

`Create`: <http://localhost:8000/api/product>
with json : {
   "name":"test",
   "price":"20000",
}

ORDER:

`Get order by user id`: <http://localhost:8000/api/order?id=1>

## Migrate database

step 1: create database
step 2: run command migrate
```sh
npm run migration:run
```
