export function formatDateTime(date) {
	const options = {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	};

	const formattedDateTime = date.toLocaleString('en-US', options);
	return formattedDateTime;
}

export function formatISOToYMD(strDate) {
	const date = new Date(strDate);
	const yyyy = date.getUTCFullYear();
	const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
	const dd = String(date.getUTCDate()).padStart(2, '0');
	const formattedDate = `${yyyy}-${mm}-${dd}`;

	return formattedDate;
}