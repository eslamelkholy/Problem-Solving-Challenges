class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (node[char] === undefined) {
        node[char] = {};
      }
      node = node[char];
    }
    node.word = word;
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (node.word !== undefined) return node;
      if (node[char] === undefined) return null;

      node = node[char];
    }
    return node;
  }
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = new Trie();
  const words = sentence.split(" ");
  const result = [];

  for (const word of dictionary) {
    trie.insert(word);
  }

  for (const word of words) {
    const node = trie.search(word);
    node !== null && node.word !== undefined ? result.push(node.word) : result.push(word);
  }

  return result.join(" ");
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));

console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));

console.log(replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"));

console.log(
  replaceWords(
    [
      "e",
      "k",
      "c",
      "harqp",
      "h",
      "gsafc",
      "vn",
      "lqp",
      "soy",
      "mr",
      "x",
      "iitgm",
      "sb",
      "oo",
      "spj",
      "gwmly",
      "iu",
      "z",
      "f",
      "ha",
      "vds",
      "v",
      "vpx",
      "fir",
      "t",
      "xo",
      "apifm",
      "tlznm",
      "kkv",
      "nxyud",
      "j",
      "qp",
      "omn",
      "zoxp",
      "mutu",
      "i",
      "nxth",
      "dwuer",
      "sadl",
      "pv",
      "w",
      "mding",
      "mubem",
      "xsmwc",
      "vl",
      "farov",
      "twfmq",
      "ljhmr",
      "q",
      "bbzs",
      "kd",
      "kwc",
      "a",
      "buq",
      "sm",
      "yi",
      "nypa",
      "xwz",
      "si",
      "amqx",
      "iy",
      "eb",
      "qvgt",
      "twy",
      "rf",
      "dc",
      "utt",
      "mxjfu",
      "hm",
      "trz",
      "lzh",
      "lref",
      "qbx",
      "fmemr",
      "gil",
      "go",
      "qggh",
      "uud",
      "trnhf",
      "gels",
      "dfdq",
      "qzkx",
      "qxw",
    ],
    "ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp"
  )
);
