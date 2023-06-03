import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

function TransactionForm({ isEdit, onSubmitSuccess }) {

	const { id } = useParams();
	const navigate = useNavigate();
	let [categories, setCategories] = useState([]);

	let [isExpense, setIsExpense] = useState(true);
	let [transactionName, setTransactionName] = useState('');
	let [amount, setAmount] = useState('');
	let [category, setCategory] = useState('');
	let [datetime, setDatetime] = useState('');
	let [notes, setNotes] = useState('');
	let transaction = {
		type: isExpense ? 'expense' : 'income',
		name: transactionName,
		amount,
		category,
		datetime,
		notes
	}

	const filterByType = isExpense ? 'expense' : 'income';

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
				setDatetime(dayjs(new Date(data.datetime)));
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
		let ignore = false;
		const loadCategories = async () => {
			const url = `http://localhost:8080/categories/?type=${filterByType}`;
			try {
				const res = await fetch(url);
				const data = await res.json();
				if(!ignore)
					setCategories(data);
			} catch(err) {
				throw err;
			}
		}

		loadCategories();
		return () => {
			ignore = true;
		}
		
	}, [filterByType]);

	const handleTransactionTypeChange = data => {
		setIsExpense(data)
	}

	const handleCreate = async (transaction) => {
		const url = `http://localhost:8080/transactions/`;
		const headers = {'Content-type': 'application/json'};
		const payload = {...transaction, datetime: datetime.toISOString()};

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(payload)
			});

			const data = await res.json();
			if(res.status === 201) {
				resetForm();
				onSubmitSuccess();
			}
		} catch(err) {
			throw err;
		}
	}

	const handleSave = async (transactionId) => {
		const url = `http://localhost:8080/transactions/${transactionId}`;
		const headers = {'Content-type': 'application/json'};
		const payload = {...transaction, datetime: datetime.toISOString()};

		try {
			const res = await fetch(url, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify(payload)
			})
			
			if(res.status === 200) {
				alert(`Transaction has been successfully edited!`);
			}
		} catch (err) {
			throw err;
		}
	}

	const handleDelete = async (transactionId) => {
		if(window.confirm('Are you sure you want to delete this transaction?')) {
			const url = `http://localhost:8080/transactions/${transactionId}`;
			try {
				const res = await fetch(url, {
					method: 'DELETE'
				});

				if(res.status === 200) {
					alert('Transaction has been deleted!');
					navigate('/transaction/create');
				}
				
			} catch(err) {
				throw err;
			}
		}
	}

	const resetForm = () => {
		setIsExpense(true);
		setTransactionName('');
		setAmount('');
		setCategory('');
		setDatetime('');
		setNotes('');
	}

	return (
		<>
			<TransactionFilter isExpense={isExpense} onChange={handleTransactionTypeChange} />
			<TextField 
				id="outlined-basic" 
				label={ isExpense ? "Expense Name" : "Income Name"}  
				variant="outlined" margin='normal' 
				fullWidth 
				sx={{background:'#fff'}} 
				value={transactionName}
				onChange={(e) => setTransactionName(e.target.value)}
			/>
			<TextField 
				id="outlined-basic" 
				label="Amount" 
				variant="outlined" 
				margin='normal' 
				fullWidth 
				sx={{background:'#fff'}} 
				value={amount}
				InputProps={{
					startAdornment: <InputAdornment position="start">Php</InputAdornment>,
				}}
				onChange={(e) => setAmount(parseFloat(e.target.value))}
			/>
			<FormControl margin='normal' fullWidth sx={{background:'#fff'}}>
				<InputLabel>Category</InputLabel>
				<Select
					value={category}
					label="Category"
					onChange={(e) => setCategory(e.target.value)}
				>
					{categories.map(category => (
						<MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl margin='normal' fullWidth sx={{background:'#fff'}} value={datetime} >
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker 
						label="Date/Time" 
						value={datetime ? datetime : null} 
						onChange={newDatetime => setDatetime(newDatetime.$d)} 
					/>
				</LocalizationProvider>
			</FormControl>
			<Textarea 
				size="lg" 
				name="Size" 
				variant='outlined' 
				placeholder="Enter additional notes..." 
				minRows={8} 
				maxRows={8} 
				sx={{my:2}} 
				value={notes} 
				onChange={(e) => setNotes(e.target.value)}
			/>
			
			{ isEdit ? (
				<>
					<Button 
						variant="contained" 
						color="success" 
						sx={{float:'right'}}
						onClick={() => handleSave(id)} >Save Changes</Button>
					<Button 
						variant="contained" 
						color="error" 
						sx={{float:'right', marginRight: '0.5rem'}} 
						onClick={() => handleDelete(id)} >Delete Transaction</Button>
				</>
				
 			) : (
				<Button 
					variant="contained" 
					sx={{float:'right'}}
					onClick={() => handleCreate(transaction)}
				>Create</Button>
			)}
		</>
	)
}

export default TransactionForm;