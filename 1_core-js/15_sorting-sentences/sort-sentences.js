function compareWords(word1, word2) {
  return (word1.length - word2.length) || word1.localeCompare(word2);
}

function sortSentences(text) {
  const preparedText = text.replace(/[.,()?!:]/g, '').replace(/ +/g, ' ').trim();
  const arrayOfWords = preparedText.split(' ');

  arrayOfWords.sort(compareWords);

  return arrayOfWords;
}
