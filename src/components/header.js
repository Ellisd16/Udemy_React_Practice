import React, { Component } from 'react';
import '../styles/header.css'


class Header extends Component {

    state = {
        title: 'Super Cool Keywords: ',
        keywords: '',
        count: 0

    }

    inputChangeHandler = (event) => {
        // console.log(event.target.value)
        this.setState({ keywords: event.target.value })

    }
    addOne = (event) => {
        this.setState({ count: this.state.count + 1 })
    }
    minusOne = (event) => {
        this.setState({ count: this.state.count - 1 })
    }


    render() {
        console.log(this.state)
        return (
            <header onClick={() => console.log('click me please')}>
                <div className="logo">
                    logo
                </div>
                <input
                    onChange={this.inputChangeHandler}
                />
                <div>{this.state.title}</div>
                <div> {this.state.keywords}</div>
                <br />
                <div>{this.state.count}</div>
                <button onClick={() => this.addOne()}>Add One</button>
                <button onClick={() => this.minusOne()}>Subtract One</button>
            </header>
        )
    }
}

export default Header;