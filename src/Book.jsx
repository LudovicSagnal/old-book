import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import OnceUponATime from './components/OnceUponATime';

const Book = () => {
    return (
        <HTMLFlipBook width={600} height={900}>
            <div className="page"></div>
            <div className="page">
                <OnceUponATime/>
            </div>
            <div className="page">Page 2</div>
            <div className="page">Page 3</div>
            <div className="page">Page 4</div>
            <div className="page">Page 5</div>
            <div className="cover">Page 6</div>
        </HTMLFlipBook>
    );
};

export default Book;