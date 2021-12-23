const express = require('express');
const router = express.Router();

// Retrieves the list of products.
router.get('/', (err, results) => {
   if (err) {
     res.status(404).send(err);
   } else {
     res.status(200).send(results);
   }
})

// Returns all product level information for a specified product id.
router.get('/product_id', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else{
    res.status(200).send(results);
  }
})

// Returns the all styles available for the given product
router.get('/product_id/styles', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else{
    res.status(200).send(results);
  }
})

// Returns the id's of products related to the product specified.
router.get('/product_id/related', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else{
    res.status(200).send(results);
  }
})

module.exports = router;

