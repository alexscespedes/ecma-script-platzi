function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'US';
    console.log(name, age, country)
}

newUser();

const newAdmin = (name = 'Oscar', age = 32, country = 'CL') => {
    console.log(name, age, country)
}

newAdmin();

