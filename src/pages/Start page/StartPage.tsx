import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate("/setup");
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height:'84vh',
            background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)',
        }}>
            <Typography variant="h3" sx={{ marginBottom: '20px' }}>
                Welcome to the Quiz!
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={startQuiz}
                sx={{
                    fontSize: '1.2rem',
                    padding: '10px 20px',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    }
                }}
            >
                Start Quiz
            </Button>
        </Box>
    );
};

export default StartPage;

