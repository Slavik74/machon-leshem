
export default class MivdakModel {
    #pwd;   // pwd is a private property
    constructor(plainMivdak) {
        this.name = plainMivdak.name;  
        this.Time = plainMivdak.Time;
        this.TEST_NUM = plainMivdak.TEST_NUM;
        this.Hesber = plainMivdak.Hesber;
        this.QUEST_NUM = plainMivdak.QUEST_NUM;
        this.QUESTION = plainMivdak.QUESTION;
        this.QUES_PIC1 = plainMivdak.QUES_PIC1;
        this.QUES_PIC2 = plainMivdak.QUES_PIC2;
        this.ANSWER_COUNT = plainMivdak.ANSWER_COUNT;
        this.ANSWER1 = plainMivdak.ANSWER1;
        this.ANSWER2 = plainMivdak.ANSWER2;
        this.ANSWER3 = plainMivdak.ANSWER3;
        this.ANSWER4 = plainMivdak.ANSWER4;
        this.TRUE_Answer = plainMivdak.TRUE_Answer;
    }

    login(email, pwd) {
        return email.toLowerCase() === this.email.toLowerCase() && pwd === this.#pwd;
    }
} 

