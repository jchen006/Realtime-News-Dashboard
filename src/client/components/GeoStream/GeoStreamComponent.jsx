import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import ReactLoading from 'react-loading'

// https://medium.com/@zimrick/how-to-create-pure-react-svg-maps-with-topojson-and-d3-geo-e4a6b6848a98
class GeoStreamComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            worldData: [],
            error: false
        }
    }

    projection() {
        return geoMercator()
            .scale(100)
            .translate( [ 800/2 , 450/2 ] )
    }

    componentDidMount() {
        fetch("/110m.json")
        .then(response => {
            if(response.status !== 200) {
                this.setState({
                    error: true
                })
                return 
            }
            response.json().then(worldData => {
                this.setState({
                    worldData: feature(worldData, worldData.objects.countries).features
                })
            })
        })
    }

    renderLoading() {
        return (
            <ReactLoading type={"spin"} color="#000000"/>
        )
    }

    renderMap() {
        return (
            <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
                <g className="countries">
                {
                    this.state.worldData.map((d,i) => (
                    <path
                        key={ `path-${ i }` }
                        d={ geoPath().projection(this.projection())(d) }
                        className="country"
                        fill={ `rgba(38,50,56,${1 / this.state.worldData.length * i})` }
                        stroke="#FFFFFF"
                        strokeWidth={ 0.5 }
                    />
                    ))
                }
                </g>
                <g className="markers">
                <circle
                    cx={ this.projection()([8,48])[0] }
                    cy={ this.projection()([8,48])[1] }
                    r={ 10 }
                    fill="#E91E63"
                    className="marker"
                />
                </g>
            </svg>
        )
    }

    render() {
        if(this.state.error) {
            return (
                <div>
                    { this.renderLoading() }
                </div>
            )
        } else {
            return (
                <div>
                    { this.renderMap() }
                </div>
            )
        }
    }
}

export default GeoStreamComponent