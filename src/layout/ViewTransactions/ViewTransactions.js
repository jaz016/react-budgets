import { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';
import TransactionFilterFields from "../../components/TransactionFilterFields/TransactionFilterFields";
import TransactionList from "../../components/TransactionList/TransactionList";

function ViewTransactions() {

	const pageTitle = 'View Transactions';

	let [transactions, setTransactions] = useState([]);
	
	let [searchTerm, setSearchTerm] = useState('');
	let [filterBy, setFilterBy] = useState('');
	let [filterByVal, setFilterByVal] = useState('');

	let [initTransactions, setInitTransactions] = useState(true);


	useEffect(() => {
		const loadTransactions = async () => {
			const url = `http://localhost:8080/transactions/`;
			try {
				const data = await fetch(url);
				const res = await data.json();

				if(data.status === 200) {
					setTransactions(res);
					setInitTransactions(false);
				}
			} catch (err) {
				throw err;
			}
		}

		if(initTransactions) {
			loadTransactions();
		}
	}, [initTransactions]);

	const handleDelete = async (transactionId) => {
		if(window.confirm('Are you sure you want to delete this transaction?')) {
			const url = `http://localhost:8080/transactions/${transactionId}`;
			try {
				const res = await fetch(url, {
					method: 'DELETE'
				});

				if(res.status === 200) {
					alert('Transaction has been deleted!');
					setInitTransactions(true);
				}
				
			} catch(err) {
				throw err;
			}
		}
	}

	return (
		<Grid container>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
			</Grid>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:8}}>
					<TransactionFilterFields
						searchTerm={searchTerm} 
						filterBy={filterBy}
						filterByVal={filterByVal}
						onSearchTermChange={(val) => setSearchTerm(val)} 
						onFilterByChange={(val) => {
							setFilterBy(val);
							setFilterByVal('');
						}} 
						onFilterByValChange={(val) => setFilterByVal(val)}/>
				</Grid>
			</Grid>

			<Grid item lg={12} sx={{mb:5}}>
				<TransactionList 
					searchTerm={searchTerm} 
					filterBy={filterBy}
					filterByVal={filterByVal}
					transactions={transactions}
					onDelete={(transactionId) => handleDelete(transactionId)}
				/>
			</Grid>
			
		</Grid>
	)
}

export default ViewTransactions