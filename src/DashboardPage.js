import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import "./DashboardPage.css"; // Import your CSS file for styling
import HotelDetails from "./HotelDetails";

function DashboardPage() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/hotels");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleHotelCardClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseDialog = () => {
    setSelectedHotel(null);
  };

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.country.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <div>
      <TopBar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Where are you going?"
          value={searchCountry}
          onChange={handleSearchChange}
        />
        {/* <input type="datetime-local" placeholder="Checking Date Time" />
        <input type="number" placeholder="How many are there?" />
        <button>Search</button> */}
      </div>
      <div className="hotel-cards-container">
        {filteredHotels.map((hotel, index) => (
          <div
            key={index}
            className="hotel-card"
            onClick={() => handleHotelCardClick(hotel)}
          >
            <img src={hotel.images[0]} alt={hotel.name} />
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <h3>{hotel.contact.phone}</h3>
          </div>
        ))}
      </div>
      {selectedHotel && (
        <div className="dialog-overlay">
          <div className="dialog">
            <button className="close-btn" onClick={handleCloseDialog}>
              X
            </button>
            <HotelDetails hotel={selectedHotel}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;
