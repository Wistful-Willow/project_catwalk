import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './relateditems.module.css';
import StarRating from './StarRating.jsx';
import CompareItem from './CompareItem.jsx';
import { getAverageRating } from './utils.js';

const RelatedItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  if (props.relatedItem && props.relatedStyle && props.relatedItemReview && props.currentProduct) {
    const relatedItem = props.relatedItem;
    const relatedStyle = props.relatedStyle.results[0];
    const relatedRatings = props.relatedItemReview.ratings;
    const rating = getAverageRating(relatedRatings);
    const photo = relatedStyle.photos[0].thumbnail_url || 'https://i1.wp.com/www.careandshare-ut.org/wp-content/uploads/2020/09/image-coming-soon.jpg?resize=600%2C600&ssl=1';
    const category = relatedItem.category;
    const name = relatedItem.name;
    return (
      <div>
        {isOpen && <CompareItem relatedItem={relatedItem} currentProduct={props.currentProduct} togglePopup={togglePopup} />}
        <div className={styles.cornerSymbol} onClick={togglePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 36.09 40.09">
            <path d="M36.042,13.909c-0.123-0.377-0.456-0.646-0.85-0.688l-11.549-1.172L18.96,1.43c-0.16-0.36-0.519-0.596-0.915-0.596   s-0.755,0.234-0.915,0.598L12.446,12.05L0.899,13.221c-0.394,0.04-0.728,0.312-0.85,0.688c-0.123,0.377-0.011,0.791,0.285,1.055   l8.652,7.738L6.533,34.045c-0.083,0.387,0.069,0.787,0.39,1.02c0.175,0.127,0.381,0.191,0.588,0.191   c0.173,0,0.347-0.045,0.503-0.137l10.032-5.84l10.03,5.84c0.342,0.197,0.77,0.178,1.091-0.059c0.32-0.229,0.474-0.633,0.391-1.02   l-2.453-11.344l8.653-7.737C36.052,14.699,36.165,14.285,36.042,13.909z M25.336,21.598c-0.268,0.24-0.387,0.605-0.311,0.957   l2.097,9.695l-8.574-4.99c-0.311-0.182-0.695-0.182-1.006,0l-8.576,4.99l2.097-9.695c0.076-0.352-0.043-0.717-0.311-0.957   l-7.396-6.613l9.87-1.002c0.358-0.035,0.668-0.264,0.814-0.592l4.004-9.077l4.003,9.077c0.146,0.328,0.456,0.557,0.814,0.592   l9.87,1.002L25.336,21.598z"/>
          </svg>
        </div>
        <div className={styles.innerCard} onClick={() => {
          props.handleProductInit(relatedItem.id);
        }}>
          <Link to={`/product/${relatedItem.id}`}>
            <div className={styles.imageContainer}>
              <img src={photo}></img>
            </div>
            <div className={styles.category}>
              {category}
            </div>
            <div className={styles.name}>
              {name}
            </div>
            {relatedStyle.sale_price ?
              <div className={styles.price}>
                <div className={styles.salePrice}>
                  {relatedStyle.sale_price}
                </div>
                <div className={styles.originalPrice}>
                  {relatedStyle.original_price}
                </div>
              </div>
              : <div className={styles.price}>
                {relatedStyle.original_price}
              </div>}
            <div className={styles.reviewStars}>
              {rating ? <StarRating rating={rating} /> : ''}
            </div>
          </Link>
        </div>
      </div>

    );
  } else {
    return (
      <div>
        <img src='https://images.wondershare.com/mockitt/ux-beginner/loading-time-tips.jpeg'></img>
      </div>
    );
  }
};

export default RelatedItem;