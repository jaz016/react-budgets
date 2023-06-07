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
						onSearchTermChange={(val) => setSearchTerm(val)} 
						onFilterByChange={(val) => setFilterBy(val)} />
				</Grid>
			</Grid>

			<Grid item lg={12} sx={{mb:5}}>
				<TransactionList 
					searchTerm={searchTerm} 
					filterBy={filterBy}
					transactions={transactions}
				/>
			</Grid>
			
		</Grid>
	)
}

export default ViewTransactions