import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";

function CategoryForm({isEdit, toEdit, onCancelClick, onSubmitSuccess}) {

	let [isExpense, setIsExpense] = useState(true);
	let [categoryName, setCategoryName] = useState('');
	let category = {
		type: isExpense ? 'expense' : 'income', 
		name: categoryName
	}

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

	const handleCreate = (category) => {

		const data = localStorage.getItem('app');

		const parsedData = JSON.parse(data);
		const existingCategories = parsedData.categories;
		const nextId = existingCategories.length > 0 ? Math.max(...existingCategories.map(c => c.id)) + 1 : 1
		const newCategory = { id: nextId, type: category.type, name: category.name };
		existingCategories.push(newCategory);
		localStorage.setItem('app', JSON.stringify(parsedData));

		alert(`${category.name} category has been created!`);
		resetForm();
		onSubmitSuccess();
	}

	const handleSave = async (categoryId) => {

		const data = localStorage.getItem('app');

		const parsedData = JSON.parse(data);
		const categoryIdx = parsedData.categories.findIndex(c => c.id === parseInt(categoryId));

		if(categoryIdx !== -1) {
			const editedCategory = {id: parseInt(categoryId), type: isExpense ? 'expense' : 'income', name: categoryName};
			parsedData.categories[categoryIdx] = editedCategory
			localStorage.setItem('app', JSON.stringify(parsedData));
			alert(`Category has been successfully edited!`);
			resetForm();
			onSubmitSuccess();
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
				) : <Button variant="contained" sx={{float:'right'}} onClick={() => handleCreate(category)}>Create</Button>
			}
		</>
	)
}

export default CategoryForm