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

function TransactionList() {

	const dummyList = Array(4).fill(null)
	const dummyList2 = Array(2).fill(null);

	return (
		<List>
				{
					dummyList.map((item, idx) => (
						<>
							<ListItem className='transaction-date-item' key={idx} sx={{pl: 0, mb: 2}} secondaryAction={
								<span className='transaction-date-total'>P20,585.00</span>
							}>
								 <ListItemAvatar>
                    				<Avatar className='transaction-avatar'>
										<CalendarMonthIcon />
									</Avatar>
								</ListItemAvatar>
								
								<ListItemText primary='April 9, 2023' className='transaction-date' ></ListItemText>

								
							</ListItem>

							<List>
									{
										dummyList2.map((item2, idx2) => (
											<ListItem key={idx2} className='transaction-item'>
												<Grid container>
													<Grid item xs={3} className='transaction-item-amount'>
														<strong>-P443.00</strong>
													</Grid>
													<Grid item xs={3} className='transaction-item-category'>
														<Typography variant='subtitle1'>Grocery</Typography>
														<Typography variant='subtitle2'>Food</Typography>
													</Grid>
													<Grid item xs={5} className='transaction-item-notes'>
														<table>
															<tr>
																<td className='transaction-item-notes-label'>Notes:</td>
																<td className='transaction-item-notes-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu erat sed arcu tristique porttitor. Proin hendrerit sem justo, sed ultricies </td>
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