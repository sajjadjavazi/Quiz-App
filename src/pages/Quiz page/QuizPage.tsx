import { Box, Typography, Button, LinearProgress } from "@mui/material";

const QuizPage = () => {
    return (
        <Box sx={{ marginTop: '100px', padding: '20px' }}>
            <LinearProgress variant="determinate" value={50} sx={{ marginBottom: '20px' }} /> {/* Example progress */}
            <Typography variant="h5">Question 1 of 10</Typography>
            <Typography variant="body1" sx={{ margin: '20px 0' }}>
                What is the capital of France?
            </Typography>
            {/* Answer Options */}
            <Button variant="contained" color="primary" sx={{ marginBottom: '10px' }}>Paris</Button>
            <Button variant="contained" color="primary" sx={{ marginBottom: '10px' }}>London</Button>
            <Button variant="contained" color="primary" sx={{ marginBottom: '10px' }}>Berlin</Button>
            <Button variant="contained" color="primary" sx={{ marginBottom: '10px' }}>Madrid</Button>
        </Box>
    );
};

export default QuizPage;