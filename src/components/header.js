import React, { Component } from 'react';
import '../styles/header.css'


class Header extends Component {

    state = {

        keywords: '',


    }

    inputChangeHandler = (event) => {
        // console.log(event.target.value)
        this.setState({ keywords: event.target.value })

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

                <div> {this.state.keywords}</div>


            </header>
        )
    }
}

export default Header;