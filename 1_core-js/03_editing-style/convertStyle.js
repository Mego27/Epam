function convertStyle({
  top,
  bottom,
  margin: {
    top: marginTop = 0,
    bottom: marginBottom = 0,
  },
}) {
  return {
    positionTop: top * 2,
    positionBottom: bottom * 2,
    marginTop,
    marginBottom,
  };
}
