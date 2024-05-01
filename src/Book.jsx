import HTMLFlipBook from 'react-pageflip';
import OnceUponATime from './components/OnceUponATime';
import Portrait from './components/Portrait';

const Book = ({ bookIsClosed, playBookCloseSound, reOpenBook, bookIsShifted, setBookIsShifted }) => {


    const handleFlipEnd = (page) => {
        if (page === 5) {
          setBookIsShifted(true);
          playBookCloseSound();
        }
      };

    const playPageFlipSound = () => {
        const audioPlayer = new Audio(`./page-flip.mp3`);
        audioPlayer.play();
    };

    return (
        <HTMLFlipBook width={600} height={900} showCover={true} className={`${bookIsShifted ? 'shift-left' : 'book'}`} onFlipEnd={handleFlipEnd} bookIsClosed={bookIsClosed}>
            <div className="cover-front">
                <div className='title-container'>
                    <div className='title-border'></div>
                    <h1>Ludovic Sagnal</h1>
                    <h2>Développeur web</h2>                   
                </div>
            </div>
            <div className="page" onClick={playPageFlipSound}></div>
            <div className="page" onClick={playPageFlipSound}>
                <OnceUponATime/>
            </div>
            <div className="page" onClick={playPageFlipSound}>Page 2</div>            
            <div className="page" onClick={playPageFlipSound}>
                <Portrait/>
            </div>
            <div className="page" onClick={playPageFlipSound}>Page 4</div>
            <div className="page" onClick={playBookCloseSound}>Page 5</div>
            <div className="cover-back" onClick={reOpenBook} ></div>
        </HTMLFlipBook>
    );
};

export default Book;