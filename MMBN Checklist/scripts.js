var confirmed = false;

function confirmFunction(){
	if(confirm("This will reset EVERYTHING!!!") == true){
		confirmed = true
	}
	if(confirmed == true){
		var checkboxes = document.getElementsByName("Uncheck");
		for (var checkbox of checkboxes){
			checkbox.checked = false;
		}
		confirmed = false
	}
}

