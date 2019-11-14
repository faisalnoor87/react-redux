import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBookAction } from '../../actions/select-book-action'

class BookList extends Component {
    renderList() {
        const style = {
            cursor: 'pointer'
        };
        return this.props.books.map(book => {
            return (
                <li 
                    style={style}
                    key={book.id} 
                    id={book.id}
                    onClick={() => this.props.selectBookAction(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return { books: state.books }
}

export default connect(mapStateToProps, { selectBookAction })(BookList)