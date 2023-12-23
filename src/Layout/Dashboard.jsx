// import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../ClientAuthentication/AuthProvider";


const Dashboard = () => {

    // const {user} = useContext(AuthContext);

    return (
        <div className="md:flex">
            {/* <h2>This is dashboard</h2> */}
            <div className="md:w-64 md:min-h-screen bg-lime-900">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    {/* Shared Nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <br />
                    <li>
                        <NavLink to="/dashboard/profile">Profile</NavLink>
                    </li>
                    <br />
                    <li>
                        <NavLink to="/dashboard/write-task">To-Do List</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 md:p-8 bg-lime-200 text-black">
                {/* <DashboardProfile></DashboardProfile> */}
                {/* <div>
                    <h2>Image : </h2>
                    <h2>Name :</h2>
                    <h2>Address :</h2>
                    <h2>Date of Birth :</h2>
                    <h2>Email : {user.email}</h2>
                    <h2>Phone : </h2>
                    <h2>Occupation : </h2>
                    <br />
                    <br />
                    <Link to="dashboard/profile"><button className="btn btn-accent">Update Your Profile</button></Link>
                </div> */}
                <Outlet></Outlet>
                
            </div>
        </div>
    );
};

export default Dashboard;