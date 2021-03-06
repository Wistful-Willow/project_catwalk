import React, { useState, useEffect } from 'react';
import AnswersListEntry from './AnswersListEntry.jsx';
import styles from './qa.module.css';
import axios from 'axios';


const AnswersList = ({ question_id }) => {
  const [shownAnswers, setShownAnswers] = useState([]);
  const [page, setPage] = useState(0);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    getAnswers()
  }, []);


  const getAnswers = () => {
    var newPage = page + 1;
    setPage(prev => newPage);
    axios.get(`/api/questions/${question_id}/answers`, { params: {count: 2, page: `${newPage}`}})
      .then((data) => {
        var results = data.data.results;

        if (results.length < 2) {
          setShowButton(false);
        }
        if (results.length === 0) {
          return;
        }
        var resultsAfterClick = shownAnswers.concat(results);
        var sorted = resultsAfterClick.sort((a, b) => b['helpfulness'] - a['helpfulness']);
        setShownAnswers(prev => sorted);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    getAnswers();
  };

  return (

    <ul> {
      shownAnswers.map((item, index) => (
        <AnswersListEntry answer={item} key={`${index}-answerListKey`} />
      ))
    }
    {showButton ? <a className={styles.answerLink} onClick={handleClick} >Load More Answers</a> : null}
    </ul>
  );

};

export default AnswersList;