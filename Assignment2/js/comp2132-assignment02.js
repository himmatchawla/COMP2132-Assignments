// concert data
const ticketPrice = 30;
const minimumAge = 21;
const taxRate = 0.10;

// prompts
const name = prompt("What's your name:");
const ticketsNeeded = Number(prompt("How many tickets do you need:"));
const age = Number(prompt("What is your age:"));
const cashOnHand = Number(prompt("How much money do you have:"));

// calculating cost
const beforeTax = ticketPrice * ticketsNeeded;
const afterTax = beforeTax * (1 + taxRate);
let resultMessage = "";

// get elements
const orderSummaryElement = document.getElementById("orderSummary");
const quoteTextElement = document.getElementById("quoteText");
const userNameElement = document.getElementById('user-name');
const userAgeElement = document.getElementById('user-age');
const minAgeElement = document.getElementById('min-age');
const ticketNumbersElement = document.getElementById('ticket-qty');
const cashAvailableElement = document.getElementById('cash-onhand');
const ticketPriceElement = document.getElementById('ticket-price');
const taxRateElement = document.getElementById('tax-rate');
const processingElement = document.getElementById('processing');
const resultsElement = document.getElementById('results');

// display user , concert info
orderSummaryElement.innerHTML = name;
quoteTextElement.innerHTML = `${name} says: "Let's buy some tickets to the big virtual concert!"`;
userNameElement.innerHTML = `<strong>User name:</strong> ${name}`;
userAgeElement.innerHTML = `<strong>User age:</strong> ${age}`;
ticketNumbersElement.innerHTML = `<strong>Ticket Qty:</strong> ${ticketsNeeded}`;
cashAvailableElement.innerHTML = `<strong>Cash:</strong> $${cashOnHand}`;
minAgeElement.innerHTML = `<strong>Minimum age to attend:</strong> ${minimumAge}`;
ticketPriceElement.innerHTML = `<strong>Cost Per Ticket:</strong> $${ticketPrice}`;
taxRateElement.innerHTML = `<strong>Tax Rate:</strong> ${taxRate * 100}%`;

// display  processing info
processingElement.innerHTML = `
  Purchasing ${ticketsNeeded} tickets at $${ticketPrice}: $${beforeTax}<br>
  After tax total cost: $${afterTax.toFixed(2)}
`;

// display results info
let results = "";

if (age < minimumAge) {
  const ageShort = minimumAge - age;
  results += `<div class="warning"><strong>Warning</strong> Sorry. You are ${age} and that's not old enough to attend this show. You would need to be ${ageShort} year(s) older than you actually are. Too bad, kiddo!</div>`;
}

if (cashOnHand < afterTax) {
  const cashShort = (afterTax - cashOnHand).toFixed(2);
  results += `<div class="warning"><strong>Warning</strong> Sorry, ${name}, you cannot afford this! You need $${cashShort} more.</div>`;
}

if (age >= minimumAge && cashOnHand >= afterTax) {
  results += `<p>👍 There are no error messages. Enjoy the show!</p>`;
}

resultsElement.innerHTML = results;
