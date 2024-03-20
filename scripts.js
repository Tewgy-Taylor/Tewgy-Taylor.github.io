let confirmed = false;

function confirmFunction(){
	if(confirm("This will reset EVERYTHING!!!") == true){
		confirmed = true
	}
	if(confirmed == true){
		let checkboxes = document.getElementsByClassName("Uncheck");
		for (let checkbox of checkboxes){
			checkbox.checked = false;
		}
		confirmed = false
	}
}
