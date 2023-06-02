import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function CategoryTable({initCategories, onEditClick, onDeleteSuccess, onInitCategoriesChange}) {

	let [categories, setCategories] = useState([]);
	let [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		const loadCategories = async () => {
			const url = 'http://localhost:8080/categories';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCategories(data);
				setIsFetching(false);
				onInitCategoriesChange(false)
			} catch(err) {
				throw err;
			}
		}

		if(initCategories) {
			loadCategories();
		}
		
	}, [initCategories, onInitCategoriesChange])

	const handleDeleteClick = async (categoryId) => {
		if(window.confirm('Are you sure you want to delete this category?')) {
			const url = `http://localhost:8080/categories/${categoryId}`;
			try {
				const res = await fetch(url, {
					method: 'DELETE'
				});

				if(res.status === 200) {
					alert('Category has been deleted!')
					onDeleteSuccess();
				}
				
			} catch(err) {
				throw err;
			}
		}
	}

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
								<Button variant="outlined" size='small' color='error' sx={{mr: 1}} onClick={() => handleDeleteClick(category.id)}>Delete</Button>
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