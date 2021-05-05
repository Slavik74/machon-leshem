import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import './HomePage.css'

function HomePage(props) {
    return (

        <Container className="p-home">
                <HomeCarousel />
                <div className="gray-banner">
                    <h1>1,000,000</h1>
                    <p3>ויותר נבחנים סומכים על מכון לשם</p3>
                </div>
        </Container>

    );
}

export default HomePage;