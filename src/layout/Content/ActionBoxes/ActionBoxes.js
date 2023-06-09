import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { blue, green, orange, indigo } from '@mui/material/colors';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PaidIcon from '@mui/icons-material/Paid';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

const theme = createTheme({
	palette: {
		blue: {
			backgroundColor: blue[500],
			color: '#fff',
			'&:hover': {
				backgroundColor: blue[400],
				color: '#000',
			},
			cursor: 'pointer'
		},
		green: {
			backgroundColor: green[600],
			color: '#fff',
			'&:hover': {
				backgroundColor: green[300],
				color: '#000',
			},
			cursor: 'pointer'
		},
		orange: {
			backgroundColor: orange[800],
			color: '#fff',
			'&:hover': {
				backgroundColor: orange[400],
				color: '#000',
			},
			cursor: 'pointer'
		},
		indigo: {
			backgroundColor: indigo[400],
			color: '#fff',
			'&:hover': {
				backgroundColor: indigo[200],
				color: '#000',	
			},
			cursor: 'pointer'
		},
	},
  });

function ActionBoxes() {

	const actionBoxes = [
		{name: 'Create Transaction', slug: 'create-transaction', url: '/transaction/create', icon: <EditCalendarIcon />, color: 'blue'},
		{name: 'Manage Categories', slug: 'manage-categories', url: '/categories', icon: <AppRegistrationIcon />, color: 'orange'},
		{name: 'View Transactions', slug: 'view-transactions', url: '/transaction/view', icon: <PaidIcon />, color: 'green'},
		{name: 'View Reports', slug: 'view-reports', url: '/reports', icon: <TroubleshootIcon />, color: 'indigo'},
	]

	return (
		<Container>
			<Grid container spacing={3}>
			{
				actionBoxes.map((box,i) => (
					<Grid key={i} item md='12' lg='6'>
						<Paper className='action-box' component={Link} to={box.url} elevation={6} sx={{height:'250px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', ...theme.palette[box.color]}}>
							{box.icon}
							<Typography variant='subtitle1'>{box.name}</Typography>
						</Paper>
					</Grid>
				))
			}
			</Grid>
		</Container>
	)
}

export default ActionBoxes;