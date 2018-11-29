import React from 'react';

const RoundTrip = trip => (
    <div>
        {
            trip.map((flight, index) => (
                <span>{flight.arrives_at}</span>
            ))
        }
    </div>
)