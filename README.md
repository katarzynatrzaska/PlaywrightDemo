# 🎭 Playwright Demo

This repository contains sample automated tests created for the [Automation Exercise](https://automationexercise.com) website.
[Automation Exercise](https://automationexercise.com) is a practice website for Automation Engineers.

## About tests
In this repository various kinds of tests can be found:
- UI e2e tests
- API tests
- Visual test (comparing snapshots generated from UI)

This project uses crucial e2e design patterns:
- Page Object Model (POM): POM involves creating classes for each page or component of the application. Each class contains methods to interact with the elements on the page, making the code easier to maintain and reuse.
- Data-Driven Testing: Data-Driven Testing involves separating test data from the tests themselves. Data is stored in external files (in this case JSON)
- Fixture Pattern: The Fixture pattern involves setting up the system's state before running tests to ensure they are executed in consistent and controlled conditions. This project contains setup configuration which automatically logs in valid user to the application before each test.

## Installation
To run tests on your local machine, git clone this repository. In the main directory run the below commands. This will install playwright dependencies on your machine.

```Shell
# Run from your project's root directory
npm install
npm init playwright@latest
```
### Install Visual Code Extension (Optional)
Install [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

## Running all tests in headless mode
```Shell
# Run from tests folder
npx playwright test
```
## Running tests from VS code 
To watch automated scripts running in the browser, go to the VSCode sidebar, click on Testing icon and click on arrow icon next to 'tests'.
