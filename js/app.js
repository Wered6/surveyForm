function showCategories(that) {
	document.getElementById("abstractCategory").style.display = "none";
	document.getElementById("areaControlCategory").style.display = "none";
	document.getElementById("campaign/LegacyCategory").style.display = "none";

	switch (that.value) {
		case "abstract":
			document.getElementById("abstractCategory").style.display = "flex";
			break;
		case "area_control":
			document.getElementById("areaControlCategory").style.display = "flex";
			break;
		case "campaign/legacy":
			document.getElementById("campaign/LegacyCategory").style.display = "flex";
	}
}

function goThroughTheForm() {
	var surveyForm = document.getElementById("surveyForm");
    var dropDownList = document.getElementById("category");

	if (surveyForm.checkValidity()) {
        surveyForm.style.display = "none";
        dropDownList.style.display = "flex";
    } 

}