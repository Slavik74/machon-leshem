import React from 'react';
import { Container } from 'react-bootstrap';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import './HomePage.css'
import JobElements from './../../components/JobElements/JobElements';

import trophy from './../../components/JobElements/images/trophy.png'
import ruller from './../../components/JobElements/images/ruller.png'
import handshake from './../../components/JobElements/images/handshake.png'

function HomePage() {

    const jobElement1 = {        
        title:      "מכון ההכנה המנוסה והמוביל בארץ",
        infotext:   "למכון לשם ניסיון של למעלה מ-28 שנים בהכנה למבחני מיון והשמה. הצטרפו אל יותר מ-מיליון לקוחות שבחרו בהכנה של מכון לשם",
        picture:    trophy
    }

    const jobElement2 = {        
        title:      "הכנה אונליין",
        infotext:   "לקוחות מכון לשם נהנים מגישה מכל מקום ובכל עת למאגר שבו אלפי חומרי תרגול מקוונים המותאמים למגוון מבחני מיון",
        picture:    ruller
    }

    const jobElement3 = {        
        title:      "בניית אמון הדדי ארוך טווח",
        infotext:   "שביעות הרצון והאמון שנבנה עם השנים גורמים ללקוחות לבחור במכון לשם בכל שלב בחייהם: לימודים, צבא ועבודה",
        picture:    handshake
    }

    return (

        <Container className="p-home">
                <HomeCarousel />

                <div className="trust-section">
                    <div className="uppertext">1,000,000</div>
                    <div className="lowertext">ויותר נבחנים סומכים על מכון לשם</div>
                </div>

                <div className="row job-elements-container">
                    <JobElements {...jobElement1} />
                    <JobElements {...jobElement2} />
                    <JobElements {...jobElement3} />
                </div>

        </Container>

    );
}

export default HomePage;