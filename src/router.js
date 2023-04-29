import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/Content/Dashboard/Dashboard";
import CreateTransaction from './layout/CreateTransaction/CreateTransaction';
import Main from './Main.js';
import ViewTransactions from "./layout/ViewTransactions/ViewTransactions";
import Categories from "./layout/Categories/Categories";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
		{
			path: "/",
			element: <Dashboard />
		},
		{
			path: "transaction/create",
			element: <CreateTransaction />
		},
		{
			path: "transaction/view",
			element: <ViewTransactions />
		},
		{
			path: "categories",
			element: <Categories />
		}
		]
	},
]);

export default router;
