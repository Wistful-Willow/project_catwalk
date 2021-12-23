import axios from 'axios';
// might have to import api with token in here as well
// const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-sfo/'
// params is the object you will search by

export const getProducts = (params) => {
  if (params.id !== undefined) {
    return axios.get(`${API}/products`, {
      params: {params}
    });
  }
  return axios.get(`${API}/products`);
};


export const getReviews = (params)=> axios.get(`${API}/reviews`, {params: params});

export const getMetaData = (productId) => axios.get(`${API}/reviews/meta`, {params: {id: productId}});

export const getQuestions = (params) => axios.get(`${API}/questions`, {params: params});

// when you export these you can also tag them to specific calls such as this
export const getAnswers = (params) => axios.get(`${API}/questions/question_id/answer`, {params: params});
///questions/question_id/answers

export const getCart = () => axios.get(`${API}/carts`);

// will write post once I test these routes work