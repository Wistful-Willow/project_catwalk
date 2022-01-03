import React, { useEffect, useState } from 'react';
import RelatedItemsWrapper from './related_items/RelatedItemsWrapper.jsx';
import QAWrapper from './questions_answers/QAWrapper.jsx';
import ProductOverview from './product_overview/Product.jsx';
import {
  useParams,
} from 'react-router-dom';
import styles from './app.module.css';

const App = (props) => {
  const [error, setError] = useState(false);
  let { productId } = useParams();
  useEffect(() => {
    props.handleProductInit(productId)
  }, []);

  if (props.error !== '' && error === false) {
    setError(true);
    console.log(props.error);
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorPage}>
          <h1>Error 404</h1>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.app}>
      {/* <ProductOverview />
      <br></br> */}
      <RelatedItemsWrapper
        currentProductStyles={props.currentProductStyles}
        currentProduct={props.currentProduct}
        currentProductReviews={props.currentProductReviews}
        handleProductInit={props.handleProductInit}
      />
      {/* <QAWrapper /> */}
    </div>
  );
};

export default App;
