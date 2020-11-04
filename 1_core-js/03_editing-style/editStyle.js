function editStyle(style) {
    let {
      top: positionTop,
      bottom: positionBottom,
      margin: {
        top: marginTop = 0,
        bottom: marginBottom = 0,
      },
    } = style;
  
    return {
      positionTop: positionTop * 2,
      positionBottom: positionBottom * 2,
      marginTop,
      marginBottom,
    };
  }
  