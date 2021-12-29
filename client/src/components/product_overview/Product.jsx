import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart.jsx';
import Styles from './Styles.jsx';
import Gallery from './Gallery.jsx';
import Description from './Description.jsx';
import css from './styles.module.css';
import { getProducts } from '../../shared/api.js';



const ProductOverview = (props) => {

  const [styles, setStyles] = useState([]);
  const [product, setProduct] = useState({});
  const [currentStyle, setStyle] = useState({
    photos: [
      {
        url: 'https://www.vecteezy.com/vector-art/1826248-progress-loading-bar-buffering-download-upload-and-loading-icon',
        thumbnail_url: 'https://www.vecteezy.com/vector-art/1826248-progress-loading-bar-buffering-download-upload-and-loading-icon'
      }
    ]
  });


  useEffect(() => {
    axios.get('/api/styles', {
      params: { "product_id": "63613" }
    })
      .then((response) => {
        setStyles(response.data.results)
        setStyle(response.data.results[0])
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);

  useEffect(() => {
    axios.get('/api/products', {
      params: { "product_id": "63613" }
    })
      .then((response) => {
        setProduct(response.data)
      })
      .catch((err) => {
        console.log('err occurred', err)
      })
  }, []);


  console.log(styles);
  // console.log(product);
  console.log('main image url', currentStyle.photos[0].url)






  return (
    <div>
      <div className={css.galleryWrapper}>
        <Gallery currentStyle={currentStyle}/>
      </div>
      <div className={css.descriptionWrapper}>
        <Description product={product} />
      </div>
      <div className={css.stylesWrapper}>
        <Styles styles={styles} setStyle={setStyle} />
      </div>
      <div className={css.cartWrapper}>
        <Cart />
      </div>
    </div>
  );

};

export default ProductOverview;


