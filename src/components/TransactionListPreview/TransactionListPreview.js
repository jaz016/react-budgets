import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { formatMoney } from '../../utils';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography, Button } from "@mui/material";
import { green, red } from '@mui/material/colors';

function TransactionListPreview({ initTransactionList, onInitTransactionListChange }) {

	let [transactions, setTransactions] = useState([]);
	let [isFetching, setIsFetching] = useState(true);

	const transactionBaseUrl = `/transaction/view`;
	const editTransactionBaseUrl = `/transaction/edit`;

	useEffect(() => {
		
		const itemLimit = 10;
		const url = `http://localhost:8080/transactions?_sort=datetime&_order=desc&_limit=${itemLimit}`;

		if(initTransactionList) {
			try {
				fetch(url)
				.then(res => res.json())
				.then(data => {
					setTransactions([...data]);
					setIsFetching(false);
					onInitTransactionListChange(false);
				})
			} catch(err) {
				throw err;
			}
		}
	}, [initTransactionList, onInitTransactionListChange])

	return (
		<>
			<div id='transaction-list-preview-title' style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<Typography	Typography variant='h6' component='h2' gutterBottom = 'true' sx={{fontWeight: 'bold', display: 'inline-block', my:4}}>Recent transactions</Typography>
				<Button variant="contained" color='success' component={Link} to={transactionBaseUrl}>View all</Button>
			</div>
			<List sx={{ maxHeight: '500px', overflowY: 'scroll' }}>
				{
					isFetching ? <span>Loading data...</span> : (
						transactions.map((item, idx) => (
							<Fragment key={item.id}>
								<ListItem sx={{pl: 0}} secondaryAction={
									<IconButton component={Link} to={`${editTransactionBaseUrl}/${item.id}`} edge="end" aria-label="edit">
										<DriveFileRenameOutlineIcon />
									</IconButton>
								}>
									<ListItemText primary={item.type.toUpperCase()} secondary={formatMoney(item.amount)} sx={{color: item.type==='income' ? green[600] : (item.type==='expense' ? red[600] : 'initial') }}></ListItemText>
									<ListItemText primary={item.category + ': ' + item.name}></ListItemText>
								</ListItem>
								<Divider />
							</Fragment>
						))
					)
				}
			</List>
		</>
	)
}

export default TransactionListPreview