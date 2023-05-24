import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Container } from "react-bootstrap";

const Layout = () => {
    return(
        <>
            <Header />
            <Container className="min-vh-100">
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default Layout