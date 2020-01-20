import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.trim().toLowerCase()))
        if (this.state.robots.length === 0) {
            return <h1 className="tc f1">Loading</h1>
        }
        return (
            <div className="tc" >
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;