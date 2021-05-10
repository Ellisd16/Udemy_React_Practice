import React from 'react';

const newsList = (props) => {

    return (
        <div>
            {props.news.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.feed}</p>
                </div>
            ))}
        </div>
    )
}
export default newsList;