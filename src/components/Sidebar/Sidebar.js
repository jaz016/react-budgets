
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


function Sidebar() {
	const drawerWidth = 240;
	const padLeft = {paddingLeft: '32px'};
	const marginY = {my: 5};

	// const menuItems = ['Dashboard', 'Transaction', 'Categories', 'Budgets', 'Reports'];
	const menuItems = [
		{text:'Dashboard', url: '/'},
		{text:'Transaction', url: '/transaction/create'},
		{text:'Categories', url: '/categories'},
		{text:'Budgets', url: '/budgets'},
		{text:'Reports', url: '/reports'}
	]

	return (
		<Drawer
				sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(0 0 0))',
					color: '#fff'
				},
				}}
				variant="permanent"
				anchor="left"
			>

				<Typography variant='h5' sx={{...padLeft, fontWeight: 'bold', ...marginY, }}>React Budgets</Typography>
				<Divider />
				<div className='sidebar-inner' style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%'
				}}>
					<div className='menu-items'>
						<Typography variant='subtitle1' sx={{...padLeft, fontWeight: 'bold', ...marginY}}>Hello, User!</Typography>

						<List>
						{
							menuItems.map((item, index) => (
								<ListItem key={item.text} component={Link} to={item.url} sx={{color:'#ccc'}}disablePadding>
									<ListItemButton sx={padLeft}>
										<ListItemText primary={item.text} />
									</ListItemButton>
								</ListItem>
							))
						}
						</List>

						{/* <ListItem disablePadding>
							<ListItemButton sx={{...padLeft,...marginY}}>
								<ListItemText primary={'Log out'} />
							</ListItemButton>
						</ListItem> */}
					</div>
					<div className='copyright' style={{padding: '0 32px',marginBottom: '5rem'}}>
						<Typography variant='paragraph' sx={{display:'block'}}>Copyright &copy; 2023</Typography>
						<Typography variant='paragraph' sx={{display:'block'}}>All Rights Reserved</Typography>
					</div>
				</div>

			</Drawer>
	)
}

export default Sidebar