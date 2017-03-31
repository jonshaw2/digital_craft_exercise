CREATE TABLE album (
  id serial primary key,
  name varchar,
  year date,
  artist_id int REFERENCES album (id)
);

CREATE TABLE artist (
  id serial primary key,
  name varchar
);

CREATE TABLE track (
  id serial primary key,
  name varchar,
  album_id int REFERENCES album (id),
  duration time
);
