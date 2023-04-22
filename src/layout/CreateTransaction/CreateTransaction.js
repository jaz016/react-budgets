import PageTitle from "../../components/PageTitle/PageTitle";
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import Grid from '@mui/material/Grid';

function CreateTransaction() {
	const pageTitle = 'New Transaction';

	return (
		<Grid container>
			<Grid item lg={12} sx={{mb:5}}>
				<PageTitle title={pageTitle} />
			</Grid>
			<Grid item lg={12} sx={{mb:5}}>
				<TransactionFilter />
			</Grid>
			<Grid item lg={4} sx={{mb:5}}>
				<TransactionForm />
			</Grid>
		</Grid>
	)
}

export default CreateTransaction