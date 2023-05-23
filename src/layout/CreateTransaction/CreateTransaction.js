import PageTitle from "../../components/PageTitle/PageTitle";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import TransactionPreview from "../../components/TransactionPreview/TransactionPreview";
import TransactionListPreview from "../../components/TransactionListPreview/TransactionListPreview";
import Grid from '@mui/material/Grid';

function CreateTransaction() {
	const pageTitle = 'New Transaction';

	return (
		<Grid container>
			<Grid item lg={8}>
				<Grid item lg={6} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
				<Grid item lg={6} sx={{mb:5}}>
					<TransactionForm />
				</Grid>
			</Grid>

			<Grid item lg={4}>
				<TransactionPreview />
				<TransactionListPreview />
			</Grid>
		</Grid>
	)
}

export default CreateTransaction