![ryancollinsio](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/ryancollinsio.png?raw=true)

# RyanCollins.io
A complete rewrite of RyanCollins.io, built with the latest and greatest technologies. The application will be used for me to broadcast online courses, blog, post about my recent work, etc.

A GraphQL on Rails API and React / Elm front end single page app.

# Documentation (From Scalable React Boilerplate)

## Getting Started
To try the example application out or to use the project, follow the instructions below.

There are two options for installation:

1. **Clone repo**

    git clone https://github.com/RyanCCollins/scalable-react-boilerplate.git

2. **Install dependencies**

    npm run setup

3. **Run development server**
   cd client/

   npm run start

   Your app will be served at: http://localhost:1337/

or, you can install it using Slush via the npm package
```
npm install -g slush slush-generator-scalable-react
```

cd into the folder where you want to create your project and run:
```
slush generator-scalable-react
```

Follow the onscreen instructions to create your app.

## Deployment
A demo ExpressJS setup is included with the app.  The express server will serve up the production minified bundle.js, index.html and any other assets that are located in the `/server/public` folder.

Running `npm run serve:bundle` will set your environment to production and serve these files via Express.  Also, a Procfile is included, which will run the Express server on Heroku when you push your code.

NOTE: the deployment script, `npm run deploy`, will place all your generated assets in the `server/public` folder, where they can be served in production.

To deploy with server-rendering, there is one small thing you will need to do. After your run the deploy script, go into the `server/app.js` file and add the hashes for your main javascript and css bundles as shown below.

```
  const html = (
    <Html
      content={content}
      scriptHash="f5a35ab068d111293b63"
      cssHash="6cf439ec56ba2b8700ce1665ebe17a68"
      state={{ data: context.store.getState().apollo.data }}
    />
  );
```

## File Structure
* Some files left out for brevity.  Please reference the files in the [Scalable React Boilerplate](https://github.com/RyanCCollins/feature-first-react-boilerplate) project for an example of the file structure.  The application will ultimately be in use in a production web application project and more info will be posted here when we have production level examples.
```
.
├── README.md
├── LICENSE
├── index.html
├── package.json
├── webpack.config.js
├── app/
|   ├── fonts
|   ├── images
|   ├── src
|   |   ├── components
|   |   |   ├── FeatureFirstComponent
|   |   |   |   ├── index.js
|   |   |   |   ├── index.module.scss
|   |   |   |   └── tests
|   |   |   |   |   └── index.test.js
|   |   |   ├── App.jsx
|   |   |   ├── Main.js
|   |   |   └── index.js
|   |   ├── containers
|   |   |   ├── FeatureFirstContainer
|   |   |   |   ├── tests
|   |   |   |   |   ├── actions.test.js
|   |   |   |   |   ├── index.test.js
|   |   |   |   |   └── reducer.test.js
|   |   |   |   ├── actions.js
|   |   |   |   ├── constants.js
|   |   |   |   ├── index.js
|   |   |   |   ├── index.module.scss
|   |   |   |   └── reducer
|   |   |   └── index.js
|   |   ├── pages
|   |   ├── store
|   |   ├── utils
|   |   └── index.js
|   └── styles
├── .eslintignore
├── .eslintrc
├── .gitattributes
└── .gitignore
```

## Scripts
- **npm run setup**
  + Installs the application's dependencies

- **npm run test**
  + Runs unit tests

- **npm run test:watch**
  + Watches for changes to run unit tests

- **npm run build**
  + Bundles the application

- **npm run dev**
  + Starts webpack development server

- **npm run lint**
  + Runs the linter

- **npm run deploy**
  + Creates the production ready files within the `/server/public` folder

- **npm run clean**
  + Removes the bundled code and the production ready files

- **npm run serve:bundle**
  + Serve production assets from the `/server/public` folder.

## Generators
The boilerplate contains generators for easy project scaffolding.  At the moment, the generator has the following scaffold generating commands built in:
- Container `npm run generate:container`
  - Name: the name of the container, i.e. `Awesome`, which converts to: `AwesomeContainer`
  - Connected / Not connected ES6 Class containers (higher order)
  - SCSS Modules
  - Reducers, actions and constants
  - Tests for all of the above
  - README.md file that documents the container
- Component `npm run generate:component`
  - Name: the name of the component, i.e. `Button`
  - Stateless functional components (recommended)
  - ES6 class components
  - SCSS modules
  - Tests for all of the above
  - README.md file that documents the component
  - GraphQL: If you want, the generator can add collocated queries and mutations using GraphQL / ApolloClient.  Accept the option to use this feature.
- Page `npm run generate:page`
  - Name: The name of the route, i.e. Home, which gets converted to `HomePage`
  - Route: the route that corresponds to the page
  - Container Import: Most of the time, a Route exists only to import a container by the same name.  This is enabled by default, so make sure to run the container generator if you want to use this feature.

To run the generators with a list of options, run
```
npm run generate
```

Follow the on screen prompts to select the options you wish to use.

For convenience, you can bypass the initial selection and scaffold out containers, components and pages by running

```
npm run generate:<type_of_component>
```

where <type_of_component> is one of: component, container or page.

The generators use the same feature-first file organization as the rest of the project, encapsulating components within their own folder.

### **Gotchas**
In order to get the import / export to work, the generator does some pattern matching of the comments in the files to place the new imports.  Just don't delete the any comment that is prefixed with GENERATOR and things will work great.

From `app/src/container/index.js` or `app/src/component/index.js`
```
/* GENERATOR: Assemble all containers for export */
export LandingContainer from './LandingContainer';
export AppContainer from './AppContainer';
```

### Configuring your own generators
For information on how to build your own generators with relative ease, please go to the [Plop Microgenerator](https://github.com/amwmedia/plop) homepage for detailed instructions.

## Testing
Included in the setup is a test suite that will run your tests using Jest.  A number of testing utilities are included, including
- Expect (Plus Expect-JSX)
- Chai (JSX and Immutable)
- Enzyme
- Jest & enzyme-to-json in order to use the Jest snappshotting with Enzyme.

You can see examples for testing of React Components, Redux Action Creators and Reducers in the repository [here](https://github.com/RyanCCollins/scalable-react-boilerplate/tree/master/app/src/containers/FeatureFirstContainer/tests).  Please follow the convention of naming tests with a .test.js postfix, or else the test suite will not recognize your tests.

To run tests, you will run
```js
npm run test
```

which will pick up any file with the .test.js postfix and run it through Jest.


## Technologies / Libraries

- [Node](https://nodejs.org/en/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [Babel](https://babeljs.io/) - ES6 transpiler
- [Webpack](https://webpack.github.io/) - module bundler & task runner
- [React](https://facebook.github.io/react/) - interfaces
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot reloading for react
- [react-router](https://github.com/rackt/react-router) - react application router
- [react-redux](https://github.com/rackt/react-redux) - react bindings for redux
- [react-css-modules](https://github.com/gajus/react-css-modules) - React CSS Modules implement automatic mapping of CSS modules.
- [react-foundation](https://github.com/nordsoftware/react-foundation) - Foundation React components, use or don't use.
- [Immutable](https://github.com/facebook/immutable-js) - data structures
- [Redux](https://github.com/rackt/redux) - awesome flux architecture
- [Redux Form](https://github.com/erikras/redux-form)- works with React Redux to enable an html form in React to use Redux to store all of its state.
- [redux-thunk](https://github.com/gaearon/redux-thunk) - thunk middleware for redux
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - API fetch network requests
- [redux-devtools](https://github.com/gaearon/redux-devtools) - redux development tool
- [SASS](http://sass-lang.com/) - styles
- [ESLint](http://eslint.org/) - linter
- [Mocha](http://mochajs.org/) - unit tests
- [jsdom](https://github.com/tmpvar/jsdom) - vdom to test React without browser
- [Expect](https://github.com/mjackson/expect) - assertion library
- [Enzyme](https://github.com/airbnb/enzyme) - React Testing utils for rendering of components
- [Chai / Immutable](http://chaijs.com/) - assertion library for Immutable JS
- A bunch of useful scripts

![bye!](https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/bye!-ryancollinsio.png?raw=true)
