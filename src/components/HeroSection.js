import React from 'react'
import './App.css'
import { Button } from './Button';
import '/HeroSection.css';

function HeroSection() {
    return (
        <div className ='hero-container'> 
        <h1> DELIVERY IN 24 HOURS </h1>
        <p> The cats are waiting for you </p>
        <div className="hero-btns">
            <Button 
            className ='btns' 
            buttonStyle= 'btn--outline'
            buttonSize= 'btn--large'
            > 
             GET STARTED
            </Button>
            <Button 
            className ='btns' 
            buttonStyle= 'btn--primary'
            buttonSize= 'btn--large'
            > 
             WATCH TRAILER <i className='far fa-play-circle'></i> 
            </Button>
        </div>   
        </div>
    );
}

export default HeroSection;
