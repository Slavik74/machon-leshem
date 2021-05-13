import React from 'react'
import { Container, Row } from 'react-bootstrap';

export default function TestsResults({testsResults}) {    
    let sum = 0;
    return (
        <div>

            <Container className="c-tests">
                <Row className="header">
                    התוצאות שהשגת במבדק:
                </Row>

                <div className="results-content">   

                    <div>תוצאות מבחן צורות:</div>
                    <table className="results-table">
                        <tr>
                            {testsResults[0].map((subItems, sIndex) => {
                                return <th> {subItems} </th>;
                            })}
                        </tr>
                        <tr>
                            {testsResults[1].map((subItems, sIndex) => {
                                const color = subItems === 1? 'fore-green': 'fore-red'
                                sum += subItems
                                return <td className={color}> {subItems} </td>;
                            })                            
                            }
                        </tr>
                    </table>                                        
                    <div>במבחן זה הצגת ציון {sum}</div>

                    <hr/>

                    <div>תוצאות מבחן לוגיקה:</div>
                    <table className="results-table">
                        <tr>
                            {
                            sum=0,
                            testsResults[2].map((subItems, sIndex) => {
                                return <th> {subItems} </th>;
                            })}
                        </tr>
                        <tr>
                            {testsResults[3].map((subItems, sIndex) => {
                                const color = subItems === 1? 'fore-green': 'fore-red';
                                sum += subItems
                                return <td className={color}> {subItems} </td>;                                
                            })}
                        </tr>
                    </table> 
                    <div>במבחן זה הצגת ציון {sum}</div>
                    <hr/>

                    <div>תוצאות מבחן סדרות:</div>
                    <table className="results-table">
                        <tr>
                            {
                            sum=0,
                            testsResults[4].map((subItems, sIndex) => {
                                return <th> {subItems} </th>;
                            })}
                        </tr>
                        <tr>
                            {testsResults[5].map((subItems, sIndex) => {
                                const color = subItems === 1? 'fore-green': 'fore-red'
                                sum += subItems
                                return <td className={color}> {subItems} </td>;
                            })}
                        </tr>
                    </table> 
                    <div>במבחן זה הצגת ציון {sum}</div>
                </div>
            </Container>
        </div>
    )
}
