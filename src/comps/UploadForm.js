import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setErrorMessage("");
    } else {
      setFile(null);
      setErrorMessage(`It's only allowed PNG and JPEG formats`);
    }
  };
  return (
    <form className="form">
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      {errorMessage && <p>{errorMessage}</p>}
      {file && <p>{file.name}</p>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};

export default UploadForm;
