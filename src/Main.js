import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material';

function Main() {
	return (
		<>
			<Sidebar />

			<div className='content-area' style={{marginLeft: '240px', height: '100%'}}>
				<Container maxWidth='xl' sx={{pt: 5}}>
					<Outlet />
				</Container>
			</div>
		</>
  	);
}

export default Main;
