function printListOfLetters(word) {
  const arrayOfLetters = [...word]
  let counter = 1;
  arrayOfLetters.forEach((letter, index) => {
    if (index % 2 !== 0) {
      console.log(`${counter++}. ${letter}`);
    }
  });
}
