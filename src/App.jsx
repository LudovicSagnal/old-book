import { useState } from 'react';
import Book from './Book';
import Letter from './Letter';
import Engraving from './components/Engraving';

const App = () => {

  const [bookIsClosed, setBookIsClosed] = useState(false);
  const [bookIsShifted, setBookIsShifted] = useState(false);

  const playBookCloseSound = () => {
    setBookIsShifted(true);
    const audioPlayer = new Audio(`./closing-book.mp3`);
    setTimeout (() => {
       audioPlayer.play(); 
       setBookIsClosed(true);
    }, 900);
}
const reOpenBook = () => {
    setBookIsClosed(false);
    setBookIsShifted(false);
};

  return (
    <main>
      <Engraving/>
      <Book bookIsClosed={bookIsClosed} playBookCloseSound={playBookCloseSound} reOpenBook={reOpenBook} bookIsShifted={bookIsShifted}/>
      <Letter bookIsClosed={bookIsClosed}/>
    </main>
  );
};

export default App;