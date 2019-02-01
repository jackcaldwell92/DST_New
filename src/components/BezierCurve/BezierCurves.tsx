import * as React from 'react';
import styled from '../../styled-components/styled-components';
import { BezierCurve } from './BezierCurve';

const BezierContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
`;

const bezierCurve1YValues = [150, 200, 50, 175, 150, 200, 50, 175, 150];
const bezierCurve2YValues = [50, 150, 75, 150, 50, 150, 75, 150, 50];
const bezierCurve3YValues = [125, 200, 150, 75, 125, 200, 150, 75, 125];

export const BezierCurves = () => (
  <>
    <BezierContainer>
      <BezierCurve
        yValues={bezierCurve1YValues}
        fillColor="hsl(231, 19%, 65%)"
        opacity={0.1}
        animationSpeed={20}
      />
    </BezierContainer>
    <BezierContainer>
      <BezierCurve
        yValues={bezierCurve2YValues}
        fillColor="hsl(344, 24%, 80%)"
        opacity={0.2}
        animationSpeed={25}
      />
    </BezierContainer>
    <BezierContainer>
      <BezierCurve
        yValues={bezierCurve3YValues}
        fillColor="hsl(332, 8%, 66%)"
        opacity={0.1}
        animationSpeed={16}
      />
    </BezierContainer>
  </>
);
