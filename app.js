'use strict' ;
// global variables
let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm'];
let tableHours = ['Locations','6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '7pm', 'Total'];

// location object constructor function
function Location (locName, minCust, maxCust, avgSell) {
  this.locName = locName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSell = avgSell;
  this.sellStor = [];
  this.randNumCust = function () {
    return Math.floor(((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgSell);
  };
}

// locations
let seattle = new Location('seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo', 3, 24, 1.2);
let dubai = new Location('dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);

let locArray = [seattle, tokyo, dubai, paris, lima];


// form pushes id into locArray

let getId = document.getElementById('form');
getId.addEventListener('submit', function (event) {
  event.preventDefault(); //prevents page refresh
  locArray.push(new Location(event.target.location_name.value, event.target.low_cust.value, event.target.high_cust.value, event.target.avg_cook.value))
  
})

let tableId = document.getElementById('table');

// Table header
for (let i = 0; i < tableHours.length; i++ ) {
  let tableHead = document.createElement('th');
  tableId.appendChild(tableHead);
  tableHead.textContent = tableHours[i];
}

//table data
for (let i = 0; i < locArray.length; i++) {
  let total = 0
  let tableHead = document.createElement('th');
  let tableRow = document.createElement('tr');
  tableId.appendChild(tableRow);
  tableId.appendChild(tableHead);
  tableHead.textContent = locArray[i].locName

  for (let j = 0; j < hoursOpen.length; j++) {
    let storedNumb = locArray[i].randNumCust();
    locArray[i].sellStor.push(storedNumb);
    let tableData = document.createElement('td');
    tableId.appendChild(tableData);
    tableData.textContent = storedNumb;
    total += storedNumb;
  }

  let tableData = document.createElement('td');
  tableId.appendChild(tableData);
  tableData.textContent = total;
  locArray[i].sellStor.push(total);
}

// grand totals
let tableRow = document.createElement('tr');
let tableHead = document.createElement('th');
tableId.appendChild(tableRow);
tableId.appendChild(tableHead);
tableHead.textContent = 'Totals';

for (let j = 0; j < 14; j++) {
  let hourTot = 0;
  for (let i = 0; i < locArray.length; i++) {
    hourTot += locArray[i].sellStor[j];
  }
  let tableData = document.createElement('td');
  tableId.appendChild(tableData);
  tableData.textContent = hourTot;
}




