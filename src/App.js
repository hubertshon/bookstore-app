// import logo from './logo.svg';
import './App.css';
import BookstoreList from './Pages/BookstoreList/BookstoreList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <h1 className="app-title"><FontAwesomeIcon icon={faBook} className="book-icon" />Bookstore App</h1>
      <header className="App-header">
        <BookstoreList />
      </header>
    </div>
  );
}

export default App;
