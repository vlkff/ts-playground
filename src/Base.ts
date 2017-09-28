/**
 * Created by vlad on 28.09.17.
 */
import {say} from './common';

class Base {
    someVal:any

    constructor(val:any) {
        this.someVal = val;
    }

    say(msg:string) {
        say(msg);
    }
}

export {Base}