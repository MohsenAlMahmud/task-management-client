import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../ClientAuthentication/AuthProvider";
import { useNavigate } from "react-router-dom";


const AddTask = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const handleTask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const tittle = form.tittle.value;       
        const taskDescription = form.taskDescription.value;
        const taskDeadline = form.taskDeadline.value;
        const priority = form.priority.value;
        const status = 'to-do';
        const taskData = { name, email, tittle, taskDescription, taskDeadline, priority, status };
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

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Task Description</span>
                    </label>
                    <input type="text" name="taskDescription" placeholder="Task Description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Task Deadline</span>
                    </label>
                    <input type="text" name="taskDeadline" placeholder="Task Deadline" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Priority</span>
                    </label>
                    <select name="priority" className="select select-bordered w-full">
                        <option defaultValue="">Pick your Task Priority</option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                    </select>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>


        </div>
    );
};

export default AddTask;