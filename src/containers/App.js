import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

import { setSearchField } from '../actions';

const mapStateToProps = state => ({
    searchField: state.searchField
});
const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value))
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }))
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(
            robot => robot.name
                .toLowerCase()
                .includes(searchField.trim().toLowerCase())
        )

        return !robots.length
            ? <h1 className="tc f1">Loading</h1>
            : (
                <div className="tc" >
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

// Now App is subscribed to redux store
// mapStateToProps: what state should I listen to
// mapDispatchToProps: what actions should I listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);