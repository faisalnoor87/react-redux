import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { selectBookAction } from '../../src/actions/select-book-action';
import { people } from '../mockData/mockData';
import * as types from './action-types';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe.only('select book actions', () => {
    let store;
    describe('when a book is selected', () => {
        beforeEach(function() {
            moxios.install();
            store = mockStore({
                bookDetail: {}
            });
        });

        afterEach(function() {
            moxios.uninstall();
        });

        it('should fetch people detail by book id', () => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: people
                });
            });

            const book = {
                title: 'title',
                id: 1
            };

            const expectedActions = [
                { type: types.LOADING },
                {
                    type: types.BOOK_SELECTED,
                    payload: {
                        ...people,
                        title: book.title
                    }
                }
            ];

            return store.dispatch(selectBookAction(book)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});
