function verifyBmi(mvalue, hvalue, zvalue){
					var num1 = document.getElementById('m-value').value;
					var num2 = document.getElementById('h-value').value; 
					var num3 = document.getElementById('z-value').value;
					var sum = num1 + num2 + num3 ;
					var total = sum/3;
					
					

					document.getElementById('value_a').innerHTML = 'Your average grade is:'+ total + '.';
				}


function verifyGrade () {
					var grade = document.getElementById('Grade').value;
					if (grade >= 94 && grade <= 100) {
						window.alert("Excellent!");
					}
					
					else if (grade >= 87 && grade <= 93.99){
						window.alert("Above Standard")
					}

					else if (grade >= 80 && grade <= 86.99) {
						window.alert("Standard")
					}


					else if (grade >= 75 && grade <= 79.99){
						window.alert("Needs Improvement")
					}

					else if (grade >= 70 && grade <= 74.99){
						window.alert("Needs Improvement")
					}


					else  {
						window.alert("Failed")
					}


				}