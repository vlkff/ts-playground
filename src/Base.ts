/**
 * Created by vlad on 28.09.17.
 */
import {say, log} from './common';
import {decorAddProp} from './decors';

@decorAddProp('new_prop', 'new_val')
class Base {
    someVal:any

    constructor(val:any) {
        log('call Base __const')
        this.someVal = val;
    }

    say(msg:string) {
        say(msg);
    }
}

export {Base}