/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
//BFS, queue
// transfer the arr to graph
var ladderLength = function (beginWord, endWord, wordList) {
  let set = new Set(wordList);
  let q = [[beginWord, 1]]; //q = [["hit", 1]];

  while (q.length > 0) {
    //q = [["hit", 1]];
    let [word, seq] = q.shift();
    //q = [];
    if (word === endWord) return seq; // matched , returned
    for (let i = 0; i < word.length; i++) {
      // "hit".length = 3
      for (let j = 0; j < 26; j++) {
        // loop 26
        let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
        if (set.has(newWord)) {
          set.delete(newWord);
          // all changing 1 letter words (is the words in the set) in the same level, and added to the queue,
          // so step word === endWord will check it
          q.push([newWord, seq + 1]);
        }
      }
    }
  }
  return 0;
};

// console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
// console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
console.log(ladderLength('a', 'c', ['a', 'b', 'c']));
console.log(ladderLength('hot', 'dog', ['hot', 'dog', 'dot']));
