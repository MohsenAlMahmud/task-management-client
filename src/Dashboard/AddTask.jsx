
import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../ClientAuthentication/AuthProvider";
import { useNavigate } from "react-router-dom";


const AddTask = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    const handleTask = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const tittle = form.tittle.value;
        // const image = form.image.value;
        // const category = form.category.value;
        // const shortDescription = form.shortDescription.value;
        const taskDescription = form.taskDescription.value;
        const taskData = { name, email, tittle, taskDescription };
        console.log(taskData);

        
        try {
            const response = await axios.post("http://localhost:5000/tasks", taskData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log(response.data);
            Swal.fire('Task Submitted Successfully')
            form.reset();
            navigate('/dashboard/write-task');
          } 
          catch (error) {
            console.log(error);
          }
    }

    return (
        <div className="w-9/12 mx-auto">

            <h2 className="text-4xl text-center py-16">Add New Task</h2>
            <form onSubmit={handleTask} className="lg:w-1/2 mx-auto">
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
                    <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="Your Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Tittle</span>
                    </label>
                    <input type="text" name="tittle" placeholder="Tittle" className="input input-bordered" />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Insert Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Image" className="input input-bordered" />
                </div> */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Category</span>
                    </label>                    
                    <select name="category" className="select select-bordered w-full">
                        <option defaultValue="">Pick your Travel Category</option>
                        <option value="Solo Adventure">Solo Adventure</option>
                        <option value="Family Exploration">Family Exploration</option>
                        <option value="Romantic Gateway">Romantic Getaway</option>
                        <option value="Volunteer and Humanitarian Trips">Volunteer and Humanitarian Trips</option>
                        <option value="Group Travel">Group Travel</option>
                        <option value="Business Travel">Business Travel</option>
                    </select>
                </div> */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <input type="text" name="shortDescription" placeholder="Description" className="input input-bordered" />
                </div> */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Task Description</span>
                    </label>
                    <input type="text" name="taskDescription" placeholder="Task Description" className="input input-bordered" />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>


        </div>
    );
};

export default AddTask;