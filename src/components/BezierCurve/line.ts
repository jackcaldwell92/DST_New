export const line = (pointA: any, pointB: any) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    angle: Math.atan2(lengthY, lengthX),
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
  };
};
