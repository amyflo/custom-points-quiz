function getQuizScore(form) {
	var total = 0;

	var questions = document.getElementsByClassName("quiz-question");

	for (var count = 0; count < 3; count++) {
	  if (form.q1[count].checked) {
		var total = total + parseInt(form.q1[count].value);
	  }
	}

	for (var count = 0; count < 2; count++) {
	  if (form.q2[count].checked) {
		var total = total + parseInt(form.q2[count].value);
	  }
	}

	for (var count = 0; count < 3; count++) {
	  if (form.q3[count].checked) {
		var total = total + parseInt(form.q3[count].value);
	  }
	}

	for (var count = 0; count < 2; count++) {
	  if (form.q4[count].checked) {
		var total = total + parseInt(form.q4[count].value);
	  }
	}
	console.log(total);
  }