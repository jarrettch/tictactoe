
var turn = 0;

function playBox(box) {
	box.innerHTML = (turn % 2 == 0) ? 'X' : 'O';
	turn++;
}