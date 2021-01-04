function inputVariablesToString(string, variables) {
  return string.replace(/\$\{\s*(\w+)\s*\}/g, (match, foundVariable) => variables[foundVariable]);
}
const string = 'I saw ${ a  } mens ${b}.';
const object = {
  a: 5,
  b: 'yesterday',
  string: 'I saw ${ a  } mens ${b}.',
};
console.log(inputVariablesToString(string, object));