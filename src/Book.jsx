import HTMLFlipBook from 'react-pageflip';
import OnceUponATime from './components/OnceUponATime';
import Portrait from './components/Portrait';

const Book = () => {

    const playPageFlipSound = () => {
        const audioPlayer = new Audio(`./page-flip.mp3`);
        audioPlayer.play();
    };
    const playBookCloseSound = () => {
        const audioPlayer = new Audio(`./closing-book.mp3`);
        setTimeout (() => {
           audioPlayer.play(); 
        }, 900);
    }

    return (
        <HTMLFlipBook width={600} height={900} className='book'>
            <div className="page"></div>
            <div className="page" onClick={playPageFlipSound}>
                <OnceUponATime/>
            </div>
            <div className="page" onClick={playPageFlipSound}>Page 2</div>
            <div className="page" onClick={playPageFlipSound}>
                <Portrait/>
            </div>
            <div className="page" onClick={playPageFlipSound}>Page 4</div>
            <div className="page" onClick={playPageFlipSound}>Page 5</div>
            <div className="page" onClick={playPageFlipSound}>Page 6</div>
            <div className="page" onClick={playBookCloseSound}>Page 7</div>
            <div className="cover" >Fin</div>
        </HTMLFlipBook>
    );
};

export default Book;