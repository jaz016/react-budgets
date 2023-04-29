import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CategoryTable() {
	
	const rows = [
		{name: 'Food', type: 'Expense'},
		{name: 'Salary', type: 'Income'},
		{name: 'Entertainment', type: 'Expense'},
		{name: 'Utilities', type: 'Expense'},
	];

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
				{rows.map((row) => (
					<TableRow
						key={row.name}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell component="th" scope="row">
							{row.name}
						</TableCell>
						<TableCell>{row.type}</TableCell>
						<TableCell>
							<Button variant="outlined" size='small' color='success' sx={{mr: 1}}>Edit</Button> 
							<Button variant="outlined" size='small' color='error' sx={{mr: 1}}>Delete</Button>
						</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default CategoryTable