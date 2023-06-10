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
		const loadTransaction = () => {
			const data = localStorage.getItem('app');
			const fetchedTransaction = JSON.parse(data).transactions.find(t => t.id === parseInt(id))

			setIsExpense(fetchedTransaction.type === 'expense');
			setTransactionName(fetchedTransaction.name);
			setAmount(fetchedTransaction.amount);
			setCategory(fetchedTransaction.category);
			setDatetime(dayjs(new Date(fetchedTransaction.datetime)));
			setNotes(fetchedTransaction.notes);
		}

		if(id) {
			loadTransaction();
		}

	}, [id]);

	useEffect(() => {
		const data = localStorage.getItem('app');
		const filteredCategories = JSON.parse(data).categories.filter(category => category.type === filterByType)
		setCategories(filteredCategories);		
	}, [filterByType]);

	const handleTransactionTypeChange = data => {
		setIsExpense(data)
	}

	const handleCreate = async (transaction) => {

		const data = localStorage.getItem('app');

		const parsedData = JSON.parse(data);
		const existingTransactions = parsedData.transactions;
		const nextId = existingTransactions.length > 0 ? Math.max(...existingTransactions.map(t => t.id)) + 1 : 1
		const newTransaction = {...transaction, id: nextId, datetime: datetime.toISOString()};
		existingTransactions.push(newTransaction);
		localStorage.setItem('app', JSON.stringify(parsedData));

		resetForm();
		onSubmitSuccess();
	}

	const handleSave = (transactionId) => {

		const data = localStorage.getItem('app');

		const parsedData = JSON.parse(data);
		const transactionIdx = parsedData.transactions.findIndex(t => t.id === parseInt(transactionId));

		if(transactionIdx !== -1) {
			const editedTransaction = {id: parseInt(transactionId), ...transaction, datetime: datetime.toISOString()};
			parsedData.transactions[transactionIdx] = editedTransaction
			localStorage.setItem('app', JSON.stringify(parsedData));
		}

		alert(`Transaction has been successfully edited!`);
	}

	const handleDelete = async (transactionId) => {
		if(window.confirm('Are you sure you want to delete this transaction?')) {
			
			const data = localStorage.getItem('app');

			const parsedData = JSON.parse(data);
			const transactionIdx = parsedData.transactions.findIndex(t => t.id === parseInt(transactionId));

			if(transactionIdx !== -1) {
				parsedData.transactions.splice(transactionIdx,1);
				localStorage.setItem('app', JSON.stringify(parsedData));
			}

			alert('Transaction has been deleted!');
			navigate('/transaction/create');
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