/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const titleArray = title.split(' ');
  let result = '';

  for (let i = 0; i < titleArray.length; i++) {
    if (i !== 0) result += ' ';

    if (titleArray[i].length <= 2) {
      result += titleArray[i].toLowerCase();
    } else {
      result += titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1).toLowerCase();
    }
  }

  return result;
};

console.log(capitalizeTitle('capiTalIze tHe titLe'));
