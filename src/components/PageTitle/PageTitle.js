import { Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Grid from '@mui/material/Grid';

function PageTitle({title}) {
	return (
		<Grid container>
			<Grid item md={4} sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant='h4' component='h1' sx={{fontWeight: 'lighter', display: 'inline-block'}}>{title}</Typography>
				<Button variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
					Go back
				</Button>
			</Grid>
		</Grid>
	)
}

PageTitle.defaultProps = {
	title: 'New Page'
}

export default PageTitle