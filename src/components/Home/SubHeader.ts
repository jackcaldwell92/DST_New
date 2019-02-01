import styled from '../../styled-components/styled-components';

export const SubHeader = styled.h3`
  font-family: Karla;
  text-align: left;
  color: ${props => props.theme.lighterGrey};
  font-size: 32px;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  text-shadow: ${props => props.theme.textShadow};
`;
