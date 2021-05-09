import React, { useState } from 'react';
import { Alert, Container, Form, Button } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './LoginPage.css'

function LoginPage({ activeUser, users, onLogin }) {
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);

    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

    if (activeUser) {
        return <Redirect to="/online"/>
    }    

    //To update the state of form
    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })

        // Check and see if errors exist, and remove them from the error object:
        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: null
        })

      }

      const findFormErrors = () => {
        const { email, pwd } = form
        const newErrors = {}
        // email errors
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) newErrors.email = 'כתובת דוא"ל לא תקנית' 
        
        // password errors
        if ( !pwd || pwd === '' ) newErrors.pwd = 'שדה חובה'
        else if ( pwd.length < 8 ) newErrors.pwd = 'מינימום 8 תווים'
            
        return newErrors
    }


    function login(e) {
        e.preventDefault();


        // get our new errors
        const newErrors = findFormErrors()

        if ( Object.keys(newErrors).length > 0 ) {  // We got errors!
            setErrors(newErrors)
        } else {                        

            const { email, pwd } = form

            let activeUser = null;
            for (const user of users) {
                if (user.login(email, pwd)) {
                    activeUser = user;
                    break;
                }
            }
    
            if (activeUser) {
                onLogin(activeUser);
            } else {
                setShowInvalidLogin(true);
            }
    

        }


    }

    return (

        <Container className="p-login">
            <div className="login-container">
                <div className="col-sm-4 signup-vertical-sep"></div>
                <div className="col-sm-4 signup-vertical-sep-text">כניסה ללקוחות</div>
                <div className="col-sm-4 signup-vertical-sep"></div>
                {showInvalidLogin ? <Alert variant="danger">שגיאה בהזנת הנתונים</Alert> : null}
                <Form onSubmit={login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>דוא"ל</Form.Label>
                        <Form.Control type="email" className="dir-ltr-left"
                            onChange={e => {
                                setField('email', e.target.value)
                                setShowInvalidLogin(false)
                        }}
                            isInvalid={ !!errors.email }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.email }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control type="password" className="dir-ltr-left"
                            onChange={e => {
                                setField('pwd', e.target.value)
                                setShowInvalidLogin(false)
                        }}
                            isInvalid={ !!errors.pwd }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.pwd }
                        </Form.Control.Feedback>                            
                    </Form.Group>
                    <Button variant="success" type="submit" block>כניסה</Button>
                </Form>

                <Link to="/signup">עוד לא רשום?</Link>
            </div>
        </Container>

    );
}

export default LoginPage;