# A Birdseye View of GraphQL

## REST API Endpoints
* Set up different urls or endpoints in our API to control different pieces of data
* From the front-end application (browser) we set up the following requests to the different endpoints:
  * Get all books: domain.com/books
  * Get a single book: domain.com/books/:id
  * Get all authors: domain.com/authors
  * Get a single author: domain.com/authors/:id
* When using GraphQL we don't have to worry about setting up the different endpoints or making different requests to the different endpoints
* Instead we have one endpoint to our data which is a graph

## Walking the Graph
* Graph is made up nodes, e.g., 
  * Multiple Author nodes containing name & age
  * Multiple Book nodes containing title & genre
* These nodes are then connected to each other, so to receive the related data we want we can walk along the graph    
