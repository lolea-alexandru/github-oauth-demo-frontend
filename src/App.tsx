/* ============================== IMPORTS ============================== */
import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/users";

const CLIEND_ID = "Ov23li2DUsGWngQFU7q5";

/* ============================== CONFIG ============================== */

function App() {
  // Create a variable that decides whether or not a rerender is needed
  const [render, setRerender] = useState(false);

  useEffect(() => {
    // Retrieve the query string aka the part of the URL after the "?"
    const queryString = window.location.search;

    // URLSearchParams -> utility object work working with search parameters
    const urlParams = new URLSearchParams(queryString);
    const codeParameter = urlParams.get("code");

    // Check if the user has a code, but is not logged in
    if (codeParameter && localStorage.getItem("accessToken") === null) {
      /**
       * Makes a request to the backend at the endpoint responsible for
       * fetching user data
       */
      const fetchAccessToken = async () => {
        // Fetch the access token
        const accessToken = await api.get(
          `/getAccessToken?code=${codeParameter}`
        );

        // Store the access token inside local storage
        if (accessToken.data) {
          localStorage.setItem("access_token", accessToken.data);
          setRerender(!render);
        }

        return accessToken;
      };
      fetchAccessToken();
    }
  }, []);

  async function getUserData() {
    const response = await api.get("/getUserData", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    console.log(response.data);
    return response.data;
  }

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

      {localStorage.getItem("access_token") ? (
        <>
          <h3>We have the access token</h3>
          <button
            onClick={() => {
              localStorage.removeItem("access_token");
              setRerender(!render);
            }}
          >
            Log out
          </button>
          <button onClick={getUserData}>Get user Data</button>
        </>
      ) : (
        <>
          <h3>User is not logged in</h3>
          <button onClick={loginWithGitHub}>Login with GitHub</button>
        </>
      )}
    </>
  );
}

export default App;
