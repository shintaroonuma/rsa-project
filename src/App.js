import React from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import KeyGenerator from "./components/KeyGenerator";
import EncryptionSection from "./components/EncryptionSection";
import DecryptionSection from "./components/DecryptionSection";

function App() {
  return (
    <div>
      <Header />
      <Description />
      <KeyGenerator />
      <EncryptionSection />
      <DecryptionSection />
    </div>
  );
}

export default App;
