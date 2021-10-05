//import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import React, { Component } from "react"

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = { 
            address: '',
            userLocation: [],
            data: []
        }
    }
    

    //handling user location submission and adding it to the api search
    handleSubmit = (event) => {
        event.preventDefault()

        const userLocation = this.state
        console.log(userLocation.address)

        let myHeaders = new Headers();
        myHeaders.append("");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        let yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${userLocation.address}, Toronto, ON&radius=500&locale=en_CA&term=restaurant&sort_by=distance`;

        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(proxyUrl + yelpUrl, requestOptions)
        .then(response => response.json())
        .then(result =>{
            //console.log(result);


            this.setState({ data: result.businesses});
            this.setState({ userLocation: result.region.center});
            console.log(this.state.data[12]);
            console.log(this.state.userLocation);
        })
        .catch(error => console.log('error', error));

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
            <form onSubmit={this.handleSubmit} className='w-full mb-4'>
                <input
                    name='address'
                    onChange={this.handleChange}
                    className ='bg-gray-50 w-1/3  p-4 h-auto'
                    type='text'
                    placeholder='Enter your address'/>
                <button type="submit" className ='bg-red-100 w-20 p-4 hover:bg-red-300'>Find</button>

                <div className='h-96 w-2/5 pr-6 py-4 bg-gray-80 flex-auto flex-col float-right overflow-hidden'>
                    <ul className =' h-full px-4 divide-y overflow-y-scroll'>
                        {this.state.data.map(business =>
                            <li className='pr-6 py-4' key={business.id}>
                                <p>{business.name}
                                    <span className='float-right'>
                                        {business.rating}🟊
                                    </span>
                                </p>
                                <p>{business.price}</p>
                                <p>{business.location.address1} {business.location.address2} 
                                    <span className='float-right'>{Math.round(business.distance)}m Away</span>
                                </p>
                            </li>
                        )}
                    </ul>
                </div>
            </form>
        );
    }

}
