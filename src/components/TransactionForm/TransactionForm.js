import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import TransactionFilter from "../../components/TransactionFilter/TransactionFilter";

function TransactionForm({ isEdit }) {

	const { id } = useParams();
	let [categories, setCategories] = useState([]);

	let [isExpense, setIsExpense] = useState(true);
	let [transactionName, setTransactionName] = useState('');
	let [amount, setAmount] = useState('');
	let [category, setCategory] = useState('');
	let [datetime, setDatetime] = useState('');
	let [notes, setNotes] = useState('');


	useEffect(() => {

		const loadTransaction = async () => {
			const url = `http://localhost:8080/transactions/${id}`;
	
			try {
				const res = await fetch(url);
				const data = await res.json();
				setIsExpense(data.type === 'expense');
				setTransactionName(data.name);
				setAmount(data.amount);
				setCategory(data.category);
				setDatetime(data.datetime);
				setNotes(data.notes);
			} catch(err) {
				throw err;
			}
		}

		if(id) {
			loadTransaction();
		}

	}, [id]);

	useEffect(() => {
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

		loadCategories();
	}, []);

	const handleTransactionTypeChange = data => {
		setIsExpense(data)
	}

	const handleCategoryChange = (e) => {
		setCategory(e.target.value)
	}

	return (
		<>
			<TransactionFilter isExpense={isExpense} onChange={handleTransactionTypeChange} />
			<TextField id="outlined-basic" label={ isExpense ? "Expense Name" : "Income Name"}  variant="outlined" margin='normal' fullWidth sx={{background:'#fff'}} value={transactionName} />
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
					onChange={handleCategoryChange}
				>
					{categories.map(category => (
						<MenuItem value={category.name}>{category.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl margin='normal' fullWidth sx={{background:'#fff'}} value={datetime} >
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker label="Date/Time" value={datetime ? dayjs(new Date(datetime)) : null} onChange={newDatetime => setDatetime(newDatetime)} />
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