import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type props = {
children: ReactNode
}
const Layout = ({children} : props) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}

export default Layout;
