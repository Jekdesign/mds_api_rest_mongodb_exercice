const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolver');

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(
  '/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
  })
);

mongoose
  .connect(
    process.env.URI_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  )
  .then(result => {
    app.listen(port);
    console.log('Your first node api is running on port: ' + port);
  })
  .catch(err => console.log(err));

module.exports = app;
