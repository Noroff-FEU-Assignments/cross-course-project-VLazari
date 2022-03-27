const form = document.querySelector("form");
const messageSend = document.querySelector(".form-submit");
const userName = document.querySelector("#name");
const userNameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	formValidation();
	if (formValidation()) {
		messageSend.style.display = "block";
		window.scrollTo(0, 0);
		form.reset();
	}
});

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function formValidation() {
	if (checkLength(userName.value, 0) === true) {
		userNameError.style.display = "none";
	} else {
		userNameError.style.display = "block";
	}
	if (checkLength(subject.value, 0) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}
	if (checkLength(message.value, 0) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
	if (checkLength(userName.value, 0) && checkLength(subject.value, 0) && checkLength(message.value, 0) === true) {
		return true;
	} else {
		return false;
	}
}
