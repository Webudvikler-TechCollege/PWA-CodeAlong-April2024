// Get array of input elemtns
const arrInputs = document.querySelectorAll('input');

const ex = document.querySelector('#form');
console.log(ex);
// Loop through each input element
for(let input of arrInputs) {
	// Check if the input value is equal to the value stored in the session storage
	if(localStorage.getItem('lan') === input.value) {
		input.checked = true;
	}

	// Add event listener on click to each input element
	input.addEventListener('click', function() {
		// Set the value of the input element to the session storage
		localStorage.setItem('lan', this.value);
		// Reload the page
		window.location.reload();
	});
}

// Log the value stored in the session storage
console.log(sessionStorage.getItem('lan'));