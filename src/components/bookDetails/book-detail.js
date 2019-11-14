import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
    render() {
        if (!this.props.bookDetail) {
            return (<div className="empty-list"></div>)
        }
        if (this.props.bookDetail.loading) {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
        const { bookDetail } = this.props;
        return (
            <ul className="list-group bookDetailContainer">
                <li className="list-group-item">
                    Name: <strong>{bookDetail.name}</strong>
                </li>
                <li className="list-group-item">
                    Title: <strong>{bookDetail.title}</strong>
                </li>
                <li className="list-group-item">
                    Mass: <strong>{bookDetail.mass}</strong>
                </li>
                <li className="list-group-item">
                    Height: <strong>{bookDetail.height}</strong>
                </li>
                <li className="list-group-item">
                    Gender: <strong>{bookDetail.gender}</strong>
                </li>
                <li className="list-group-item">
                    Url: <strong>{bookDetail.url}</strong>
                </li>
                <li className="list-group-item">
                    Films: <div>
                        {bookDetail.films.map((film, index) =>  {
                            return (<div key = {index+1}>
                                <strong >{film}</strong> <br/>
                               </div>)
                        } )}
                    </div>
                </li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return { bookDetail: state.bookDetail }
}

export default connect(mapStateToProps)(BookDetail)
