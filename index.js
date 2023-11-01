class Formatter {
  //add static methods here

static capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
///Writing  amethod static sanitize that takes in a string and removes all non-alphanumeric characters
static sanitize(str) {
  return str.replace(/[^A-Za-z0-9-'\s]/g, '');
}
///Writing  amethod that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
static titleize(str) {
  const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  const words = str.split(' ');
  const titleizedWords = words.map((word, index) => {
    if (index === 0 || !exceptions.includes(word)) {
      return this.capitalize(word);
    } else {
      return word;
    }
  });
  return this.capitalize(titleizedWords.join(' '));
}

}