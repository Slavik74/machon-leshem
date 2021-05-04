import React from 'react'
import './CategoryFlipper.css'

export default function CategoryFlipper() {
    return (
        <>
            <div class="col-sm-3 col-xs-6 box-wrapper">
                <a href="/מבחנים-פסיכוטכניים">
                    <div class="flip-container">
                        <div class="flipper">
                            <div class="front" style={{transition: 'all 0.6s ease 0s'}}>
                                <div class="hole"></div>
                                
                                <div class="textAndLine">
                                    <div class="frontText ellipsis-overflow is-truncated" style={{overflowWrap: 'break-word'}}>
                                        מבחנים פסיכוטכניים... </div>
                                    <div class="underline"></div>
                                </div>
                            </div>
                            <div class="back" style={{transition: 'all 0.6s ease 0s'}}>
                                <div class="backContainer">
                                    <div class="hole"></div>
                                    
                                    <div class="backTitle">
                                        <div class="backTitleText">
                                            מבחנים פסיכוטכניים לעבודה
                                        </div>
                                    </div>
                                    
                                    <ul>
                                        <li>הכנה לפי מכון מיון</li>
                                        <li>הכנה לפי תפקיד</li>
                                        <li>תרגול אונליין והדרכות אישיות</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>


            
        </>
    )
}


