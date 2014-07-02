$(document).ready(function() {


	var count = prompt("Let's play the FIZZ-BUZZ Game. Please enter a number.");
	var userCount = +count; //converts input from string to int

	 

		//alert("count type " + typeof(count));
		//alert("userCount type " + typeof(userCount));

	var chkCount = function (arg2) {
		
		if (isNaN(arg2)){ //if userCount evaluates to NaN (true) then 1st key pressed was a string
			arg2 = prompt("The Value you enter was a string NOT a number, Please enter a number.");
			userCount = +arg2;
			chkCount(arg2);
			
		} else if (arg2 % 1 != 0) {//evaluates if userCount is a decimal
			arg2 = prompt("The Value you enter was a decimal NOT a number, Please enter a number.");
			userCount = +arg2;
			chkCount(arg2);

		} else { 
			userCheck(arg2); 
		}
		
	}
	 

	var userCheck = function (arg1) { //FIZZ-BUZZ portion of program
	
		for (i =1; i <= arg1; i++) {
				
			//$("#countContaint span").html("my" + count);
			if ((i % 3 == 0) && (i % 5 == 0)) {
				$("#countContain ul").append('<li>' + "#" + i + " FIZZ-BUZZ" + '</li>')
			}
			else if (i % 3 == 0) {
				  $("#countContain ul").append('<li>' + "#" + i + " FIZZ" + '</li>')
	
			} else if (i % 5 == 0) {
					$("#countContain ul").append('<li>' + "#" + i + " BUZZ" + '</li>')

			} else {
				$("#countContain ul").append('<li>' + "#" + i + '</li>');
	
			}
		}
	}		

	chkCount(userCount);

});