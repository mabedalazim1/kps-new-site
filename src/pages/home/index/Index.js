import { Outlet } from 'react-router-dom'
import NavBar from "../../../components/navBar/NavBar"

const Index = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            
        </>
    );
}

export default Index;
