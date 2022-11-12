--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: filmUser; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."filmUser" (
    id integer NOT NULL,
    "filmId" integer NOT NULL,
    "userId" integer NOT NULL,
    nota text,
    status boolean NOT NULL
);


--
-- Name: filmUser_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."filmUser_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: filmUser_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."filmUser_id_seq" OWNED BY public."filmUser".id;


--
-- Name: films; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.films (
    id integer NOT NULL,
    name text NOT NULL,
    genre character varying(255) NOT NULL,
    platform character varying(255) NOT NULL
);


--
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.films_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: films_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.films_id_seq OWNED BY public.films.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(300) NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: filmUser id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."filmUser" ALTER COLUMN id SET DEFAULT nextval('public."filmUser_id_seq"'::regclass);


--
-- Name: films id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films ALTER COLUMN id SET DEFAULT nextval('public.films_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: filmUser; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."filmUser" VALUES (3, 10, 2, 'filme muito bom mesmo', true);
INSERT INTO public."filmUser" VALUES (4, 10, 2, 'vi novamente, top de mais', true);
INSERT INTO public."filmUser" VALUES (5, 11, 1, 'bem legal', true);
INSERT INTO public."filmUser" VALUES (6, 11, 3, 'bem legal', true);


--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.films VALUES (9, 'circle of fire', 'action', 'prime');
INSERT INTO public.films VALUES (10, 'circle of fire 2', 'action', 'prime');
INSERT INTO public.films VALUES (11, 'fast and furious', 'action', 'netflix');
INSERT INTO public.films VALUES (12, 'fast and furious 2', 'action', 'netflix');
INSERT INTO public.films VALUES (13, 'fast and furious 3', 'action', 'netflix');
INSERT INTO public.films VALUES (14, 'fast and furious 4', 'action', 'netflix');
INSERT INTO public.films VALUES (15, 'fast and furious 5', 'action', 'netflix');
INSERT INTO public.films VALUES (16, 'fast and furious 6', 'action', 'netflix');
INSERT INTO public.films VALUES (17, 'journey to the center of the Earth', 'adventure', 'netflix');
INSERT INTO public.films VALUES (18, 'journey to the center of the Earth 2', 'adventure', 'netflix');
INSERT INTO public.films VALUES (19, 'pixel', 'adventure', 'netflix');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'rojer');
INSERT INTO public.users VALUES (2, 'joão');
INSERT INTO public.users VALUES (3, 'maria');


--
-- Name: filmUser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."filmUser_id_seq"', 6, true);


--
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.films_id_seq', 19, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: filmUser filmUser_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."filmUser"
    ADD CONSTRAINT "filmUser_pk" PRIMARY KEY (id);


--
-- Name: films films_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: filmUser filmUser_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."filmUser"
    ADD CONSTRAINT "filmUser_fk0" FOREIGN KEY ("filmId") REFERENCES public.films(id);


--
-- Name: filmUser filmUser_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."filmUser"
    ADD CONSTRAINT "filmUser_fk1" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

