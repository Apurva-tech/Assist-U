import styled from "styled-components";

export const Headerstyle = styled.div`
  .zet {
    background: pink;
    height: 72px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }
  .zet div {
    font-size: 1.3rem;
    padding: 0.3em 2em;
    margin: 0.9em 0;
  }
  .zet div:hover {
    border-radius: 8px;
    color: black;
    background-color: rgba(68, 221, 54, 0.5);
  }
  }
  .zet div a {
    text-decoration: none;
    color: darkgreen;
    transition: 0.3s ease-in-out;
`;
