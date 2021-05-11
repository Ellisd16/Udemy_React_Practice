import React from 'react';
import '../styles/header.css'


const Header = (props) => {


    return (

        <header>
            <div className="logo">
                logo
                </div>
            <input
                onChange={props.keywords}
            />


        </header>
    )

}

export default Header;