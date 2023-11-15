import React from 'react';

const Letter = ({ bookIsClosed }) => {

    const contact = document.querySelector('#contact');

    if(bookIsClosed) {
        setTimeout(() => {
            contact.classList.replace('to-the-back', 'to-the-front');
        }, 500)
    }else {
        setTimeout(() => {
            contact.classList.replace('to-the-front', 'to-the-back');
        }, 100)
    }

    return (
        <form id='contact' className='contact to-the-back'>
            <div className="contact-me">
                <p>Contactez-moi</p>
            </div>
            <div className='card'>
                <h3>Cher Ludovic,</h3>
                <textarea className='message-letter' placeholder='Votre message ici'></textarea>
            </div>
            <div className='letter'>
                <div className="triangle"></div>
                <div className="user-info">
                    <h3>Expéditeur</h3>
                    <div className="info-group">
                        <input type="text" name='name' id='name' placeholder='Votre nom' /> 
                        <input type="text" name='email' id='email' placeholder='Votre adresse (mail)'/>                             
                    </div>
                    
                </div>
                <input type="submit" className='send-btn' value="Envoyer" />
            </div>
        </form>
    );
};

export default Letter;