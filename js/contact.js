const form = document.querySelector("form");
const messageSend = document.querySelector(".form-submit");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	messageSend.style.display = "block";
	window.scrollTo(0, 0);
	form.reset();
});

// async function onSignup(event) {
// 	event.preventDefault();

// 	const form = event.target;
// 	const email = form.email.value;
// 	const isValid = form.valid;
// 	const apiUrl = form.action;
// 	const method = form.method;
// 	const body = new FormData(form);

// 	console.log(email, isValid, apiUrl, method);

// 	const response = await fetch(apiUrl, {
// 		method,
// 		body,
// 	});

// 	const data = await response.json();
// }
