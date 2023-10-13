async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log("hello")

async function arrayOfNames(array) {
    for await (let iterator of array) {
        console.log(iterator)
    }
}


const names = arrayOfNames(['Oscar', 'David', 'Lucas'])
console.log('After')