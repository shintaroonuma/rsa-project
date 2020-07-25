import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import KeyGenerator from "./components/KeyGenerator";
import EncryptionSection from "./components/EncryptionSection";

function App() {
  return (
    <div>
      <Header />
      <Description />
      <KeyGenerator />
      <EncryptionSection />
    </div>
  );
}

export default App;
