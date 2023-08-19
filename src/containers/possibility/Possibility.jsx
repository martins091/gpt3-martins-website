import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early to Get Started</h4>
        <h1 className='gradient__text'>The possibility Are Beyond Your Imagination</h1>
        <p>you can achieve the main goal of your dream only if you can start to plane on them today and 
          and stop thinking what people will say focus on the the dream not them
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility