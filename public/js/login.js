const user = document.getElementById('user');
const password = document.getElementById('user-password');
const form = document.getElementById('form-login');
const error = document.getElementById('error-text');

let loggedIn = false;
form.addEventListener('submit', function (e) {
	let messages = [];
	if (user.value === '') {
		messages.push('Name is required');
	}

	if (password.value.length <= 6 || password.value.length >= 20) {
		messages.push('Password is invalid');
	}

	if (messages.length > 0) {
		e.preventDefault();
		error.innerText = messages.join(', ');
	} else {
		loggedIn = true;
		alert('Logged In');
	}
});

// async function getData() {
// 	let data = await fetch('../db/users.json').then((data) => data.json());
// 	return data.users;
// }

// 	let messages = [];
// 	// let data = await getData();
// 	for (let i = 0; i < data.length; i++) {
// 		if (data.user !== name.value || data.password !== password.value)
// 			messages.push('Credentials are invalid');
// 		loggedIn = true
// 	}
