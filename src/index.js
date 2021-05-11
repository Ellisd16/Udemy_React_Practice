import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list'
import JSON from './db.json';
import Footer from './components/footer'



class App extends Component {
    state = {
        news: JSON,
        footerText: "I'm on a sick one FOO"
    }

    render() {
        //creating alias
        const { news, footerText } = this.state;

        return (
            <div className='App'>
                <div className='container'>
                    <Header />
                    <NewsList news={news}>
                        {/* Creating children */}
                        <br />
                        <h1>I am bebe</h1>
                    </NewsList>
                    <Footer footerText={footerText} />

                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))