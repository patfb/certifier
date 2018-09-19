#!/usr/bin/env node

var program = require("commander");
let mySet = new Set();

program
  .version("0.1.0")
  .option("-1, --ones", "Run thingV1 and thingN1")
  .option("-2, --twos", "Run thingV2 and thingN2")
  .option("--thingV1", "Run thingV1")
  .option("--thingN1", "Run thingN1")
  .option("--thingV2", "Run thingV2")
  .option("--thingN2", "Run thingN2")
  .parse(process.argv);

console.log("Certifying:");

if (program.ones) {
  console.log("the ones");
  mySet.add("thingV1");
  mySet.add("thingN1");
}
if (program.twos) {
  console.log("the twos");
  mySet.add("thingV2");
  mySet.add("thingN2");
}
if (program.thingV1) {
  mySet.add("thingV1");
  console.log("thingV1");
}
if (program.thingN1) {
  mySet.add("thingN1");
  console.log("thingN1");
}

if (program.thingV2) {
  mySet.add("thingV2");
  console.log("thingV2");
}
if (program.thingN2) {
  mySet.add("thingN2");
  console.log("thingN2");
}

console.log(mySet);

process.env.myArgs = Array.from(mySet);

var Mocha = require("mocha");
var mocha = new Mocha({});

mocha.addFile("./test/myTest.js");

mocha.run();
