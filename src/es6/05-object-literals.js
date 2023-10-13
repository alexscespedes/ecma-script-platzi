// Enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("gndx", 21, "MX", 1))