/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
	evt.preventDefault();

	const name = $('#name').val();
	const year = $('#year').val();
	const email = $('#email').val();
	const color = $('#color').val();
	console.log(name, year, email, color);

	const resp = await axios.post('/api/get-lucky-num', {
		name: name,
		year: year,
		email: email,
		color: color
	});

	handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(resp) {
	data = resp.data;
	msg = `
    Your lucky number is ${data.num.num} (${data.num.fact})
    Your birth year (${data.year.year}) fact is ${data.year.fact}`;

	if (resp.status === 200 && Object.keys(data.errors).length === 0) {
		$('#lucky-results').text(msg);
	} else {
		$('#name-err').text(data.errors.name);
		$('#year-err').text(data.errors.year);
		$('#email-err').text(data.errors.email);
		$('#color-err').text(data.errors.color);
	}
}

$('#lucky-form').on('submit', processForm);
