const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana, lorem kiwi , Apple, etc..';


for(const match of fruit.matchAll(regex)) {
    console.log(match)
}
