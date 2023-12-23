import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../ClientAuthentication/AuthProvider';

const apiUrl = 'https://task-management-server1.vercel.app/tasks';

const WriteTask = () => {
  const {user} = useContext(AuthContext);  
  const [tasks, setTasks] = useState([]);
  const [statusList, setStatusList] = useState(['to-do', 'on-going', 'completed']);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {    
  
      const response = await axios.get(`${apiUrl}?email=${user.email}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return { formattedDate, formattedTime };
  };

  const handleStatusChange = async (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => (task._id === taskId ? { ...task, status: newStatus } : task));

    try {
      await axios.put(`${apiUrl}/${taskId}`, { status: newStatus });
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${apiUrl}/${taskId}`);
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
      alert('Task deleted successfully!');
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      
      <div className="w-full text-right">
        <Link to="add-task">
          <button className="btn btn-accent">Add Task</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {statusList.map((status) => (
          <div key={status} className="grid grid-cols-1">
            <h2 className="text-3xl font-bold pb-4">{capitalizeFirstLetter(status)} List</h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task._id} className="pb-4 pr-6">
                  <div className="card bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                      <div className="flex w-full justify-between">
                        <h2>{formatDateTime(task.createdAt).formattedDate}</h2>
                        <h2>{formatDateTime(task.createdAt).formattedTime}</h2>
                      </div>
                      <h2 className="card-title">{task.tittle}</h2>
                      <h2>{task.taskDescription}</h2>
                      <h2>Deadline : {task.taskDeadline}</h2>
                      <h2>Priority : {task.priority}</h2>
                      <div>
                        <label htmlFor={`status-${task._id}`}>Status:</label>
                        <select
                          className='btn btn-xs btn-accent ml-2'
                          id={`status-${task._id}`}
                          value={task.status}
                          onChange={(e) => handleStatusChange(task._id, e.target.value)}
                        >
                          {statusList.map((statusOption) => (
                            <option key={statusOption} value={statusOption}>
                              {capitalizeFirstLetter(statusOption)}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        className="btn btn-sm btn-error mt-2"
                        onClick={() => handleDeleteTask(task._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriteTask;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
