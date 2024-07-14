import { createReadStream } from "fs";
import { createGunzip } from "zlib";
import parse from "csv-parse";
import { SumProfit } from "./2-SumProfitStream.js";
import { FilterByCountryStream } from "./1-FilterByCountryStream.js";

const csvParser = parse({ columns: true });

createReadStream("data.csv.gz")
  .pipe(createGunzip())
  .pipe(csvParser)
  .pipe(new FilterByCountryStream("Italy"))
  .pipe(new SumProfit())
  .pipe(process.stdout);
