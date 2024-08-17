import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography, Button, Slider } from "@mui/material";
import QuizContext from '../../context/QuizContext';

const SetupPage = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(QuizContext);
    const [category, setCategory] = useState(state.category);
    const [difficulty, setDifficulty] = useState(state.difficulty);
    const [numberOfQuestions, setNumberOfQuestions] = useState(state.numberOfQuestions);

    const handleStartQuiz = async () => {
        const apiUrl = `https://example.com/api/${category}/${difficulty}?limit=${numberOfQuestions}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();

        dispatch({ type: 'SET_QUESTIONS', payload: data.questions });
        dispatch({ type: 'SET_CATEGORY', payload: category });
        dispatch({ type: 'SET_DIFFICULTY', payload: difficulty });
        dispatch({ type: 'SET_NUMBER_OF_QUESTIONS', payload: numberOfQuestions });
        
        navigate('/quiz');
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
                            onChange={(e) => setCategory(e.target.value as string)}
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
                            onChange={(e) => setDifficulty(e.target.value as string)}
                            label="Difficulty"
                        >
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel>Number of Questions:</InputLabel>
                    <Slider
                        value={numberOfQuestions}
                        onChange={(e, value) => setNumberOfQuestions(value as number)}
                        min={5}
                        max={50}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        sx={{ marginBottom: '20px' }}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleStartQuiz}>
                        Start Quiz
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SetupPage;
