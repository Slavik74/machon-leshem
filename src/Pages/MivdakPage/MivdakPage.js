import React from 'react';
import { Container } from 'react-bootstrap';
import './MivdakPage.css'
import MivdakIntro from './MivdakIntro/MivdakIntro';

export default function MivdakPage() {
    return (
        <Container className="p-mivdak">
            <div className="mivdak-title">בחן את עצמך</div>
            <div className="mivdak-container">
                <MivdakIntro />
            </div>
        </Container>
    );
}
