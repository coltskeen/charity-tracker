const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 5060;

const pool = new Pool ({
    database: "charity-tracker",
});

//ESTABLISH MIDDLEWARE
app.use(express.json()); //parses incoming JSON requests and puts the parsed data in req.body
app.use(express.urlencoded({extended: true})); //handles urlencoded requests if needed

//POOL CONNECTION TEST
// pool.query("SELECT * FROM contributions;", (err, result) => {
//     console.log(result.rows);
// });


//GET REQUEST FOR PARTICULAR VOLUNTEER_HOURS DATA OR SUM GROUPED BY YEAR
app.get('/contributions/:input', (req, res) => {

    if(Number.isInteger(Number(req.params.input))) {
        let id = req.params.input;
        pool
            .query("SELECT * FROM contributions WHERE id=$1", [id])
            .then((result) => {
                if(result.rows.length === 0) return res.sendStatus(404);
                else return res.status(200).send(result.rows[0]);
            })
            .catch((err) => res.sendStatus(500));
    } else {
        let username = req.params.input;
        console.log(username);
        
        pool
            .query(`
                SELECT 
                    EXTRACT(YEAR FROM (contribution_date)) AS year, 
                    SUM(volunteer_hours) AS volunteer_hours 
                FROM contributions 
                WHERE username=$1 
                GROUP BY year`, 
                [username])
            .then((result) => {
                if(result.rows.length === 0) return res.sendStatus(404);
                else return res.status(200).send(result.rows);
            })
            .catch((err) => {
                throw err;
            });
    }
});



//CATCH-ALL ERROR HANDLER
app.use((req, res, next) => {
    res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Listsening on PORT: ${PORT}`));