/* Helper methods */
export function log(log:any, name:string = '') {
  if (name != '') {
    console.log(name + ':');
  }

  console.log(log);
}

export function say(msg:string) {
  let out = `${msg} </br>`;
  document.write(out);
}

export function classLogger() {

  function factory(constructor) {
    function newConstructor() {
      constructor.apply(this);
      console.log('Create ' + constructor);
    }

    return newConstructor;
  }

  return factory;
}
