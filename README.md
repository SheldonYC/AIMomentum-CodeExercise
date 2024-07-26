# AIMomentum-CodeExercise
Visit the result with this link: https://sheldonyc.github.io/AIMomentum-CodeExercise/

## Project Overview
This project creates a website that renders a table with forex data retrieved from the Fixer API. The table displays two sets of data: the original rate and a modified version with 10.0002 added to each rate. The table also applies custom styling rules based on the value and currency.

## Technologies Used
1. Javascript
2. HTML
3. CSS
No package like React or Node.js used in this project

## Project Structure
1. index.html: the backbone that organsizes page content
2. style.css: all the styles applied to the html element in this project, including for those rates with even number and HKD as currency
3. main.js: the logic of fetching and dynamically create html element to populate the forex table
4. modules: the folder contains functions to be used in the project including fetching data from API, check for even number, etc ...

## Key Feature / Design implemented
1. Original rate with even number as last digit will have a red border for the row
2. HKD rate will have a red border for the row
3. For better context of the forex rate, base and date for the forex data is included at the top of website
4. The modified rate has 6 decimal places enforced to mitigate readability issue caused by precision after increment
5. API key is hardcoded for simplicity. I recognise the common practice is to utilize package like Node.js to access critical information with .env file
