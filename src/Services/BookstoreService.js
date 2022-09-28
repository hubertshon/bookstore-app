export const getStores = () => {
    const response = fetch('http://localhost:3000/stores/', {
         method: "GET",
         headers: {
            'Content-Type': "application/vnd.api+json"
        }
    }).then(
        (response) => {
           return response.json();
        }).catch((error) => {
           console.error('Error', error);
        }
    );
    return response
}

export const submitRating = (value) => {
    const requestOptions = {
       method: 'PATCH',
       headers: { 'Content-Type': 'application/vnd.api+json' },
       body: JSON.stringify(
            {
                data: {
                    type: 'stores',
                    id: value.storeId,
                    attributes: {
                        rating: value.newRating
                    }
                }
            }
        )
    };

    const response = fetch(`http://localhost:3000/stores/${value.storeId}`, requestOptions)
    .then((response) => {
        return response.json();
    }).catch((error) => {
        console.error(error);
    });

    return response
    
}
