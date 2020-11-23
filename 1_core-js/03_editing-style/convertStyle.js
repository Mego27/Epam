function convertStyle({
  top,
  bottom: positionBottom,
  margin: {
    top: marginTop = 0,
    bottom: marginBottom = 0,
  },
}) {
  return {
    positionTop: top * 2,
    positionBottom: positionBottom * 2,
    marginTop,
    marginBottom,
  };
}
