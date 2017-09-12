import React, { Component } from 'react'
import './City.css'

class City extends Component {
  state = {
    loading: true
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.weather ? false : true
    })
  }

  render() {
    const { name, weather } = this.props
    const { loading } = this.state

    return (
      <li className="city">
        <span className="city-link">
          { name }  { !loading && weather.main.temp }
        </span>
      </li>
    )
  }
}

export default City;