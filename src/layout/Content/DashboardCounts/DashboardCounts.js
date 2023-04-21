import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function DashboardCounts() {
	return (
		<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
			<Grid item md='4'>
					<i>Today</i>
					<Typography variant='h4' sx={{mt:2}}>P3,302.00</Typography>
			</Grid>
			<Grid item md='4'>
					<i>This week</i>
					<Typography variant='h4' sx={{mt:2}}>P3,302.00</Typography>
			</Grid>
			<Grid item md='4'>
					<i>This month</i>
					<Typography variant='h4' sx={{mt:2}}>P3,302.00</Typography>
			</Grid>
		</Grid>
	)
}

export default DashboardCounts;