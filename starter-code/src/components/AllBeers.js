import React, { Component } from 'react'
import axios from "axios";
import Header from './Header'
import Card from './Card';

export default class AllBeers extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({
        beers: response.data
      })
    })
  }

  render() {
    console.log(this.state.beers)
    return (
      <div>
        <Header />
        {this.state.beers.map(beer => (
          <Card
            image={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed={beer.contributed_by}
            id={beer._id}
          />
        ))}

      </div>
    )
  }
}
