import React, { Component } from 'react';
import '../styles/header.css'


class Header extends Component {

    state = {
        active: false,
        keywords: '',


    }

    inputChangeHandler = (event) => {
        // console.log(event.target.value)
        const value = event.target.value === '' ? 'not-active' : 'active';

        this.setState({
            active: value,
            keywords: event.target.value
        })

    }


    render() {



        console.log(this.state)
        return (
            // <header style={{ background: `${this.state.active ? 'green' : 'blue'}` }}>
            <header className={this.state.active}>
                <div className="logo">
                    logo
                </div>
                <input
                    onChange={this.inputChangeHandler}
                />


            </header>
        )
    }
}

export default Header;