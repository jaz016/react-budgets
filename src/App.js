import { RouterProvider } from 'react-router-dom';
import router from './router';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
