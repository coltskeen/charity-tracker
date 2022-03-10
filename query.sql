SELECT * FROM contributions;

SELECT EXTRACT(YEAR FROM (contribution_date)) AS year, SUM(volunteer_hours) AS volunteer_hours FROM contributions WHERE username='bigMan123' GROUP BY year;