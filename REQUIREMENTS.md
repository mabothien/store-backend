# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index <http://localhost:8000/api/product>
- Show <http://localhost:8000/api/product/1>
- Create [token required] <http://localhost:8000/api/product/create>
- body json : {
   "name":"test",
   "price":"20000",
}
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required] <http://localhost:8000/api/user>
- Show [token required] <http://localhost:8000/api/user/1>
- Create N[token required] <http://localhost:8000/api/user/create>
- body json for create api: {
  "firstName":"long",
  "lastName":"tran",
  "username":"longtran",
  "password":"long123"
  }

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

## `Indexes[]`

| `Columns`           | `Cluster` | `Unique` |
| ------------------- | --------- | -------- |
| name                 | `true`    | `false`  |
| price             | `false`   | `false`  |
#### User
- id
- firstName
- lastName
- password

## `Indexes[]`

| `Columns`           | `Cluster` | `Unique` |
| ------------------- | --------- | -------- |
| firstName                 | `true`    | `false`  |
| lastName             | `false`   | `false`  |
| username             | `false`   | `false`  |
| password             | `false`   | `false`  |

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## `Indexes[]`

| `Columns`           | `Cluster` | `Unique` |
| ------------------- | --------- | -------- |
| id                 | `true`    | `false`  |
| product_id             | `false`   | `false`  |
| quantity             | `false`   | `false`  |
| user_id             | `false`   | `false`  |
| status             | `false`   | `false`  |
