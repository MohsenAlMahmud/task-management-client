import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/PFhmWcm/task-management-banner-1.png)' }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                    {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    <Link to="dashboard"><button  className="btn btn-accent">Let's Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;