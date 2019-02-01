import styled from '../../styled-components/styled-components';

export const Header = styled.h2`
  font-family: Karla;
  text-align: left;
  color: ${props => props.theme.white};
  font-size: 40px;
  line-height: 4rem;
  letter-spacing: 0.05rem;
  text-shadow: ${props => props.theme.textShadow};
`;
