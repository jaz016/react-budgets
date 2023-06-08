import { useState, useEffect } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionPreview from "../../components/TransactionPreview/TransactionPreview";
import TransactionListPreview from "../../components/TransactionListPreview/TransactionListPreview";
import Grid from '@mui/material/Grid';

function CreateTransaction() {
	
	const pageTitle = 'New Transaction';

	let [transactions, setTransactions] = useState([]);
	let [initTransactionList, setInitTransactionList] = useState(true);
	let [isFetching, setIsFetching] = useState(true);


	useEffect(() => {
		const url = `http://localhost:8080/transactions/`;
		if(initTransactionList) {
			try {
				fetch(url)
				.then(res => res.json())
				.then(data => {
					setTransactions(data);
					setInitTransactionList(false);
					setIsFetching(false);
				})
			} catch(err) {
				throw err;
			}
		}
	}, [initTransactionList])

	const handleSubmitSuccess = () => {
		setInitTransactionList(true);
		setIsFetching(true);
	}

	return (
		<Grid container>
			<Grid item lg={8}>
				<Grid item lg={6} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
				<Grid item lg={6} sx={{mb:5}}>
					<TransactionForm onSubmitSuccess={handleSubmitSuccess} />
				</Grid>
			</Grid>

			<Grid item lg={4}>
				<TransactionPreview 
					transactions={transactions} 
				/>
				<TransactionListPreview 
					transactions={transactions}
					isFetching={isFetching}
				/>
			</Grid>
		</Grid>
	)
}

export default CreateTransaction