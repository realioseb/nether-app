import styled, { css, keyframes } from "styled-components";

const pos = css`
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 576px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  background-color: white;
  margin: 0 auto;
  padding: 0 24px 24px;
  box-shadow: 0px 0px 4px #dadada;
  box-sizing: border-box;
`;

export const Header = styled.h4`
  text-align: center;
  margin: 16px 0;
`;

export const Input = styled.input`
  ${pos};
  border: 1px solid #e4e4e4;
  font-family: unset;
`;

export const Button = styled.button`
  ${pos};
  position: relative;
  border: unset;
  background: unset;
  background-color: limegreen;
  color: white;
  cursor: pointer;
  &:enabled:active {
    background-color: #2bb230;
    transform: translateY(1px);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const HR = styled.div`
  height: 1px;
  background-color: #e4e4e4;
  margin: 8px 0;
`;

export const KeccakBadge = styled.div`
  border: 1px solid black;
  background-color: whitesmoke;
  word-break: break-all;
  ${pos};
  text-align: center;
`;

export const Nounce = styled.div`
  margin-bottom: 8px;
`;

export const Error = styled.div`
  color: red;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: white;
  margin: auto;
  width: 8px;
  height: 8px;
  transition: opacity 200ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
  transition-delay: "200ms";
`;
