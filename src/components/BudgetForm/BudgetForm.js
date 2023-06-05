import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function BudgetForm() {
	let [budget, setBudget] = useState({
		daily: '',
		weekly: '',
		monthly: ''
	});
	let [showInHomepage, setShowInHomepage] = useState('');
	let budgets = {
		...budget,
		showInHomepage
	}

	useEffect(() => {
		const loadBudgets = async () => {
			const url = `http://localhost:8080/budgets/`;
			try {
				const data = await fetch(url);
				const res = await data.json();
				if(data.status === 200) {
					setBudget(() => {
						return {
							daily: res.daily,
							weekly: res.weekly,
							monthly: res.monthly
						}
					});
					setShowInHomepage(res.showInHomepage);
				}
			} catch (err) {
				throw err;
			}
		}

		loadBudgets();
	}, []);

	
	const handleSave = async (budgets) => {
		const url = `http://localhost:8080/budgets/`;
		const headers = {'Content-type': 'application/json'};
		const payload = budgets;
		try {
			const data = await fetch(url, {
				method: 'PUT',
				headers,
				body: JSON.stringify(payload)
			});
			if(data.status === 200) {
				alert(`Budgets data has been successfully set!`);
			}
		} catch (err) {
			throw err;
		}
	}

	return (
		<>
			<form action="">
				<table style={{width: '100%', marginBottom: '2.8rem'}}>
					<tbody>
						<tr>
							<td><label htmlFor="budget-daily"><strong>Daily</strong></label></td>
							<td>
								<TextField 
									id="budget-daily" 
									label="Enter amount" 
									variant="outlined" 
									margin='normal' 
									fullWidth 
									sx={{background:'#fff', mb:2}}
									value={budget.daily}
									onChange={(e) => setBudget({...budget, daily: e.target.value ? parseFloat(e.target.value) : '' })} />
							</td>
						</tr>
						<tr>
							<td><label htmlFor="budget-weekly"><strong>Weekly</strong></label></td>
							<td>
								<TextField 
									id="budget-weekly" 
									label="Enter amount" 
									variant="outlined" 
									margin='normal' 
									fullWidth 
									sx={{background:'#fff', mb:2}}
									value={budget.weekly}
									onChange={(e) => setBudget({...budget, weekly: e.target.value ? parseFloat(e.target.value) : '' })} />
							</td>
						</tr>
						<tr>
							<td><label htmlFor="budget-monthly"><strong>Monthly</strong></label></td>
							<td>
								<TextField 
									id="budget-monthly" 
									label="Enter amount" 
									variant="outlined" 
									margin='normal' 
									fullWidth 
									sx={{background:'#fff', mb:2}}
									value={budget.monthly}
									onChange={(e) => setBudget({...budget, monthly: e.target.value ? parseFloat(e.target.value) : '' })} />
							</td>
						</tr>
					</tbody>

				</table>

				<label htmlFor="show-budget"><strong>Show this budget in dashboard</strong></label>
				
				<ButtonGroup aria-label="primary button group" sx={{display:'flex',justifyContent: 'center', my:4}}>
					<Button 
						sx={{flexGrow :1}}
						variant={showInHomepage === 'daily' ? 'contained' : 'outlined'}
						data-show-budget='daily'
						onClick={(e) => setShowInHomepage(e.target.dataset.showBudget)} >Daily</Button>
					<Button 
						sx={{flexGrow :1}}
						variant={showInHomepage === 'weekly' ? 'contained' : 'outlined'}
						data-show-budget='weekly'
						onClick={(e) => setShowInHomepage(e.target.dataset.showBudget)} >Weekly</Button>
					<Button 
						sx={{flexGrow :1}}
						variant={showInHomepage === 'monthly' ? 'contained' : 'outlined'}
						data-show-budget='monthly'
						onClick={(e) => setShowInHomepage(e.target.dataset.showBudget)} >Monthly</Button>
				</ButtonGroup>

				<Button 
					variant="contained" 
					color='success' 
					sx={{float:'right'}}
					onClick={() => handleSave(budgets)}
				>Save changes</Button>
			</form>
		
		</>
	)
}

export default BudgetForm