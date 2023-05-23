import { alpha, styled } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

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

function TransactionFilter({ isExpense = true, onChange }) {

	return (
		<div className='transactionFilter-wrap'>
			<label htmlFor='transaction-type'><strong>Income</strong></label>
			<TransactionSwitch id='transaction-type' checked={isExpense} onChange={(e) => onChange(e.target.checked)} />
			<label htmlFor='transaction-type'><strong>Expense</strong></label>
		</div>
	)

	
}

export default TransactionFilter