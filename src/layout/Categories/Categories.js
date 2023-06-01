import { useState, useEffect } from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Grid from '@mui/material/Grid';
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import CategoryTable from "../../components/CategoryTable/CategoryTable";

function Categories() {

	const pageTitle = 'Categories';
	let [isEditMode, setIsEditMode] = useState(false);
	let [categoryToEdit, setCategoryToEdit] = useState(null);

	let [categories, setCategories] = useState([]);
	let [isFetchingCategories, setIsFetchingCategories] = useState(true);
	let [initCategories, setInitCategories] = useState(true);


	useEffect(() => {
		const loadCategories = async () => {
			const url = 'http://localhost:8080/categories';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCategories(data);
				setIsFetchingCategories(false);
				setInitCategories(false);
			} catch(err) {
				throw err;
			}
		}

		if(initCategories) {
			loadCategories();
		}
		
	}, [initCategories])


	const handleEditClick = (category) => {
		setCategoryToEdit(category);
		setIsEditMode(true);
	}

	const handleCancelClick = () => {
		setCategoryToEdit(null);
		setIsEditMode(false);
	}

	const handleSubmitSuccess = () => {
		setIsEditMode(false);
		setInitCategories(true);
	}

	const handleDeleteSuccess = () => {
		setInitCategories(true);
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
					<CategoryForm 
						isEdit={isEditMode} 
						toEdit={categoryToEdit} 
						onCancelClick={handleCancelClick} 
						onSubmitSuccess={handleSubmitSuccess}
					/>
				</Grid>
			</Grid>

			<Grid item lg={12} sx={{my:5}}>
				<CategoryTable 
					categories={categories} 
					isFetching={isFetchingCategories} 
					onEditClick={handleEditClick} 
					onDeleteSuccess={handleDeleteSuccess}
				/>
			</Grid>
			
		</Grid>
	)
}

export default Categories