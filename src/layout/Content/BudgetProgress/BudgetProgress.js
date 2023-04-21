import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


function BudgetProgress() {
	return (
		<Grid container className="budgetProgress-wrap" sx={{width:'500px', mr: 3}}>
			
			<Grid item xs={2} sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<DriveFileRenameOutlineIcon />
			</Grid>
			
			
			<Grid item xs={10} className='budgetProgress-inner'>
				<div class="budgetProgress-header">
					<strong>Actual</strong>
					<strong>Budget</strong>
				</div>
				<div class="budgetProgress-value">
					<span>P26,297.00</span>
					<span>P30,000.00</span>
				</div>

				<LinearProgress variant='determinate' value={70} color='warning' />
			</Grid>

			
		</Grid>
	)
}

export default BudgetProgress