import React, { useState } from 'react';
import './HotelDetails.css';

function HotelDetails({ hotel }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkInDate: '',
        numberOfGuests: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can implement order submission logic here
        console.log('Form submitted with data:', formData);
        // Reset form data after submission
        setFormData({
            name: '',
            email: '',
            checkInDate: '',
            numberOfGuests: ''
        });
    };

    return (
        <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
            <p>Country: {hotel.location.country}</p>
            <p>Contact Phone: {hotel.contact.phone}</p>
            {/* Add more details as needed */}
            <div className="image-gallery">
                {hotel.images.map((photo, index) => (
                    <img key={index} src={photo} alt={`Gym Photo ${index + 1}`} />
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-field" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input-field" required />
                <label htmlFor="checkInDate">Check-in Date:</label>
                <input type="datetime-local" id="checkInDate" name="checkInDate" value={formData.checkInDate} className="input-field" onChange={handleChange} required />
                <label htmlFor="numberOfGuests">Number of Guests:</label>
                <input type="number" id="numberOfGuests" name="numberOfGuests" value={formData.numberOfGuests} className="input-field" onChange={handleChange} required />
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default HotelDetails;
