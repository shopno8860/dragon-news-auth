import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <section className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </section>
            auth layout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
