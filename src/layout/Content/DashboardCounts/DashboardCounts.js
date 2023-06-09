import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { formatMoney } from '../../../utils';

function DashboardCounts({ totals }) {
	return (
		<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
			<Grid item md='4'>
					<i>Today</i>
					<Typography variant='h4' sx={{mt:2}}>{formatMoney(totals.day)}</Typography>
			</Grid>
			<Grid item md='4'>
					<i>This week</i>
					<Typography variant='h4' sx={{mt:2}}>{formatMoney(totals.week)}</Typography>
			</Grid>
			<Grid item md='4'>
					<i>This month</i>
					<Typography variant='h4' sx={{mt:2}}>{formatMoney(totals.month)}</Typography>
			</Grid>
		</Grid>
	)
}

export default DashboardCounts;