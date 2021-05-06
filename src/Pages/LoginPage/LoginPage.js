import React, { useState } from 'react';
import { Alert, Container, Form, Button } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './LoginPage.css'

function LoginPage({ activeUser, users, onLogin }) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);



    if (activeUser) {
        return <Redirect to="/online"/>
    }    

    //const history = useHistory();


    function login(e) {
        e.preventDefault();

        let activeUser = null;
        for (const user of users) {
            if (user.login(email, pwd)) {
                activeUser = user;
                break;
            }
        }

        if (activeUser) {
            onLogin(activeUser);
            //history.push("/online");
        } else {
            setShowInvalidLogin(true);
        }

    }

    return (

        <Container className="p-login">
            <div className="login-container">
                <div class="col-sm-4 signup-vertical-sep"></div>
                <div class="col-sm-4 signup-vertical-sep-text">כניסה ללקוחות</div>
                <div class="col-sm-4 signup-vertical-sep"></div>
                {showInvalidLogin ? <Alert variant="danger">שגיאה בהזנת הנתונים</Alert> : null}
                <Form onSubmit={login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>דוא"ל</Form.Label>
                        <Form.Control type="email" className="dir-ltr-left"
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control type="password" className="dir-ltr-left"
                            value={pwd} onChange={e => setPwd(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="submit" block>כניסה</Button>
                </Form>

                <Link to="/signup">עוד לא רשום?</Link>
            </div>
        </Container>

    );
}

export default LoginPage;