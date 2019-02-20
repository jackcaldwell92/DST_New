import { navigate } from 'gatsby';
import { TweenLite } from 'gsap';
import * as React from 'react';
import { useEffect } from 'react';
import styled from '../../styled-components/styled-components';

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.darkNavy};
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.white};
  opacity: 0.99;
`;

const NavLink = styled.a<{ isLogo?: boolean }>`
  cursor: pointer;
  padding: 1rem;
  text-align: left;
  font-family: Karla;
  opacity: 1;
  font-size: 1.1rem;
  color: ${props => props.theme.lighterGrey};
  text-decoration: none;
`;

export const StickyHeader = () => {
  let mainRef: HTMLDivElement | null;

  useEffect(() => {
    TweenLite.from(mainRef, 1.5, { opacity: 0 });
  }, []);

  const handleLogoClick = () => {
    window.location.pathname === '/services'
      ? navigate('/')
      : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Header ref={ref => (mainRef = ref)}>
      <NavLink onClick={() => handleLogoClick()}>DS Textile Sourcing</NavLink>
      <span style={{ flexGrow: 1 }} />
      <NavLink href={'/services'}>Services</NavLink>
      <NavLink>Clients</NavLink>
      <NavLink>Contact</NavLink>
    </Header>
  );
};
