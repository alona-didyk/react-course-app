export const formatCreationDate = (dateStr: string): string => {
	const date = new Date(dateStr);
	return date.toLocaleDateString('en-GB');
};
