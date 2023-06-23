import { Link, useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Grid from '@mui/material/Grid';

function PageTitle({title}) {
	const navigate = useNavigate();

	return (
		<Grid container>
			<Grid item md={12} sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant='h4' component='h1' sx={{fontWeight: 'lighter', display: 'inline-block'}}>{title}</Typography>
				<Button onClick={() => navigate(-1)} variant="outlined" startIcon={<KeyboardArrowLeftIcon />}>
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