import axios from 'axios';
import * as types from './action-types';

const API_BASE_URL = 'https://swapi.co/api';

const loading = () => {
  return {
    type: types.LOADING
  };
};

const bookDetails = (data, bookTitle) => {
  return {
    type: types.BOOK_SELECTED,
    payload: {
      ...data,
      title: bookTitle,
    },
  };
};

export const selectBookAction = book => dispatch => {
  dispatch(loading());
  return axios
    .get(`${API_BASE_URL}/people/${book.id}`)
    .then(res => {
      dispatch(bookDetails(res.data, book.title));
    })
    .catch(err => {
      console.log(err);
    });
};
