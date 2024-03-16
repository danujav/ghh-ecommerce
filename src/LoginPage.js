// LoginPage.js
import React, {useEffect} from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import DashboardPage from './DashboardPage';

function LoginPage() {
    
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLoginSuccess = (response) => {
        console.log('Login successful!', response.profileObj);
        navigate('/dashboard');

    }
    const handleLoginFailure = (error) => {
        console.error('Login failed:', error);
         navigate('/dashboard');
    }

    useEffect(() => {
        // Clear cookies or perform any necessary cleanup when the component mounts
        // This ensures that cookies are cleared every time the user lands on the login page
        clearCookies();
    }, []);

    const clearCookies = () => {
        // Split cookies by semicolon and trim whitespaces
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    
        // Iterate over each cookie and set its expiry date to the past
        cookies.forEach(cookie => {
            const [name, _] = cookie.split('=');
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    };


    return (
        <div className='App'>
            <div className="welcome-container">
                <div className="welcome-content">
                    <p>Welcome to the Global Hotel Hub LK</p>
                    {/* Add the GoogleLogin component */}
                    <GoogleLogin
                        clientId="282348999224-f7rb68ft1cig9ntsnhag3bn1h7kgg6q5.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={handleLoginSuccess}
                        onFailure={handleLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className="picture-container">
                    <img src="/hotel.png" alt="Hotel" />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
