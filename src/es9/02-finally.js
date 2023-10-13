const anotherFunction = () => {
    return new Promise((resolve, reject) => {
    if (true) {
        resolve('Hey!!')
    }
    else {
        reject("Not working")
    }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("Done!"));

    