const express = require('express');
const router = express.Router();

// Returns a list of reviews for a particular product. This list does not include any reported reviews.
router.get('/', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(200).send(results);
  }
})

// Returns review metadata for a given product.
router.get('/meta', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(200).send(results);
  }
})

// Adds a review for the given product.
router.post('/', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(201).send('Review Created')
  }
})


// Updates a review to show it was found helpful.
router.put('/review_id/helpful', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(204).send('No Content')
  }
})

// Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.
router.put('/review_id/report', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(204).send('No Content')
  }
})

module.exports = router;


