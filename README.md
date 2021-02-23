I. Create template for sleep-well

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

III. Create components and building screen

1. Product.js and Rating.js
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
  to have nice view in localhost back end => add JSON viewer to Chrome
- copy data from frontend to backend and return products in server
- npm i nodemon --save-dev
  package.json: "scripts": {
  "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
  } => npm start
  - create api address for HomeScreen and ProductScreen

V. Fetching data from backend server api to frontend

- setting proxy in frontend package.json
- npm i axios
- showing signal loading... or error while fetching

VI. Redux

1. Install redux for frontend

   - npm i redux react-redux

2. create src/store.js
3. npm i redux-thunk
4. adding redux to developer tools
5. creating redux cycle for components

   - useSelector() function which has redux state as a parameter to get actions
   - useDispatch() is a hook that we can dispatch any redux action in components

VII. Handle Events in ProductScreen and building CartScreen
ProductScreen:

1. handle addToCart

- onChange setQty
- onClick addToCartHandler
  CartScreen:

2. create CartScreen and add it to App.js
3. implement CartScreen

- img,name, qty, price & delete button
- subtotal of items and price, button proceed to checkout
- implement handleCheckout to redirect users to shipping

VIII. Connect to MongoDB

backend

1. npm i mongoose
2. creat model and router for user then add user router to server

- in the root folder: npm i jsonwebtoken & npm i dotenv
- define generateToken
- Create userRouter.post for signin

3. connect server to mongodb
4. create model and router for product then add product router to server

VIV. create SigninScreen & adding Sign Out Link on the app header

frontend

SigninScreen:

1. form-event handleSubmit-render email and password
2. create redux cycle tasks-constants,action-signin,reducer,store for signin
3. implement handleSubmit to redirect users to HomeScreen
4. adding Sign Out Link to the app header

- create signout action

X. RegisterScreen

backend

1. create router for register-userRouter.post(
   "/register")

frontend

1. create RegisterScreen and add it to app-frontend

- form-event handleSunmit-render name, email, password and confirm password
- create redux task for RegisterScreen-constant,action-register,reducer, store

XI. ShippingAddressScreen

frontend

1. create steps for checkout-CheckoutSteps.js
2. create ShippingAddressScreen

- add route component ShippingAddressScreen in app.js
- add checkoutSteps on the header of the page
- create a form of full name, address, city, postal code, country and a continue button
- create redux tasks-constant, action-saveShippingAddress and reducer, store
- implement continue button redirect to payment page

XII. PaymentMethodScreen

frontend

1. create PaymentMethodScreen and add it to app

- add CheckoutSteps on the header of the page
- create a form of input label for paypal and stripe
- create redux tasks constants, action-savePaymentMethod, reducer, store
- implement continue button redirect to placeorder page
- redirect user to shipping page if user have not enter shipping address

XIII. PlaceOrderScreen

frontend

1. create PlaceOrderScreen and add it to app

- add CheckoutSteps on the header of the page
- create a row with 2 colms
  - col-2: shipping & payment info
  - col-1: summary order with a place order button
- create redux tasks-constants,action-createOrder,reducer, store
  backend

1. create Place Order API-createOrder

- orderModel, orderRouter.post('/')
- add orderRouter to server
- create middleware isAuth in utils to authenticate req

XIV. OrderScreen

frontend

1. create OrderScreen and add it to app

- create row with columns of shipping + payment info and summary order + paypal button
- adding condition for if isAdmin, showing Deliver Order button
- create redux tasks-constants,action-detailsOrder,reducer, store
- create redux tasks-constants, action-deliverOrder,reducer, store

2. Implement paypal button

- getting Client Id for paypal from developer.paypal.com
- add Client Id in .env of the app
- npm i react-paypal-button-v2 in frontend
- create redux tasks constants,action-payOrder, reducer, store
  backend

1. create Order Screen API-detailsOrder

- orderRouter.get('/:id)
- create api address for paypal client id in server
- add more properties for orderModel and create orderRouter.put('/:id/pay')

XV. OrderHistoryScreen

backend

1. create api address to get list of history order-orderRouter.get(
   "/mylist")

frontend

1. implement the screen

- create OrderHistoryScreen and add it to app
- render a table of ID,DATE,TOTAL,PAID,DELIVERED AND ACTIONS
- create redux tasks constants, action-listMyOrder, reducer, store
- apply redux tasks using useSelector and useEffect
- design table in index.css

XVI.ProfileScreen

backend

1. create api address to get user-userRouter.get('/:id')
2. create api address to update user-userRouter.put('/profile')

frontend

1. implement the screen

- create ProfileScreen and add it to app
- render a form of Name, Email, Password, Confirm Password with a handleSubmit event
- create redux tasks constants, action-detailsUser, reducer, store
- apply redux tasks using useSelector and useEffect
- create jsconfig.json to auto import functionality in react project

2. implement handleSubmit event:

- create redux tasks constant, action-updateUserProfile, reducer, store
- apply redux tasks using useSelector and useEffect
- create component PrivateRoute.js to avoid error because unauthenticated user should not see ProfileScreen

XVII. Admin view

=> Products:

frontend

1.  adding another dropdown in the header of the app for only admin to see that renders Dashboard, Products,Orders, User
2.  create component AdminRoute.js
3.  create ProductListScreen.js and add it to app.js with AdminRoute

- render a row of a button for create product with handleCreateProduct onClick event, and a table of ID, NAME, PRICE, CATEGORY, BRAND, ACTION and 2 onClick event buttons edit and delete
- using useSelector and useEffect to get the list of products
- create redux tasks constants, action-createProduct, reducer, store
- apply redux tasks using useSelector and useEffect and if successCreate redirect to product.\_id edit page

4. implement edit button-create ProductEditScreen.js

- create a form of Name, Image, Price, Category, Brand, Count In Stock, Description and a Update button
- implement Update button:
- create redux tasks constants, action-updateProduct, reducer, store
- apply redux tasks using useSelector and useEffect and if successUpdate redirect to
  /productlist
- implement upload image:
  . render input imageFile and event handleuploadFile
  . using append() method of the FormData

5. implement delete button:
   . create redux tasks constanta, action-deleteProduct, reducer, store

backend

1. create isAdmin in utils.js
2. create api address for creating product-productRouter.post('/')
3. create api address for updating product-productRouter.put('/:id')
4. create UploadRouter.js
   . creat api address for uploading image-uploadRouter.post('/)
   . in the main folder:
   - npm i multer
   - create uploads -> file.txt
     . add the api address for uploading image in server

=> Orders:

frontend

1. create OrderListScreen
   . render a table of ID, USER, DATE, TOTAL, PAID, DELIVERED, and ACTIONS with 2 button details and delete
   . create redux tasks constant, action-listOrders, reducer and store
2. button details raise an event to redirect to OrderScreen to see info and manage Deliver Order button
3. button delete - implement button delete:
   . create redux tasks constant, action-deleteOrder, reducer and store

backend

1. create apid address to get all orders - orderRouter.get('/') vs using populate() method to populate user and name
2. create api address for delete - orderRouter.delete('/:id')
3. create api address for deliver - orderRouter.put('/:id/deliver)

Users

frontend

1. create UserListScreen and add it to app
   . render a table of ID, NAME, EMAIL, IS SELLER, IS ADMIN and ACTIONS of edit and delete buttons
   . create redux tasks constant, action-listUsers, reducer and store
2. implement delete button
   . create redux tasks constant, action-deleteUser, reducer and store
3. implement edit button
   . create UserEditScreen and add it to app
   - render a form

backend

1. create api address for getting all users - userRouter.get('/')
2. create api address for deleting user - userRouter.delete('/:id'), condition: can not delete user if user is admin

XVIII: Deploy to Heroku

1. heroku account and heroku cli
2. heroku login and heroku apps:create
3. pakage.json
   "scripts": {
   "build": "cd frontend && npm install && npm run build",
   "start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
   Adding engines: to set the node and npm version on heroku server
   "engines": {"node": "12.18.3", "npm": "6.14.6"}
4. procfile
5. create cloud databse
6. heroku config:set
7. git push heroku
