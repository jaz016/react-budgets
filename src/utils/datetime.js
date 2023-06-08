import dayjs from 'dayjs';

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

export function formatISOToYMD(ISOStr) {
	// const date = new Date(ISOStr);
	// const yyyy = date.getUTCFullYear();
	// const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
	// const dd = String(date.getUTCDate()).padStart(2, '0');
	// const formattedDate = `${yyyy}-${mm}-${dd}`;

	// return formattedDate;

	return dayjs(ISOStr).format('YYYY-MM-DD');

}

export function formatISOtoFullDt(ISOStr) {
	// const date = new Date(ISOStr); // Convert to Date object
	// const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
	// 					'July', 'August', 'September', 'October', 'November', 'December'];
	// const month = monthNames[date.getMonth()]; // Get month name
	// const day = date.getDate(); // Get day
	// const year = date.getFullYear(); // Get year
	// const formattedDate = `${month} ${day}, ${year}`; // Combine into desired format

	// return formattedDate;

	return dayjs(ISOStr).format('MMMM D, YYYY')
}