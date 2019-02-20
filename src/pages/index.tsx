import { TweenMax } from 'gsap';
import { throttle } from 'lodash';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BezierCurves } from '../components/BezierCurve/BezierCurves';
import {
  Button,
  Header,
  HeaderBody,
  SubHeader,
  Title,
} from '../components/Home';
import { Main } from '../components/Home/Main';
import { StickyHeader } from '../components/Home/StickyHeader';
import Layout from '../components/Layout';
import styled from '../styled-components/styled-components';
import headerImage from '../Images/slidebergan.jpg';

const IndexPage = () => {
  let titleRef: HTMLHeadingElement | null;
  let headerRef: HTMLHeadingElement | null;
  let subHeaderRef: HTMLHeadingElement | null;
  let buttonRef: HTMLButtonElement | null;

  const [flattenAmount, setFlattenAmount] = useState(0);

  useEffect(() => {
    TweenMax.staggerFrom(
      [titleRef, headerRef, subHeaderRef, buttonRef],
      2,
      { opacity: 0 },
      0.4
    );
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttle(() => handleScroll(), 16));
  });

  const handleScroll = () => {
    const scrollAmount =
      (window.innerHeight - window.scrollY) / window.innerHeight;
    setFlattenAmount(1 - scrollAmount);
  };

  const handleLearnMoreClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const Image = styled.img`
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    opacity: ${(1 - flattenAmount) / 10};
    height: 100vh;
  `;

  return (
    <Layout>
      <>
        <HeaderBody>
          <Image src={headerImage} />
          <div>
            <Title ref={ref => (titleRef = ref)}>DS Textile Sourcing</Title>
            <Header ref={ref => (headerRef = ref)}>
              Fully factored garment production
            </Header>
            <SubHeader ref={ref => (subHeaderRef = ref)}>
              From concept to complete
            </SubHeader>
            <Button
              ref={ref => (buttonRef = ref)}
              onClick={() => handleLearnMoreClick()}
            >
              Learn More
            </Button>
            <BezierCurves flattenAmount={flattenAmount} />
          </div>
        </HeaderBody>
        <div style={{ height: '100vh' }}>
          {flattenAmount >= 1 ? (
            <>
              <StickyHeader />
              <Main />
            </>
          ) : null}
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;
