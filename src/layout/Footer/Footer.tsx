import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <div>
             <Box sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#000000',
            color: 'white',
            textAlign: 'center',
            padding: '10px 0',
            zIndex: 1000,
        }}>
            <Typography variant="h5">
                made with <span style={{ color: 'red' }}>♥</span> by Sajjad
            </Typography>
        </Box>

        </div>
    );
}

export default Footer;
