## What

- We will see how to setup jest and it's configuration

### Installation

`npm install --save-dev jest`

> Save it as dev dependancies because we want to run and test only in development mode.

### Run test

To run test we will have to add a `script` in our `package.json` file which usually resides in root folder of a project

Add the following section to your `package.json`:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

At this point you can run command `npm run test` inside project folder in terminal.

> This will throw error saying `No tests found`. This is because we have not yet written any test.

### Configuration

- Jest's configuration can be defined in the `package.json` file of your project, or through a `jest.config.js` file. Here we will follow later approch to keep our `jest` configuration seperate.

**1: Create `jest.config.js` in root folder of project**

**2: Add Following configuration in newly created file**

`verbose: true`
This provides verbose description of our runnig test, error happend if any.

`bail: true`
jest runs tests in parallel, hence produces all errors into the console upon completion. This will stop jest from further running after first failure. Now we can fix any error occured one by one as it happens.

`testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"]`
jest automatically traverses all folder paths recursively to find any test file and run. But it makes no sense to let jest look for any test file where we have never kept. For example, we would not have kept our test files in `build` folder or `node_modules` folder. So, we can skip these directories.

`testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$"`
The pattern Jest uses to detect test files. Though above mentioned path is default, we can modify this path to run test for individual script.

Jest runs tests in parallel, so even if we modify in one file it will execute all available test files which can be pretty annoying. This can be modified by changing `testRegex` path to give specific filename and hence runnig just that test script.

At this point, this is how our `jest.config.js` file would look like

```
module.exports = {
  verbose: true,
  bail: true, // To stop Jest running tests after the first failure
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$", // Can be used to run specific script
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"], // <rootDir> gets replaced with the path to the folder that contains config file.
};
```
