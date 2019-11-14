import React, { Component } from 'react';
import { Row, Col, Navbar } from 'react-bootstrap';
import BookList from './bookList/book-list'
import BookDetail from './bookDetails/book-detail'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark">
          <Navbar.Brand>Home</Navbar.Brand>
        </Navbar>
        <br />
        <Row>
          <Col xs={6}> <BookList /></Col>
          <Col xs={6}><BookDetail /></Col>
        </Row>
      </>
    );
  }
}
