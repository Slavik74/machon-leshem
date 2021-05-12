import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import { useState, useEffect } from 'react';
import useCountDown from './../../../hook/useCountDown';
import { formatTime } from '../../../Utils';
import StartTestModal from './../../../components/StartTestModal/StartTestModal';

const clockIcon = <FontAwesomeIcon icon={faClock} />

export default function TestShapes({testsData, handleTestFinished}) {
    
    const [qnumber, setQnumber] = useState(1)
    const [answersToggle, setAnswersToggle] = useState(null)
    const [qAnswer, setQAnswer] = useState(null)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)

    //Toggle selected answer for answer options
    const handleAnswerSelect = event => {
        setAnswersToggle(event.target.id);
        const strAnswer = event.target.id
        setQAnswer(strAnswer.slice(6))  //Remove the string 'answer' from id to get the number of the answer
    };

    useEffect(() => {
        setIsAnswerCorrect(!!qAnswer && Number(qAnswer)===Number(testsData[qnumber-1].TRUE_Answer)? 1:0)
    }, [qAnswer])

    useEffect(() => {
        setQAnswer(null)
        setAnswersToggle(null);        
    }, [qnumber])


    const handlePrevQuestion = ()=>{        
        setQnumber(qnumber-1)
    }

    const handleNextQuestion = () => {
        setQnumber(qnumber+1);        

        let copy = [...test_results];
        copy[0][qnumber-1] = +qnumber;
        copy[1][qnumber-1] = +isAnswerCorrect;
        setTest_results(copy);

        if (qnumber>=total_questions)
            handleTestFinished(test_results);
    };

    const testTime = Number(testsData[qnumber-1].Time)*60;
    const { timer, isTimerEnd, handleStart } = useCountDown(testTime)
    const answers_to_select = []
    const total_questions = testsData.length;

    const answers_count = Number(testsData[qnumber-1].ANSWER_COUNT)
    const [test_results, setTest_results] = useState(Array.from({length: 2},()=> Array.from({length: total_questions}, () => null)));

    if (isTimerEnd)
        handleTestFinished(test_results);

    for (var i = 1; i <= answers_count; i++) {
        answers_to_select.push(
            <Col key={'col'+i} lg={6}>
                <div key={'answer'+i} id={'answer'+i} className={`answer ${answersToggle === 'answer'+i ? 'select' : null}`}
                    onClick={handleAnswerSelect}>תשובה אפשרית {i}</div></Col>);
    }

    const TestTitle = "המבחן הראשון הוא מבחן צורות"
    const TestDescription = `בכל אחת מהשאלות ${total_questions} צורות,  כאשר אחת מהן חסרה. ${"\n"}`+
                            `עליך למצוא מהי הצורה החסרה מתוך התשובות האפשריות הנתונות.${"\n"}${"\n"}`+
                            `הזמן שמוקצב למבחן הוא ${testTime/60} דקות`

    return (
        <>
        <Container className="c-tests">
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
                        <img className="question-img" src={require(`./TestImages/${testsData[qnumber-1].QUES_PIC1}.gif`).default} alt={qnumber} />
                        <br /><br />
                        <div>תשובות אפשריות:</div>
                        <img className="answers-img" src={require(`./TestImages/${testsData[qnumber-1].QUES_PIC2}.gif`).default} alt="" />                        
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
                            onClick={handlePrevQuestion}>לשאלה הקודמת</Button>:
                            null
                    }

                    <Button variant="flat-red" size="xxl"
                        onClick={handleNextQuestion}>לשאלה הבאה</Button>
                </div>
            </div>

        </Container>

        <StartTestModal Title={TestTitle} Text={TestDescription} handleStart={handleStart} />
        </>
        
    )
}
