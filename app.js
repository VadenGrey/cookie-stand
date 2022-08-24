'use strict' ;

let seattle = {
    id: 'seattle',
    minCust: 23,
    maxCust: 65,
    avgSell: 6.3,
    randNumCust: function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      },
        
};

let tokyo = {
    id: 'tokyo',
    minCust: 3,
    maxCust: 24,
    avgSell: 1.2,
    randNumCust: function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      },
};

let dubai = {
    id: 'dubai',
    minCust: 11,
    maxCust: 38,
    avgSell: 3.7,
    randNumCust: function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      },
};

let paris = {
    id: 'paris',
    minCust: 20,
    maxCust: 38,
    avgSell: 2.3,
    randNumCust: function () {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      },
};

let lima = {
    id: 'lima',
    minCust: 2,
    maxCust: 16,
    avgSell: 4.6,
    randNumCust: function () {
      return Math.floor(((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgSell);
      },
};

let hoursOpen = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '7pm: '];
let locations = [seattle, tokyo, dubai, paris, lima];


function x () {
for (let i = 0; i < locations.length; i++) {
    let total = 0
    document.write(locations[i].id)
    for (let j = 0; j < hoursOpen.length; j++) {
        let storedNumb = locations[i].randNumCust()
        let idLi = '<li>' + hoursOpen[j] + storedNumb + '</li>'
        document.write(idLi)
        total += storedNumb 
    }
    let writeTotal = 'Total: ' + total + '<br>'
    document.write(writeTotal)
  }
}
x()





