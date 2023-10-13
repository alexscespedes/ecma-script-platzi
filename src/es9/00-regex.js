const regex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const matchers = regex.exec('2020-01-01')
console.table(matchers)
