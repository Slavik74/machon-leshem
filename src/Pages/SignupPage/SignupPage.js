import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './SignupPage.css';
import UserModel from './../../model/UserModel';

function SignupPage({activeUser, users, onSignup}) {
    const [userExist, setUserExist] = useState(false);

    //The form object will hold a key-value pair for each of our form fields, 
    //  and the errors object will hold a key-value pair for each error that we come across on form submission.
    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

    if (activeUser) {
        return <Redirect to="/online"/>
    }

    //To update the state of form.
    //This will update our state to keep all the current form values, 
    //  then add the newest form value to the right key location.
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

      //sing these cases, we're going to create a function that checks for them, 
      //  then constructs an errors object with error messages:
      const findFormErrors = () => {
        const { lname, fname, email, pwd } = form
        const newErrors = {}
        // name errors
        if ( !fname || fname === '' ) newErrors.fname = 'שדה חובה'
        else if ( fname.length > 30 ) newErrors.fname = 'שם ארוך מדי'

        if ( !lname || lname === '' ) newErrors.lname = 'שדה חובה'
        else if ( lname.length > 30 ) newErrors.lname = 'שם ארוך מדי'

        // email errors
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) newErrors.email = 'כתובת דוא"ל לא תקנית' 
        
        // password errors
        if ( !pwd || pwd === '' ) newErrors.pwd = 'שדה חובה'
        else if ( pwd.length < 8 ) newErrors.pwd = 'מינימום 8 תווים'
            
        return newErrors
    }


    function signup(e) {

        e.preventDefault()        

        // get our new errors
        const newErrors = findFormErrors()

        if ( Object.keys(newErrors).length > 0 ) {  // We got errors!
            setErrors(newErrors)
        } else {                        
            
            const { lname, fname, email, pwd } = form

            for (const user of users) {
                if (user.email===email) {                
                    setUserExist(true)
                    onSignup(null);
                    return
                }
            }

            const user = new UserModel({
                id: users[users.length - 1].id + 1,
                email,
                fname,
                lname,
                pwd
            });

            onSignup(user);

        }



    }

    return (

        <Container className="p-signup">
            <div className="signup-container">
                <div class="col-sm-4 signup-vertical-sep"></div>
                <div class="col-sm-4 signup-vertical-sep-text">כניסה ללקוחות</div>
                <div class="col-sm-4 signup-vertical-sep"></div>
                {userExist ? <Alert variant="danger">משתמש כבר קיים!</Alert> : null}
                <Form onSubmit={signup}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>דוא"ל</Form.Label>
                        <Form.Control type="text" className="dir-ltr-left"
                            onChange={ 
                                e => {setField('email', e.target.value)
                                setUserExist(false)
                            }}
                            isInvalid={ !!errors.email }
                        />
                        <Form.Control.Feedback type='invalid'>
                            { errors.email }
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                        אנו לעולם לא נשתף אותו עם אף גורם אחר
                        </Form.Text>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>סיסמה</Form.Label>
                        <Form.Control type="password"
                            className="dir-ltr-left"
                            onChange={ e => setField('pwd', e.target.value)}
                            isInvalid={ !!errors.pwd } />
                        <Form.Control.Feedback type='invalid'>
                            { errors.pwd }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicFname">
                    <Form.Label>שם פרטי</Form.Label>
                    <Form.Control type="text" 
                        onChange={e => setField('fname', e.target.value)} 
                        isInvalid={ !!errors.fname } />
                        <Form.Control.Feedback type='invalid'>
                            { errors.fname }
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicLname">
                        <Form.Label>שם משפחה</Form.Label>
                        <Form.Control type="text" 
                            onChange={ e => setField('lname', e.target.value)} 
                            isInvalid={ !!errors.lname } />
                            <Form.Control.Feedback type='invalid'>
                                { errors.lname }
                            </Form.Control.Feedback>    
                    </Form.Group>

                    <Button variant="success" type="submit" block>הרשמה</Button>
                </Form>

                <Link to="/login">כבר רשום?</Link>
            </div>
        </Container>

    );
}

export default SignupPage;