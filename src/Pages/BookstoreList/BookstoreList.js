import React, { useEffect, useState } from "react";
import './BookstoreList.css';
import Bookstore from "../../Components/Bookstore/Bookstore";
import { getStores, submitRating } from "../../Services/BookstoreService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export const BookstoreList = () => {

   const [storeList, setStoreList] = useState([]);
   const [error, setError] = useState(false);

   useEffect(() => {
      getStores()
      .then((jsonResponse) => {
         if (jsonResponse.data !== null) {
            for (let dataset of jsonResponse.data) {
               dataset["books"] = getBooks(dataset, jsonResponse);
               const countryCode = getCountry(dataset, jsonResponse)
               dataset["flagUrl"] = `https://countryflagsapi.com/svg/${countryCode}`
            };
         }
         setStoreList(jsonResponse.data);
      }).catch((error) => {
         setError(true);
      });
   }, []);

   async function submitNewRating(value) {
      const newEntry = await submitRating(value);
      let updatedList = storeList.map(store => {
         if (store.id === newEntry.data.id) {
            store.attributes.rating = newEntry.data.attributes.rating;
         }
         return store
      });
      setStoreList(updatedList);
   }

   function getBooks(bookstore, jsonResponse) {
      const bookList = bookstore.relationships.books ? bookstore.relationships.books : [];
      let bookArray = [];

      if (bookList.data) {
         bookList.data.forEach((book) => {
            let bookResult = jsonResponse.included.find((entry) => {
               return entry.type === "books" && entry.id === book.id
            }); 

            bookResult["author"] = jsonResponse.included.find((entry) => {
               return entry.type === "authors" && entry.id === bookResult.relationships.author.data.id
            });
            bookArray.push(bookResult);
         });
      }

      const getBooksResult = bookArray.sort((a, b) => {
         return b.attributes.copiesSold - a.attributes.copiesSold
      }); 

      return getBooksResult
   }

   function getCountry(bookstore, jsonResponse) {
      const storeCountryId = bookstore.relationships.countries.data.id
      const storeCountry = jsonResponse.included.find((entry) => {
         return entry.type === 'countries' && entry.id === storeCountryId
      });

      return storeCountry.attributes.code
   }

   return (
      <div className="container" data-testid="container">
            {storeList !== null ? storeList.map((bookstore) => 
               <Bookstore 
                  key={bookstore.id} 
                  store={bookstore} 
                  className="bookstore-item" 
                  changeRating={value => submitNewRating(value)}
                  />
            ) : null}
            {error ? <div className="error-card">
            <FontAwesomeIcon icon={faTriangleExclamation} color={"#d9944b" } size="2xl" />
               <h4>We're sorry, there was an error. Please try refreshing.</h4>
               </div> : null}
      </div>
   )

}

export default BookstoreList
