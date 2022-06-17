let isCustomQuestionInputShown = false;

function checkSelectedInput() {
	let question_input_elm = document.querySelector("#question_input"),
		custom_question_input_container_elm = document.querySelector("#custom_question_input_container");
		
	if (question_input_elm.value != "Other") {
		isCustomQuestionInputShown = false;
		custom_question_input_container_elm.style.display = "none";
	} else {
		isCustomQuestionInputShown = true;
		custom_question_input_container_elm.style.display = "flex";	
	}
}

function validateInputs() {
	let all_text_inputs = document.querySelectorAll(`input[type="text"], input[type="email"]`),
		feedback_text_elm = document.querySelector(`p#feedback_text`),
		areAllInputsFilled = true;
	
	for (let text_input of all_text_inputs) {
		
		if (text_input.id === "custom_question_input" && !isCustomQuestionInputShown) {
			continue
		}
		
		if (!text_input.value) {
			areAllInputsFilled = false;
			text_input.style = `
				background-color: #FF6666;
				border-color: #660000;
			`
		}
		else {
			areAllInputsFilled = true;
			text_input.style = ``
		}
	}
	
	if (areAllInputsFilled) {
		console.log("hello")
		feedback_text_elm.textContent = 'Your question has been recieved!';
		feedback_text_elm.style = `
			display: block;
			color: #006600;
		`
	}
	else {
		console.log("hello")
		
		feedback_text_elm.textContent = 'Please fill out all fields';
		feedback_text_elm.style = `
			display: block;
			color: #660000;
		`
	}
}