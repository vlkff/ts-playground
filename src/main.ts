
import {Base} from './Base';
import {say} from "./common";

/* Decorators showcase code */
//let obj1 = Base();
//obj1.say();
//say('Hello');
console.log('yo');
say('hey');

let five = '5';
five = 'str';
say(five);

let obj1 = new Base(22);
obj1.say('talking object');