import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NewsList from './components/news_list'
import JSON from './db.json';
import Footer from './components/footer'



class App extends Component {
    state = {
        news: JSON,
        filtered: JSON,
        footerText: "I'm on a sick one FOO"
    }
    getKeywords = (event) => {
        console.log(event.target.value)

        let keywords = event.target.value;

        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1
        })
        //setting filtered = filtered so that we can change display and revert back to original list
        this.setState({
            filtered: filtered
        })
    }

    render() {
        //creating alias
        const { news, footerText, filtered } = this.state;

        return (
            <div className='App'>
                <div className='container'>
                    <Header
                        keywords={this.getKeywords}
                    // If you put () after getKeywords, the function will run as soon as the app starts
                    />
                    <NewsList news={filtered}>
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