/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const result = [];
  let searchKey = '';
  for (const char of searchWord) {
    searchKey += char;
    const currentProducts = [];
    for (const product of products) {
      const currentKey = product.slice(0, searchKey.length);
      if (currentKey === searchKey) {
        currentProducts.push(product);
      }
    }

    currentProducts.sort();
    if (currentProducts.length > 2) {
      result.push(currentProducts.slice(0, 3));
    } else {
      result.push(currentProducts);
    }
  }

  return result;
};

console.log(suggestedProducts(['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'));
