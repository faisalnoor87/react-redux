import * as types from '../actions/action-types';
import activeBookReducer from './reducer_active_book';
import { bookDetail } from '../mockData/mockData';

describe('#activeBookReducer', () => {
  it('should return the initial state', () => {
    expect(activeBookReducer(undefined, {})).toEqual(null);
  });

  it('should return LOADING state', () => {
    const loading = {
      type: types.LOADING
    };
    expect(activeBookReducer({}, loading).loading).toBe(true);
  });


  it('should return book details', () => {
    const selectBookAction = {
      type: types.BOOK_SELECTED,
      payload: bookDetail
    };

    expect(activeBookReducer({}, selectBookAction)).toEqual(bookDetail);
  });
});
