import React, { useState } from 'react';

const trainData = [
    { id: 1, trainName: 'Express Train', price: 50, tickets: 100, departureTime: '09:00', delay: 0 },
    { id: 2, trainName: 'Super Express', price: 60, tickets: 50, departureTime: '10:30', delay: 10 },
    { id: 3, trainName: 'Local Train', price: 300, tickets: 20, departureTime: '11:15', delay: 5 },
    { id: 4, trainName: 'Night Owl', price: 80, tickets: 150, departureTime: '19:30', delay: 15 },
    { id: 5, trainName: 'Rapid Transit', price: 70, tickets: 80, departureTime: '08:45', delay: 5 },
    { id: 6, trainName: 'Express Line', price: 90, tickets: 120, departureTime: '13:15', delay: 0 },
    { id: 7, trainName: 'Metro Express', price: 55, tickets: 180, departureTime: '17:00', delay: 20 },
    { id: 8, trainName: 'City Shuttle', price: 40, tickets: 220, departureTime: '16:30', delay: 5 },
    { id: 9, trainName: 'High-Speed Rail', price: 120, tickets: 40, departureTime: '14:45', delay: 0 },
    { id: 10, trainName: 'Coastal Express', price: 75, tickets: 90, departureTime: '12:00', delay: 0 },
  ];
  
  // Add more train data here as needed


const AllTrainsPage = () => {
  const [trains, setTrains] = useState(trainData);

 
  const sortTrains = () => {
    const sortedTrains = [...trains].sort((a, b) => {
      if (a.price !== b.price) {
        return a.price - b.price;
      } else if (a.tickets !== b.tickets) {
        return b.tickets - a.tickets;
      } else {
        const aDepartureTime = addMinutes(a.departureTime, a.delay);
        const bDepartureTime = addMinutes(b.departureTime, b.delay);
        // Sort by departure time in descending order
        return new Date(bDepartureTime) - new Date(aDepartureTime);
      }
    });

    setTrains(sortedTrains);
  };

  const addMinutes = (time, minutes) => {
    const [hours, mins] = time.split(':').map(Number);
    const totalMinutes = hours * 60 + mins + minutes;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;

    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      background: 'linear-gradient(to bottom, #f3f3f3, #e5e5e5)', 
      borderRadius: '8px', 
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
      maxWidth: '800px', 
      margin: '0 auto' 
    }}>
      <div style={{ 
        background: 'linear-gradient(to right, #65c8d0, #6cd6e6)',
        padding: '10px',
        borderRadius: '8px 8px 0 0',
        width: '100%',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          margin: '0', 
          color: '#fff', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}>Trains Schedule</h1>
      </div>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginBottom: '20px',
      }}>
        <thead>
          <tr style={{ 
            background: '#f2f2f2', 
            fontWeight: 'bold',
          }}>
            <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>Train Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>Price ($)</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>Tickets</th>
            <th style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id} style={{ 
              background: '#f2f2f2',
            }}>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>{train.trainName}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>${train.price}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>{train.tickets}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>{addMinutes(train.departureTime, train.delay)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTrainsPage;