import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

function TransactionFilterFields({ searchTerm, filterBy, filterByVal, onSearchTermChange, onFilterByChange, onFilterByValChange }) {

	// todo: warning - You have provided an out-of-range value for select component

	const filterByOptions = [
		{name: 'Transaction Type', slug: 'transaction-type'},
		{name: 'Category', slug: 'category'}
	];

	const transactionTypes = [
		{name: 'Income', slug: 'income'},
		{name: 'Expense', slug: 'expense'}
	]

	let [categories, setCategories] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const data = localStorage.getItem('app');
			setCategories(JSON.parse(data).categories);
		}

		loadCategories();
	}, [])

	return (
		<form>
			<table style={{width: '100%'}}>
				<tr>
					<td><label for='search-for'><strong>Search</strong></label></td>
					<td>
						<TextField 
							id="search-for" 
							label="Enter transaction name, category or notes" 
							variant="outlined" 
							margin='normal' 
							fullWidth 
							sx={{background:'#fff'}}
							value={searchTerm}
							onChange={(e) => onSearchTermChange(e.target.value)}
						/>
					</td>
				</tr>
				<tr>
					<td><label for='filter-by'><strong>Filter by</strong></label></td>
					<td>
						<Grid container columnSpacing={1}>
							<Grid item xs={6}>
								<FormControl margin='normal' fullWidth sx={{background:'#fff'}}>
									<InputLabel>Filter</InputLabel>
									<Select
										defaultValue=""
										label="Filter"
										onChange={(e) => onFilterByChange(e.target.value)}
									>
										{
											filterByOptions.map((item, i) => (
												<MenuItem key={i} value={item.slug}>{item.name}</MenuItem>
											))
										}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<FormControl margin='normal' fullWidth sx={{background:'#fff'}} disabled={filterBy === ''}>
									<InputLabel>Value</InputLabel>
									<Select
										defaultValue=""
										label="Value"
										onChange={(e) => onFilterByValChange(e.target.value)}
									>
										{
											filterBy === 'transaction-type' ? (
												transactionTypes.map((item, i) => (
													<MenuItem key={i} value={item.slug} selected={item.slug === filterByVal}>{item.name}</MenuItem>
												))) : ( 
											filterBy === 'category' ? (
												categories.map(item => (
													<MenuItem key={item.id} value={item.name} selected={item.name === filterByVal}>{item.name}</MenuItem>
												))) : '')
										}
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</td>
				</tr>
			</table>
		</form>
	)
}

export default TransactionFilterFields