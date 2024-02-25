import React, { useEffect } from 'react';
import TopBar from './TopBar';
import './DashboardPage.css'; // Import your CSS file for styling
import axios from 'axios';

function DashboardPage() {
  useEffect(() => {
    const fetchHotelDetails = async () => {
      const options = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails',
        params: {
          hotel_id: '191605',
          arrival_date: '2024-02-25',
          departure_date: '2024-02-25',
          adults: '1',
          children_age: '1,17',
          room_qty: '1',
          languagecode: 'en-us',
          currency_code: 'EUR'
        },
        headers: {
          'X-RapidAPI-Key': 'e9464f5525mshc5b5f32eb4058b7p1d834bjsne8686b4bcca0',
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHotelDetails();
  }, []);

  return (
    <div>
      <TopBar />
      <div className="search-container">
        <input type="text" placeholder="Where are you going?" />
        <input type="datetime-local" placeholder="Checking Date Time" />
        <input type="number" placeholder="How many are there?" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default DashboardPage;
