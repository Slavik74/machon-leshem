import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './MivdakPage.css'
import MivdakIntro from './MivdakIntro/MivdakIntro';
import TestShapes from './TestShapes/TestShapes';
import testsJSON from './../../data/Mivdak.json'
import MivdakModel from './../../model/MivdakModel';

export default function MivdakPage() {

    const [test_results1, SetTest_results1] = useState(Array([],[]))
    const [test_results2, SetTest_results2] = useState(Array([],[]))
    const [test_results3, SetTest_results3] = useState(Array([],[]))

    const tests = testsJSON.map(plainTest => new MivdakModel(plainTest));
    const [testNum, setTestNum] = useState(null)
    const [test_current, setTest_current] = useState(null)

    const handleStartTests = () =>{
        setTestNum(1)
    }

    function handleTimerEnd(test_results1){
        SetTest_results1(...test_results1)
        setTestNum(testNum+1)
    }


    useEffect(() => {
        const filtered_tests= testNum!=null && tests.filter(test => Number(test.TEST_NUM) === testNum);
        setTest_current(filtered_tests)
    }, [testNum])


    const renderTest = () => {   
        if(testNum === null) {
            return <MivdakIntro handleStartTests={handleStartTests} />
        } else if(testNum === 1) {
            return test_current && <TestShapes testsData={test_current} handleTestFinished={handleTimerEnd} />
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
