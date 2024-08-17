import { useContext, useState } from 'react';
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography, Button, Slider, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { getApiUrl } from '../../utils/apiUrls';
import QuizContext from '../../context/QuizContext';

const SetupPage = () => {
    const { dispatch } = useContext(QuizContext);
    const navigate = useNavigate();

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [numberOfQuestions, setNumberOfQuestions] = useState(1);
    const [loading] = useState(false);
    const [error, setError] = useState('');

    const handleStartQuiz = async () => {
        if (category && difficulty) {
            const apiUrl = getApiUrl(category, difficulty, numberOfQuestions);
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.response_code === 0) {
                dispatch({ type: 'SET_QUESTIONS', payload: data.results });
                dispatch({ type: 'SET_CATEGORY', payload: category });
                dispatch({ type: 'SET_DIFFICULTY', payload: difficulty });
                dispatch({ type: 'SET_NUMBER_OF_QUESTIONS', payload: numberOfQuestions });

                navigate('/quiz');
            } else {
                setError('No questions found for the selected category and difficulty.');
            }
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <Typography variant="h4" gutterBottom>Setup Your Quiz</Typography>
            <Card sx={{ width: '90%', maxWidth: '500px', marginBottom: '20px' }}>
                <CardContent>
                    <FormControl fullWidth sx={{ marginBottom: '20px', color: "primary" }}>
                        <InputLabel>Category</InputLabel>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            label="Category"
                        >
                            <MenuItem value="general">General Knowledge</MenuItem>
                            <MenuItem value="science">Science</MenuItem>
                            <MenuItem value="history">History</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                        <InputLabel>Difficulty</InputLabel>
                        <Select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            label="Difficulty"
                        >
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel>Number of questions:</InputLabel>
                    <Slider
                        defaultValue={5}
                        min={1}
                        max={10}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        value={numberOfQuestions}
                        onChange={(_e, newValue) => setNumberOfQuestions(newValue as number)}
                        sx={{ marginBottom: '20px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleStartQuiz}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Start Quiz'}
                    </Button>
                    {error && <Typography color="error">{error}</Typography>}
                </CardContent>
            </Card>
        </Box>
    );
};

export default SetupPage;
