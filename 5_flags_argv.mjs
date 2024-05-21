import { ArgumentParser } from "argparse";

const parser = new ArgumentParser({
  description: "Example of using flags with argv",
});

parser.add_argument("-f", "--flag", {
  help: "A flag argument",
});

console.dir(parser.parse_args());
console.log(parser.parse_args().flag);
