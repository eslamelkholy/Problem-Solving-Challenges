import { readFile } from "fs";

function readJson(filename, callback) {
  readFile(filename, "utf-8", (err, data) => {
    if (err) {
      return callback(err);
    }

    try {
      const parsed = JSON.parse(data);
      return callback(null, parsed);
    } catch (err) {
      return callback(err);
    }
  });
}

const cb = (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log("Data = ", data);
};

readJson("valid-json.json", cb);
readJson("invalid-json.json", cb);
