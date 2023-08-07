// src/components/SingleTrain.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainById } from '../api';

const SingleTrain = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    getTrainById(id)
      .then(response => {
        // Process and set the response data in the state
        setTrain(response.data);
      })
      .catch(error => {
        console.error('Error fetching train:', error);
      });
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Arrival Time: {train.arrivalTime}</p>
      <p>Price (Sleeper): {train.priceSleeper}</p>
      <p>Price (AC): {train.priceAC}</p>
      <p>Seat Availability (Sleeper): {train.seatAvailabilitySleeper}</p>
      <p>Seat Availability (AC): {train.seatAvailabilityAC}</p>
      {/* Display other train details */}
    </div>
  );
};

export default SingleTrain;
