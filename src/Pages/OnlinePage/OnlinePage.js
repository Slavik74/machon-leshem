import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryFlipper from '../../components/CategoryFlipper/CategoryFlipper';
import './OnlinePage.css'

export default function OnlinePage() {
    return (
        <Container className="p-online">
                <div className="col-sm-12 page-title">
                    <h1>
                        מבחני קבלה לעבודה
                    </h1>
                    <h2>העלו את סיכויי ההצלחה שלכם בעזרת ערכות התרגול אונליין שלנו!</h2>
                </div>

                <div class="row boxes-wrapper">

                    <CategoryFlipper />
                    <CategoryFlipper />
                    <CategoryFlipper />
                    <CategoryFlipper />
                </div>




            </Container>
    );
}
