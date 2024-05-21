import process from "process";

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

console.log("This application run on: ", process.platform);
console.log("Node version is: ", process.version);
console.log("Current directory is: ", process.cwd());
