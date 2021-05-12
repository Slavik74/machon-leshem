import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router';
import './StartTestModal.css'

export default function StartTestModal({Title, Text, handleStart}) {
    
    const [show, setShow] = useState(true);
    let history = useHistory();
    const handleClose = () => {
        setShow(false);
        //return <Redirect to="/online"/>
        history.push('/mivdak')
    }
    const handleStartClick = () => {
        setShow(false);
        handleStart();
    }

    return (
        <>
            <Modal className="c-modal"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="md">
                <Modal.Header>
                    <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{Text}</Modal.Body>
                <Modal.Footer className="modalfooter">
                    <Button variant="primary" onClick={handleStartClick}>התחל</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
      
}

