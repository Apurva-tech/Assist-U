import styled from "styled-components";

export const ExpressionWrapper = styled.div`
  .preview-img {
    width: 80%;
    border: 2px solid black;
  }
  .upload-button {
    outline: none;
    padding: 1em 1em;
    height: 3em;
    /* width: 3em; */
    background-color: #000a40;
    margin: 1em 1em;
    border: none;
    color: white;
    border-radius: 9999px;
    font-weight: bolder;
  }

  .flex-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  .flex-box-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .new-button {
    display: inline-block;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #9c27b0;
    font-size: 16px;
    color: #fff;
  }

  .inputfile-box {
    /* position: relative; */
  }

  .inputfile {
    display: none;
  }

  .container {
    display: inline-block;
    width: 100%;
  }

  .file-box {
    width: 100%;
    border: 1px solid;
    box-sizing: border-box;
    height: calc(2rem - 2px);
  }

  .file-button {
    background: red;
    padding: 5px;
    border: 1px solid;
  }

  .added-margin{
    margin-top:3em;
  }
`;
