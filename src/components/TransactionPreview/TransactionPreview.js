import { Typography } from "@mui/material";

function TransactionPreview() {
 	return (
		<>
			<Typography variant='h6' component='h2' sx={{fontWeight: 'bold', display: 'inline-block', my:2}}>Expenses</Typography>
			<table id='transaction-preview-content'>
				<tr>
					<td><i>Today:</i></td>
					<td><strong>P23.40</strong></td>
				</tr>
				<tr>
					<td><i>This week:</i></td>
					<td><strong>P230.40</strong></td>
				</tr>
				<tr>
					<td><i>This month:</i></td>
					<td><strong>P2300.40</strong></td>
				</tr>
			</table>
		</>
	)
}

export default TransactionPreview;