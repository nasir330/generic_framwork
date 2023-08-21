var faker = require('faker');
var fs = require('fs');
function generateUserData() {
    var users = [];
    for (var i = 0; i < 100; i++) {
        var username = faker.internet.userName();
        var password = faker.internet.password();
        var dob = faker.date.past().toISOString().split('T')[0];
        var phoneNumber = faker.phone.phoneNumber();
        var gender = faker.random.arrayElement(['male', 'female']);
        var sex = faker.random.arrayElement(['Male', 'Female']);
        users.push({
            username: username,
            password: password,
            dob: dob,
            phoneNumber: phoneNumber,
            gender: gender,
            sex: sex,
        });
    }
    return users;
}
var userData = generateUserData();
var jsonData = JSON.stringify(userData, null, 2);
fs.writeFile('users-data.json', jsonData, function (err) {
    if (err) {
        console.error('Error writing JSON data to file:', err);
    }
    else {
        console.log('JSON data saved to users-data.json');
    }
});
