import React, { useEffect, useState } from "react";
import Feature from "./components/Feature";
import Header from "./components/Header";
import About from "./components/About";
import Persentation from "./components/Persentation";
import Contact from "./components/Contact";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/about1.png";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

function App() {
  const [loading, setLoading] = useState(false);

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top:20%;
  margin-left:45%;
`;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BeatLoader
          color={"#185ADB"}
          loading={loading} 
          css={override} 
          size={60}
        />
      ) : (
        <>
          <Header />
          <Feature />
          <About
            image={aboutimage}
            title="Come With All You Need For Daily Life"
            button="Get The App"
          />
          <Persentation />
          <About
            image={aboutimage1}
            title="Download And Get The App Now"
            button="Download"
          />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
