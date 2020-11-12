function convertStyle({
  top: positionTop,
  bottom: positionBottom,
  margin: {
    top: marginTop = 0,
    bottom: marginBottom = 0,
  },
}) {

  return {
    positionTop: positionTop * 2,
    positionBottom: positionBottom * 2,
    marginTop,
    marginBottom,
  };
}
  