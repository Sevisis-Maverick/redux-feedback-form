const router = require('express').Router();
const pool = require('../modules/pool');

// POST request into database, from client

router.post('/', (req, res) => {
    console.log(req.body);
    let { feelingInput, understandingInput, supportInput, commentInput } = req.body;
    console.log(`Adding survey results to database - ${feelingInput}, ${understandingInput}, ${supportInput}, ${commentInput}`);
    let queryText = `INSERT INTO "sevisis_survey" ("feeling", "understanding", "support", "comment")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feelingInput, understandingInput, supportInput, commentInput])
        .then(result => {
            res.send('Database recieved the humans survey results!').status(201);
        })
        .catch(error => {
            console.log('nice.', error)
            res.sendStatus(418);
        });
});



// GET request from database, too admin client

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "sevisis_survey"`
    pool.query(queryText).then( result => res.send(result.rows))
        .catch( err => {
            console.log('Error getting feedback', err);
            res.status(500).send({
                message: err.message
            });
        })
})

module.exports = router;