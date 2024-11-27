// Exercise: 
// Rest API: https://dummyjson.com/users
// Fetch the api data (console.log) || Check
// Create a new array with only name,phone,gender,age (console.log) || Check
// Create a new array with only women (console.log) || Check
// Create a new array with only men (console.log) || Check
// Create a new array with name, phone, gender, age, bloodGroup and eyecolor -> only select the users with blue eyes! (console.log) || Check
// What's the total combined weight of all the users  (console.log) 

// calling the API and fetch function
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
            throw new Error('No response received. Try again later');
        }

        const data = await response.json();

        const users = data.users;

        // Create a new array with only name,phone,gender,age (console.log) 
        // const userInfo = users.map(({firstName, lastName, phone, gender, age}) => ({
        //     firstName,
        //     lastName,
        //     phone,
        //     gender,
        //     age
        // }));

        // console.log(userInfo);

        // Create a new array with only women (console.log)
        // const femaleUsers = users.filter(user => user.gender === 'female');

        // console.log(JSON.stringify(femaleUsers));

        // Create a new array with only men (console.log)
        // const maleUsers = users.filter(user => user.gender === 'male');

        // console.log(JSON.stringify(maleUsers));

        // Create a new array with name, phone, gender, age, bloodGroup and eyecolor -> only select the users with blue eyes! (console.log)
        // const userBlueEyes = users.filter(user => user.eyeColor === 'Blue')
        // .map(({firstName, lastName, phone, gender, age, bloodGroup, eyeColor}) => ({
        //     firstName,
        //     lastName,
        //     phone,
        //     gender,
        //     age,
        //     bloodGroup,
        //     eyeColor
        // }));

        // console.log(userBlueEyes);

        // What's the total combined weight of all the users  (console.log) 
        const totalWeight = users.reduce((total, users) => total + (users.weight), 0);
        console.log(`Total weight of all users: ${totalWeight} kg`);

        // console.log(JSON.stringify(data));
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

fetchData();