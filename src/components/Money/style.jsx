import styled from "styled-components";

export const MoneyWrapper = styled.div`
  .price {
    font-size: 2.5em;
    text-align: center;
  }
  .note-container {
    position: relative;
    display: flex;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    box-sizing: border-box;
    margin: 0 auto;
    /* flex-basis: 1; */
  }
  .notes {
    box-sizing: border-box;
    padding: 1em 2em;
    margin: 0.2em 0 0.2em 1.5em;
    transition: 0.3s ease-in;
  }
  .notes:hover {
  }
  .notes img {
    width: 200px;
    transition: 0.3s ease-out;
  }
  .notes img:hover {
    filter: blur(50);
    box-shadow: -6px 10px 5px 4px #777;
  }
  .total {
    font-size: 1.75em;
    font-weight: 400;
    text-align: center;
    text-decoration: double;
  }
`;
