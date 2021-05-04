import React from 'react'
import { Carousel } from 'react-bootstrap'
import './HomeCarousel.css'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'

export default function HomeCarousel() {
    return (

        <div className="c-homecarousel">
            <div className='container-fluid' >
                <Carousel fade interval={1400}  >
                    <Carousel.Item>
                        <img className="d-block w-100" src={img1} />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item  >
                    <Carousel.Item>
                        <img className="d-block w-100" src={img2} />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img3} />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img4} />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={img5} />
                        <Carousel.Caption></Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}
