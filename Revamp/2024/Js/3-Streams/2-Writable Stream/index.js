import { join } from "path";
import { ToFileStream } from "./customWritableStream.js";

const toFileStream = new ToFileStream();

toFileStream.write({ path: join("files", "hello.txt"), content: "Hello" });
toFileStream.write({ path: join("files", "streams.txt"), content: "streams" });

toFileStream.end(() => console.log("Writable stream finished"));
