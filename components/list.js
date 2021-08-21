import React, { Component } from "react"
import axios from "axios"

export default class RestaurantList extends Component {
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

        const URL = ''

        axios.get(URL)

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
        return (
            <div class='w-2/5 h-auto pr-6 float-right'>
                <form onSubmit={this.handleSubmit}  class='w-full mb-4'>
                    <input
                        name='address'
                        onChange={this.handleInputChange}
                        class ='bg-gray-50 w-1/2  p-4 h-auto'
                        type='text'
                        placeholder='Enter your address'
                    />
                    <button type="submit" class ='bg-red-100 p-4 hover:bg-red-300'>Find</button>
                </form>
                <ul class ='bg-gray-50 h-96 w-full px-4 rounded divide-y overflow-y-scroll'>
                    <li class='py-4'>
                        <p>restaurant</p>
                        <p>address</p>
                    </li>
                    
                </ul>
            </div>
        );
    } 
}
