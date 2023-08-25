# Netlify Link 

https://rococo-hotteok-ff4746.netlify.app/


# Soccer Game Score results and Highlight Video App

The user would be able to check game score results and be able to see the highlight videos of different soccer games across different soccer leagues around the world.

# Reason behind the project

I like all sports, soccer being one of the sports i follow. hopefully the website will help the user keep up with some of his/her soccer teams or soccer leagues. 



# tech used

CSS, HTML, JavaScript and React

Sports Api


# First

installed axios 

created a component folder under the src folder 

Then created three files named Navbar.js,Footer.js and Content.js in side the components folder


# App.css

Used css to center the app and make it only take 10 % of the total page, as well as the content page taking 80% and the footer taking the other 10%, also used css to choose colors and alignment on the page

Adjusted the img to fit the content part of the website as well as creating a border color and border radius to differentiate b/t each soccer games 

Also used grid-template-colmns and justify-tiems to horozontally appear in rows of 4 and center them as wel

In addtion .tiemDiv to make space b/t the videos both top&bottom and left to right, moreover added a hover to make it easier for the user to know which video to select



# Navbar.js

Used rafce and filled out the function 

imported App.css

Copied a soccer emoji of the web pasted it next to the title on navbar and gave it a class name, all under a div

# Footer.js

Used rafce agian and filled out the function 

imported App.css

Used a paragraph parameter to a footer title to and a &copy; for a copy right sign all under a div


# Content.js

Used rafce agian and filled out the function 

imported App.css
imported useState and useEffect react hooks 
imported axios as well 
All under a div to place all the video content 

Defined state of data and setdata to get info from the api under const state 

After that used useEffect hook to get the data from the api using axios get method, passed the api under a url and used .then to get the response and console.log so that i can check on inspect the url api is working 
as well as .catch to catch an error  and setData to get the response from the data from the api
in our return made a .map to catch the arr's by making a div with in a div to hold the name of the game and the image of the game with eatch one having respective class names of itemImage and itemHeading and key which i choose to be the title since it has a good chance of being not replected (distinct) and item.thumbnail under the itemIage div to catch the images of the match which I got both from the inspecting my local host wesite

Added on onclick event so that when the user selects a particular game they can go stright to the video highlight fireing an event item.matchviewUrl (which i found in the inspection part under my object list opening) a new window to watch the videos 

# App.js

imported all the files under the component folder as well as the App.css then inside the function and list them inside to define them.  

# problems run into

A lot of hours sitting and researching as well as catching simple programing errors and solving them, as well as finding an API and inspecting it to see how to use it. 

# unsolved problems / future updates 

To find a better/additional api where there are more leagues and better user friendly front end programing where it makes it easier for the user find the specific game or league he/she want to catch a highlight off

# Fav Code

I really enjoyed reaserching and figuring things out, but Enjoyed doing the css b/c once i got the api on the page it was all over the place and out of size, also enjoyed using the useEffect b/c w/ out that it nothing would of been possible.           




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

