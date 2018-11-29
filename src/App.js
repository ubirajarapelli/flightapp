import React, { Component } from 'react';
import Axios from 'axios';

import './App.css';
import { ApiKey } from '../apiKey';

import SearchEngine from './SearchEngine';
import ListFlights from './ListFlights';

const API = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=${ApiKey}`;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            origin: '',
            destination: '',
            departure_date: '',
            return_date: '',
            adults: '',
            children: '',
            nonstop: false,
            travel_class: '',
            flights: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidCatch() {
        console.log('componentDidCatch');
    }

    componentDidMount() {}

    componentWillMount() {}

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSearch() {
        this.setState({isLoading: true});

        const origin = this.state.origin;
        const destination = this.state.destination;
        const departureDate = this.state.departure_date;
        const returnDate = this.state.return_date;
        const adults = this.state.adults;
        const children = this.state.children;
        const nonstop = this.state.nonstop;
        const travelClass = this.state.travel_class;

        Axios.get(`${API}&origin=${origin}&destination=${destination}&departure_date=${departureDate}&return_date=${returnDate}&number_of_results=10`)
            .then(response => this.setState({
                    flights: response.data,
                    isLoading: false,
                })
            )        
    }

    render() {
        const { flights, isLoading, error } = this.state;

        if (error) {
            return <div>{error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading ...</div>;
        }

        return (
            <section>
              <SearchEngine
                origin={this.state.origin}
                destination={this.state.destination}
                departureDate={this.state.departure_date}
                returnDate={this.state.return_date}
                adults={this.state.adults}
                children={this.state.children}
                travelClass={this.state.travel_class}

                handleChange={this.handleChange}
                handleSearch={this.handleSearch}/>
              <ListFlights flights={this.state.flights} />
            </section>
        );
    }
}


export default App;
