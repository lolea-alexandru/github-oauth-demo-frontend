# GitHub authentication process

1. First, we forward the use to the GitHub login screen. We also pass the `ClientID`
2. Now the user must log in
3. When the user decides to log in (successfully), they get redirected to `localhost:5173`
4. At this step, the user is back on the homepage BUT the URL has the following format: `localhost:5173/?code=XXXXXXXX`. This code in the URL represents our one-time access token which we'll use to get our access token.
