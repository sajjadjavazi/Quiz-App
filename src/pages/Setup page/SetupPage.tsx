import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Typography, Button, Slider } from "@mui/material";

const SetupPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <Typography variant="h4" gutterBottom>Setup Your Quiz</Typography>
            <Card sx={{ width: '90%', maxWidth: '500px', marginBottom: '20px' }}>
                <CardContent>
                    <FormControl fullWidth sx={{ marginBottom: '20px', color:"primary" }}>
                        <InputLabel>Category</InputLabel>
                        <Select defaultValue="" label="Category">
                            <MenuItem value="general">General Knowledge</MenuItem>
                            <MenuItem value="science">Science</MenuItem>
                            <MenuItem value="history">History</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                        <InputLabel>Difficulty</InputLabel>
                        <Select defaultValue="" label="Difficulty">
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel>number of questions:</InputLabel>
                    <Slider defaultValue={10} min={5} max={50} aria-label="Default" valueLabelDisplay="auto" sx={{ marginBottom: '20px' }}/>
                    <Button variant="contained" color="primary" fullWidth>
                        Start Quiz
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SetupPage;