import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CategoryFlipper from '../../components/CategoryFlipper/CategoryFlipper';
import './OnlinePage.css'
import categoriesJSON from './../../data/Category.json';

export default function OnlinePage() {

    const [categories, setCategories] = useState([])

    useEffect(() => {       

        setCategories(categoriesJSON.map(category =>(
            <CategoryFlipper key={category.id} Title={category.Name} Sets={category.Sets} />
        )
        ));

    }, [])
    

        
    return (
        <Container className="p-online">
                <div className="col-sm-12 page-title">
                    <h1>
                        מבחני קבלה לעבודה
                    </h1>
                    <h2>העלו את סיכויי ההצלחה שלכם בעזרת ערכות התרגול אונליין שלנו!</h2>
                </div>

                <div class="row boxes-wrapper">
                    {
                        categories.map(box => (box))
                    }
                </div>




            </Container>
    );
}
