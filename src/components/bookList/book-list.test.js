import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BookList from './book-list';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('#bookList', () => {
    let wrapper;
    let store;
    let mockSelectBookAction;
    
    describe('when there is books in the store', () => {
        beforeEach(() => {
            store = mockStore({
                books: [  
                    {'title': 'Book1', 'id': 'myBookId' }
                ],
            });
            mockSelectBookAction = jest.fn();
            store.dispatch = mockSelectBookAction;
            wrapper = mount(<BookList store={store} />);
        });
    
        it('should render the component', () => {
            expect(wrapper.exists()).toBe(true);
        });
    
        it('should display the books', () => {
            expect(wrapper.find('.list-group-item').length).toEqual(1);
        });
    
        it('should trigger the `BOOK_SELECTED` action when a book is selected', () => {
            const firstBook = wrapper.find('#myBookId');
            firstBook.simulate('click');
    
            expect(mockSelectBookAction).toHaveBeenCalled();
        });
    });

    describe('when the book store is empty', () => {
        beforeEach(() => {
            store = mockStore({
                books: [],
            });
            wrapper = mount(<BookList store={store} />);
        });

        it('should not display books', () => {
            expect(wrapper.find('.list-group-item').length).toEqual(0);
        });
    });
});