// export function* getId(michis) {
//   for (let value of michis) {
//     yield value;
//   }
// }

// // const id = getId([1, 2, 3, 4, 5]);
// console.log(id.next().value);
// console.log(id.next().value);
// console.log(id.next().value);
// console.log(id.next().value);

export function* getId() {
  let lastId = 1;
  while (true) {
    yield lastId++;
  }
}

const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
