function applyFilter(input, filter) {
	let result = input.map(() => 0);
	
	const applyOffset = Math.floor(filter.length / 2);

	for (let i = 0; i < input.length - filter.length; i ++) {
		let sum = 0;
		for (let j = 0; j < filter.length; j ++) {
			sum += input[i + j] * filter[j];
		}

		result[i + applyOffset] = sum;
	}

	return result;
}
