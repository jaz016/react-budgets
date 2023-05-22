import PageTitle from "../../components/PageTitle/PageTitle";
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";
import TransactionForm from "../../components/TransactionForm/TransactionForm";
import Grid from '@mui/material/Grid';

function EditTransaction() {
	const pageTitle = 'Edit Transaction';

	return (
		<Grid container>
			<Grid item lg={8}>
				<Grid item lg={6} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
				<Grid item lg={6} sx={{mb:5}}>
					<TransactionFilter />
				</Grid>
				<Grid item lg={6} sx={{mb:5}}>
					<TransactionForm isEdit={true} />
				</Grid>
			</Grid>

		</Grid>
	)
}

export default EditTransaction