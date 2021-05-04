import React from 'react';
import { Container } from 'react-bootstrap';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

function HomePage(props) {
    return (
        <Container className="p-home">
            <HomeCarousel />
        </Container>
    );
}

export default HomePage;