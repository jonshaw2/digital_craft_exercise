CREATE TABLE restaurant (
  id serial primary key,
  name varchar,
  distance float,
  stars integer,
  category varchar,
  "favorite dish" varchar,
  "does takeout?" varchar,
  "last time you ate there" date
);

insert into restaurant values
  ( DEFAULT,'Jon',2.52,5,'Japanese','Curry','no','2016-05-01');

insert into restaurant values
( DEFAULT,'Jay',4.52,4,'Japanese','Curry','no','2016-07-01');

insert into restaurant values
( DEFAULT,'Bob',2.52,5,'Japanese','Curry','no','2016-05-02');

insert into restaurant values
  ( DEFAULT,'Jon',3,2,'Japanese','Curry','no','2016-01-01');
