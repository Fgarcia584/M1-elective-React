import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";


const navbarLayout = () => {
    
    return (
        <>
            <Navbar />
            <Outlet />
        </>
        
    );
};

export default navbarLayout;