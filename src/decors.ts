/**
 * Created by vlad on 28.09.17.
 */

import {say, log} from './common';

export function decor(__construct) {
    log('call decor');
    log(__construct);
    function __dec_contsruct() {
        log('call __dec_contsruct');
    }
    //return __dec_contsruct;
}

export function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

export function decorAdd(__contruct: any):any {
    log(__contruct, 'target is');

    function __new_construct(arg:any) {
        log('call __new_constructva');
        __contruct.apply(this, [arg]);
        this.newProp = 'new';
    }
    __new_construct.prototype = Object.create(__contruct.prototype);

    return __new_construct;
}

export function decorAddProp(prop:string, value:string):Function {
    function fabrika (__construct) {
        function __new_construct(arg:any) {
            log('call __new_construct');
            __construct.apply(this, [arg]);
            this[prop] = value;
        }
        __new_construct.prototype = Object.create(__construct.prototype);

        return __new_construct;
    }
    return fabrika;
}