const router = require('express').Router();
const pool = require('../modules/pool');

// POST request into database, from client

// router.post('/', (req, res) => {
//     console.log(req.body);
//     let { feedbackForm: treatName, description: treatDescription, pic: treatPic } = req.body;
//     console.log(`Adding a new task to database - ${treatName}: ${treatDescription}`);
//     let queryText = `INSERT INTO "sevisis_survey" ("feeling", "support", "understanding", "comment")
//     VALUES ($1, $2, $3, $4);`;
//     pool.query(queryText, [treatName, treatDescription, treatPic, ])
//         .then(result => {
//             res.send('Database recieved the humans survey results!').status(201);
//         })
//         .catch(error => {
//             console.log('Your human somehow fucked up.', error)
//             res.sendStatus(418);
//         });
// });



// GET request from database, too admin client

module.exports = router;