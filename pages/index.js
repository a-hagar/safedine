import React, { useState, Component } from "react"
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import MapBox from '../components/map';
//import Form from '../components/yelp-form';


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = { 
        address: null,
        userLocation: [],
        data: []
    }
    
  }


  //handling user location submission and adding it to the api search
  handleSubmit = (event) => {
    event.preventDefault()

    let myHeaders = new Headers();
    myHeaders.append("");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${this.state.address}, toronto&term=restaurant&radius=300&locale=en_CA&sort_by=distance`;

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
        console.log(this.state.data[0]);
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

  render(){

    return (
      <div className='overflow-y-scroll'>
        <Head>
          <title>SafeDine</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>
          <div>
            <MapBox data={this.state.data} userLocation={this.state.userLocation} />
            <form onSubmit={this.handleSubmit} className='w-full mb-4'>
                <input
                    name='address'
                    onChange={this.handleInputChange}
                    value={this.state.address}
                    className ='bg-gray-50 w-1/3  p-4 h-auto'
                    type='text'
                    placeholder='Enter your address to show nearest restaurants'/>
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
          </div>
        </main>
        <Footer />
      </div>
    )
  }

}
