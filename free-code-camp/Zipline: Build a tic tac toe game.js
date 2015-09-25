<!DOCTYPE html>
<body>
<script>

var mySymbol = 'X'; // make this into a popup inquiry div later
if (mySymbol == 'X') {
	var computerSymbol = 'O';
} else {
	var computerSymbol = 'X';
}

var table = document.createElement('table'); // creates table node

// table styling
table.style.width  = '300px';
table.style.height = '300px';
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.textAlign = 'center';
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';

var row = null;
var cell = null;
var data = null;

for (var x = 0; x < 3; x++) {
	row = document.createElement('tr'); // creates row node
	table.appendChild(row); // appends row to table

	for (var y = 0; y < 3; y++) {
		cell = document.createElement('td'); // creates cell node
		row.appendChild(cell); // appends cell to row

		// cell styling
		cell.style.width = '33.33%';
		cell.style.height= '33.3%';
		cell.style.border = '1px solid black';
	}
}

document.body.appendChild(table); // appends table to document body

table.addEventListener("click", myTurn);

function myTurn(event) {
	data = document.createTextNode(mySymbol); 
	
	if (!event.target.hasChildNodes()) {
		event.target.appendChild(data);
		computerTurn(); // at the end of my turn, the computer takes its turn
	}
}

function computerTurn() { // artifical intelligence part
	data = document.createTextNode(computerSymbol); 
	
	// representations of data in each cell
	var cells = table.getElementsByTagName('td');
	// rows
	var rows = [[cells[0], cells[1], cells[2]], 
				[cells[3], cells[4], cells[5]],
				[cells[6], cells[7], cells[8]]];

	/*
	rows1 = rows.map(function(row) { 
		return row.map(function(cell) {
			if (!cell.firstChild) {
				return null;
			} else {
				return cell.firstChild.nodeValue;
			}
		});
	}); */

	// columns
	var columns = [[rows[0][0], rows[1][0], rows[2][0]],
					[rows[0][1], rows[1][1], rows[2][1]],
					[rows[0][2], rows[1][2], rows[2][2]]];
	// diagonals
	var diagonals = [[rows[0][0], rows[1][1], rows[2][2]],
					[rows[0][2], rows[1][1], rows[2][0]]];

	// defense
	defense(rows, columns, diagonals);

	function defense(rows, columns, diagonals) {
		var tookTurn = 'no';

		check(rows);
		check(columns);
		check(diagonals);

		if (tookTurn == 'no') {
			offense();
		}

		function check(elements) {
			var count = 0; 
			for (var element in elements) { // for row/column/diagonal in rows/columns/diagonals
				for (var cell in elements[element]) { // for each cell
					if (elements[element][cell].hasChildNodes()) { // if cell contains a child
						if (elements[element][cell].firstChild.nodeValue == mySymbol) {
							count += 1;
							if (count == 2) {
								for (var cell2 in elements[element]) {
									if (!elements[element][cell2].hasChildNodes()) {
										elements[element][cell2].appendChild(data);
										tookTurn = 'yes';
									}
								}
							}
						}
					}
				}
				count = 0; // reset upon moving to next row
			}
		}
	}

	function offense() {
		
		check(rows);
		check(columns);
		check(diagonals);

		if (!cells[4].hasChildNodes()) {
			cells[4].appendChild(data);
		} else {
			var num = 4; 
			while (cells[num].hasChildNodes()) {
				num = Math.floor(Math.random() * (9 - 0 + 1) + 0);
			}
			cells[num].appendChild(data);
		}

		function check(elements) {


			var count = 0;
			for (var element in elements) { // for row/column/diagonal in rows/columns/diagonals
				for (var cell in elements[element]) { // for each cell
					if (elements[element][cell].hasChildNodes()) { // if cell has been played
						if (elements[element][cell].firstChild.nodeValue == computerSymbol) { // if played by computer
							count += 1; // add one to count
							
							}
						}
						
					}
				}
				if (count == 1) {
					console.log('one element here');
				}
				count = 0;
			}
		}
	}


</script>
</body>

