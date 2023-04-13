import react, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Challenge() {
    const [completedChallenge, setCompletedChallenge] = useState(false);
    const [score, setScore] = useState(0);

    const challenge = {
        question: 'What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?',
        options: [
            { option: 'Washington Monument', isCorrect: true },
            { option: 'Statue of Liberty', isCorrect: false },
            { option: 'Mount Rushmore', isCorrect: false },
            { option: 'Golden Gate Bridge', isCorrect: false }
        ]
    }



    return (
        <div className="challenge">
            {!completedChallenge ? <Question challenge={challenge} score={score} setScore={setScore} setCompletedChallenge={setCompletedChallenge} />
                : <ScorePage score={score} />}
        </div>
    );
}

function Question(props) {
    const [selectedOption, setSelectedOption] = useState('');
    const [correct, setCorrect] = useState(false);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            props.setScore(props.score + 1);
            alert("You answer is corret! You get 1 score!");
        } else {
            alert("You answer is wrong!");
        }
        props.setCompletedChallenge(true)
    };

    return (
        <div >
            <h3>{props.challenge.question}</h3>
            <div className='answer-section'>
                {props.challenge.options.map((option) => (
                    <Button variant="light" key={option.option} onClick={() => handleAnswerOptionClick(option.isCorrect)}>{option.option}</Button>
                ))}
            </div>
        </div>
    );
}

function ScorePage(props) {
    return (
        <div>
            <div>You have completed the daily challenge</div>
            <div>You have {props.score} score now.</div>
        </div>
    );
}

export default Challenge;