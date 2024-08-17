import { Box, Typography } from "@mui/material"

const Header = () => {
    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'purple',
            color: 'white',
            textAlign: 'center',
            padding: '10px 0',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
        }}>
            <Typography variant="h4">Quiz Master</Typography>
        </Box>
    );
}

export default Header;
