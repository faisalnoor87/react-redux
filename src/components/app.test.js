import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import BookList from './bookList/book-list';
import BookDetail from './bookDetails/book-detail';

describe('#app', () => {
  let enzymeWrapper;

  beforeEach(() => {
    enzymeWrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
      shallow(<App />);
  });

  it('should show subcomponents', () => {
      expect(enzymeWrapper.exists()).toBe(true);
      expect(enzymeWrapper.find(BookList).length).toEqual(1);
      expect(enzymeWrapper.find(BookDetail).length).toEqual(1);
  });
});