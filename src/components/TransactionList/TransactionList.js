import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { 
	formatMoney, 
	formatISOToYMD, 
	formatISOtoFullDt 
} from '../../utils';

function TransactionList({ transactions, searchTerm, filterBy, filterByVal }) {

	// filter by search term
	let filteredTransactionsByTerm = searchTerm ? transactions.filter(transaction => {
		const {name, category, notes} = transaction
		return [name, category, notes].some(val => val.toLowerCase().includes(searchTerm.toLowerCase()));
	}) : transactions;

	// filter further by filter fields
	let filteredTransactions = filterByVal ? filteredTransactionsByTerm.filter(transaction => {
		switch(filterBy) {
			case 'transaction-type': 
				return transaction.type === filterByVal;
			case 'category': 
				return transaction.category === filterByVal;
			default: 
				return false;
		}
	}) : filteredTransactionsByTerm;

	// sort by most recent first
	filteredTransactions.sort((x, y) => new Date(y.datetime) - new Date(x.datetime));

	// grouped transactions by their date
	let groupedTransactions = filteredTransactions.length ? filteredTransactions.reduce((acc,cur) => {
		const dateYMD = formatISOToYMD(cur.datetime);
		const groupIdx = acc.findIndex(t => formatISOToYMD(t.date) === dateYMD);

		if(groupIdx === -1) {
			acc.push({
				date: dateYMD,
				total: cur.type === 'expense' ? -cur.amount : cur.amount,
				transactions: [{...cur}]
			})
		} else {
			acc[groupIdx].total += cur.type === 'expense' ? -cur.amount : cur.amount
			acc[groupIdx].transactions.push({...cur})
		}

		return acc;
	}, []) : [];


	
	
	return (
		<List>
				{
					groupedTransactions.map((item, idx) => (
						<>
							<ListItem className='transaction-date-item' key={idx} sx={{pl: 0, mb: 2}} secondaryAction={
								<span className='transaction-date-total'>{formatMoney(item.total)}</span>
							}>
								 <ListItemAvatar>
                    				<Avatar className='transaction-avatar'>
										<CalendarMonthIcon />
									</Avatar>
								</ListItemAvatar>
								
								<ListItemText primary={formatISOtoFullDt(item.date)} className='transaction-date' ></ListItemText>

								
							</ListItem>

							<List>
									{
										item.transactions.map((item2, idx2) => (
											<ListItem key={idx2} className='transaction-item'>
												<Grid container>
													<Grid item xs={3} className='transaction-item-amount' sx={{ color: item2.type === 'expense' ? 'error.main' : 'success.main'}}>
														<strong>{formatMoney(item2.amount)}</strong>
													</Grid>
													<Grid item xs={3} className='transaction-item-category'>
														<Typography variant='subtitle1'>{item2.name}</Typography>
														<Typography variant='subtitle2'>{item2.category}</Typography>
													</Grid>
													<Grid item xs={5} className='transaction-item-notes'>
														<table>
															<tr>
																<td className='transaction-item-notes-label'>Notes:</td>
																<td className='transaction-item-notes-text'>{item2.notes}</td>
															</tr>
														</table>
													</Grid>
													<Grid item xs={1} className='transaction-item-action'>
														<IconButton>
															<DeleteIcon />
														</IconButton>
													</Grid>
												</Grid>
											</ListItem>
										))
									}
								</List>
						</>
					))
				}
			</List>
	)
}

export default TransactionList