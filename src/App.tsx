/* ============================== IMPORTS ============================== */
import { useEffect } from "react";
import "./App.css";

const CLIEND_ID = "Ov23li2DUsGWngQFU7q5";

function App() {
  // Run smth at the beginning of the app
  useEffect(() => {
    // `localhost:5173/?code=XXXXXXXX`

    // Retrieve the query string aka the part of the URL after the "?"
    const queryString = window.location.search;

    // URLSearchParams -> utility object work working with search parameters
    const urlParams = new URLSearchParams(queryString);
    const codeParameter = urlParams.get("code");

    console.log(codeParameter);
  }, []);

  /**
   * Redirects the user to the URL used by GitHub where the said user
   * can log in and allow us to read their data
   */
  function loginWithGitHub() {
    // Define the url user by GitHub to login users
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIEND_ID}`;

    // Redirect the user to the auth link specified above
    window.location.assign(authUrl);
  }

  return (
    <>
      <h1>I am F0r54k3n</h1>
      <button onClick={loginWithGitHub}>Login with GitHub</button>
    </>
  );
}

export default App;
