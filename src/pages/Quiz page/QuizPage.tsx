import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, LinearProgress } from "@mui/material";
import QuizContext from '../../context/QuizContext';

const QuizPage = () => {
    const { state, dispatch } = useContext(QuizContext);
    const navigate = useNavigate();

    const currentQuestion = state.questions[state.currentQuestionIndex];

    const answers = useMemo(() => {
        if (!currentQuestion) return [];
        const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
        return allAnswers.sort(() => Math.random() - 0.5);
    }, [currentQuestion]);

    const handleAnswer = (selectedAnswer: string) => {
        const isCorrect = selectedAnswer === currentQuestion.correct_answer;

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

    if (!currentQuestion) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
                <Typography variant="h5">Loading...</Typography>
            </Box>
        );
    }

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
                    {answers.map((answer, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            color="primary"
                            sx={{ marginBottom: '10px', width: '200px' }}
                            onClick={() => handleAnswer(answer)}
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
