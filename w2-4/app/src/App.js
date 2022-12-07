import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageSrc, setImageSrc] = useState("");

  const encoderFiletobase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <main className="container">
      <h2>이미지 미리보기</h2>
      <input
        type="file"
        onChange={(e) => {
          encoderFiletobase64(e.target.files[0]);
        }}
      />
      <div className="preview">
        {imageSrc && <img src={imageSrc} alt="preview-img" />}
      </div>
    </main>
  );
}

export default App;
