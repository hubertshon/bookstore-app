# bookstore-app


## Key Focuses

- ### Mobile Responsiveness 
    Flexbox is utilized to ensure the app will be presentable at all screen widths. Below a certain width, the cards will switch shape and format to better suit mobile viewing. 

- ### File Structure 
    Separation of Components, minimal dependencies, and mostly one-directional data flow from parent to children. Also places API requests into separate service file. 

- ### React 
    Attempts at using React's current practices, including the use of functional components, hooks. Utilizing Contexts was considered, but was determined to be not the right solution for this project. 

    If I were able to re-do this attempt, I would have used Typescript to create proper interfaces and introduce type hinting to all functions. 
- ### Editable Ratings
    The rating indicator will allow the user to edit ratings, sending a PATCH request to the API. Click on the number of stars and the app will update.  




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:2000](http://localhost:2000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


