import { Outlet } from "react-router-dom";
import Navbar from "../page/Navbar";

const Main = () => {
    return (
        <div className="container m-auto">
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Main;