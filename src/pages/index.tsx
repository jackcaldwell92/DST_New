import * as React from 'react';
import { BezierCurve } from '../components/BezierCurve/BezierCurve';
import Layout from '../components/Layout';
import styled from '../styled-components/styled-components';

const Title = styled.h1`
  font-family: Karla;
  text-align: left;
  color: ${props => props.theme.lighterBlue};
  font-size: 24px;
  line-height: 3rem;
`;

const Header = styled.h2`
  font-family: Karla;
  text-align: left;
  color: ${props => props.theme.white};
  font-size: 40px;
  line-height: 4rem;
  letter-spacing: 0.05rem;
  text-shadow: ${props => props.theme.textShadow};
`;

const SubHeader = styled.h3`
  font-family: Karla;
  text-align: left;
  color: ${props => props.theme.lighterGrey};
  font-size: 32px;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  text-shadow: ${props => props.theme.textShadow};
`;

const HeaderBody = styled.div`
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

const BezierContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
`;

const Button = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.navy};
  padding: 0.75rem 1.5rem;
  margin: 3rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 18px;
  font-family: Karla;
  cursor: pointer;
  box-shadow: ${props => props.theme.darkBoxShadow};
`;

const IndexPage = () => {
  const bezierCurve1YValues = [150, 200, 50, 175, 150, 200, 50, 175, 150];
  const bezierCurve2YValues = [50, 100, 75, 150, 50, 100, 75, 150, 50];
  const bezierCurve3YValues = [125, 200, 150, 75, 125, 200, 150, 75, 125];

  return (
    <Layout>
      <HeaderBody>
        <div>
          <Title>DS Textile Sourcing</Title>
          <Header>Fully factored garment production</Header>
          <SubHeader>From concept to complete</SubHeader>
          <Button>Learn More</Button>
          <BezierContainer>
            <BezierCurve
              yValues={bezierCurve1YValues}
              fillColor="hsl(231, 19%, 65%)"
              opacity={0.3}
              animationSpeed={20}
            />
          </BezierContainer>
          <BezierContainer>
            <BezierCurve
              yValues={bezierCurve2YValues}
              fillColor="hsl(344, 24%, 80%)"
              opacity={0.2}
              animationSpeed={13}
            />
          </BezierContainer>
          <BezierContainer>
            <BezierCurve
              yValues={bezierCurve3YValues}
              fillColor="hsl(332, 8%, 66%)"
              opacity={0.2}
              animationSpeed={16}
            />
          </BezierContainer>
        </div>
      </HeaderBody>
      <div style={{ height: '100vh' }} />
    </Layout>
  );
};

export default IndexPage;
