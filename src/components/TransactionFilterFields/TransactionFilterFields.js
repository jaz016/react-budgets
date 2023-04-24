import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import { useState } from 'react';

function TransactionFilterFields() {

	let [filterBy, setFilterBy] = useState('');

	const handleChange = (e) => {
		setFilterBy(e.target.value)
	}

	return (
		<form>
			<table style={{width: '100%'}}>
				<tr>
					<td><label for='search-for'><strong>Search</strong></label></td>
					<td><TextField id="search-for" label="Enter transaction name, category or notes" variant="outlined" margin='normal' fullWidth sx={{background:'#fff'}} /></td>
				</tr>
				<tr>
					<td><label for='filter-by'><strong>Filter by</strong></label></td>
					<td>
						<Grid container columnSpacing={1}>
							<Grid item xs={6}>
								<FormControl margin='normal' fullWidth sx={{background:'#fff'}}>
									<InputLabel>Transaction Type</InputLabel>
									<Select
										value={filterBy}
										label="Transaction Type"
										onChange={handleChange}
									>
										<MenuItem value={'item-1'}>Item 1</MenuItem>
										<MenuItem value={'item-2'}>Item 2</MenuItem>
										<MenuItem value={'item-3'}>Item 3</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={6}>
								<FormControl margin='normal' fullWidth sx={{background:'#fff'}}>
									<InputLabel>Expense</InputLabel>
									<Select
										value={''}
										label="Expense"
										onChange={() => console.log(23)}
									>
										<MenuItem value={'item-1'}>Item 1</MenuItem>
										<MenuItem value={'item-2'}>Item 2</MenuItem>
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