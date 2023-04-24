import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';
import TransactionFilterFields from "../../components/TransactionFilterFields/TransactionFilterFields";
import TransactionList from "../../components/TransactionList/TransactionList";

function ViewTransactions() {

	const pageTitle = 'View Transactions';

	return (
		<Grid container>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
			</Grid>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:8}}>
					<TransactionFilterFields />
				</Grid>
			</Grid>

			<Grid item lg={12} sx={{mb:5}}>
				<TransactionList />
			</Grid>
			
		</Grid>
	)
}

export default ViewTransactions