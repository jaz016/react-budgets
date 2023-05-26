import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";

function CategoryForm() {

	let [isExpense, setIsExpense] = useState(true);
	let [categoryName, setCategoryName] = useState('');

	const handleTransactionTypeChange = data => {
		setIsExpense(data)
	}

	return (
		<>
			<TransactionFilter isExpense={isExpense} onChange={handleTransactionTypeChange} />
			<TextField id="outlined-basic" label="Enter category name" variant="outlined" margin='normal' fullWidth sx={{background:'#fff', mb:2}} 
				value={categoryName}
				onChange={(e) => setCategoryName(e.target.value)}
			/>
			<Button variant="contained" sx={{float:'right'}}>Create</Button>
		</>
	)
}

export default CategoryForm