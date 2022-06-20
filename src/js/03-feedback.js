import { throttle } from 'lodash';

const emailEl = document.querySelector('input, [name="email"]');
const messageEl = document.querySelector('textarea, [name="message"]');
const form = document.querySelector('form.feedback-form');

let email = '';
let message = '';

const feedbackObject = {
	email,
	message,
};

const getStorageData = function () {
	const retrievedObject = localStorage.getItem('feedback-form-state');
	const result = retrievedObject ? JSON.parse(retrievedObject) : feedbackObject;
	return result;
};

const objectedFeedbackObject = getStorageData();

emailEl.setAttribute('value', objectedFeedbackObject.email);
messageEl.insertAdjacentText('beforeend', objectedFeedbackObject.message);

const storeFeedbackObject = function (value, type) {
	const result = getStorageData();

	if (type === 'message') {
		result.message = value;
	} else {
		result.email = value;
	}

	localStorage.setItem('feedback-form-state', JSON.stringify(result));
};

const inputEmailHandler = function (e) {
	email = e.target.value;
	storeFeedbackObject(email, 'email');
};

const textareaMessagelHandler = function (e) {
	message = e.target.value;
	storeFeedbackObject(message, 'message');
};

const submitHandler = function (e) {
	e.preventDefault();
	console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
	localStorage.clear();
	form.reset();
};
// console.log(throttle)
emailEl.addEventListener('input', throttle(inputEmailHandler, 1500));
messageEl.addEventListener('input', throttle(textareaMessagelHandler, 1500));
form.addEventListener('submit', submitHandler);

// throttle(storeFeedbackObject, 500);
