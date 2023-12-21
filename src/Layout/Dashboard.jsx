import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* <h2>This is dashboard</h2> */}
            <div className="w-64 md:min-h-screen bg-lime-900">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    {/* Shared Nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/write-task">To-Do List</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 md:p-8 bg-lime-200 text-black">
                {/* <DashboardProfile></DashboardProfile> */}
                
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;