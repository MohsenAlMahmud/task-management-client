import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Login from "../ClientAuthentication/Login";
import Register from "../ClientAuthentication/Register";
import WriteTask from "../Dashboard/WriteTask";
import AddTask from "../Dashboard/AddTask";
import PrivateRoute from "../PrivateRoute";
import Profile from "../Dashboard/Profile";
import UpdateProfile from "../Dashboard/UpdateProfile";

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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        
        {
          path: 'write-task',
          element: <WriteTask></WriteTask>,
          loader: () => fetch(`https://task-management-server1.vercel.app/tasks`)
        },        
        {
          path: 'write-task/add-task',
          element: <AddTask></AddTask>
        },
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        {
          path: 'profile/updateProfile',
          element: <UpdateProfile></UpdateProfile>
        },
        
      ]
    }
  ]);

