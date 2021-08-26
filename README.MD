# Problem Solving In My Room

## This Repo Related to Problem Solving Challenges And Learning Study Cases

# Hash Table Study Cases At Leetcode [Hash Table]

https://leetcode.com/explore/learn/card/hash-table/182/practical-applications/

### The Principle of Built-in Hash Table

The typical design of built-in hash table is:

- The key value can be any hashable type. And a value which belongs to a hashable type will have a hashcode. This code will be used in the mapping function to get the bucket index.
- Each bucket contains an array to store all the values in the same bucket initially.
  If there are too many values in the same bucket, these values will be maintained in a height-balanced binary search tree instead.
- The average time complexity of both insertion and search is still O(1). And the time complexity in the worst case is O(logN) for both insertion and search by using height-balanced BST. It is a trade-off between insertion and search.

#### Isomorphic String Solution Explaination

we need to cover some criteria like

- We can map a character only to itself or to one other character.
- No two character should map to same character.
- Replacing each character in string s with the character it is mapped to results in string t.

### Usage

- Used to Store Key/Value Pairs
- Provide more information Like (Two Sum Problems)
- aggregate all the information by key

### Design Key

Sometimes you have to Think it over to **Design Suitable Key** When Using Hahs Table Given Array
of Strings, Group Anagram so at this case it's Better to Sort the Key Before add it to The Hash Table

- All Values Belong to The Same Group Will Be Mapped in the Same Group
- Values Which Needed to be Separated into Different Groups Will Not Be Mapped into the Same Group
  Examples:
- Group Anagram
- Valid Sudoku
- Find Duplicate at Sub Tree (Very Important Example of How you Must Think about Design Hash Table Key)

### Practical Examplea

##### Contains Duplicat

https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1112/

```javascript
var containsDuplicate = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};
```

##### Single Number

https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1176/

```javascript
var singleNumber = function (nums) {
  const map = new Map();
  for (const num of nums) map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);

  for (const [key, value] of map) if (value === 1) return key;
};
```

##### Intersection of Two Arrays

https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1105/

```javascript
var intersection = function (nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();
  for (const num of nums1) set1.add(num);
  for (const num of nums2) set2.add(num);
  return set1.size > set2.size ? findIntersection(set1, set2) : findIntersection(set2, set1);
};

const findIntersection = (set1, set2) => {
  const result = [];
  for (const val of set1) if (set2.has(val)) result.push(val);
  return result;
};
```

##### Happy Number

https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1131/

```javascript
function isHappy(num) {
  var m, n;
  var c = [];

  while (num != 1 && c[num] !== true) {
    c[num] = true;
    m = 0;
    while (num > 0) {
      n = num % 10;
      m += n * n;
      num = (num - n) / 10;
    }
    num = m;
  }
  return num == 1;
}
```

##### Two Sum

https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1115/

```javascript
var twoSum = function (nums, target) {
  const numMap = new Map();
  const map2 = new Map();
  for (let i = 0; i < nums.length; i++) {
    numMap.set(i, nums[i]);
    map2.set(nums[i], i);
  }

  for (const [index, num] of numMap) {
    if (map2.has(target - num) && index !== map2.get(target - num)) return [index, map2.get(target - num)];
  }
};
```

##### Isomorphic Strings

https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1117/

```javascript
var isIsomorphic = function (s, t) {
  var sDict = new Map();
  var tDict = new Map();
  for (var i = 0; i < s.length; i++) {
    var sc = s[i];
    var tc = t[i];
    // If both dictionaries do not have their respective characters mapped yet,
    // then we should set them
    if (!sDict.has(sc) && !tDict.has(tc)) {
      sDict.set(sc, tc);
      tDict.set(tc, sc);
    }
    // If either char does not match then it is not isomorphic
    if (sDict.get(sc) !== tc || tDict.get(tc) !== sc) {
      return false;
    }
  }
  return true;
};
```

##### Minimum Index Sum of Two Lists

https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1177/

```javascript
var findRestaurant = function (list1, list2) {
  const list1Map = new Map();
  const commonMap = new Map();
  let leastIndex = Number.MAX_SAFE_INTEGER;
  let result;
  for (let i = 0; i < list1.length; i++) list1Map.set(list1[i], i);

  for (let i = 0; i < list2.length; i++)
    if (list1Map.has(list2[i])) commonMap.set(list2[i], list1Map.get(list2[i]) + i);

  for (const [val, sumIndex] of commonMap)
    if (sumIndex < leastIndex) {
      result = val;
      leastIndex = sumIndex;
    }

  const commonMapValues = [...commonMap.values()];
  if (commonMapValues.length > 1 && commonMapValues.every((val, i, arr) => val === arr[0]))
    return [...commonMap.keys()];

  return [result];
};
```

##### First Unique Character in a String

https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1120/

```javascript
var firstUniqChar = function (s) {
  const strMap = {};
  for (let i = 0; i < s.length; i++) strMap[s[i]] ? strMap[s[i]]['count']++ : (strMap[s[i]] = { count: 1, index: i });

  for (const char in strMap) if (strMap[char]['count'] === 1) return strMap[char]['index'];

  return -1;
};
```

##### Intersection of Two Arrays ||

https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1178/

```javascript
var intersect = function (nums1, nums2) {
  const numsMap1 = new Map();
  const numsMap2 = new Map();
  const result = [];

  for (const num of nums1) numsMap1[num] ? numsMap1[num]++ : (numsMap1[num] = 1);
  for (const num of nums2) numsMap2[num] ? numsMap2[num]++ : (numsMap2[num] = 1);
  const findIntersect = (map1, map2) => {
    for (const key in map1)
      if (map2[key]) {
        let numOfIterate = map1[key];
        if (map1[key] > map2[key]) numOfIterate = map2[key];
        for (let i = 0; i < numOfIterate; i++) result.push(key);
      }
  };

  numsMap1.size > numsMap2.size ? findIntersect(numsMap1, numsMap2) : findIntersect(numsMap2, numsMap1);

  return result;
};
```

##### Contains Duplicate II

https://leetcode.com/explore/learn/card/hash-table/184/comparison-with-other-data-structures/1121/

```javascript
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) return true;

    map.set(nums[i], i);
  }
  return false;
};
```

##### Group Anagrams

https://leetcode.com/explore/learn/card/hash-table/185/hash_table_design_the_key/1124/

```javascript
var groupAnagrams = function (strs) {
  const anagramMap = {};
  for (const str of strs) {
    const sortedStr = [...str].sort().join('');
    anagramMap[sortedStr] ? anagramMap[sortedStr].push(str) : (anagramMap[sortedStr] = [str]);
  }
  return Object.values(anagramMap);
};
```

##### Valid Sudoku

https://leetcode.com/explore/learn/card/hash-table/185/hash_table_design_the_key/1126/

```javascript
function isValidSudoku(board) {
  let rows = [];
  let columns = [];
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    rows.push([]);
    columns.push([]);
    boxes.push([]);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let cell = board[i][j];

      if (cell !== '.') {
        if (rows[i].includes(cell)) {
          return false;
        } else rows[i].push(cell);

        if (columns[j].includes(cell)) {
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          return false;
        } else boxes[boxIndex].push(cell);
      }
    }
  }

  return true;
}
```

##### Find Duplicate Subtrees

https://leetcode.com/explore/learn/card/hash-table/185/hash_table_design_the_key/1127/

```javascript
var findDuplicateSubtrees = function (root) {
  let roots = {};
  let result = [];
  function traversePreOrder(node) {
    if (!node) return;

    let path = node.val.toString() + '-' + traversePreOrder(node.left) + '-' + traversePreOrder(node.right);

    if (!roots[path]) {
      roots[path] = 1;
    } else if (roots[path] == 1) {
      result.push(node);
      roots[path]++;
    }
    return path;
  }

  traversePreOrder(root);
  return result;
};
```

##### Jewels and Stones

https://leetcode.com/explore/learn/card/hash-table/187/conclusion-hash-table/1136/

```javascript
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set();
  let count = 0;
  for (const jewel of jewels) jewelsSet.add(jewel);
  for (const stone of stones) if (jewelsSet.has(stone)) count++;
  return count;
};
```
