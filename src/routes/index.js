import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
//Transfer
import Transfer from "../pages/Transfer/transfer"

// Charts
import ChartApex from "../pages/Charts/Apexcharts";
import ChartjsChart from "../pages/Charts/ChartjsChart";
import ChartsKnob from "../pages/Charts/jquery-knob";


const authProtectedRoutes = [
	//Dashboard
	{ path: "/dashboard", component: Dashboard },
	//Transfer
	{ path: "/transfer", component: Transfer },

	//Charts
	{ path: "/apex-charts", component: ChartApex },
	{ path: "/chartjs", component: ChartjsChart },
	{ path: "/charts-knob", component: ChartsKnob },

	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
