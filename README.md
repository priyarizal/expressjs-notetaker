# Express Notetaker 

This application can be used to write and save notes. It uses express.js back end and saves and retrives note data from a JSON file. This application was also the first time I used Heroku to deploy the link. 


## Deployed link and URL 
- Heroku deployed link : https://lit-cove-62482.herokuapp.com/
- GitHub URL : https://github.com/priyarizal/expressjs-notetaker


## Code Snippets
 - Express.js

 ```
 const express = require('express');

 app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for the takenote page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  console.log(noteData);
  res.json(noteData);

  console.info(`${req.method} request received to get notes`);
});

 ```

 ```
 app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  const deleted = noteData.find(noteData => noteData.id === id);
  if (deleted) {
    console.log(deleted);
    noteData = noteData.filter(noteData => noteData.id !== id);
    res.status(200).json(deleted);
  } else {
    console.log(deleted);
    res
      .status(404)
      .json({ message: "Note has been deleted" });
  }
});
```

## Technologies Used
- JavaScript
- Node.js
- NPM
- Express.js
- Heroku


## Gif walkthrough
![gif of demo](./public/assets/images/notes.gif)

## License
MIT

## Contributors
- Alejandra Izquierdo


## Questions
If you have any questions about the project, please feel free to reach me at priya.rizal2@gmail.com