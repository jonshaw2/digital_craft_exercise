CREATE TABLE restaurant (
  id serial primary key,
  name varchar,
  address varchar,
  category varchar
);

CREATE TABLE reviewer (
  id serial primary key,
  name varchar,
  email varchar,
  karma decimal(2,1) CHECK (karma >= 0 and karma <= 7)
);

CREATE TABLE review (
  id serial primary key,
  reviewer_id int REFERENCES reviewer (id),
  stars decimal (3,2) CHECK (stars>= 0 and stars <=5),
  title varchar,
  review varchar,
  restaurant_id int REFERENCES restaurant (id)
);

-- insert into restaurant values
--   ( DEFAULT,'Jon',2.52,5,'Japanese','Curry','no','2016-05-01');
--
-- insert into restaurant values
-- ( DEFAULT,'Jay',4.52,4,'Japanese','Curry','no','2016-07-01');
--
-- insert into restaurant values
-- ( DEFAULT,'Bob',2.52,5,'Japanese','Curry','no','2016-05-02');
--
-- insert into restaurant values
--   ( DEFAULT,'Jon',3,2,'Japanese','Curry','no','2016-01-01');
