const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');

const app = express();
require('dotenv').config();

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// references: 

// - https://www.youtube.com/watch?v=QQwo4E_B0y8
// - https://github.com/auth0/express-openid-connect
// - https://auth0.com/docs/quickstart/webapp/nodejs
