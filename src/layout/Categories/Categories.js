import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import CategoryTable from "../../components/CategoryTable/CategoryTable";

function Categories() {

	const pageTitle = 'Categories';

	return (
		<Grid container>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
			</Grid>

			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<CategoryForm />
				</Grid>
			</Grid>

			<Grid item lg={12} sx={{my:5}}>
				<CategoryTable />
			</Grid>
			
		</Grid>
	)
}

export default Categories