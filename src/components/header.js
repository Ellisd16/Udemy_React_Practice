import React, { Component } from 'react';



// let styles = {
//     header: {
//         background: "blue",
//     },
//     div: {
//         color: "white",
//         fontFamily: 'Anton',
//         textAligin: 'center'
//     }
// }
class Header extends Component {

    inputChangeHandler(event, hello) {
        console.log(event.target.value);
        console.log(hello)
    }


    render() {
        return (
            <header onClick={() => console.log('click me please')}>
                <div className="logo">
                    logo
                </div>
                <input
                    onChange={(e) => this.inputChangeHandler(e, 'hey')}
                />
            </header>
        )
    }
}

export default Header;