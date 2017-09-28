
import {Base} from './Base';
import {say, log} from "./common";

/* Decorators showcase code */
//let obj1 = Base();
//obj1.say();
//say('Hello');

say('Start executing Main file');


let obj1 = new Base(22);
console.log(obj1);
obj1.say('talking object');