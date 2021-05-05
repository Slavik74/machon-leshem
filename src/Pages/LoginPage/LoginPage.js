import React, { useState } from 'react';
import { Alert, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);



    return (

        <Container className="p-login">
            <div className="loginContainer">
                <div class="col-sm-4 signup-vertical-sep"></div>
                <div class="col-sm-4 signup-vertical-sep-text">כניסה ללקוחות</div>
                <div class="col-sm-4 signup-vertical-sep"></div>
                {showInvalidLogin ? <Alert variant="danger">שגיאה בהזנת הנתונים</Alert> : null}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>דוא"ל</Form.Label>
                        <Form.Control type="email" className="dir-ltr-left"
                            value={email} onChange={e => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                        אנו לעולם לא נשתף אותו עם אף גורם אחר
                        </Form.Text>
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