import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { formatMoney } from '../../../utils';

function BudgetProgress({ totals }) {

	let [budgetShown, setBudgetShown] = useState('')
	let [budget, setBudget] = useState(0);

	const actualSpent = budgetShown ? (
		budgetShown === 'daily' ? totals.day : (
		budgetShown === 'weekly' ? totals.week : (
		budgetShown === 'monthly' ? totals.month : 0
		)) 
	) : 0;

	const progress = budget ? (actualSpent/budget)*100 <= 100 ? (actualSpent/budget)*100 : 100 : 0;

	useEffect(() => {
		const url = `http://localhost:8080/budgets/`;
			try {
				fetch(url)
				.then(res => res.json())
				.then(data => {
					setBudgetShown(data.showInHomepage);
					switch(data.showInHomepage) {
						case 'daily':
							setBudget(data.daily);
							break;
						case 'weekly':
							setBudget(data.weekly);
							break;
						case 'monthly':
							setBudget(data.monthly);
							break;
						default: 
							setBudget(0);
							break;
					}
				})
			} catch(err) {
				throw err;
			}
	}, [])


	const getProgressColorClass = (progress) => {
		if(progress > 0 && progress <= 50) return 'success';
		else if(progress > 50 && progress <= 75) return 'warning';
		else if(progress > 75 && progress <= 100) return 'error';
	}

	return (
		<Grid container className="budgetProgress-wrap" sx={{width:'500px', mr: 3}}>
			
			<Grid item xs={2} sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
				<IconButton component={Link} to='/budgets'>
					<DriveFileRenameOutlineIcon />
				</IconButton>
			</Grid>
			
			
			<Grid item xs={10} className='budgetProgress-inner'>
				<div className="budgetProgress-header">
					<strong>Actual</strong>
					<strong>Budget</strong>
				</div>
				<div className="budgetProgress-value">
					<span>{formatMoney(actualSpent)}</span>
					<span>{formatMoney(budget)}</span>
				</div>

				<LinearProgress variant='determinate' value={progress} color={getProgressColorClass(progress)} />
			</Grid>

			
		</Grid>
	)
}

export default BudgetProgress