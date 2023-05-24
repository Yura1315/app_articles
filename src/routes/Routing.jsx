import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from '../components/Layout/Layout'


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {routes.map((route) => {
                    return <Route path={route.path} element={<route.component />} key={route.path} />
                })}
            </Route>
        </Routes>
    )
}

export default Routing