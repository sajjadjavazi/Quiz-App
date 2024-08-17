import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './pages/route';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6a1b9a', // Purple
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#f4f4f9', // Light grey background
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>
);

export default App;