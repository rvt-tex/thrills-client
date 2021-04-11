import React from 'react';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            
        <h1>WELCOME TO JA</h1>
        <p>Party Capital of the World</p>

        <div className='main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >GET STARTED
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                // onClick={console.log('clicking the home page link')}
            >WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>

        </div>
    )
}

export default MainSection;