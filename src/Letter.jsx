import React from 'react';

const Letter = () => {
    return (
        <div className='contact'>
            <div className="contact-me">
                <p>Contactez-moi</p>
            </div>
            <div className='card'>
                <h3>Cher Ludovic,</h3>
                <p className='message-letter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tenetur eos quis dolorum nemo eaque rerum exercitationem architecto eius nostrum, ipsam consequuntur ab corporis sunt omnis magnam quia vitae placeat.</p>
            </div>
            <div className='letter'>
                <div className="triangle"></div>
                <div className="user-info">
                    <div className='info-group'>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name='name' id='name' /> 
                    </div>
                    <div className='info-group'>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' />                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Letter;