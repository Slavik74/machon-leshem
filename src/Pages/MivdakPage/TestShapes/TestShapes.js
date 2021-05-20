import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import { useState, useEffect } from 'react';
import useCountDown from './../../../hook/useCountDown';
import { formatTime } from '../../../Utils';
import StartTestModal from './../../../components/StartTestModal/StartTestModal';

const clockIcon = <FontAwesomeIcon icon={faClock} />

export default function TestShapes({testNum, testsData, handleTestFinished}) {
    
    const [qnumber, setQnumber] = useState(1)
    const [answersToggle, setAnswersToggle] = useState(null)
    const [qAnswer, setQAnswer] = useState(null)
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)

    //Save user selected answers
    const [user_answers, SetUser_answers] = useState([])

    //Toggle selected answer for answer options
    const handleAnswerSelect = event => {
        setAnswersToggle(event.target.id);
        const strAnswer = event.target.id
        setQAnswer(strAnswer.slice(6))  //Remove the string 'answer' from id to get the number of the answer    
    };
        
    useEffect(() => {
        setIsAnswerCorrect(!!qAnswer && Number(qAnswer)===Number(testsData[qnumber-1].TRUE_Answer)? 1:0)

        //Save users answer selections
        let copy = [...user_answers];
        copy[qnumber-1] = +qAnswer;
        SetUser_answers(copy);
    
    }, [qAnswer])

    useEffect(() => {
        if(user_answers[qnumber-1]){
            setQAnswer(user_answers[qnumber-1])
            setAnswersToggle('answer'+user_answers[qnumber-1]);
        }
        else{
            setQAnswer(null)
            setAnswersToggle(null);        
        }
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
    const testName = testsData[qnumber-1].name;
    const { timer, isTimerEnd, handleStart } = useCountDown(testTime)
    const answers_to_select = []
    const total_questions = testsData.length;

    const answers_count = Number(testsData[qnumber-1].ANSWER_COUNT)

    //Save test results with correct/wront answers
    const [test_results, setTest_results] = useState(Array.from({length: 2},()=> Array.from({length: total_questions}, () => null)));

    if (isTimerEnd)
        handleTestFinished(test_results);

    for (var i = 1; i <= answers_count; i++) {
        answers_to_select.push(
            <Col key={'col'+i} lg={answers_count>4?6:12}>
                <div key={'answer'+i} id={'answer'+i} className={`answer ${answersToggle === 'answer'+i ? 'select' : null}`}
                    onClick={handleAnswerSelect}>תשובה אפשרית {i}</div></Col>);
    }

    const TestTitle = `המבחן ${testNum>1?"הבא":"הראשון"} הוא מבחן ${testName}`
    const TestDescription = `${testsData[qnumber-1].Hesber} ${"\n"}${"\n"}` +
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
                    {testNum===2?
                        <Col md={6} className="question-box">
                            <div>שאלה:</div>
                            <div className="question">{testsData[qnumber-1].QUESTION}</div>
                            <br /><br />
                            <div>תשובות אפשריות:</div>
                            <ol>
                                <li>{testsData[qnumber-1].ANSWER1}</li>
                                <li>{testsData[qnumber-1].ANSWER2}</li>
                                <li>{testsData[qnumber-1].ANSWER3}</li>
                                <li>{testsData[qnumber-1].ANSWER4}</li>
                            </ol>                        
                        </Col>:                
                        <Col md={6} className="question-box">
                            <div>שאלה:</div>
                            <img className="question-img" src={require(`./TestImages/${testNum}/${testsData[qnumber-1].QUES_PIC1}.gif`).default} alt={qnumber} />
                            <br /><br />
                            <div>תשובות אפשריות:</div>
                            <img className="answers-img" src={require(`./TestImages/${testNum}/${testsData[qnumber-1].QUES_PIC2}.gif`).default} alt="" />                        
                        </Col>
                    }

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
