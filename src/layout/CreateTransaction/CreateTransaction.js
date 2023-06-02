import { useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionPreview from "../../components/TransactionPreview/TransactionPreview";
import TransactionListPreview from "../../components/TransactionListPreview/TransactionListPreview";
import Grid from '@mui/material/Grid';

function CreateTransaction() {
	
	const pageTitle = 'New Transaction';
	let [initTransactionList, setInitTransactionList] = useState(true);

	const handleSubmitSuccess = () => {
		setInitTransactionList(true);
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
				<TransactionPreview />
				<TransactionListPreview initTransactionList={initTransactionList} onInitTransactionListChange={(doInit) => setInitTransactionList(doInit)}/>
			</Grid>
		</Grid>
	)
}

export default CreateTransaction