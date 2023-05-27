import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";

function CategoryForm({isEdit, toEdit, onCancelClick}) {

	let [isExpense, setIsExpense] = useState(true);
	let [categoryName, setCategoryName] = useState('');

	const type = toEdit ? toEdit.type : null
		 ,name = toEdit ? toEdit.name : null;

	useEffect(() => {
		if(type && name) {
			setIsExpense(type==='expense');
			setCategoryName(name);
		} else {
			resetForm();
		}
	}, [type,name])

	const handleTransactionTypeChange = data => {
		setIsExpense(data)
	}

	const handleSave = async (categoryId) => {
		const url = `http://localhost:8080/categories/${categoryId}`;
		const headers = {'Content-type': 'application/json'};
		const payload = {
			type: isExpense ? 'expense' : 'income',
			name: categoryName
		}

		try {
			const res = await fetch(url, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify(payload)
			})
			const data = await res.json();
		} catch (err) {
			throw err;
		}
	}

	const resetForm = () => {
		setIsExpense(true);
		setCategoryName('');
	}

	return (
		<>
			<TransactionFilter isExpense={isExpense} onChange={handleTransactionTypeChange} />
			<TextField id="outlined-basic" label="Enter category name" variant="outlined" margin='normal' fullWidth sx={{background:'#fff', mb:2}} 
				value={categoryName}
				onChange={(e) => setCategoryName(e.target.value)}
			/>
			{
				isEdit ? (
					<>
						<Button variant="contained" color="success" sx={{float:'right'}} onClick={() => handleSave(toEdit.id)}>Save Changes</Button>
						<Button variant="text" sx={{float:'right', marginRight: '1.5rem'}} onClick={onCancelClick}>Cancel</Button>
					</>
				) : <Button variant="contained" sx={{float:'right'}}>Create</Button>
			}
		</>
	)
}

export default CategoryForm