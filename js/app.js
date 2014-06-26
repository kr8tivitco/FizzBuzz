$(document).ready(function() {

for (count =1; count <=15; count++) {

	//$("#countContaint span").html("my" + count);
	if ((count % 3 == 0) && (count % 5 == 0)) {
		$("#countContain ul").append('<li>' + "Count= " + count + " FIZZ-BUZZ" + '</li>')
	}
	else if (count % 3 == 0) {
		  $("#countContain ul").append('<li>' + "Count= " + count + " FIZZ" + '</li>')
	
	} else if (count % 5 == 0) {
			$("#countContain ul").append('<li>' + "Count= " + count + " BUZZ" + '</li>')

	} else {
	$("#countContain ul").append('<li>' + "Count= " + count + '</li>');
	
	}
}

});