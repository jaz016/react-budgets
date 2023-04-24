import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Typography, Button } from "@mui/material";

function TransactionListPreview() {

	const dummyList = Array(15).fill(null);

	return (
		<>
			<div id='transaction-list-preview-title' style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<Typography	Typography variant='h6' component='h2' gutterBottom = 'true' sx={{fontWeight: 'bold', display: 'inline-block', my:4}}>Recent transactions</Typography>
				<Button variant="contained" color='success'>View all</Button>
			</div>
			<List sx={{ maxHeight: '500px', overflowY: 'scroll' }}>
				{
					dummyList.map((item, idx) => (
						<>
						<ListItem key={idx} sx={{pl: 0}}secondaryAction={
							<IconButton edge="end" aria-label="edit">
							  <DriveFileRenameOutlineIcon />
							</IconButton>
						  }>
							<ListItemText primary='Expense' secondary='-P749.00'></ListItemText>
							<ListItemText primary='Food: Grocery'></ListItemText>
						</ListItem>
						<Divider />
						</>
					))
				}
			</List>
		</>
	)
}

export default TransactionListPreview