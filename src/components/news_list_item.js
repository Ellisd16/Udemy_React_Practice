import React from 'react';
import '../styles/news_item.css'

const NewsItem = ({ item }) => {
    return (
        <div className='news_item'>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>

        </div>

    )

}
export default NewsItem;