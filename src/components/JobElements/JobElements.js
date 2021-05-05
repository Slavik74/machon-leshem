import React from 'react'
import './JobElements.css'

export default function JobElements({picture, title, infotext}) {
    return (           
            
        <div className="box col-md-4 col-sm-4 col-xs-8">
            <div className="colorInfoTitle">{title}</div>
            <picture>
                <img src={picture} alt=""/>
            </picture>
            <div className="colorInfoContentText">{infotext}</div>
        </div>

    )
}
