import * as React from 'react';
import { useRef, useState } from 'react';
import { animated, useChain, useSpring, useTrail } from 'react-spring';
import { StickyHeader } from '../components/Home/StickyHeader';
import Layout from '../components/Layout';
import styled from '../styled-components/styled-components';

const Body = styled.div`
  padding: 2rem;
  min-height: calc(100vh - 148px);
  position: relative;
`;

const Header = styled.h3`
  color: ${props => props.theme.lighterBlue};
  text-align: left;
  margin: 2rem 0rem;
`;

const Detail = styled.h5`
  font-size: 0.8rem;
  color: ${props => props.theme.lighterTaupe};
  text-align: left;
`;

const SubHeader = styled.a`
  color: ${props => props.theme.white};
  text-align: left;
  cursor: pointer;
`;

const ElementContainer = styled.div`
  background-image: linear-gradient(
    45deg,
    ${props => props.theme.lightBlue},
    ${props => props.theme.lightNavy}
  );
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem 0rem;
  box-shadow: ${props => props.theme.darkBoxShadow};
  font-weight: 100;
`;

const TitleContainer = styled(ElementContainer)`
  background-image: linear-gradient(
    45deg,
    ${props => props.theme.darkBlue},
    ${props => props.theme.darkTaupe}
  );
  font-weight: 900;
`;

const Grid = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem 10rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled(animated.div)`
  display: flex;
`;

const DetailsHeader = styled.h2`
  color: ${props => props.theme.white};
  margin: 1rem 0rem;
`;

const designElements = [
  'Consultation',
  'Creation of technical documents',
  'Pattern Making',
  'Pattern Grading',
];

const developmentElements = [
  'Component Selection',
  'Component Sourcing',
  'Sample Sewing',
];

const productionElements = [
  'Logistics Management',
  'Preparation of raw materials',
  'Cutting',
  'Sewing',
  'Finishing',
];

const supplyElements = [
  'Quality control',
  'Warehousing',
  'Financing for fully factored items',
];

const sections = ['Design', 'Development', 'Production', 'Supply'];

const ServicesPage = () => {
  const [selectedDetail, setSelectedDetail] = useState('');
  const [animateOptionsIn, setAnimateOptionsIn] = useState(true);
  const [animateDetailsIn, setAnimateDetailsIn] = useState(false);

  const [isDefaultView, setIsDefaultView] = useState(true);

  const headerTrailRef = useRef(null);
  const designTrailRef = useRef(null);
  const developmentTrailRef = useRef(null);
  const productionTrailRef = useRef(null);
  const supplyTrailRef = useRef(null);

  const animationOptions = {
    config: {
      clamp: true,
      mass: 1,
      tension: 120,
      friction: 8,
    },
    transform: animateOptionsIn ? 'scale(1)' : 'scale(0.5)',
    opacity: animateOptionsIn ? 1 : 0,
    from: {
      opacity: animateOptionsIn ? 0 : 1,
      transform: animateOptionsIn ? 'scale(0.5)' : 'scale(1)',
    },
  };

  const detailsAnimationOptions = {
    config: {
      clamp: true,
      mass: 1,
      tension: 120,
      friction: 8,
    },
    transform: animateDetailsIn ? 'scale(1)' : 'scale(0.5)',
    opacity: animateDetailsIn ? 1 : 0,
    from: {
      opacity: animateDetailsIn ? 0 : 1,
      transform: animateDetailsIn ? 'scale(0.5)' : 'scale(1)',
    },
  };

  const detailsSpring = useSpring({ ...detailsAnimationOptions });

  const headerTrail = useTrail(sections.length, {
    ...animationOptions,
    ref: headerTrailRef,
  });

  const designTrail = useTrail(designElements.length, {
    ...animationOptions,
    ref: designTrailRef,
  });

  const developmentTrail = useTrail(developmentElements.length, {
    ...animationOptions,
    ref: developmentTrailRef,
  });

  const productionTrail = useTrail(productionElements.length, {
    ...animationOptions,
    ref: productionTrailRef,
  });

  const supplyTrail = useTrail(supplyElements.length, {
    ...animationOptions,
    ref: supplyTrailRef,
  });

  useChain(
    [
      headerTrailRef,
      designTrailRef,
      developmentTrailRef,
      productionTrailRef,
      supplyTrailRef,
    ],
    [0, 0.1, 0.2, 0.3, 0.4, 0.6]
  );

  const handleOptionClick = (option: string) => {
    setSelectedDetail(option);
    setAnimateOptionsIn(false);
    setTimeout(() => {
      setIsDefaultView(false);
      setAnimateDetailsIn(true);
    }, 600);
  };

  const handleDetailsClick = () => {
    setAnimateDetailsIn(false);
    setTimeout(() => {
      setIsDefaultView(true);
      setAnimateOptionsIn(true);
    }, 250);
  };

  return (
    <Layout>
      <>
        <StickyHeader />
        <Body>
          <Header>Services</Header>
          <Detail>Select an option to view more details</Detail>
          {isDefaultView ? (
            <Grid>
              {headerTrail.map((props, index) => (
                <animated.div style={props}>
                  <TitleContainer>
                    <SubHeader
                      onClick={() => handleOptionClick(sections[index])}
                    >
                      {sections[index]}
                    </SubHeader>
                  </TitleContainer>
                </animated.div>
              ))}
              <ColumnContainer>
                {designTrail.map((props, index) => (
                  <animated.div style={props}>
                    <ElementContainer>
                      <SubHeader
                        onClick={() => handleOptionClick(designElements[index])}
                      >
                        {designElements[index]}
                      </SubHeader>
                    </ElementContainer>
                  </animated.div>
                ))}
              </ColumnContainer>
              <ColumnContainer>
                {developmentTrail.map((props, index) => (
                  <animated.div style={props}>
                    <ElementContainer>
                      <SubHeader
                        onClick={() =>
                          handleOptionClick(developmentElements[index])
                        }
                      >
                        {developmentElements[index]}
                      </SubHeader>
                    </ElementContainer>
                  </animated.div>
                ))}
              </ColumnContainer>
              <ColumnContainer>
                {productionTrail.map((props, index) => (
                  <animated.div style={props}>
                    <ElementContainer>
                      <SubHeader
                        onClick={() =>
                          handleOptionClick(productionElements[index])
                        }
                      >
                        {productionElements[index]}
                      </SubHeader>
                    </ElementContainer>
                  </animated.div>
                ))}
              </ColumnContainer>
              <ColumnContainer>
                {supplyTrail.map((props, index) => (
                  <animated.div style={props}>
                    <ElementContainer>
                      <SubHeader
                        onClick={() => handleOptionClick(supplyElements[index])}
                      >
                        {supplyElements[index]}
                      </SubHeader>
                    </ElementContainer>
                  </animated.div>
                ))}
              </ColumnContainer>
            </Grid>
          ) : (
            <DetailsContainer
              style={detailsSpring}
              onClick={handleDetailsClick}
            >
              <DetailsHeader>{selectedDetail}</DetailsHeader>
            </DetailsContainer>
          )}
        </Body>
      </>
    </Layout>
  );
};

export default ServicesPage;
