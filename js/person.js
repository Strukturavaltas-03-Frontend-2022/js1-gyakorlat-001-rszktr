const personDataLog = (users = {}) => {
    const user = Object.assign({
        firstname: 'John',
        lastname: 'Doe',
        age: 33
    }, users);
    return 'My name is ' + user.firstname + ' ' + user.lastname + '. ' + 'I\'m ' + user.age + ' old.';
}