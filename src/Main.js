import Sidebar from './components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material';
import data from './data/app.json';

function Main() {

	if (!localStorage.getItem('app')) {
		localStorage.setItem('app', JSON.stringify(data))
	}

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
