import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function BudgetForm() {
	return (
		<>
			<form action="">
				<table style={{width: '100%', marginBottom: '2.8rem'}}>
					<tr>
						<td><label htmlFor="budget-daily"><strong>Daily</strong></label></td>
						<td><TextField id="budget-daily" label="Enter amount" variant="outlined" margin='normal' fullWidth sx={{background:'#fff', mb:2}} /></td>
					</tr>
					<tr>
						<td><label htmlFor="budget-weekly"><strong>Weekly</strong></label></td>
						<td><TextField id="budget-weekly" label="Enter amount" variant="outlined" margin='normal' fullWidth sx={{background:'#fff', mb:2}} /></td>
					</tr>
					<tr>
						<td><label htmlFor="budget-monthly"><strong>Monthly</strong></label></td>
						<td><TextField id="budget-monthly" label="Enter amount" variant="outlined" margin='normal' fullWidth sx={{background:'#fff', mb:2}} /></td>
					</tr>
				</table>

				<label htmlFor="show-budget"><strong>Show this budget in dashboard</strong></label>
				
				<ButtonGroup aria-label="primary button group" sx={{display:'flex',justifyContent: 'center', my:4}}>
					<Button variant='contained' sx={{flexGrow :1}}>Daily</Button>
					<Button sx={{flexGrow :1}}>Weekly</Button>
					<Button sx={{flexGrow :1}}>Monthly</Button>
				</ButtonGroup>

				<Button variant="contained" color='success' sx={{float:'right'}}>Save changes</Button>
			</form>
		
		</>
	)
}

export default BudgetForm