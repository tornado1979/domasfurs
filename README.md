This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents
- [About](#about)
- [Folder Structure](#folder-structure)
- [Run local](#run-local)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)


## About
* A responsive Reactjs front-page template with flexbox.
  You can check the responsivness of the page on any free online tool, like http://www.responsinator.com/
  [a quick visual of the web-app](readme_imgs/gif.gif)

  ![final outcome](readme_imgs/gif.gif)

## Folder structure

I have run `npm run eject`, in order to have better control over, 
webpack, eslint etc.

The structure of the project is this:
```
app/
  config/ <!--webpack config files-->
  node_modules/ <!--dependencies-->
  public/
  scripts/
  src/  <!-- main project code -->
  components/
  data/ <!-- dummy data -->
  pages/ <!-- main page, gallery page, aboutus page & contactus page -->
  App.js
  index.js
  .eslintrc <!-- eslint configuration with rules-->
  package.json
  README.md
```

## Run local

In order to run localhost you shoul:

* download/clone the repo to a folder
* execute npm install to install all the dependencies
* npm run start
* open your browser on http://localhost:3000/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

By executing `npm run build`, the build folder is creaded and insided the code 
is minified.
![run build](readme_imgs/build.png)
We can run the server by executing: `serve -s build`
![run build](readme_imgs/server-s-build.png)

### `npm run eject`

I have executed this script so, all the hidden files are now visible on the project.
Some useful files are the webpack configuration, which i used to add the 
pre-processor sass.

