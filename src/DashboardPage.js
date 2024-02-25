import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import './DashboardPage.css'; // Import your CSS file for styling
import axios from 'axios';

function DashboardPage() {
  const [hotels, setHotels] = useState([]);

  const fetchBookingDetails = async () => {
    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
      params: {
        query: "man"
      },
      headers: {
        'X-RapidAPI-Key': 'e9464f5525mshc5b5f32eb4058b7p1d834bjsne8686b4bcca0',
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setHotels(response.data); 
      console.log('hotels', hotels);
    } catch (error) {
      console.error(error);
    }
    // const options = {
    //   method: 'GET',
    //   url: 'https://jsonplaceholder.typicode.com/photos',
      
    // };

    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    //   setHotels(response.data); 
    //   console.log('hotels', hotels);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  useEffect(() => {
    fetchBookingDetails();
  }, []);
  const hotelData = [
    {
      name: "Hotel A",
      description: "A cozy hotel located in the heart of the city. Offers luxurious rooms and excellent amenities.",
      imageUrl: "https://rapidapi-prod-apis.s3.amazonaws.com/1fd22c68-e8af-48fa-a002-a0a414e3fc30.png"
    },
    {
      name: "Hotel B",
      description: "Experience ultimate comfort and relaxation at Hotel B. Enjoy stunning views and top-notch service.",
      imageUrl: "https://cf.bstatic.com/xdata/images/city/150x150/977355.jpg?k=0f15acbe8f43d1b556b08dbe9e15cee26af7e1d1a8c625a015e4f24d3a6e6c97&o="
    },
    {
      name: "Hotel C",
      description: "Hotel C is perfect for both business and leisure travelers. Conveniently located near major attractions.",
      imageUrl: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
    }
  ];
  return (
    <div>
      <TopBar />
      <div className="search-container">
        <input type="text" placeholder="Where are you going?" />
        <input type="datetime-local" placeholder="Checking Date Time" />
        <input type="number" placeholder="How many are there?" />
        <button>Search</button>
      </div>
      <div className="hotel-cards-container">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.thumbnailUrl} alt={hotel.name} />
            <h2>{hotel.title}</h2>
            <p>{hotel.description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
