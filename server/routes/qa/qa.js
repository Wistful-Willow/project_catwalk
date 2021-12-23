const express = require('express');
const router = express.Router();

// Retrieves a list of questions for a particular product. This list does not include any reported questions.
router.get('/questions', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(200).send(results);
  }
})

// Returns answers for a given question. This list does not include any reported answers.
router.get('/questions/question_id/answers', (err, results) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(200).send(results);
  }
})


// Adds a question for the given product
router.post('/questions', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(201).send('Question Added');
  }
})

// Adds an answer for the given question
router.post('/questions/question_id/answers', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(201).send('Answered added');
  }
})

// Updates a question to show it was found helpful.
router.put('/questions/question_id/helpful', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(204).send('No Content')
  }
})

// Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
router.put('/questions/question_id/report', (err) => {
  if (err) {
    res.status(404).send(err)
  } else {
    res.status(204).send('No Content')
  }
})

module.exports = router;






