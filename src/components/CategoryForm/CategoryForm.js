import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CategoryForm() {
	return (
		<>
			<TextField id="outlined-basic" label="Enter category name" variant="outlined" margin='normal' fullWidth sx={{background:'#fff', mb:2}} />
			<Button variant="contained" sx={{float:'right'}}>Create</Button>
		</>
	)
}

export default CategoryForm