import { TweenMax } from 'gsap';
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
import Layout from '../components/Layout';
import { throttle } from 'lodash';

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
    window.addEventListener('scroll', throttle(() => handleScroll(), 100));
  });

  const handleScroll = () => {
    const scrollAmount =
      (window.innerHeight - window.scrollY) / window.innerHeight;
    setFlattenAmount(1 - scrollAmount);
  };

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
            <BezierCurves flattenAmount={flattenAmount} />
          </div>
        </HeaderBody>
        <div style={{ height: '100vh' }} />
      </>
    </Layout>
  );
};

export default IndexPage;
