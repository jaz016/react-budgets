import { useState, useEffect } from 'react';
import TransactionFilter from '../../../components/TransactionFilter/TransactionFilter';
import BudgetProgress from '../../../layout/Content/BudgetProgress/BudgetProgress';
import DashboardCounts from '../../../layout/Content/DashboardCounts/DashboardCounts';
import ActionBoxes from '../../../layout/Content/ActionBoxes/ActionBoxes';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';


function Dashboard() {

	let [transactions, setTransactions] = useState([]);
	let [isExpense, setIsExpense] = useState(true);

	// todo: for refactor
	const filteredTransactions = transactions.filter(t => t.type === (isExpense ? 'expense' : 'income'));
	const allExpenses = transactions.filter(t => t.type === 'expense');

	// frequency: 'day','week','month'
	const getTotals = (frequency) => {
		const start = dayjs().startOf(frequency);
		const end = dayjs().endOf(frequency);

		return filteredTransactions.filter(expense => dayjs(expense.datetime).isBetween(start, end, null, '[]'))
						  .reduce((acc,cur) => acc + cur.amount, 0);
	}

	// frequency: 'day','week','month'
	const getExpenseTotals = (frequency) => {
		const start = dayjs().startOf(frequency);
		const end = dayjs().endOf(frequency);

		return allExpenses.filter(expense => dayjs(expense.datetime).isBetween(start, end, null, '[]'))
						  .reduce((acc,cur) => acc + cur.amount, 0);
	}

	const totals = {
		day: getTotals('day'),
		week: getTotals('week'),
		month: getTotals('month')
	}

	const expenseTotals = {
		day: getExpenseTotals('day'),
		week: getExpenseTotals('week'),
		month: getExpenseTotals('month')
	}


	useEffect(() => {
		const url = `http://localhost:8080/transactions/`;
			try {
				fetch(url)
				.then(res => res.json())
				.then(data => {
					setTransactions(data);
				})
			} catch(err) {
				throw err;
			}
	}, []);


	const handleTransactionTypeChange = data => {
		setIsExpense(data)
	}

	return (
	  <Grid container>
		<Grid item lg={12} sx={{ mb: 6, display: 'flex', justifyContent: 'space-between'}}>
			{/* <Typography variant='h2' sx={{mt:4}}>Hello from React!</Typography> */}
			<TransactionFilter isExpense={isExpense} onChange={handleTransactionTypeChange} />
			<BudgetProgress totals={expenseTotals} />
		</Grid>
		<Grid item lg={12} sx={{ mb: 6, display: 'flex', justifyContent: 'space-between'}}>
			<DashboardCounts totals={totals} />
		</Grid>
		<Grid item lg={12} sx={{ mb: 6, display: 'flex', justifyContent: 'space-between'}}>
			<ActionBoxes />
		</Grid>
		
	  </Grid>
	);
  }
  
  export default Dashboard;