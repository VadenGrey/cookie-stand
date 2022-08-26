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


//wtf?
// let x = document.getElementById(locArray[0].locName);
// console.log(x)
// x.innerHTML = '<li>thing</li>'

// table header
document.write('<table><tr>');
for (let i = 0; i < tableHours.length; i++) {
  document.write('<th>' + tableHours[i] + '</th>');
}
// table data
for (let i = 0; i < locArray.length; i++) {
  let total = 0;
  document.write('</tr><th>'+locArray[i].locName+'</th>');
  
  for (let j = 0; j < hoursOpen.length; j++) {
    let storedNumb = locArray[i].randNumCust();
    locArray[i].sellStor.push(storedNumb);
    let addLi = '<td>'+storedNumb+'</td>';
    document.write(addLi);
    total += storedNumb;
  }

  let writeTotal = '<td>' + total + '</td>';
  locArray[i].sellStor.push(total);
  document.write(writeTotal);
}
document.write('<tr><th>Totals</th>')

// grand totals
for (let j = 0; j < 14; j++) {
  let hourTot = 0;
  for (let i = 0; i < locArray.length; i++) {
    hourTot += locArray[i].sellStor[j];
  }
   document.write('<td>'+hourTot+'</td>')
}
document.write('</tr></table>');



