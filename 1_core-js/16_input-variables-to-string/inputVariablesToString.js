function inputVariablesToString({ string, ...variables }) {
  return string.replace(/\${\s*(\w+)\s*}/g, (match, foundVariable) => variables[foundVariable]);
}
