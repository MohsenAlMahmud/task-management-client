import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/"><a>Home</a></Link></li>
                            <li><Link to="dashboard"><a>Dashboard</a></Link></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Task Management (MM)</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="dashboard"><a>Dashboard</a></Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ?
                            <><span className="px-3"><img className="w-12 rounded-full" src={user.photoURL ? user.photoURL : "https://i.ibb.co/MSHTpdv/user.jpg"} alt="picture" /></span><button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button></>

                            :
                            <><span className="px-3"><Link to='/register'><button className="btn btn-ghost">Register</button></Link></span><Link to='/login'><button className="btn btn-ghost">Login</button></Link></>
                            
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;