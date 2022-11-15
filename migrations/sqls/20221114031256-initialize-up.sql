CREATE TABLE IF NOT EXISTS public.orders
(
    id SERIAL PRIMARY KEY,
    status character varying(15) COLLATE pg_catalog."default",
    user_id SERIAL,
    quantity integer,
    product_id SERIAL
);

CREATE TABLE IF NOT EXISTS public.product
(
    id SERIAL PRIMARY KEY,
    name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    price integer NOT NULL
);

CREATE TABLE IF NOT EXISTS product_order(
    id SERIAL PRIMARY KEY,
    orderId SERIAL,
    productId SERIAL,
    quantity integer
);

CREATE TABLE IF NOT EXISTS public."user"
(
    id SERIAL PRIMARY KEY,
    "firstName" character varying(100) COLLATE pg_catalog."default",
    "lastName" character varying(100) COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    username character varying(100) COLLATE pg_catalog."default"
);

alter table "orders" add foreign key (user_id) REFERENCES "user"(id);
alter table product_order add foreign key (orderId) REFERENCES "order"(id);
alter table product_order add foreign key (productId) REFERENCES product(id);
