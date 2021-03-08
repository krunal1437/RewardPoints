import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

class Purchase {
  constructor(amount, month) {
    this.amount = amount;
    this.points = calculateRewardPoints(amount);
    this.month = month;
  }
}

function calculateRewardPoints(amount) {
  if (amount >=50 && amount < 100) {
      return amount-50;
  } else if (amount >= 100){
      return (2*(amount-100) + 50);
  }
  return 0;
}

class ListofPurchase {
  constructor() {
    this.list = [];
  }

  addPurchase(amount) {
    const purchase = new Purchase(amount);
    this.list.push(purchase);
  }

  getAllPurchases() {
    return this.list.sort();
  }

}

let AllPurchaseList = new ListofPurchase();
AllPurchaseList.addPurchase(1);
AllPurchaseList.addPurchase(38);
AllPurchaseList.addPurchase(50);
AllPurchaseList.addPurchase(73);
AllPurchaseList.addPurchase(99);
AllPurchaseList.addPurchase(100);
AllPurchaseList.addPurchase(101);
AllPurchaseList.addPurchase(600);
AllPurchaseList.addPurchase(1000);
AllPurchaseList.addPurchase(50000);
AllPurchaseList.addPurchase(39);
AllPurchaseList.addPurchase(760);
AllPurchaseList.addPurchase(880);
AllPurchaseList.addPurchase(22);
AllPurchaseList.addPurchase(3210);
let totalPurchase = AllPurchaseList.getAllPurchases();

console.log(totalPurchase)

totalPurchase[0].month = 'January';
totalPurchase[1].month = 'January';
totalPurchase[2].month = 'February';
totalPurchase[3].month = 'April';
totalPurchase[4].month = 'March';
totalPurchase[5].month = 'February';
totalPurchase[6].month = 'February';
totalPurchase[7].month = 'March';
totalPurchase[8].month = 'March';
totalPurchase[9].month = 'February';
totalPurchase[10].month = 'May';
totalPurchase[11].month = 'January';
totalPurchase[12].month = 'April';
totalPurchase[13].month = 'April';
totalPurchase[14].month = 'January';

let JanuaryPoints = 0;
let FebruaryPoints = 0;
let MarchPoints = 0;

calculateIndividualMonthPoints();

function calculateIndividualMonthPoints() {
  for(let i=0; i<totalPurchase.length; i++) {
    if(totalPurchase[i].month === 'January'){
      JanuaryPoints += totalPurchase[i].points;
    } else if(totalPurchase[i].month === 'February') {
      FebruaryPoints += totalPurchase[i].points;
    } else if(totalPurchase[i].month === 'March') {
      MarchPoints += totalPurchase[i].points;
    } else {
      console.log("Some of your Purchase was not during 1st 3 months period")
    }
  }
}

console.log("Points Earned in January : " + JanuaryPoints)
console.log("Points Earned in February : " + FebruaryPoints)
console.log("Points Earned in March : " + MarchPoints)

calculateTotalPoints();

function calculateTotalPoints() {
  let totalPoints = 0;
  for(let i=0; i<totalPurchase.length; i++) {
    totalPoints += totalPurchase[i].points;
  }
  console.log("Total Points: " + totalPoints)
}