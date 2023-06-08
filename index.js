function distanceFromHqInBlocks(someValue) {
  return someValue < 42 ? 42 - someValue : someValue - 42;
}
function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  const feet = 264;
  return distanceFromHqInBlocks(someValue) * feet;
}
function distanceTravelledInFeet(start, destination) {
  const feet = 264;
  const total = Math.abs(start - destination);
  return total * feet;
}
function calculatesFarePrice(start, destination) {
  let blocks = Math.abs(start - destination);
  const feet = 264;
  const feetLim = feet * blocks;
  if (feetLim <= 399) {
    return 0;
  } else if (400 <= feetLim && feetLim <= 2000) {
    return (feetLim - 400) * 0.02;
  } else if (2000 <= feetLim && feetLim <= 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
