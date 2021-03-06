import React from 'react'

import Styles from '../App.css';
import IntroImage from '../images/circle.png';

export default class QuestionSlide extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            buttonDisabled: true,
            chosenAnswer: '',
        }
    }

    handle(e){
        e.target.focus();

        let answer = e.target.value
        this.setState({chosenAnswer: answer, buttonDisabled: false})
        console.log(this.state.chosenAnswer)
    }

    render(){
        const {question, onAnswered, onPrevius, numberOfQuestions, index} = this.props
        const answersButton = question.answers.map((answer, i) => {
            return (
                <div className={Styles.answerContainer}>
                    <button 
                        className={Styles.answerCircle}
                        key={answer.answer}
                        tabindex={i}
                        value={answer.answer}
                        onClick={this.handle.bind(this)}>
                        <div 
                            className={Styles.answerText}
                            key={answer.answer + 'text'}
                            style={{"z-index": i + 1}}
                            >
                            {answer.answer}
        
                        </div>
                            <span 
                            key={answer.answer + i}
                            className={Styles.whiteCircle}
                            ></span>
                     </button>
                </div>
            )
        });


        const currentQuestion = index + 1;
        return(
            <div className={Styles.slide}>
                <div className={Styles.questionContainer}>
                    <div className={Styles.questionContentContainer}>
                        <p className={Styles.counter}>{currentQuestion}/{numberOfQuestions}</p>
                        <img src={question.image} className={Styles.questionImage} alt="Next" />
                        <h2 className={Styles.questionTitle}>{question.question}</h2>
                        <div className={Styles.answers}>
                            {answersButton}
                          {/*  <div className={Styles.horizontalrule}></div>*/}
                        </div>
                    </div>
                    <div className={Styles.prevNextButtonWrapper}>
                        <button 
                            className={Styles.previusButton}
                            onClick={() => onPrevius()}>
                                Previus
                        </button>
                        <button 
                            className={Styles.nextButton}
                            disabled={this.state.buttonDisabled}
                            onClick={() => onAnswered(this.state.chosenAnswer)}>
                                Next
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


