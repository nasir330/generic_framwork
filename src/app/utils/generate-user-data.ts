const faker = require('faker');
const fs = require('fs');

function generateUserData() {
  const users = [];
  for (let i = 0; i < 100; i++) {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const dob = faker.date.past().toISOString().split('T')[0];
    const phoneNumber = faker.phone.phoneNumber();
    const gender = faker.random.arrayElement(['male', 'female']);
    const sex = faker.random.arrayElement(['Male', 'Female']);

    users.push({
      username,
      password,
      dob,
      phoneNumber,
      gender,
      sex,
    });
  }
  return users;
}

const userData = generateUserData();
const jsonData = JSON.stringify(userData, null, 2);

fs.writeFile('users-data.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing JSON data to file:', err);
  } else {
    console.log('JSON data saved to users-data.json');
  }
});
