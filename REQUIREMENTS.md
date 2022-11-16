# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints
#### Products
- Index:  <http://localhost:8000/api/product> [GET]
- Show: <http://localhost:8000/api/product/:id> [GET]
- Create: [token required] <http://localhost:8000/api/product/create> [POST]
  body json : {
   "name":"test",
   "price":"20000"
}

#### Users

- Index [token required] : <http://localhost:8000/api/user> [GET]
- Show [token required] <http://localhost:8000/api/user/:id> [GET]
- Create N[token required]: <http://localhost:8000/api/user/create> [POST]
  body json: {
  "firstName":"long",
  "lastName":"tran",
  "username":"longtran",
  "password":"long123"
  }

#### Orders
- Current Order by user (args: user id)[token required]: <http://localhost:8000/api/order?id=:id> [GET]

#### Add products to Order
- Create [token required]: <http://localhost:8000/api/productOrder/create> [POST]
  body json: {
  "orderId":"1",
  "productId":1,
  "quantity":"1"
  }
## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

## `public.product`

| `Columns`           | `type`
| ------------------- | ---------
| id                 | `SERIAL`
| name                 | `character varying(64)`
| price             | `integer`

#### User
- id
- firstName
- lastName
- password
- username
-
## `public."user"`

| `Columns`           | `type`
| ------------------- | ---------
| id                 | `SERIAL`
| firstName                 | `character varying(100)`
| lastName             | `character varying(100)`
| username             | `character varying`
| password             | `character varying(100)`

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## `public.orders`

| `Columns`           | `type`
| ------------------- | ---------
| id                 | `SERIAL`
| status                 | `character varying(15)`
| user_id             | `SERIAL`
| quantity             | `integer`


## `public.product_order`

| `Columns`           | `type`
| ------------------- | ---------
| id                 | `SERIAL`
| orderId                 | `SERIAL`
| productId             | `SERIAL`
| quantity             | `integer`
