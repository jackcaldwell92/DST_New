import styled, { keyframes } from '../../styled-components/styled-components';

const reverseColorChange = keyframes`
  0% {
    background-color: hsl(218, 32%, 55%);
  }
  100% {
    background-color: hsl(218, 32%, 50%);
  }
`;

const colorChange = keyframes`
  0% {
    background-color: hsl(218, 32%, 50%);
  }
  100% {
    background-color: hsl(218, 32%, 55%);
  }
`;

export const Button = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.navy};
  :hover {
    animation: ${colorChange} 0.2s linear;
    animation-fill-mode: forwards;
  }
  animation: ${reverseColorChange} 0.2s linear;
  animation-fill-mode: forwards;
  padding: 0.75rem 1.5rem;
  margin: 3rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 18px;
  font-family: Karla;
  cursor: pointer;
  box-shadow: ${props => props.theme.darkBoxShadow};
`;
