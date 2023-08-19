import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container__article'>
        <div className='gpt3__blog-container__article-image'>
          <img src={imgUrl} alt='blog' />
        </div>
        <div className='gpt3__blog-container__article-content'>
          <div>
            <p>{date}</p>
            <p>{title}</p>
          </div>
          <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article