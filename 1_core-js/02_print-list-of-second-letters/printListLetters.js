function printListLetters(word) {
  let counter = 1;
  for (let index = 1; index <= word.length; index += 2) {
    console.log(`${counter++}. ${word[index]}`);
  }
}
