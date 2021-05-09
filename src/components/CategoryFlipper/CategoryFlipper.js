import React from 'react'
import './CategoryFlipper.css'

export default function CategoryFlipper({Title, Sets, Url}) {    
    return (
        <>
            <div className="col-sm-3 col-xs-6 box-wrapper">
                <a href={"#/"+Url}>
                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front" style={{transition: 'all 0.6s ease 0s'}}>
                                <div className="hole"></div>
                                
                                <div className="textAndLine">
                                    <div className="frontText ellipsis-overflow is-truncated" style={{overflowWrap: 'break-word'}}>
                                        {Title}... 
                                    </div>
                                </div>
                            </div>
                            <div className="back" style={{transition: 'all 0.6s ease 0s'}}>
                                <div className="backContainer">                                   
                                    <div className="backTitle">
                                        <div className="backTitleText">
                                            {Title}
                                        </div>
                                    </div>
                                    
                                    <ul>
                                        {Sets.map((set,index) =>(<li key={index}>{set}</li>))}
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


