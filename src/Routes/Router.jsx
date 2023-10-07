import {
	createBrowserRouter
	
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

  export const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Main></Main>,
	  children: [

		{
		path: "/",
		element: <Home></Home>
		},
		{
			path: "/login",
			element: <LogIn></LogIn>
		},
		{
			path: "/register",
			element: <Register></Register>
		},
		{
			path: "/dashboard",
			element: <Dashboard></Dashboard>
		}

	  ]
	},
  ]);