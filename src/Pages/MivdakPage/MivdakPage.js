import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './MivdakPage.css'
import MivdakIntro from './MivdakIntro/MivdakIntro';
import TestShapes from './TestShapes/TestShapes';
import testsJSON from './../../data/Mivdak.json'
import MivdakModel from './../../model/MivdakModel';
import TestLogic from './TestLogic/TestLogic';

export default function MivdakPage() {

    const [test_results, SetTest_results] = useState([])

    const tests = testsJSON.map(plainTest => new MivdakModel(plainTest));
    const [testNum, setTestNum] = useState(null)
    const [test_current, setTest_current] = useState(null)

    const handleStartTests = () =>{
        setTestNum(1)
    }


    function handleTimerEnd(res){
        test_results.push(...res)
//        if (testNum===1)
//            SetTest_results1(...test_results)
//        if (testNum===2)
//            SetTest_results2(...test_results)
//        if (testNum===3)
//            SetTest_results3(...test_results)
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
            return test_current && <TestLogic testsData={test_current} handleTestFinished={handleTimerEnd} />
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
