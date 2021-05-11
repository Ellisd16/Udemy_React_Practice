import React, { Component } from 'react';

class Footer extends Component {
    //All class have a constructor and they receive the props
    //Need to put "this" in order to acces a prop

    //constructor gives you direct access to props
    render() {
        return (
            <footer>
                {this.props.footerText}
            </footer>
        )
    }
}
export default Footer;