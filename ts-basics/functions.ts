const addition = (a: number, b: number): number => {
  return a + b;
};

function print1(): void {
  console.log("Hello World");
}

//no return type means void

console.log("Addition " + addition(10, 20));
print1();
