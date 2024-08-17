import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from "@mui/material";
import QuizContext from '../../context/QuizContext';

const ScorePage = () => {
    const { state, dispatch } = useContext(QuizContext);
    const navigate = useNavigate();

    const handleRetry = () => {
        dispatch({ type: 'RESET' });
        navigate('/');
    };

    return (
        <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
            <Typography variant="h4" gutterBottom>Your Score</Typography>
            <Typography variant="h2" color="primary">
                {state.score} / {state.questions.length}
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '20px' }} onClick={handleRetry}>
                Try Again
            </Button>
        </Box>
    );
};

export default ScorePage;
