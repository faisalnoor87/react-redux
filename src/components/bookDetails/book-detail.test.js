import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BookDetail from './book-detail';
import { bookDetail } from '../../mockData/mockData';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe.only('#bookDetail', () => {
    let wrapper;
    let store;
    
    describe('when state is loading', () => {
        beforeEach(() => {
            store = mockStore({
                bookDetail: {
                    loading: true
                }
            });
            wrapper = mount(<BookDetail store={store} />);
        });

        it('should show the spinner', () => {
            expect(wrapper.find('.spinner-border').length).toEqual(1);
        });
    });

    describe('when the loading of the data from the API is completed', () => {
        beforeEach(() => {
            const details = {
                ...bookDetail,
                loading: false
            };
            store = mockStore({
                bookDetail: details
            });
            wrapper = mount(<BookDetail store={store} />);
        });

        it('should render the people detail', () => {
            expect(wrapper.find('.bookDetailContainer').length).toEqual(1);
        });
    });


    describe('when the state is empty', () => {
        beforeEach(() => {
            store = mockStore({
                bookDetail: null
            });
            wrapper = mount(<BookDetail store={store} />);
        });

        it('should not render data', () => {
            expect(wrapper.find('.empty-list').length).toEqual(1);
        });
    });
});
