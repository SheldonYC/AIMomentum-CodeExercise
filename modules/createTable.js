import { isEven } from "./utils.js";

// this function is used to create headings for the forex page and context for the forex rates table
function createForexPageHeading(base, date) {
  const heading = document.querySelector("#heading");
  
  const pageHeading = document.createElement("h1");
  const forexBase = document.createElement("h2");
  const forexDate = document.createElement("h2");

  pageHeading.textContent = "Forex Rates";
  forexBase.textContent = `Base: ${base}`;
  forexDate.textContent = `Date: ${date}`;

  heading.appendChild(pageHeading);
  heading.appendChild(forexBase);
  heading.appendChild(forexDate);
}

// this function is used to create the body of a table displaying forex rates fetched from api
function createForexTableBody(rates, newRates) {
	const tbody = document.querySelector("#ForexRatesTable tbody");
	// Clear existing rows
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	// Iterate through each key to append cells for each row in the table
  Object.keys(rates).forEach((key) => {
    const tr = document.createElement("tr");
    const currency = document.createElement("td");
    const rate = document.createElement("td");
    const newRate = document.createElement("td");

    currency.textContent = key;
    rate.textContent = rates[key];
    newRate.textContent = newRates[key];

    tr.appendChild(currency);
    tr.appendChild(rate);
    tr.appendChild(newRate);
    
    // if the rate is an even number, add a class of red border to the row
    if (isEven(rates[key].toString())) {
      tr.classList.add("evenNumber")
    }
    // if the currency is HKD, add a class of red border to the row
    if (key === "HKD") {
      tr.classList.add("HKD")
    }

    tbody.appendChild(tr);
  });
}

// this function create a footer for the page if fetching is failed
function createErrorFooter(err) {
  const footer = document.querySelector("#footer");
  // remove the laoding text
  while (footer.firstChild) {
		footer.removeChild(footer.firstChild);
	}
  // display error message
  const error = document.createElement("h2");
  error.textContent = `Failed to fetch data from API: ${err}`;
  footer.appendChild(error);
}
export { createForexPageHeading, createForexTableBody, createErrorFooter};