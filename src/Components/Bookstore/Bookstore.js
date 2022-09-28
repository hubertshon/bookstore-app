import React from 'react';
import { format, parseISO } from 'date-fns'
import './Bookstore.css';
import { Rating } from '../Rating/Rating';


export const Bookstore = (props) => {

    function sendRating(number) {
        props.changeRating({ newRating: number , storeId: props.store.id})
    }

    return (
        <div className="bookstore-card">
            <div className="bookstore-body">
                <div className="thumbnail">
                    <img src={props.store.attributes.storeImage} alt={'store_image_' + props.store.id} className="thumbnail-image"
                    data-testid="img"
                    ></img>
                </div>

                <div className="details">
                    <div className="detail-header">
                        <h3 className="detail-name" data-testid="name">{props.store.attributes.name}</h3>
                        <div className="detail-rating" data-testid="rating">
                            <Rating stars={props.store.attributes.rating} handleClick={value => sendRating(value)} />
                        </div>
                    </div>
                    <div className="detail-body">
                    <span className="bestseller-header">Best-selling Books</span>

                    {props.store.books.length > 0 ? 
                        props.store.books.slice(0, 2).map((book, index) => {
                            return (
                            <div key={index} className="bestsellers">
                                <div className="bestseller-title-container">
                                    <span className="bestseller-title">{book.attributes.name}</span>
                                </div>
                                <div className="bestseller-author-container">
                                    <span className="bestseller-author">{book.author.attributes.fullName}</span>
                                </div>
                            </div>)
                        })
                    : <span className="no-data">No Data Available</span>
                    }
                    </div>
                </div>
            </div>
            <div className="bookstore-footer">
                <div className="footer-date">
                    <span>{format(parseISO(props.store.attributes.establishmentDate), 'dd.MM.yyyy')} - </span>
                    <a href={props.store.attributes.website}>{props.store.attributes.website}</a>
                    </div>
                <div className="footer-flag-container"><img src={props.store.flagUrl} alt="country" className="footer-flag" /></div>
            </div>
        </div>
    )
}

export default Bookstore
