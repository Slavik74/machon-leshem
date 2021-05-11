import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import './TestShapes.css'
import { useState } from 'react';
import useCountDown from './../../../hook/useCountDown';
import { formatTime } from '../../../Utils';

const clockIcon = <FontAwesomeIcon icon={faClock} />

export default function TestShapes({testsData, handleTestFinished}) {
    
    const [qnumber, setQnumber] = useState(1)
    const [answersToggle, setAnswersToggle] = useState(null)

    //Toggle selected answer for answer options
    const handleAnswerSelect = event => {
        setAnswersToggle(event.target.id);
    };


    const handleNextQuestion = () => {
        if (qnumber>=total_questions)
            handleTestFinished();

        setQnumber(qnumber+1);        
    };

    const testTime = Number(testsData[qnumber-1].Time)*60;
    const { timer, isTimerEnd, handleStart } = useCountDown(testTime)

    if (isTimerEnd)
        handleTestFinished();

    const answers_to_select = []
    const total_questions = testsData.length;

    for (var i = 1; i <= total_questions; i++) {
        answers_to_select.push(
            <Col key={'col'+i} lg={6}>
                <div id={'answer'+i} className={`answer ${answersToggle === 'answer'+i ? 'select' : ''}`}  key={'answer'+i} 
                    onClick={handleAnswerSelect}>תשובה אפשרית {i}</div></Col>);
    }

    return (
        <Container className="c-testshapes">

<button onClick={handleStart}>Start</button>

            <Row className="header">
                    <Col md={2} className="qnumber-box">
                        שאלה {qnumber} מתוך {testsData.length}
                    </Col>

                    <Col md={8} className="description-box">
                            {testsData[0]?testsData[0].Hesber:""}
                    </Col>
                    <Col md={2} className="timer-box">
                        {formatTime(timer)}&nbsp;&nbsp;{clockIcon}
                    </Col>
            </Row>

            <div className="content">
                <Row>
                    <Col md={6} className="question-box">
                        <div>שאלה:</div>
                        <img className="question-img" src={require(`./TestImages/${testsData[qnumber-1].QUES_PIC1}.gif`).default} />
                        <br /><br />
                        <div>תשובות אפשריות:</div>
                        <img className="answers-img" src={require(`./TestImages/${testsData[qnumber-1].QUES_PIC2}.gif`).default} />
                        
                    </Col>

                    <Col md={6} className="answers-box">
                        <Row>
                            {answers_to_select}
                        </Row>
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
                        onClick={handleNextQuestion}>לשאלה הבאה</Button>
                </div>
            </div>

        </Container>
    )
}
