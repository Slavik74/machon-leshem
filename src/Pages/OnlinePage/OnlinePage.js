import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import CategoryFlipper from '../../components/CategoryFlipper/CategoryFlipper';
import './OnlinePage.css'
import categoriesJSON from './../../data/Category.json';

export default function OnlinePage({activeUser}) {

    const [categories, setCategories] = useState([])

    useEffect(() => {       

        setCategories(categoriesJSON.map(category =>(
            <CategoryFlipper key={category.id} Title={category.Name} Sets={category.Sets} Url={category.Url} />
        )
        ));

    }, [])
    

        
    return (
        <Container className="p-online">

                {activeUser ? 
                    <div className="welcome-alert">
                        <Alert variant="success">
                            שלום  {activeUser.lname} {activeUser.fname}, בחר/י את סוג ההכנה ובוא/י נתחיל
                        </Alert>
                    </div>
                    :null
                    
                }

                <div className="col-sm-12 page-title">
                    <h1>
                        מבחני קבלה לעבודה
                    </h1>
                    <h2>העלו את סיכויי ההצלחה שלכם בעזרת ערכות התרגול אונליין שלנו!</h2>
                </div>

                <div className="row boxes-wrapper">
                {
                    categories.map(box => (box))
                }
                </div>

            </Container>
    );
}
