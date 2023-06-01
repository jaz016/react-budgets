import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CategoryTable({categories, isFetching, onEditClick}) {

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Type</TableCell>
						<TableCell>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
				{categories.length ?
					categories.map(category => (
						<TableRow
							key={category.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{category.name}
							</TableCell>
							<TableCell sx={{textTransform: 'uppercase'}}>{category.type}</TableCell>
							<TableCell>
								<Button variant="outlined" size='small' color='success' sx={{mr: 1}} onClick={() => onEditClick(category)}>Edit</Button> 
								<Button variant="outlined" size='small' color='error' sx={{mr: 1}}>Delete</Button>
							</TableCell>
						</TableRow>
					)
				) : (
					<TableRow>
						<TableCell align='center' colSpan={3}>{isFetching ? 'Loading data...' : 'There is no data in the list'}</TableCell>
					</TableRow>
				)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CategoryTable