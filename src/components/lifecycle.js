import React, { Component } from 'react';

class Life extends Component {
    //overwriting native behavior
    //first thing that kicks in
    constructor(props) {
        super(props);

        this.state = { name: 'Your Mom' }
        console.log('1-Constructor');
    }
    //interact with current state; can intercept state and change it
    //rare use case
    static getDerivedStateFromProps(props, state) {
        console.log('2-getDerivedStateFromProps');
        if (state.name === 'Mike hawk') {
            return {
                name: 'Tony hawk'
            }
        }
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

    //decide whether component updates or not
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.name === "Yo Daddy") {
            return false
        }
        return true;
    }

    //stores a snapshot of something in memory
    getSnapshotBeforeUpdate(prevProps, prevState) {
        let age = 20;

        return age;
    }

    //after component updates
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('x - componentDidUpdate');
        // console.log(this.state);
        // console.log(prevState)
        // console.log(snapshot)
    }


    render() {
        console.log('3-render');
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={() => this.setState({ name: 'Mike hawk' })}>
                    Change name
                </div>
            </div>
        )
    }
}
export default Life;