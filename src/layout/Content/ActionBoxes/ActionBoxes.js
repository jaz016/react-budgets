import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { blue, green, orange, indigo } from '@mui/material/colors';

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
	return (
		<Container>
		<Grid container spacing={3}> 
			<Grid item md='12' lg='6'>
				<Paper elevation={6} sx={{height:'250px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', ...theme.palette.blue}}>
					<Typography variant='subtitle1'>Create Transaction</Typography>
				</Paper>
				
			</Grid>
			<Grid item md='12' lg='6'>
				<Paper elevation={6} sx={{height:'250px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', ...theme.palette.orange}}>
					<Typography variant='subtitle1'>Manage Categories</Typography>
				</Paper>
			</Grid>
			<Grid item md='12' lg='6'>
				<Paper elevation={6} sx={{height:'250px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', ...theme.palette.green}}>
					<Typography variant='subtitle1'>View Transactions</Typography>
				</Paper>
			</Grid>
			<Grid item md='12' lg='6'>
				<Paper elevation={6} sx={{height:'250px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease', ...theme.palette.indigo}}>
					<Typography variant='subtitle1'>View Reports</Typography>
				</Paper>
			</Grid>
		</Grid>
		</Container>
	)
}

export default ActionBoxes;