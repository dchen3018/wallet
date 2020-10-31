//import { Hello } from "./hello"
//const Hello = require('./hello').Hello
const { Hello } = require('./hello');
const { Obj1 } = require('./hello');

function sayHello() {
  let hello = new Hello('load module test');
  hello.say;
  Obj1.sayHello();
};

sayHello();
