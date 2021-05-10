import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <h1>Sah Dude?</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))