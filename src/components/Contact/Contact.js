import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './Contact.css';

function SignupPage({activeUser, users, onSignup}) {
    const [userExist, setUserExist] = useState(false);

    //The form object will hold a key-value pair for each of our form fields, 
    //  and the errors object will hold a key-value pair for each error that we come across on form submission.
    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

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
        const { fullname, email, pwd } = form
        const newErrors = {}
        // name errors
        if ( !fullname || fullname === '' ) newErrors.fname = 'שדה חובה'
        else if ( fname.length > 30 ) newErrors.fname = 'שם ארוך מדי'

        // email errors
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) newErrors.email = 'כתובת דוא"ל לא תקנית' 
        
        // password errors
        if ( !pwd || pwd === '' ) newErrors.pwd = 'שדה חובה'
        else if ( pwd.length < 8 ) newErrors.pwd = 'מינימום 8 תווים'
            
        return newErrors
    }


    function contact(e) {

        e.preventDefault()        

        // get our new errors
        const newErrors = findFormErrors()

        if ( Object.keys(newErrors).length > 0 ) {  // We got errors!
            setErrors(newErrors)
        } else {                        
            
            const { lname, fname, email, pwd } = form

            for (const user of users) {
                if (user && user.email===email) {                
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

        <Container className="p-contact">
            <div className="contact-container">
                <div className="col-sm-4 contact-vertical-sep"></div>
                <div className="col-sm-4 contact-vertical-sep-text">השאירו פרטים או התקשרו 03-5336177</div>
                <div className="col-sm-4 contact-vertical-sep"></div>
                <Form onSubmit={contact}>
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

                    <Form.Group controlId="formBasicLname">
                        <Form.Label>שם משפחה</Form.Label>
                        <Form.Control type="select" class="areaCode" type="tel" name="areaCode">
                                    <Form.option value="050">050</Form.option>
                                    <option value="051">051</option>
                                    <option value="052">052</option>
                                    <option value="053">053</option>
                                    <option value="054">054</option>
                                    <option value="055">055</option>
                                    <option value="058">058</option>
                                    <option value="072">072</option>
                                    <option value="073">073</option>
                                    <option value="076">076</option>
                                    <option value="077">077</option>
                                    <option value="078">078</option>
                                    <option value="079">079</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>

                        </Form.Control>
                        <Form.Control.Feedback type='invalid'>
                                { errors.lname }
                            </Form.Control.Feedback>    
                    </Form.Group>


                    <Button variant="success" type="submit" block>שלח/י</Button>
                </Form>

                <Link to="/login">כבר רשום?</Link>
            </div>
        </Container>

    );
}

export default SignupPage;