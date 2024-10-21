import "./App.css";
import { ImageGenerator, Search } from "./components";
import { useState } from "react";

function App() {
  const [image, setImage] = useState<string>("/");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <h1>
        AI Image <span>Generator</span>
      </h1>
      <ImageGenerator image={image} loading={loading} />
      <Search setImage={setImage} setLoading={setLoading} />
    </>
  );
}

export default App;
