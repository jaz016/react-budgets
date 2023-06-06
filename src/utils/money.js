export function formatMoney(number) {
	// Convert the number to a floating-point number with 2 decimal places
	let isNegative = false;
	let formattedAmount = number.toFixed(2);
	isNegative = formattedAmount < 0;

	// Add commas for thousands separator
	formattedAmount = Math.abs(formattedAmount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	formattedAmount = `${isNegative ? '-P' : 'P'}` + formattedAmount;
  
	return formattedAmount;
}