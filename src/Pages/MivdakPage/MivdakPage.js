import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './MivdakPage.css'
import MivdakIntro from './MivdakIntro/MivdakIntro';
import TestShapes from './TestShapes/TestShapes';

export default function MivdakPage() {

    const [testNum, setTestNum] = useState(null)

    const handleStartTests = () =>{
        setTestNum(1)
    }

    function handleTimerEnd(){
        alert("timer ended")
        setTestNum(testNum+1)
    }


    const renderTest = () => {   
        if(testNum === null) {
            return <MivdakIntro handleStartTests={handleStartTests} />
        } else if(testNum === 1) {
            return <TestShapes handleTimerEnd={handleTimerEnd} />
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
