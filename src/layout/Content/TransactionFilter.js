import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { alpha, styled } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

import { useState } from 'react';

const TransactionSwitch = styled(Switch)(({ theme }) => ({
	'& .MuiSwitch-switchBase.Mui-checked': {
		color: red[600],
		'&:hover': {
		  backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
		},
	  },
	  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
		backgroundColor: red[600],
	  },

	  '& .MuiSwitch-switchBase': {
		color: green[600],
		'&:hover': {
		  backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
		},
	  },
	  '& .MuiSwitch-switchBase + .MuiSwitch-track': {
		backgroundColor: green[600],
	  },
  }));

function TransactionFilter() {

	const [isExpense, setIsExpense] = useState(true);

	function handleTransactionChange(value) {
		setIsExpense(value);
	}


	return (
		<div className='transactionFilter-wrap'>
			<label for='transaction-type'><strong>Income</strong></label>
			<TransactionSwitch id='transaction-type' defaultChecked value={isExpense} onChange={(e) => handleTransactionChange(e.target.checked)} />
			<label for='transaction-type'><strong>Expense</strong></label>
		</div>
	)

	
}

export default TransactionFilter