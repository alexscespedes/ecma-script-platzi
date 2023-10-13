function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Alex", "DAVIF", "Oscar", "Emily"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

const array = [5, 4, 3, 2, 1];

for (let numero of array) {
  numero *= 2;
  console.log(numero); // 10 8 6 4 2
}

console.log(array); // [ 5, 4, 3, 2, 1 ]
