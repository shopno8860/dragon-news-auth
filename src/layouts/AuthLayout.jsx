import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="bg-base-200">
            <section className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
