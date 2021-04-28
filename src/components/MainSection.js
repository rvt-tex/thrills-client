import React from 'react';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            
        <h1>WELCOME TO THRILLS JAMAICA</h1>
        <p>The Home of the most Exotic Tours in the Carribbean</p>

        <div className='main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >OUR TOURS</Button>
        </div>

        </div>
    )
}

export default MainSection;