import {useState} from 'react'
import './App.css';
import BookData from './data/BookData'
import Header from './components/Header'
import BookList from './components/BookList';

function App() {

  const [books, setBooks] = useState(BookData)

  return (
    <div>
      <Header />
      <div className='container'>
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
