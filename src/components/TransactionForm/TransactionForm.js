import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';

function TransactionForm({isEdit}) {

	const { id } = useParams();
	let [categories, setCategories] = useState([]);
	let [transactionName, setTransactionName] = useState('');
	let [amount, setAmount] = useState('');
	let [category, setCategory] = useState('');
	let [datetime, setDatetime] = useState('');
	let [notes, setNotes] = useState('');

	useEffect(() => {
		loadTransaction();
	}, []);

	useEffect(() => {
		loadCategories();
	}, []);

	const loadTransaction = async () => {
		const url = `http://localhost:8080/transactions/${id}`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setTransactionName(data.name);
			setAmount(data.amount);
			setCategory(data.category);
			setDatetime(data.datetime);
			setNotes(data.notes);
		} catch(err) {
			throw err;
		}
	}

	const loadCategories = async () => {
		const url = `http://localhost:8080/categories/`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setCategories(data);
		} catch(err) {
			throw err;
		}
	}

	const handleChange = (e) => {
		setCategory(e.target.value)
	}

	return (
		<>
			<TextField id="outlined-basic" label="Expense Name" variant="outlined" margin='normal' fullWidth sx={{background:'#fff'}} value={transactionName} />
			<TextField id="outlined-basic" label="Amount" variant="outlined" margin='normal' fullWidth sx={{background:'#fff'}} value={amount}
				InputProps={{
					startAdornment: <InputAdornment position="start">Php</InputAdornment>,
				}}
			/>
			<FormControl margin='normal' fullWidth sx={{background:'#fff'}}>
				<InputLabel>Category</InputLabel>
				<Select
					value={category}
					label="Category"
					onChange={handleChange}
				>
					{categories.map(category => (
						<MenuItem value={category.name}>{category.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl margin='normal' fullWidth sx={{background:'#fff'}} value={datetime} >
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker label="Date/Time" />
				</LocalizationProvider>
			</FormControl>
			<Textarea size="lg" name="Size" variant='outlined' placeholder="Enter additional notes..." minRows={8} maxRows={8} sx={{my:2}} value={notes} />
			
			{ isEdit ? (
				<>
					<Button variant="contained" color="success" sx={{float:'right'}} >Save Changes</Button>
					<Button variant="contained" color="error" sx={{float:'right', marginRight: '0.5rem'}} >Delete Transaction</Button>
				</>
				
 			) : (
				<Button variant="contained" sx={{float:'right'}}>Create</Button>
			)}
		</>
	)
}

export default TransactionForm;