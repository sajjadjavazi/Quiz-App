import { Box, Typography, Button } from "@mui/material";

const ScorePage = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
            <Typography variant="h4" gutterBottom>Your Score</Typography>
            <Typography variant="h2" color="primary">8 / 10</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>Try Again</Button>
        </Box>
    );
};

export default ScorePage;