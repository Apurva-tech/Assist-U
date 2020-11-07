import React, { useState, useEffect } from "react";
import axios from "axios";
import { ExpressionWrapper } from "./style";
export const Expression = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const uploadHandler = (event) => {
    event.preventDefault();
    const form = new FormData();
    console.log(selectedFile);
    console.log(preview);
    form.append("file", selectedFile);
    form.append("name", "aniket");
    axios
      .post("http://127.0.0.1:5000/fileupload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        alert(response);
        console.log(response);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  return (
    <div>
      <ExpressionWrapper>
        {!selectedFile && (
          <input
            type="file"
            onChange={onSelectFile}
            accept="image/*"
            capture="camera"
          />
        )}
        {selectedFile && <img src={preview} className="preview-img" />}
        <button onClick={uploadHandler}>Upload</button>
      </ExpressionWrapper>
    </div>
  );
};
