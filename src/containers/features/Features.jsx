import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title : 'Improving end Distrust Instantly',
    text : 'this the wya of the sister and brother is about to implement is one of the way for of the instance in te mission'
  },
  {
    title : 'Become The Tended Active',
    text : 'this the wya of the sister and brother is about to implement is one of the way for of the instance in te mission'
  },
  {
    title : 'Message or am Nothing',
    text : 'this the wya of the sister and brother is about to implement is one of the way for of the instance in te mission'
  },
  {
    title : 'Really Boy Country',
    text : 'this the wya of the sister and brother is about to implement is one of the way for of the instance in te mission'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features