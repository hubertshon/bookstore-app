import React, { useEffect, useState } from "react";
import './BookstoreList.css';
import Bookstore from "../../Components/Bookstore/Bookstore";


export const BookstoreList = () => {

const [pageLoaded, setPageLoaded] = useState(false);
const [storeList, setStoreList] = useState([]);
const [pageResponse, setPageResponse] = useState(
   {
      data: [], 
      included: [], 
      jsonapi: {}, 
      meta: {}
   }
);

useEffect(() => {
   const getStoreResponse = () => {
      fetch('http://localhost:3000/stores/', {
         method: "GET",
         headers: {
            'Content-Type': "application/vnd.api+json"
         }
         
      }).then(
         (response) => {
            return response.json();
         },
         (error) => {
            console.log('Error', error);
         }
         ).then((jsonResponse) => {
            setPageResponse(jsonResponse);
         }).then(async() => {
            if (pageResponse.data !== null) {
               for (let dataset of pageResponse.data) {
                  dataset["books"] = getBooks(dataset);
                  const countryCode = getCountry(dataset)
                  dataset["flagUrl"] = `https://countryflagsapi.com/svg/${countryCode}`
               };
            }
            setStoreList(pageResponse.data);
            setPageLoaded(true); 
         });
   }

   getStoreResponse();
}, [pageLoaded]);

async function submitNewRating(value) {
   console.log('value', value);
   const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/vnd.api+json' },
      body: JSON.stringify(
         {data: {
            type: 'stores',
            id: value.storeId,
            attributes: {
                rating: value.newRating
            }
        }
      }
         )
  };
  const response = await fetch(`http://localhost:3000/stores/${value.storeId}`, requestOptions);
  const newEntry = await response.json();
  console.log('new object', newEntry);
  console.log('storeList', storeList);

  let updatedList = storeList.map(store => {
   if (store.id === newEntry.data.id) {
      store.attributes.rating = newEntry.data.attributes.rating;
   }
   return store
  });
  console.log('updatedList', updatedList);
  setStoreList(updatedList);
}


function getBooks(bookstore) {
   console.log('bookstore', bookstore);
   let bookResult = {};
   const bookList = bookstore.relationships.books ? bookstore.relationships.books : [];
   let bookArray = [];

   if (bookList.data) {
      bookList.data.forEach((book) => {
         let bookResult = pageResponse.included.filter((entry) => {
            return entry.type === "books" && entry.id === book.id
         }); 

         bookResult[0]["author"] = pageResponse.included.find((entry) => {
            return entry.type === "authors" && entry.id === bookResult[0].relationships.author.data.id
         });
         bookArray.push(bookResult[0]);
      });
   }

   bookResult = bookArray.sort((a, b) => {
     return b.attributes.copiesSold - a.attributes.copiesSold
   }); 

   return bookResult
}

function getCountry(bookstore) {
   const storeCountryId = bookstore.relationships.countries.data.id
   const storeCountry = pageResponse.included.find((entry) => {
      return entry.type === 'countries' && entry.id === storeCountryId
   });

   return storeCountry.attributes.code
}

   return (
      <div className="container">
            {storeList !== null ? storeList.map((bookstore) => 
               <Bookstore 
                  key={bookstore.id} 
                  store={bookstore} 
                  books={bookstore.books} 
                  country={bookstore.flagUrl} 
                  className="bookstore-item" 
                  changeRating={value => submitNewRating(value)}
                  />
            ) : null}
      </div>
   )

}

export default BookstoreList
