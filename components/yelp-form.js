import React, { Component } from "react"
import axios from "axios"

<script crossorigin src="..."></script>

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            address: ''
        }
    }

    //handling user location submission and adding it to the api search
    handleSubmit = (event) => {
        event.preventDefault()
        const userLocation = this.state
        console.log(userLocation)

        //yelp api call with user location
        axios.get(`https://api.yelp.com/v3/businesses/search?location=${userLocation.address},Toronto&radius=750&locale=en_CA&sort_by=distance`, 
        { 'headers' : 
            { 'Authorization': `Bearer ${process.env.YELP_API_KEY}`,
             'Content-Type': 'application/json', 
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Credentials': true,

        }})
        .then((response) => {
        console.log(response.data)
        this.state({ restaurants: response.data})

        })
        .catch((err) => {
        console.log ('error')

        })

    }

    //testing user input 
    handleInputChange = (event) => {
        event.preventDefault()
        //console.log(event.target.name +": "+ event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} class='w-full mb-4'>
            <input
                name='address'
                onChange={this.handleInputChange}
                class ='bg-gray-50 w-1/3  p-4 h-auto'
                type='text'
                placeholder='Enter your address'
            />
            <button type="submit" class ='bg-red-100 p-4 hover:bg-red-300'>Find</button>
        </form>
        );
    }

}
