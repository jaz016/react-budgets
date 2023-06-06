import { useState, useEffect } from 'react';
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

function TransactionList() {

	let [transactions, setTransactions] = useState([]);
	let groupedTransactions = transactions.length ? transactions.reduce((acc,cur) => {
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


	useEffect(() => {
		const loadTransactions = async () => {
			const url = `http://localhost:8080/transactions/`;
			try {
				const data = await fetch(url);
				const res = await data.json();

				if(data.status === 200) {
					setTransactions(res);
				}
			} catch (err) {
				throw err;
			}
		}

		loadTransactions();
	}, [])
	
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