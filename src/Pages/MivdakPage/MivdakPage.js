import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './MivdakPage.css'
import MivdakIntro from './MivdakIntro/MivdakIntro';
import TestShapes from './TestShapes/TestShapes';
import testsJSON from './../../data/Mivdak.json'
import MivdakModel from './../../model/MivdakModel';
import TestLogic from './TestLogic/TestLogic';
import TestsResults from './TestsResults/TestsResults';

export default function MivdakPage() {

    const [test_results, SetTest_results] = useState([])

    const [testNum, setTestNum] = useState(null)
    const [testData1, setTestData1] = useState(null)
    const [testData2, setTestData2] = useState(null)
    const [testData3, setTestData3] = useState(null)


useEffect(() => {
    const tests = testsJSON.map(plainTest => new MivdakModel(plainTest));
    setTestData1(()=> tests.filter(test => Number(test.TEST_NUM) === 1))
    setTestData2(()=> tests.filter(test => Number(test.TEST_NUM) === 2))
    setTestData3(()=> tests.filter(test => Number(test.TEST_NUM) === 3))
}, [testNum])

    const handleStartTests = () =>{
        setTestNum(1)
    }


    function handleTimerEnd(res){
        test_results.push(...res)
        setTestNum(testNum+1)
    }



    const renderTest = () => {   
        
        if(testNum === null) {
            return <MivdakIntro handleStartTests={handleStartTests} />
        } else if(testNum === 1) {
            return <TestShapes testNum={testNum} testsData={testData1} handleTestFinished={handleTimerEnd} />
        } else if(testNum === 2) {
            return <TestLogic testNum={testNum} testsData={testData2} handleTestFinished={handleTimerEnd} />
        } else if(testNum === 3) {
            return <TestShapes testNum={testNum} testsData={testData3} handleTestFinished={handleTimerEnd} />
        } else {
            return <TestsResults testsResults={test_results} />
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
