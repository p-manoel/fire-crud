export default class Customer {
  #id: string;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id:string = '') {
    this.#id = id;
    this.#name = name;
    this.#age = age;
  }

  static empty() {
    return new Customer('', 0);
  }

  get id()  {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}