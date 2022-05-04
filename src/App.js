import {useState} from 'react'
import './App.css';

import BookData from './data/BookData'
import Header from './components/Header'
import BookList from './components/BookList';
import AddBookIconLink from './components/AddBookIconLink';

import Modal from 'react-modal/lib/components/Modal';

function App() {

  const [books, setBooks] = useState(BookData)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <Header />
      <AddBookIconLink />
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
      >
        <div>My Model</div>
        <button onClick={toggleModal}>Close</button>
      </Modal>
      <div className='container' style={{marginTop: '40px'}}>
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
