# Mini Art Museum 🖼

A small React app that uses the [The Metropolitan Museum of Art Collection API](https://metmuseum.github.io/). This project was for a [Knowledge Share](https://github.com/quinnter/Work-React-Api-Project) I hosted at work encouraging everyone to try and make their own React app that makes at least one API call. 

A simple one page application that grabs a list of artwork IDs using a search query. It _should_ grab artworks that have an image to work with, but from testing it sometimes returns artworks that do not have an image. 

There is a button you can click that will make another API call using a random ID from the list we have that updates the art and the description on screen.

Shout out to [chris22smith](https://codepen.io/chris22smith/pen/PbBwjp) on codepen for the great picture frame css code!

<p align="center">
    <img src="https://raw.githubusercontent.com/quinnter/mini-api-museum/main/src/imgs/screenshot-small-screen.png"  height="220" />
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/quinnter/mini-api-museum/main/src/imgs/screenshot-web.png"  height="220" />
</p>


If you'd like to run the project for yourself you can fork the code and follow the steps below. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
