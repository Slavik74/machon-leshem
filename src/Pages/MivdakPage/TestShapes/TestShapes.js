import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import './TestShapes.css'
import { useState } from 'react';
import CountDown from './../../../components/CountDown/CountDown';

const clockIcon = <FontAwesomeIcon icon={faClock} />

export default function TestShapes({handleTimerEnd}) {

    const [qnumber, setQnumber] = useState(1)

    return (
        <div className="c-testshapes">

            <div className="header">
                <Row>
                    <Col md={4} className="qnumber-box">
                        שאלה {qnumber} מתוך 8
                    </Col>

                    <Col md={4} className="description-box">
                        בחר את התשובה הנכונה בהכרח
                    </Col>

                    <Col md={4} className="timer-box dir-ltr-left">
                        {clockIcon}&nbsp;&nbsp;<CountDown Seconds={6} OnTimerEnd={handleTimerEnd} />
                    </Col>

                </Row>

            </div>

            <div className="content">
            <Row>
                    <Col md={6} className="question-box">
                        שאלה
                    </Col>

                    <Col md={6} className="answers-box">
                        <Button variant="answer" block>תשובה אפשרית 1</Button>
                        <Button variant="answer" block>תשובה אפשרית 2</Button>
                        <Button variant="answer" block>תשובה אפשרית 3</Button>
                        <Button variant="answer" block>תשובה אפשרית 4</Button>
                    </Col>

                </Row>


            </div>

            <div className="footer">

                <div className="buttons">
                    {qnumber>1?
                        <Button variant="flat-red" size="xxl"
                            onClick={()=>setQnumber(qnumber-1)}>לשאלה הקודמת</Button>:
                            null
                    }

                    <Button variant="flat-red" size="xxl"
                        onClick={()=>setQnumber(qnumber+1)}>לשאלה הבאה</Button>
                </div>
            </div>

        </div>
    )
}
