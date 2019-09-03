// See a list of pre-populated movies 
// Add a movie to the list
// Update movie info
// Remove a movie
// see only released movies

const express = require('express');

const server = express();

let actors = [
    {
        id: 1, 
        name: 'Vigo Mortinsen',
        movies: [
                [1, 2]    
        ]
    },
    {
        id: 2, 
        name: 'Chris Evans',
        movies: [
                [4]    
        ]
    },
    
]

let movies = [
    {
        id: 1,
        name: "The Fellowship of the Ring",
        released: true,
        rating: 5

    },
    {
        id: 2,
        name: "The Two Towers",
        released: true,
        rating: 4

    },
    {
        id: 3,
        name: "The Children of Hurin",
        released: false,
        rating: null

    },
    {
        id: 4,
        name: "Thor",
        released: true,
        rating: 3

    }
]

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...'});
});

server.get('/api/movies', (req, res) => {
    res.status(200).json(movies);   
  });


//CommonJS modules (node)

module.exports = server;