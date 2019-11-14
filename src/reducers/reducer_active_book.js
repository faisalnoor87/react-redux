import * as types from '../actions/action-types';

export default function(state = null, action) {
    switch(action.type) {
        case types.LOADING:
            return {
              ...state,
              loading: true
            };
        case types.BOOK_SELECTED:
            return {
                ...state, 
                ...action.payload,
                loading: false
            };
        default:
            return state;
    }
}