DROP TABLE IF EXISTS contributions;

CREATE TABLE contributions (
    id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    organization TEXT,
    volunteer_hours INT,
    contribution_date DATE
);

INSERT INTO contributions (first_name, last_name, username, organization, volunteer_hours, contribution_date) VALUES ('jason', 'saw', 'bigMan123', 'Compassion Intl', '5', '2021-12-04');
INSERT INTO contributions (first_name, last_name, username, organization, volunteer_hours, contribution_date) VALUES ('jason', 'saw', 'bigMan123', 'Compassion Intl', '2', '2022-02-04');
INSERT INTO contributions (first_name, last_name, username, organization, volunteer_hours, contribution_date) VALUES ('jason', 'saw', 'bigMan123', 'Compassion Intl', '1', '2022-03-04');
INSERT INTO contributions (first_name, last_name, username, organization, volunteer_hours, contribution_date) VALUES ('cameron', 'green', 'camaroon5', 'St. Judes Hospital', '4', '2022-03-06');
INSERT INTO contributions (first_name, last_name, username, organization, volunteer_hours, contribution_date) VALUES ('cameron', 'green', 'camaroon5', 'Holy Cross Orthodox Church', '2', '2022-01-22');