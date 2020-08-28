# Project (Stack) Overview
* Making a GraphQL Server on Node.js using an Express App
  * Where we'll describe how our graph looks
    * Different types of data on the graph (books & authors)
    * Different relationships between the data types (how GraphQL can walk along the graph)
    * Different entry points, i.e., where the queries can land on the graph
* Next we hook up the GraphQL server to a MongoDB instance on mLab
  * Where the data will actually be stored
  * mLab is an online service that allows us to quickly generate a MongoDB instance which saves us the setup of creating a MongoDB database locally
* Then we'll create a client (browser) app using React which will then be able to make queries to the GraphQL server
* On the fron-end we'll also be using Apollo which is like the glue layer for GraphQL, i.e., Apollo is what allows us to use GraphQL in the front-end

## GraphQL Notes
* It's platform independent, i.e., it can be used with Angular or Vue on the front-end or a SQL database on the backend

## Graphiql
* Front-end application that allows us to test out our GraphQL server