import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, LinearProgress } from "@mui/material";
import QuizContext from '../../context/QuizContext';

const QuizPage = () => {
    const { state, dispatch } = useContext(QuizContext);
    const navigate = useNavigate();
    const currentQuestion = state.questions[state.currentQuestionIndex];

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            dispatch({ type: 'INCREMENT_SCORE' });
        }

        const nextQuestionIndex = state.currentQuestionIndex + 1;
        if (nextQuestionIndex < state.questions.length) {
            dispatch({ type: 'SET_CURRENT_QUESTION_INDEX', payload: nextQuestionIndex });
        } else {
            navigate('/score');
        }
    };

    return (
        <Box sx={{ marginTop: '70px', padding: '20px' }}>
            <LinearProgress
                variant="determinate"
                value={(state.currentQuestionIndex / state.questions.length) * 100}
                sx={{ marginBottom: '20px' }}
            />
            <Box>
                <Typography variant="h5">
                    Question {state.currentQuestionIndex + 1} of {state.questions.length}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ margin: '20px 0' }}>
                        {currentQuestion.question}
                    </Typography>
                    {currentQuestion.answers.map((answer: string, index: number) => (
                        <Button
                            key={index}
                            variant="contained"
                            color="primary"
                            sx={{ marginBottom: '10px', width: '200px' }}
                            onClick={() => handleAnswer(answer === currentQuestion.correctAnswer)}
                        >
                            {answer}
                        </Button>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default QuizPage;
