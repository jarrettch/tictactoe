
var turn = 0;
var board = [[null,null,null],[null,null,null],[null,null,null],]

function playBox(box) { //prevents turn++ affecting X-O placement
	if(box.innerHTML != "")
		return;

	box.innerHTML = (turn % 2 == 0) ? 'X' : 'O'; //alternates X-O
	turn++;
	Object.freeze(box); //prevents Xs and Os from being changed

	var moveLetter;
	if (turn%2 == 0)
	moveLetter = 'O';
	else
	moveLetter = "X";
	box.value = moveLetter; //Me: not sure what this line does
							//works when omitted

	// Place this move in the array
	// Here's the version that works if you are using cell1_3 for the ID
	// board[(event.target.id[4]) - 1][(event.target.id[6]) - 1]
	// = moveLetter;

	// Here's the version that works if you're using cell5 for the ID
	board
	[Math.floor(((event.target.id[4]) - 1) / 3)]
	[((event.target.id[4]) - 1) % 3]
	= moveLetter;


}