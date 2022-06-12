
-- psql

CREATE DATABASE reactcalendar;

\c reactcalendar;

CREATE TABLE event(
    id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    description VARCHAR(255) NOT NULL,
    timestamp INT NOT NULL
);