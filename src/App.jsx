import { useState } from 'react';
import Book from './Book';
import Letter from './Letter';

const App = () => {

  const [bookIsClosed, setBookIsClosed] = useState(false);

  const playBookCloseSound = () => {
    const audioPlayer = new Audio(`./closing-book.mp3`);
    setTimeout (() => {
       audioPlayer.play(); 
    }, 900);
    setBookIsClosed(true);
}
const reOpenBook = () => {
    setBookIsClosed(false);
};


  return (
    <main>
      <Book bookIsClosed={bookIsClosed} playBookCloseSound={playBookCloseSound} reOpenBook={reOpenBook}/>
      <Letter bookIsClosed={bookIsClosed}/>
    </main>
  );
};

export default App;