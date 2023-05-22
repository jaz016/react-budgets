export function formatMoney(number) {
	// Convert the number to a floating-point number with 2 decimal places
	let formattedAmount = number.toFixed(2);

	// Add commas for thousands separator
	formattedAmount = formattedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	formattedAmount = "P" + formattedAmount;
  
	return formattedAmount;
}