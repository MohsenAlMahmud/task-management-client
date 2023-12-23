import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../ClientAuthentication/AuthProvider";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    const handleBlog = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const dateOfBirth = form.dateOfBirth.value;
        const image = form.image.value;
        const phone = form.phone.value;
        const occupation = form.occupation.value;
        const aboutYourself = form.aboutYourself.value;
        const profileData = { image, name, email, dateOfBirth, phone, occupation, aboutYourself };
        console.log(profileData);


        try {
            const response = await axios.post("https://task-management-server1.vercel.app/profiles", profileData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            Swal.fire('Blog Submitted Successfully')
            form.reset();
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="w-9/12 mx-auto">

            <h2 className="text-4xl text-center py-16">Update Your Profile Please</h2>
            <form onSubmit={handleBlog} className="lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user.email} readOnly placeholder="Your Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Date Of Birth</span>
                    </label>
                    <input type="text" name="dateOfBirth" placeholder="Date..." className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Insert Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Phone Number</span>
                    </label>
                    <input type="text" name="phone" placeholder="Number..." className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Occupation</span>
                    </label>
                    <input type="text" name="occupation" placeholder="Occupation" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">About Yourself</span>
                    </label>
                    <input type="text" name="aboutYourself" placeholder="Write here" className="input input-bordered" />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>


        </div>
    );
};

export default UpdateProfile;