class Hello {
  constructor(name) {
    this._name = name;
  }

  get say() {
    console.log("hello " + this._name);
  }
}

const Obj1 = {
  NAME : "load module test",
  sayHello () {
    console.log("hello  " + this.NAME);

  }
}

export { Hello, Obj1 }
