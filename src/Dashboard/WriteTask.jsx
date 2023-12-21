import { Link, useLoaderData } from "react-router-dom";


const WriteTask = () => {

    const tasks = useLoaderData();

    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const formattedDate = dateTime.toLocaleDateString();
        const formattedTime = dateTime.toLocaleTimeString();
        return { formattedDate, formattedTime };
    };

    return (
        <div>
            <h2>Write your task here</h2>
            <div className="w-full text-right">
                <Link to="add-task"><button className="btn btn-accent">Add Task</button></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {tasks.map((task) =>
                    <div key={task._id}>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <div className="flex w-full justify-between">
                                    <h2 className="">{formatDateTime(task.createdAt).formattedDate}</h2>
                                    <h2 className="">{formatDateTime(task.createdAt).formattedTime}</h2>
                                </div>
                                <h2 className="card-title">{task.tittle}</h2>
                                <h2 className="">{task.taskDescription}</h2>
                                {/* <div className="card-actions justify-end">
                                    <Link to={`/blogDetails/${task._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                    
                                    <button className="btn btn-ghost" onClick={() => handleWishList(blog)}>Add to Wish List</button>
                                    
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WriteTask;