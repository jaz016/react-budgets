import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography, Button } from "@mui/material";

function TransactionListPreview() {

	let [transactions, setTransactions] = useState([]);
	let [isFetching, setIsFetching] = useState(true);
	// const dummyList = Array(15).fill(null);

	useEffect(() => {
		try {
			fetch('http://localhost:8080/transactions')
			.then(res => res.json())
			.then(data => {
				setTransactions(t => [...t,...data]);
				setIsFetching(!isFetching);
			})
		} catch(err) {
			throw err;
		}
	}, [])

	return (
		<>
			<div id='transaction-list-preview-title' style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<Typography	Typography variant='h6' component='h2' gutterBottom = 'true' sx={{fontWeight: 'bold', display: 'inline-block', my:4}}>Recent transactions</Typography>
				<Button variant="contained" color='success'>View all</Button>
			</div>
			<List sx={{ maxHeight: '500px', overflowY: 'scroll' }}>
				{
					isFetching ? <span>Loading data...</span> : (
						transactions.map((item, idx) => (
							<>
							<ListItem key={item.id} sx={{pl: 0}} secondaryAction={
								<IconButton edge="end" aria-label="edit">
								<DriveFileRenameOutlineIcon />
								</IconButton>
							}>
								<ListItemText primary={item.type} secondary={item.amount}></ListItemText>
								<ListItemText primary={item.category + ': ' + item.name}></ListItemText>
							</ListItem>
							<Divider />
							</>
						))
					)
				}
			</List>
		</>
	)
}

export default TransactionListPreview