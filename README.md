# Getting Started

This project was built with React,Typescript,Webpack,Jest,Enzyme

-----
Demo Here: https://1-adeelahmad.github.io/Basket/
-----

This project is based on fictitious shopping basket. Where the user can adjust the quanity of an item and remove it, with the cost/ prices of the item and basket updating dynamically.

Below are a few commands you can run locally after cloning it to your local machine. Below that  that I've given a summary of how I went about it.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Method

-----

I initially broke down the requirements into separate components. The Heading, Order Review Table, And the price summary. I then expanded on breaking down the Order Review Table in to smaller components from the perspective of refacoring, re-usability and scalability.

I noticed the product items will all have the same key information, So I made a productItem Component encompassing that information, which could then be mapped from a parent component, displaying them all instantaneosly.

From then on it was a case of evaluating the best method for handling the state and updating information. In this case, I chose not to go with Redux but to implement it with React Context API with Hooks, such as: useReducer. Having a global state inbuilt state overlooking the whole application via context api will eradicate the tendancy for prop drilling and any child component could then interact and update the state via dispatch functios.

From a design perspective, I like to keep components clean and free from heavy in-line styling. So refacturing re-usable component and allowing children to pass throught is key for me in keeping a clean code application. In this case I used a mixture of MUI themeing and Custom CSS. MUI is easy to use and come with many pre-built components ready to plugin, in this case it enabled me to focus on functionality rather than design. I generally like to use styled component but for the sake of this test, it wasn't neccessary.

I've written a few tests using Jest Enzyme to check the main component rendering and dispatch methods are working and the correct results are expected.








