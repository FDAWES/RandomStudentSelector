var students = [];
var alreadySelected = [];

document.getElementById('file').onchange = function(){
	var file = this.files[0];
	//Initialize the file reader
	var reader = new FileReader();
	//Set the load event of the file reader
	reader.onload = function(progressEvent){
		// Entire file
		console.log(this.result);
		// By lines
		var lines = this.result.split('\n');
		for(var line = 0; line < lines.length; line++){
		students.push(lines[line]);
		}
	};
	reader.readAsText(file);

	$("#instructions").show();
};

document.onkeyup = function(){
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	if(event.keyCode === 13){

		var selectedStudentIndex = Math.floor(Math.random() * students.length);

		//If I've cycled through all students then empty the array
		if(alreadySelected.length === students.length){
			alreadySelected = [];
		}


		while(alreadySelected.includes(selectedStudentIndex)){
			selectedStudentIndex = Math.floor(Math.random() * students.length);
		}

		$("#selectedStudent").html(students[selectedStudentIndex]);

		alreadySelected.push(selectedStudentIndex);
	}
}