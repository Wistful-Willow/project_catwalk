const express = require('express');
const app = express();
const Port = 3000;

const cart = require('./routes/carts/carts.js');
const interactions = require('./routes/interactions/interactions.js');
const products = require('./routes/products/products.js');
const qa = require('./routes/qa/qa.js');
const reviews = require('./routes/reviews/reviews.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


app.listen(Port, () => {
  console.log(`listening on port ${Port}`)
})

const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/';
// will need to include a param with key-authorization value-github token

app.use(`${API}/cart`, cart);
app.use(`${API}/interactions`, interactions);
app.use(`${API}/products`, products);
app.use(`${API}/qa`, qa);
app.use(`${API}/reviews`, reviews);


