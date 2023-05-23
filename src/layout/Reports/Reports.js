import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';

function Reports() {

	const pageTitle = 'Reports';

	return (
		<Grid container>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
			</Grid>

			<Grid item lg={12}>
				<h1>Coming soon!</h1>
			</Grid>
			
		</Grid>
	)
}

export default Reports