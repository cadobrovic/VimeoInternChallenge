# Vimeo Intern Challenge

Applicant: Carl Dobrovic, Columbia University '21

## About This Project

This project aims to mimic the video examples given in the
Vimeo Frontend Internship coding assessment. I developed
it in React with the help of the create-react-app initializer.
I sought to implement modular components that are easy
to bring in and out of the project, e.g. the carousel
easily plugs into the bottom of the page. 

I used media queries to make my CSS responsive to various
widths, settling on 768px and 1024px as the common widths
I found matched closest to the resizing behavior in the
videos. 

To get the carousel to look the way I wanted, I decided to
line up the slide components with an inline-block display
and then slide the div left and right with the button
clicks, clipping to the window. 

I ran the project on my and then a friend's Macbook with the 
instructions at the end.

I had fun putting this together at a school hackathon this weekend
and hope you see the effort I put into getting every detail right.

Thank you for the opportunity to show Vimeo what I can do!


Here's the build and run instructions:
1. `cd` into the root of the project and run `npm install`. This should install React
and a couple other packages that come with it.
2. Run `npm start` (or `yarn start` if you use yarn) to run the developer build.
3. Run `npm build` to build the site.
4. I ran the production build locally with the serve package using `serve -s build`.

------------------------------------------------------------------------------------

### From create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
