import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Login from "../ClientAuthentication/Login";
import Register from "../ClientAuthentication/Register";
import WriteTask from "../Dashboard/WriteTask";
import AddTask from "../Dashboard/AddTask";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>
      },
      {
          path: '/register',
          element: <Register></Register>
      },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        
        {
          path: 'write-task',
          element: <WriteTask></WriteTask>,
          loader: () => fetch(`http://localhost:5000/tasks`)
        },        
        {
          path: 'write-task/add-task',
          element: <AddTask></AddTask>
        },
        
      ]
    }
  ]);

