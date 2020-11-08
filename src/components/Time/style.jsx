import styled from "styled-components";

export const TimeWrapper = styled.div`
  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .clock {
    margin: 2em;
  }
  .option {
    width: 6em;
    height: 3em;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000a40;
    color: white;
    margin: 0.5em;
    border-radius: 9999px;
    font-weight: bolder;
  }

  .option-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 4em auto;
    padding: 0 4em;
  }
`;
