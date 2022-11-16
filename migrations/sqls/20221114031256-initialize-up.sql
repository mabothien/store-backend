CREATE TABLE IF NOT EXISTS public.orders
(
    id SERIAL PRIMARY KEY,
    status character varying(15) COLLATE pg_catalog."default",
    user_id SERIAL,
    quantity integer,
);

CREATE TABLE IF NOT EXISTS public.product
(
    id SERIAL PRIMARY KEY,
    name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    price integer NOT NULL
);

CREATE TABLE IF NOT EXISTS public.product_order(
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

alter table public.orders add foreign key (user_id) REFERENCES public."user"(id);
alter table public.product_order add foreign key (orderId) REFERENCES public.orders(id);
alter table public.product_order add foreign key (productId) REFERENCES public.product(id);
