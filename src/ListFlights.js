import React from 'react';
import RoundTrip from './RoundTrip'

import { dateTime, howTime } from './utils/dateTime'

export default props => {
    
    const results = props.flights.results || []
    
    const flights = results.map(item => {
        return item.itineraries
    })

    const itineraries = flights.map(itinerare => itinerare[0])
    
    const renderFlights = () => {
        return itineraries.map(item => (
            <section>
                
                {item.outbound.flights.map(fl =>
                <form>
                    <header>
                        <div>
                            Ida {dateTime(fl.arrives_at)}
                        </div>
                        <div>
                            {fl.origin.airport}
                        </div>
                        <div>
                            {fl.destination.airport}
                        </div>          
                    </header>
                    <div className="flight-result">
                        <div>
                            <span className="radio">
                                <input type="radio" id={fl.marketing_airline} value={fl.operating_airline} />
                                <label htmlFor={fl.marketing_airline}>{fl.marketing_airline}</label>
                            </span>
                        </div>
                        <div>
                            {howTime(fl.departs_at)}
                        </div>
                        <div>
                            Direto
                        </div>
                        <div>
                            {howTime(fl.arrives_at)}
                        </div>
                        <div>
                            Detalhes
                        </div>
                    </div>
                    <div className="flight-details">
                        <div>{fl.marketing_airline}</div>
                        <div>Voo nº {fl.flight_number} Boeing {fl.aircraft}</div>
                        <div>
                            {dateTime(fl.departs_at)}
                            {howTime(fl.departs_at)}
                            {fl.origin.airport}
                            {fl.origin.terminal}
                        </div>
                        <div>
                            Duração 
                            {item.outbound.duration}
                            Classe: {fl.booking_info.travel_class} - {fl.booking_info.booking_code}
                        </div>
                        <div>
                            {dateTime(fl.arrives_at)}
                            {howTime(fl.arrives_at)}
                            {fl.destination.airport}
                            {fl.destination.terminal}
                        </div>
           
                        <p>Assentos restantes {fl.booking_info.seats_remaining}</p>   

                    </div>
                </form>
                )}
            <div>Duração total {item.outbound.duration}</div>
            </section>
        ))
    }
    
    const rendeFares = () => {    
        return results.map(fare => (
            <div>
                <div>
                    <h3>Tarifa por adulto</h3>
                    {fare.fare.price_per_adult.tax}
                    <h4>Outras taxas</h4>
                    {fare.fare.price_per_adult.total_fare - fare.fare.price_per_adult.tax}
                </div>
                <h3>Total</h3>
                {fare.fare.total_price}
                <hr />
            </div>
        ))
    }
    return (
        <div class="bod">
            {renderFlights()}
            {rendeFares()}
        </div>
    )
}