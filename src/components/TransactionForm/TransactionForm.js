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
import { useState } from 'react';

function TransactionForm() {

	let [category, setCategory] = useState('');

	const handleChange = (e) => {
		setCategory(e.target.value)
	}

	return (
		<>
			<TextField id="outlined-basic" label="Expense Name" variant="outlined" margin='normal' fullWidth sx={{background:'#fff'}} />
			<TextField id="outlined-basic" label="Amount" variant="outlined" margin='normal' fullWidth sx={{background:'#fff'}} 
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
					<MenuItem value={'category-1'}>Category 1</MenuItem>
					<MenuItem value={'category-2'}>Category 2</MenuItem>
					<MenuItem value={'category-3'}>Category 3</MenuItem>
				</Select>
			</FormControl>
			<FormControl margin='normal' fullWidth sx={{background:'#fff'}}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker label="Date/Time" />
				</LocalizationProvider>
			</FormControl>
			<Textarea size="lg" name="Size" variant='outlined' placeholder="Enter additional notes..." minRows={8} maxRows={8} sx={{my:2}}/>
			<Button variant="contained" sx={{float:'right'}}>Create</Button>
		</>
	)
}

export default TransactionForm;