import { TweenMax } from 'gsap';
import * as React from 'react';
import { useEffect } from 'react';
import { BezierCurves } from '../components/BezierCurve/BezierCurves';
import {
  Button,
  Header,
  HeaderBody,
  SubHeader,
  Title,
} from '../components/Home';
import Layout from '../components/Layout';

const IndexPage = () => {
  let titleRef: HTMLHeadingElement | null;
  let headerRef: HTMLHeadingElement | null;
  let subHeaderRef: HTMLHeadingElement | null;
  let buttonRef: HTMLButtonElement | null;

  useEffect(() => {
    TweenMax.staggerFrom(
      [headerRef, subHeaderRef, titleRef, buttonRef],
      2,
      { opacity: 0 },
      0.6,
    );
  });

  return (
    <Layout>
      <>
        <HeaderBody>
          <div>
            <Title ref={ref => (titleRef = ref)}>DS Textile Sourcing</Title>
            <Header ref={ref => (headerRef = ref)}>
              Fully factored garment production
            </Header>
            <SubHeader ref={ref => (subHeaderRef = ref)}>
              From concept to complete
            </SubHeader>
            <Button ref={ref => (buttonRef = ref)}>Learn More</Button>
            <BezierCurves />
          </div>
        </HeaderBody>
        <div style={{ height: '100vh' }} />
      </>
    </Layout>
  );
};

export default IndexPage;
