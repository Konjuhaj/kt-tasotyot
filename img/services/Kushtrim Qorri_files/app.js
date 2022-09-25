function displayMore(input) {
	var dots = document.getElementById(input + "dots");
	var moreText = document.getElementById(input + "read-more");
	var btnText = document.getElementById(input + "Btn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Lue lisää";
		moreText.style.display = "none";
	}
	else {
		dots.style.display = "none";
		btnText.innerHTML = "Lue vähemmän";
		moreText.style.display = "inline";
	}
}
