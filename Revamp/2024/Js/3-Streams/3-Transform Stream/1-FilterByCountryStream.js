import { Transform } from "stream";

export class FilterByCountryStream extends Transform {
  constructor(country, options = { objectMode: true }) {
    super(options);
    this.country = country;
  }

  _transform(record, encoding, cb) {
    if (record.country === this.country) {
      this.push(record);
    }

    cb();
  }
}
