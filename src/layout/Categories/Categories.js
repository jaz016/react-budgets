import { useState } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import CategoryTable from "../../components/CategoryTable/CategoryTable";

function Categories() {

	const pageTitle = 'Categories';
	let [isEditMode, setIsEditMode] = useState(false);
	let [categoryToEdit, setCategoryToEdit] = useState(null);

	const handleEditClick = (category) => {
		setCategoryToEdit(category);
		setIsEditMode(true);
	}

	const handleCancelClick = () => {
		setCategoryToEdit(null);
		setIsEditMode(false);
	}

	return (
		<Grid container>
			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<PageTitle title={pageTitle} />
				</Grid>
			</Grid>

			<Grid item lg={12}>
				<Grid item lg={4} sx={{mb:5}}>
					<CategoryForm isEdit={isEditMode} toEdit={categoryToEdit} onCancelClick={handleCancelClick}/>
				</Grid>
			</Grid>

			<Grid item lg={12} sx={{my:5}}>
				<CategoryTable onEditClick={handleEditClick} />
			</Grid>
			
		</Grid>
	)
}

export default Categories