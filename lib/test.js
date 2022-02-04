const lights = [true, true];

const val = lights.reduce((prevVal, curVal, curIdx) => {
  if (curVal) {
    const result = prevVal + 1;
    return result;
  }
  return prevVal;
}, 0);
