import React, { useState, createContext } from 'react';

export const BookstoreContext = createContext();

export const BookstoreProvider = (props) => {

    const [storeRating, setStoreRating] = useState(1)


    return (
        <BookstoreContext.Provider value="hello">
            {props.children}
        </BookstoreContext.Provider>
    )

}
