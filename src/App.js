import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './header/Header';
import Nav from './nav/Nav';
import Weather from './Weather/Weather'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    const { cities } = this.props;

    return (
      <section className="main-component">
        <Nav cities={cities} />
        <Weather />
      </section>
    );
  }
}

export default withRouter(connect(
  (state) => ({ cities: state.cities })
)(App));
