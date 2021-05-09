import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './MivdakPage.css'
import MivdakIntro from './MivdakIntro/MivdakIntro';
import TestShapes from './TestShapes/TestShapes';
import testsJSON from './../../data/Mivdak.json'
import MivdakModel from './../../model/MivdakModel';

export default function MivdakPage() {


    const tests = testsJSON.map(plainTest => new MivdakModel(plainTest));
    const [testNum, setTestNum] = useState(null)
    const [test_current, setTest_current] = useState(null)

    const handleStartTests = () =>{
        setTestNum(1)
    }

    function handleTimerEnd(){
        setTestNum(testNum+1)
    }


    useEffect(() => {
        setTest_current(()=>{
            console.log(testNum);
            const filtered_tests= tests.filter(test => Number(test.TEST_NUM) === testNum);
            setTest_current(filtered_tests)
        })
    }, [testNum])


    const renderTest = () => {   
        if(testNum === null) {
            return <MivdakIntro handleStartTests={handleStartTests} />
        } else if(testNum === 1) {
            return <TestShapes testsData={test_current} handleTimerEnd={handleTimerEnd} />
        } else if(testNum === 2) {
            return null
        } else if(testNum === 3) {
            return null
        } else {
            return null
        }    
    }

    return (
        <Container className="p-mivdak">
            <div className="mivdak-title">בחן את עצמך</div>
            <div className="mivdak-container">
                {renderTest()}
            </div>
        </Container>
    );
}
