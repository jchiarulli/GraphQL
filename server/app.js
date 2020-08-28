const express = require("express");

// express-graphql module allows express to understand graphql
// and provides a simple way to create an express server that runs the graphql API
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// use your own db string & credentials
mongoose.connect();
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

// GraphQL schema defines the graph and the object types on the graph
// MongoDB schema defines the data that's being stored in it, so it can understand the data

// to make express understand the graphql API we use it as middleware
// on a single route and this route we'll be an endpoint to interact with
// our graphql data
// when someone goes to this route express understands someone wants to interact
// with graphql, but it doesn't understand graphql on its own, so it hands off the
// control of the request to the express-graphql module
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
