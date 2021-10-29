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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

# Blog App Project
Have an idea and want to share it with the world? Run into yet another problem and want to provide that solution for others? Do you desire to express your love for cats for everyone to see?
Share that here on our blog app!
For our second group project here at Flatiron, we decided to create a functional, single page blog application!

---

## What does it do?

Our single page application allows users to create a blog post. When creating this blog post, users can style their text as well including headers, different sized fonts, and bolding and italicized properties.

Users can view their post immediately on the Home page and see that their post persists on our local server. Users can also delete their posts as they see fit. 

Along with making a blog post, users can enter and view information about themselves and other users via the 'About' link. Here users can view other authors of blogs on the home page as well as images they've selected as their profile picture and a short bio about them when their 'user card' is clicked.

--- 

## Why did we do it?

This phase two project involved using the JavaScript library, React, and how we could use our JavaScript, CSS, and HTML skills to more efficiently create an app. My partner and I decided that creating a blog app would be beneficial as to showcasing our proficiency at making HTTP requests efficiently while also giving some creativity and functionality to potential users. 

---

## Technologies and Languages Used

For this project, we used a variety of technologies and packages to bring the project together. These technologies and languages include:

* `JavaScript`
    
    * Allowed for setting the `EventListeners` on the page, and brought      actual functionality and interactivity to the project. This is also how we were able to make our request to the local server to both render current creatures and also add/update creatures within the database. Using JS, we achieved certain milestones of the CRUD method.
* `npx create-react-app my-app`

    * This command in terminal acutally creates and installs the needed React components and dependencies for you to start creating your own components and run the app.

* `react-router-dom`
    * React Router DOM enables you to implement dynamic routing in a web app. Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, React Router DOM facilitates component-based routing according to the needs of the app and platform.
    This is imported normally at our top level component to set routes with an import line of:
        `import {Route, Switch} from 'react-router-dom`
    This is installed as a terminal level command:
        `npm install react-router-dom`.

* `react-quill`
    * Quill is an open source markdown text editor for input fields in our app. This allows users to alter their text with things like headers, italics, bolding characters, and more.
    This is accessed at a compenent level with in import line of:
    `import 'react-quill/dist/quill.snow.css'`
    and installed to our package.json with a terminal level command of:
    `npm install quill`.

*  `react-styled-components`
    * React styled components are a CSS-in-JS tool that allows us to make CSS styling changes to componenets *directly* from that componenet we're trying to style.
    It's imported with an import line of `import styled from 'styled-components'`

* `html-react-parser`
    * This parser converts an HTML string to React elements. We used this to grab values that were generated as HTML from our react-quill markdown.
    This is installed at a componenet import level as:
    `import styled from 'styled-components'`
    It's also imported at a terminal level as:
    `npm install react-html-parser`

# Conclusion

In conclusion, this project was a great was to showcase how React can be a great way to create a website using the JavaScript skills we've developed and incorporating that into specific React commands and methods. 
This project provided a lot of difficult bugs, including implementing markdown into user text boxes, but overall was a good way to reaffirm the basics of React in a creative way.

---







