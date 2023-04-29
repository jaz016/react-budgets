import BudgetForm from "../../components/BudgetForm/BudgetForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';

function Budgets() {

	const pageTitle = 'Budgets';

	return (
		<Grid container>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
			</Grid>

			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<BudgetForm />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Budgets