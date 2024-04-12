function reverse<T>(items: T[]): T[] {
  let reversedArr: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
    reversedArr.push(items[i]);
  }
  return reversedArr;
}

const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverse<string>(names);
console.log(reversedNames)
