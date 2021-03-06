import React from 'react'
import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Contact from './../../../components/Contact/Contact';


export function ShowChances({TestNum, trues}) {
    let chances=0;
    let message = '';
    chances=0
        switch (TestNum) {
            case  1:
            case  3:
                if (trues>=4) chances=0;
                if (trues>=5) chances=1;
                if (trues>=8) chances=2;
                break;
            case 2:
                if (trues>=3) chances=0;
                if (trues>=4) chances=1;
                if (trues>=6) chances=2;
                break;
            default:
                break;
        }
        if (chances === 0)
            message = "השגת ציון נמוך. סיכוייך להצליח במבחן נמוכים.";
        else if (chances === 1)
            message = "השגת ציון ממוצע. סיכוייך להצליח במבחן נמוכים.";
        else if (chances === 2)
            message = "השגת ציון גבוה. סיכוייך להצליח במבחן טובים.";
    return (
        <div>
            {message}
        </div>
    )
}



export default function TestsResults({testsResults1, testsResults2, testsResults3}) {    


    const [showContact, setShowContact] = useState(false);

    const testsResults = []
    if (testsResults1[1])
        testsResults.push([...testsResults1[0]])
    else
        testsResults.push(...testsResults1)

    if (testsResults2[1])
        testsResults.push([...testsResults2[0]])
    else
        testsResults.push(...testsResults2)

    if (testsResults3[1])
        testsResults.push([...testsResults3[0]])
    else
        testsResults.push(...testsResults3)


    let sum = new Array(3).fill(0);


    const handleShowContact = () => {
        setShowContact(true)
    }

    const handleHideContact = (e) => {
        setShowContact(false)
    }

    return (
        <div>
            {showContact?<Contact handleHide={handleHideContact} />:null}

            <Container className="c-tests">
                <Row className="header">
                    התוצאות שהשגת במבדק:
                </Row>

                <Row className="results-row">
                    <Col md={6} className="results-content">
                        <div>תוצאות מבחן צורות:</div>
                        <table className="results-table">
                            <tr>
                                {testsResults[0].map((subItems, index) => {
                                    return <th> {index+1} </th>;
                                })}
                            </tr>
                            <tr>
                                {
                                testsResults[0].map((subItems) => {
                                    const color = subItems === 1? 'fore-green': 'fore-red'
                                    sum[0] += Number(subItems)
                                    return <td className={color}> {subItems? subItems:0} </td>;
                                })                            
                                }
                            </tr>
                        </table>                                        
                        <div>במבחן זה הצגת ציון {sum[0]}</div>
                        <ShowChances TestNum={1} trues={sum[0]} />

                        <hr/>

                        <div>תוצאות מבחן לוגיקה:</div>
                        <table className="results-table">
                            <tr>
                                {testsResults[1].map((subItems, index) => {
                                    return <th> {index+1} </th>;
                                })}
                            </tr>
                            <tr>
                                {testsResults[1].map((subItems) => {
                                    const color = subItems === 1? 'fore-green': 'fore-red';
                                    sum[1] += Number(subItems)
                                    return <td className={color}> {subItems? subItems:0} </td>;
                                })}
                            </tr>
                        </table> 
                        <div>במבחן זה הצגת ציון {sum[1]}</div>
                        <ShowChances TestNum={2} trues={sum[1]} />
                        <hr/>

                        <div>תוצאות מבחן סדרות:</div>
                        <table className="results-table">
                            <tr>
                                {testsResults[2].map((subItems, index) => {
                                    return <th> {index+1} </th>;
                                })}
                            </tr>
                            <tr>
                                {testsResults[2].map((subItems) => {
                                    const color = subItems === 1? 'fore-green': 'fore-red'
                                    sum[2] += Number(subItems)
                                    return <td className={color}> {subItems? subItems:0} </td>;
                                })}
                            </tr>
                        </table> 
                        <div>במבחן זה הצגת ציון {sum[2]}</div>
                        <ShowChances TestNum={3} trues={sum[2]} />
                    </Col>
                    <Col md={6} className="results-contact h3">
                        <div>
                            השאירו פרטים&nbsp;&nbsp;
                            <Button className="contact-btn" variant="flat-red" size="lg" onClick={handleShowContact}>צרו קשר</Button>
                        </div>
                        <div>או התקשרו 03-5336177</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
