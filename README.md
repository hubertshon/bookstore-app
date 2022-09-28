# bookstore-app


## Key Focuses

- ### Mobile Responsiveness 
    Flexbox is utilized to ensure the app will be presentable at all screen widths. Below a certain width, the cards will switch shape and format to better suit mobile viewing. 

- ### File Structure 
    Separation of Components, minimal dependencies, and mostly one-directional data flow from parent to children. Also places API requests into separate service file. 

- ### React 
    Attempts at using React's current practices, including the use of functional components, hooks, state management, and communication between components. Utilizing Contexts was considered, but was determined to be not the right solution for this project. 

    If I were able to re-do this attempt, I would have used Typescript to create proper interfaces and introduce type hinting to all functions. 
- ### Editable Ratings
    The rating indicator will allow the user to edit ratings. Hovering over the stars will highlight them to indicate that an interaction is available. Clicking on a star will update the rating for this entry. 

## Wishlist
Given that I will need more familiarity with React, I would have enjoyed studying and implementing the following: 
- Testing: Only very basic tests are included. 
- Logic separation: Component logic can be separated a step further. Particularly, the BookstoreList could have a some logic dispersed into another helper file to make it primarily a display component. 
- Typescript: As mentioned, I would usually utilize Typescript, (interfaces, typehinting) to ensure proper data types. 
-Accessibility Features: Would have implemented more features for accessibility. 




## Procedure

1. Run `npm install` inside the 'book-store-api' directory

2. Run `npm run start` inside the 'book-store-api' directory to run the json api server

3. Run `npm install` inside this directory

4. Run `npm start` to begin the application

    Runs the app in the development mode.\
    Open [http://localhost:2000](http://localhost:2000) to view it in your browser.


## Other Available Scripts
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


