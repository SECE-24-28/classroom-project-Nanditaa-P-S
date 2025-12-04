// aboutStyle.js
import styled from "styled-components";

export const AboutStyle = styled.div`
  .body {
    position: relative;
    padding: 80px 0;
    width:100vw;
    background-color: rgb(250, 250, 250);
  }

  .heading {
    color: black;
    font-weight: 600;
    font-size: 48px;
    text-align: center;
    font-family: "Work Sans", sans-serif;
  }

  .paragraph {
    max-width: 900px;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.8;
    margin: 0 auto;
    font-family: "Work Sans", sans-serif;
    text-align: center;
    color: rgb(86, 102, 131);
  }

  .body2 {
    display: flex;
    gap: 2rem;
    max-width: 1280px;
    width: 95%;
    margin: 40px auto 0 auto;
  }

  .seconddiv {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .heading2 {
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }

  .heading3 {
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }

  .divider {
    width: 0.5rem;
    background-color: rgb(221, 221, 221);
  }

  .secondpara {
    font-size: 18px;
    color: rgb(86, 102, 131);
    line-height: 1.6;
    font-family: "Work Sans", sans-serif;
  }
`;