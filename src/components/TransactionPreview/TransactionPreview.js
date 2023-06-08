import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { formatMoney } from "../../utils";

function TransactionPreview({ transactions }) {

	const allExpenses = transactions.filter(t => t.type === 'expense');

	// frequency: 'day','week','month'
	const getTotals = (frequency) => {
		const start = dayjs().startOf(frequency);
		const end = dayjs().endOf(frequency);

		return allExpenses.filter(expense => dayjs(expense.datetime).isBetween(start, end, null, '[]'))
						  .reduce((acc,cur) => acc + cur.amount, 0);
	}

	const dayTotal = getTotals('day');
	const weekTotal = getTotals('week');
	const monthTotal = getTotals('month');

 	return (
		<>
			<Typography variant='h6' component='h2' sx={{fontWeight: 'bold', display: 'inline-block', my:2}}>Expenses</Typography>
			<table id='transaction-preview-content'>
				<tr>
					<td><i>Today:</i></td>
					<td><strong>{formatMoney(dayTotal)}</strong></td>
				</tr>
				<tr>
					<td><i>This week:</i></td>
					<td><strong>{formatMoney(weekTotal)}</strong></td>
				</tr>
				<tr>
					<td><i>This month:</i></td>
					<td><strong>{formatMoney(monthTotal)}</strong></td>
				</tr>
			</table>
		</>
	)
}

export default TransactionPreview;