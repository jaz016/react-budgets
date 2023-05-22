import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/Content/Dashboard/Dashboard";
import CreateTransaction from './layout/CreateTransaction/CreateTransaction';
import Main from './Main.js';
import ViewTransactions from "./layout/ViewTransactions/ViewTransactions";
import EditTransaction from "./layout/EditTransaction/EditTransaction";
import Categories from "./layout/Categories/Categories";
import Budgets from "./layout/Budgets/Budgets";

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
				path: "transaction/edit/:id",
				element: <EditTransaction />
			},
			{
				path: "categories",
				element: <Categories />
			},
			{
				path: "budgets",
				element: <Budgets />
			}
		]
	},
]);

export default router;
