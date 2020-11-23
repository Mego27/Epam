function printListOfLetters(word) {
  const arrayOfLetters = [...word];
  arrayOfLetters.forEach((letter, index) => {
    if (index % 2 !== 0) {
      console.log(`${(index + 1) / 2}. ${letter}`);
    }
  });
}
