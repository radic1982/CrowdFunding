insert into project (name, username, description, paid_price, wanted_price) values ('project1', 'admin', 'description1 bla bla', 0, 55400);
insert into project (name, username, description, paid_price, wanted_price) values ('project2', 'admin', 'description2 bla bla', 0, 15040);
insert into project (name, username, description, paid_price, wanted_price) values ('project3', 'admin', 'description3 bla bla', 0, 55030);
insert into project (name, username, description, paid_price, wanted_price) values ('project4', 'admin', 'description4 bla bla', 0, 55530);
insert into project (name, username, description, paid_price, wanted_price) values ('project5', 'admin', 'description5 bla bla', 0, 10000);
insert into project (name, username, description, paid_price, wanted_price) values ('project6', 'admin', 'description6 bla bla', 0, 30340);

-- insert users
-- password is 12345 (bcrypt X4 encoded) 
insert into security_user (username, password, email, role) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', '@mail', 'ADMIN');
    
-- password is abcdef (bcrypt X4 encoded)
insert into security_user (username, password, email, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', '@mail', 'USER');