import { Readable } from "stream";

const mountains = [
  { name: "Everest", height: 8848 },
  { name: "K2", height: 8611 },
  { name: "Kangchenjunga", height: 8586 },
  { name: "Lhotse", height: 8516 },
  { name: "Makalu", height: 8481 },
];

const mountainStream = Readable.from(mountains);

mountainStream
  .on("data", (mountain) => {
    console.log(`Mountain name: ${mountain.name} with height: ${mountain.height}`);
  })
  .on("end", () => console.log("Finished"));
