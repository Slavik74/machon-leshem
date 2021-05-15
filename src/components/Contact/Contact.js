import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';
import configData from "./../../../package.json";       //to hide TMDB API keys

export default function Contact({handleHide}) {

    const [contactSent, setContactSent] = useState(false);
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
        handleHide()
    };

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


    useEffect(() => {
        //On first render set default values
        setField('areaCode', '050')
        setField('moreDetails','')
    }, [])

      //sing these cases, we're going to create a function that checks for them, 
      //  then constructs an errors object with error messages:
    const findFormErrors = () => {
        const { fullname, email, phone, testName } = form
        const newErrors = {}

        // full name errors
        if ( !fullname || fullname === '' ) newErrors.fullname = 'שדה חובה'
        else if ( fullname.length > 30 ) newErrors.fullname = 'שם ארוך מדי'

        // email errors
        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!emailPattern.test(email)) newErrors.email = 'כתובת דוא"ל לא תקנית' 
        
        const phonePattern = new RegExp(/^\d{7}$/);
        if (!phonePattern.test(phone)) newErrors.phone = 'מספר הטלפון אינו תקני' 

        // test name errors
        if ( !testName || testName === '' ) newErrors.testName = 'שדה חובה'
        else if ( testName.length < 2 ) newErrors.testName = 'מינימום 2 תווים'
            
        return newErrors
    }


    function sendEmail(form){
        const { fullname, email, areaCode, phone, testName, moreDetails } = form
        const toEmail = configData.send_email //get email address from config file

         emailjs.send("service_9kijkim","template_9yv4meo",{
            full_name: fullname,
            email: email,
            phone_number: `${areaCode}-${phone}`,
            test_name: testName,
            more_details: moreDetails,
            to_email: toEmail//"slavik.works@gmail.com",
            });    
        
        setContactSent(true);

    }


    function contact(e) {

        e.preventDefault()        

        // get our new errors
        const newErrors = findFormErrors()

        if ( Object.keys(newErrors).length > 0 ) {  // We got errors!
            setErrors(newErrors)
        } else {                                
            sendEmail(form)
        }

    }

    return (

        <Modal 
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
            size="lg">

            <Modal.Header closeButton>
                <Modal.Title><div className="modal-title">השאירו פרטים או התקשרו 03-5336177</div></Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Container className="p-contact">
                    <div className="contact-container">
                        {
                        !contactSent && 
                        <Form onSubmit={contact}>
                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="formBasicFullname">
                                        <Form.Label>שם מלא</Form.Label>
                                        <Form.Control type="text" 
                                            onChange={e => setField('fullname', e.target.value)} 
                                            isInvalid={ !!errors.fullname } 
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.fullname }
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>דוא"ל</Form.Label>
                                        <Form.Control type="text" className="dir-ltr-left"
                                            onChange={e => setField('email', e.target.value)}
                                            isInvalid={ !!errors.email}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.email }
                                        </Form.Control.Feedback>
                                        <Form.Text className="text-muted">
                                            אנו לעולם לא נשתף אותו עם אף גורם אחר
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Label>טלפון</Form.Label>
                                        <div className="phone-group">
                                            <div className="phone-box">
                                                <Form.Control type="tel"  className="dir-ltr-left"
                                                    onChange={e => setField('phone', e.target.value)} 
                                                    isInvalid={ !!errors.phone } 
                                                />
                                                <Form.Control.Feedback type='invalid'>
                                                    { errors.phone }
                                                </Form.Control.Feedback>
                                            </div>
                                            <Form.Control as="select" className="area-code"
                                                onChange={e => setField('areaCode', e.target.value)} >
                                                <option value="050">050</option>
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
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col lg={6}>
                                    <Form.Group controlId="formBasicTestname">                                       
                                        <Form.Label>לאיזה מבחן אתם מתכוננים?</Form.Label>
                                        <Form.Control type="text" 
                                            onChange={e => setField('testName', e.target.value)} 
                                            isInvalid={ !!errors.testName } 
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            { errors.testName }
                                        </Form.Control.Feedback>

                                    </Form.Group>

                                    <Form.Group controlId="formBasicMoreDetails">
                                        <Form.Label>פרטים נוספים על המבחן</Form.Label>
                                        <Form.Control as="textarea" rows="3"
                                            onChange={e => setField('moreDetails', e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>
                            </Row>

                            <Button variant="success" type="submit" block>שלח/י</Button>
                        </Form>
                    }

                    {
                        contactSent &&
                            <div className="h3 text-center">
                                <div>תודה על הפנייה אלינו</div>
                                <div>נציג שלנו יצור איתך קשר בשעות הקרובות</div>
                                <br />
                                <br />
                                <Button variant="flat-red" onClick={handleClose}>סגור</Button>
                            </div>

                    }
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

