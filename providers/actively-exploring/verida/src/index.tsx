import VeridaAuth from './VeridaManager';
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="text-center">
      <h5 className="my-3 h5-responsive">Welcome to</h5>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const contextName = "Synapse Verida Login";
const logoUrl = "https://www.taylorwessing.com/-/media/taylor-wessing/icons/svgs/cyberresponse-165x165.jpg"; // Replace with an actual URL to a suitable PNG image

const veridaAuth = new VeridaAuth({
  contextName: contextName,
  logoUrl: logoUrl,
});

// Initialize and authenticate as needed in your application flow
(async () => {
  try {
    await veridaAuth.initialize();
    const did = await veridaAuth.authenticate();
    console.log(`User authenticated: ${did}`);
  } catch (error) {
    console.error("Authentication error:", error);
  }
})();

