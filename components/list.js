import React, { Component } from "react"
import Form, { userResults } from '../components/yelp-form.js'

export default class RestaurantList extends Component {
    constructor(props){
        super(props)
        this.state = { 
            address: '',
            results: userResults, 
        }
        console.log(this.state.results);
    }

    render() {

    } 
}
