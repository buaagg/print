drop table if exists task;

create table task(
	id integer primary key,
	username varchar(50),
	ip varchar(15),
	time date,
	lang varchar(10),
	code text
); 
