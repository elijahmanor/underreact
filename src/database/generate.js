const faker = require("faker");
const _ = require("lodash");

module.exports = function () {
    return {
        tacts: _.times(100, function (n) {
            return {
                id: n,
                fullName: faker.name.findName(),
                avatar: faker.internet.avatar(),
                date: faker.date.recent(),
                userName: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
                email: faker.internet.email(),
                message: faker.random.words(faker.random.number({ min: 5, max: 20 }))
            };
        })
    };
};