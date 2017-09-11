import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { receiveWeather } from './weatherActionCreators'

import CityLink from '../CityLink/CityLink'

import './Weather.css'

class Weather extends Component {
  state = {
    cities: [  ]
  }

  componentDidMount() {
    const { cities, receiveWeather } = this.props
    const cityIds = cities ? cities.map(city => city.id) : []

    const APPKEY = 'e5ca6cb958b87c2d3921dd4acbb38d61';

    fetch(`http://api.openweathermap.org/data/2.5/group?id=${cityIds.join(',')}&units=metric&APPID=${APPKEY}`)
      .then(r => r.json())
      .then(({ list }) => {
        receiveWeather(list)
      })
  }

  render() {
    const { cities } = this.props;

    return (
      <section className="weather-app">
        {cities && cities.map(city => <CityLink {...city} key={city.id} />)}
      </section>
    )
  }
}

export default withRouter(connect(
  state => ({ cities: state.weather.cities }),
  { receiveWeather }
)(Weather))