import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";

type props = {
    children: ReactNode
}
const Layout = ({ children }: props) => {
    return (
        <>
            <Header />
            <Box sx={{ mt: '61px', mb:'50px' }}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Layout;
