import HTMLFlipBook from 'react-pageflip';
import OnceUponATime from './components/OnceUponATime';
import Portrait from './components/Portrait';

const Book = ({ bookIsClosed, playBookCloseSound, reOpenBook }) => {

    const playPageFlipSound = () => {
        const audioPlayer = new Audio(`./page-flip.mp3`);
        audioPlayer.play();
    };
    

    return (
        <HTMLFlipBook width={600} height={900} showCover={true} className='book' bookIsClosed={bookIsClosed}>
            <div className="cover"></div>
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