import styled from '../../styled-components/styled-components';

export const HeaderBody = styled.div`
  background-image: linear-gradient(
    45deg,
    ${props => props.theme.darkNavy},
    ${props => props.theme.blue}
  );
  margin: 0px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;
