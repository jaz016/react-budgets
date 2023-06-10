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
		const loadTransactions = () => {
			const data = localStorage.getItem('app');
			setTransactions(JSON.parse(data).transactions);
			setInitTransactions(false);
		}

		if(initTransactions) {
			loadTransactions();
		}
	}, [initTransactions]);

	const handleDelete = (transactionId) => {
		if(window.confirm('Are you sure you want to delete this transaction?')) {
			const data = localStorage.getItem('app');

			const parsedData = JSON.parse(data);
			const transactionIdx = parsedData.transactions.findIndex(t => t.id === parseInt(transactionId));

			if(transactionIdx !== -1) {
				parsedData.transactions.splice(transactionIdx,1);
				localStorage.setItem('app', JSON.stringify(parsedData));
				alert('Transaction has been deleted!');
				setInitTransactions(true);
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