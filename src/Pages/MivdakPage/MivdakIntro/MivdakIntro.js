import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './MivdakIntro.css'

export default function MivdakIntro({handleStartTests}) {

    return (
        <Container className="c-mivdakintro">
            <div className="text">המבחנים ב"בחן את עצמך" מתאימים לרמת הקושי במבחני המיון במכונים השונים. כך תוכל לקבל מידע אמין על סיכוייך להצליח.</div>
            <div className="sub-title">המבחנים לבחינת רמתך הם:</div>
            <ul>
                <li>מבחן צורות</li>
                <li>צבחן לוגיקה</li>
                <li>מבחן סדרות חשבוניות</li>
            </ul>
            <div className="sub-title">לקבלת תוצאה נכונה הקפד על הזמן המוקצב:</div>
            <ul>
                <li>מבחן צורות כולל 10 תרגילים ויש לבצעו תוך 8 דקות.</li>
                <li>מבחן לוגיקה כולל 8 תרגילים ויש לבצעו תוך 10 דקות</li>
                <li>מבחן סדרות חשבוניות כולל 10 תרגילים ויש לבצעו תוך 12 דקות</li>
            </ul>
            
            <div className="sub-title">כיצד נקבע הציון שלך?</div>
            <ul>
                <li><span className="bold">במבחן צורות - </span>נבחן שמצליח לפתור נכון 5 מתוך 10 התרגילים במבחן, ישיג במבחן מיון ציון ממוצע, וסיכוייו להתקבל נמוכים. נבחן שמצליח לפתור 8 מתוך 10 התרגילים, ישיג במבחן ציון גבוה וסיכוייו להצליח טובים</li>
                <li><span className="bold">במבחן לוגיקה - </span>פתרון נכון של 4 מתוך 8 התרגילים הוא ציון ממוצע. ציון גבוה ניתן לפתרון נכון של 6 מתוך 8 תרגילים</li>
                <li><span className="bold">במבחן סדרות - </span>פתרון נכון של 5 מתוך 10 תרגילים הוא ציון ממוצע. ציון גבוה ניתן לפתרון נכון של 8 מתוך 10 תרגילים</li>
            </ul>

            <div className="startbtn-box">
                <Button variant="flat-green" size="xxl"
                    onClick={handleStartTests}>התחל מבדק</Button>
            </div>

        </Container>
    );
}
