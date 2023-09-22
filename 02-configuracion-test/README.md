# React + Jest
Vite and jest are used in this project to test different javascript exercises.

## Installation
1. Create a new vite project
    ```bash
    npm create vite
    ```
2. Next we go to the folder and install the dependencies:
    ```bash
    npm install
    ```
With that we have a vite project complete installed.

## Jestjs Configs

Jest is an open source JavaScript testing framework developed by Facebook.
For detailed instructions on how to install Jest, you can refer to the [Jest](https://jestjs.io/docs/getting-started).

1. Install Jest
```bash
npm install --save-dev jest
```
2. Install dependencies to use with Babel:
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
3. In the file `babel.config.js` rename it to `babel.config.cjs` and put this:
```cjs
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```
4. Install the final dependence of jest to automatically complete your write:
```bash
npm install --save-dev @types/jest
```

5. To do the test in the file `package.json` you will need to put this:
```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest --watchAll"
  },
```