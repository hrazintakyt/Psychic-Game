
		
	var guessArray = ["a","b","c","d","e","f","g","h","i","j","k","l",
	"m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

	var i = (Math.floor((Math.random() * 26) + 1));

	
	var computerGuess = guessArray[i]

	var guessNum = 8

			



document.onkeyup = (function(event){

var userGuess = event.key.toLowerCase();

			if ( userGuess === "a"){

				document.getElementById("userGuess").write = "A"

			};

			if( userGuess === "b"){

				document.getElementById("userGuess").write = "B"

			};
			if( userGuess === "c"){

				document.getElementById("userGuess").write = "C"

			};

			if( userGuess === "d"){

				document.getElementById("userGuess").write = "D"

			};

			if( userGuess === "e"){

				document.getElementById("userGuess").write = "E"

			};

			if( userGuess === "f"){

				document.getElementById("userGuess").write = "F"

			};
			if( userGuess === "g"){

				document.getElementById("userGuess").write = "G"

			};
			if( userGuess === "h"){

				document.getElementById("userGuess").write = "H"

			};
			if( userGuess === "i"){

				document.getElementById("userGuess").write = "I"

			};
			if( userGuess === "j"){

				document.getElementById("userGuess").write = "J"

			};

			if( userGuess === "k"){

				document.getElementById("userGuess").write = "K"

			};

			if( userGuess === "l"){

				document.getElementById("userGuess").write = "L"

			};
			if( userGuess === "m"){

				document.getElementById("userGuess").write = "M"

			};
			if( userGuess === "n"){

				document.getElementById("userGuess").write = "N"

			};
			if( userGuess === "o"){

				document.getElementById("userGuess").write = "O"

			};


			if( userGuess === "p"){

				document.getElementById("userGuess").write = "P"

			};
			if( userGuess === "q"){

				document.getElementById("userGuess").write = "Q"

			};


			if( userGuess === "r"){

				document.getElementById("userGuess").write = "R"

			};
			if( userGuess === "s"){

				document.getElementById("userGuess").write = "S"

			};

			if( userGuess === "t"){

				document.getElementById("userGuess").write = "T"

			};
			if( userGuess === "u"){

				document.getElementById("userGuess").write = "U"

			};
			if( userGuess === "v"){

				document.getElementById("userGuess").write = "V"

			};
			if( userGuess === "w"){

				document.getElementById("userGuess").write = "W"

			};

			if( userGuess === "x"){

				document.getElementById("userGuess").write = "X"

			};
			if( userGuess === "y"){

				document.getElementById("userGuess").write = "Y"

			};

			if( userGuess === "z"){

				document.getElementById("userGuess").write = "Z"

			};
			
			


	 $("#userGuess").append("<li>" + userGuess + "</li>")


	 if (userGuess === computerGuess){
	 	alert("You win")
	 }
	 if (userGuess !== computerGuess){
	 	alert("Try Again");
	 	guessNum --

	 }

	 $(".guessNumber").html(guessNum)

	 if (guessNum === 0){
	 	alert("You Lose");
	 	location.reload();
	 }
	


})


