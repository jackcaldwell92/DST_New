import * as React from 'react';
import { keyframes } from 'styled-components';
import styled from '../../styled-components/styled-components';
import { bezierCommand } from './bezierCommand';
import { svgPath } from './svgPath';

interface Props {
  yValues: number[];
  fillColor: string;
  opacity: number;
  animationSpeed: number;
}

const move = keyframes`
  0% {
    transform: translate(0px, 0px);
  }

  100% {
    transform: translate(-${window.innerWidth}px, 0px);
  }
`;

const Svg = styled.svg<{ animationSpeed: number }>`
  animation: ${move} ${props => props.animationSpeed}s linear infinite;
`;

export class BezierCurve extends React.Component<Props> {
  width = window.innerWidth;

  points = [
    [0, 250],
    [0, this.props.yValues[0]],
    [(2 * this.width) / 8, this.props.yValues[1]],
    [(2 * this.width) / 4, this.props.yValues[2]],
    [((2 * this.width) / 8) * 3, this.props.yValues[3]],
    [(2 * this.width) / 2, this.props.yValues[4]],
    [((2 * this.width) / 8) * 5, this.props.yValues[5]],
    [((2 * this.width) / 4) * 3, this.props.yValues[6]],
    [((2 * this.width) / 8) * 7, this.props.yValues[7]],
    [2 * this.width, this.props.yValues[8]],
    [2 * this.width, 250],
  ];

  path = <path d={svgPath(this.points, bezierCommand)} />;

  render() {
    return (
      <div style={{ maxWidth: '100vw', opacity: this.props.opacity }}>
        <Svg
          animationSpeed={this.props.animationSpeed}
          width={this.width * 2}
          height={250}
          fill={this.props.fillColor}
        >
          {this.path}
        </Svg>
      </div>
    );
  }
}
