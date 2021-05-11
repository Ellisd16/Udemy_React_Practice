import React, { Component } from 'react';

class Life extends Component {
    //overwriting native behavior
    //first thing that kicks in
    constructor(props) {
        super(props);

        this.state = { action: '' }
        console.log('1-Constructor');
    }

    static getDerivedStateFromProps() {
        console.log('2-getDerivedStateFromProps');
        return null;
    }

    //when everything is visible, this method will fire
    componentDidMount() {
        console.log('4-componentDidMount');
    }

    //Listen when react removes a component from screen
    componentWillUnmount() {
        console.log('5-componentWillUnmount')
    }

    render() {
        console.log('3-render');
        return (
            <div>
                life finds a way
            </div>
        )
    }
}
export default Life;