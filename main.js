import { fetchData } from './modules/fetchData.js';
import { incrementObjectValues } from './modules/utils.js';
import { createForexPageHeading, createForexTableBody } from './modules/createTable.js';

fetchData()
  .then(({base, date, rates}) => {
    if (rates) {
      // create a new variable to store the rates incremented by 10.0002
      const newRates = incrementObjectValues(rates, 10.0002);

      // create heading for the forex page
      createForexPageHeading(base, date);

      // create body for the forex rates table
      createForexTableBody(rates, newRates);
    }
  }).catch((error) => {
    console.error(error);
  }
);