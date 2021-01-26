I. Create template for

1. index.html(link to style.css)

   - display products
     > create products div
     > add product attributes
     > add link, image, name and price

2. style.css
3. images

II. Create React App

1. npx create-react-app frontend
2. convert template to frontend

- delete src/App.css, App.test.js, logo.svg, setupTest.js
- copy div from index.html to App.js-replace class to className
- copy content in style.css to index.css
- copy images to public
- create data.js
- use map function to convert data to app.js and update static to dynamic

III. Create components & Create Route for frontend

1. Product and Rating
2. npm i react-router-dom

- <BrowserRouter></BrowserRouter>
- Route-component
  .HomeScreen
  .ProductScreen

IV. Building Backend

1. npm init --yes

- package.json(adding "type": "module")

2. npm i express (using express to build web server)
3. create backend folder

- server.js
  node server.js
  to have nice view in localhost back end add JSON viewer to Chrome
- copy data from frontend to backend and return products in server
