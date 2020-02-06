# Cypress Automation Tests for Baggage Allowance

Cypress is Node.js tool to automate end-to-end web testing.

Here you can find a cypress example and cypress tests to validate baggage allowances for domestic and international flights from Sydney with all classes.


## How to use
Required packages and basic setup is done.


## Documentation
Total of 4 tests:
1) Exploratory test
2) Domestic baggage allowance for all classes
3) International baggage allowance for economy class
4) International baggage allowance for non-economy classes

View ports:
All tests are configured to run in 3 different view ports:
1) macbook-15
2) ipad-2
3) iphone-6

Test Data:
All the input data are reading from testdata.json file

Base URL is configured in cypress.json

Navigation to baggage allowance page is made as a function and configured in commands.js

## To Run Tests
You can run the tests with cypress UI or command line.
Use 'npm run cypress:open' to open cypress to run specs in chrome or electron.
Use 'npm run cypress:run' to run all specs from command line in electron.

