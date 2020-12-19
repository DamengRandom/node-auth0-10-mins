## A Node App implements Auth0 within 10 minutes setup

### Setup && Run

- Before start, make sure you create a auth0 app from <strong><a href="https://auth0.com/" target="_blank">Auth0</a></strong>,

- Ensure you have these parameters and put it inside `.env file` (please create a `.env` file):

```js
// ISSUER_BASE_URL=https://YOUR_DOMAIN 
// CLIENT_ID=YOUR_CLIENT_ID
// BASE_URL=http://localhost:3000
// SECRET=LONG_RANDOM_VALUE
```

- Run the app by following commands:

```js
Run `npm install`
then run `nodemon app.js`
// open browser and you will see the login screen
```

- Finally, type `http://localhost:3000/login` go to login page and you can `signup` and then `login`
And after login, type `http://localhost:3000/profile` to see the profile page. If you logged out, you `can't` see the profile page.
