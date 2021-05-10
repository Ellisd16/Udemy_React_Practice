import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list'
import JSON from './db.json';



class App extends Component {
    state = {
        news: JSON
    }

    render() {
        console.log(this.state.news)
        return (
            <div className='App'>
                <div className='container'>
                    <Header />
                    <NewsList
                        news={this.state.news}
                    />

                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))