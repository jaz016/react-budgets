import TransactionFilter from './layout/Content/TransactionFilter';
import BudgetProgress from './layout/Content/BudgetProgress';
import DashboardCounts from './layout/Content/DashboardCounts';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Content() {
	return (
	  <div className='content-area' style={{marginLeft: '240px', height: '100%', backgroundColor: 'rgb(240, 242, 245)'}}>
		<Container maxWidth="xl" sx={{py:5, display: 'flex', justifyContent: 'space-between'}}>
			{/* <Typography variant='h2' sx={{mt:4}}>Hello from React!</Typography> */}
			<TransactionFilter />
			<BudgetProgress />
		</Container>
		<Container maxWidth="xl" sx={{my:5, display: 'flex', justifyContent: 'space-between'}}>
			<DashboardCounts sx={{display: 'block'}}/>
		</Container>
		
	  </div>
	);
  }
  
  export default Content;