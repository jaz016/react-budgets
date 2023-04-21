import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./layout/Content/Dashboard/Dashboard";
import CreateTransaction from './layout/CreateTransaction/CreateTransaction';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './Main.js';

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
      }
    ]
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
