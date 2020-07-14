const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');

if (window.Worker) {
	const myWorker = new Worker("worker.js");

	myWorker.postMessage("GO");
} else {
	console.log('Your browser doesn\'t support web workers.')
}
