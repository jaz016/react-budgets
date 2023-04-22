import TransactionFilter from '../../../components/TransactionFilter/TransactionFilter';
import BudgetProgress from '../../../layout/Content/BudgetProgress/BudgetProgress';
import DashboardCounts from '../../../layout/Content/DashboardCounts/DashboardCounts';
import ActionBoxes from '../../../layout/Content/ActionBoxes/ActionBoxes';
import Grid from '@mui/material/Grid';


function Dashboard() {
	return (
	  <Grid container>
		<Grid item lg={12} sx={{ mb: 6, display: 'flex', justifyContent: 'space-between'}}>
			{/* <Typography variant='h2' sx={{mt:4}}>Hello from React!</Typography> */}
			<TransactionFilter />
			<BudgetProgress />
		</Grid>
		<Grid item lg={12} sx={{ mb: 6, display: 'flex', justifyContent: 'space-between'}}>
			<DashboardCounts/>
		</Grid>
		<Grid item lg={12} sx={{ mb: 6, display: 'flex', justifyContent: 'space-between'}}>
			<ActionBoxes />
		</Grid>
		
	  </Grid>
	);
  }
  
  export default Dashboard;