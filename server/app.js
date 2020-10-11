const express = require("express");
/* require('express-graphql') returns an object with a property called graphqlHTTP that is the function you want to call. */
const graphglHTTP = require("express-graphql").graphqlHTTP;

const app = express();

app.use(
  '/graphql',
  graphglHTTP({
    graphiql: true,
  })
);

// call back func
app.listen(4000, () => {
  //localhost:4000
  console.log("Listening for Request on my Awsome port 4000");
});
