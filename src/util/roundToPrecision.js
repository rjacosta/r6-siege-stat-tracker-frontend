const roundToPrecision = (x, precision) => {
    var y = x + (precision === undefined ? 0.5 : precision / 2);
    return y - (y % (precision === undefined ? 1 : precision));
  };

export default roundToPrecision;