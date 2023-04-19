USE employees_db;
INSERT INTO department(name)
VALUES ("IT"),("SALES"),("ADMIN"),("MARKETING"),("HR")

INSERT INTO role(title,salary,dept_id)
VALUES ("Web Developer", 10000.00, 1)

INSERT INTO employee (first_name, last_name, role_id, manger_id)
VALUES ('Wyatt', 'Otto', 1, NULL)