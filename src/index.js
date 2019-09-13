class Base {
  constructor() {
    return { x: 3 };
  }
  static get x() {
    return 1.5;
  }
}

if (Base.x + Base.x === 3 && new Base().x === Base.x + Base.x) {
  console.log("Nice!");
}
