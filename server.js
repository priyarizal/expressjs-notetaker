const express = require ("express");
const fs = require ('fs');
const path = require('path');
const termData = require('./db/db.json');
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/api/notes', (req, res) => {
console.log(notes)
res.json(notes)

console.info(`${req.method} request received to get notes`);
});

app.get('/api/notes/:notes_id', (req, res) => {
    if (req.body && req.params.notes_id) {
      console.info(`${req.method} request received to get a single a notes`);
      const notesId = req.params.notes_id;
      for (let i = 0; i < reviews.length; i++) {
        const currentReview = reviews[i];
        if (currentReview.review_id === reviewId) {
          res.json(currentReview);
          return;
        }
      }
      res.json('notes ID not found');
    }
  });

    app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a notes`);


    })

