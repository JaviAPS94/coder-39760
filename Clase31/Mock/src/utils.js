import { faker } from '@faker-js/faker';

faker.locale = "es";

const generateUser = () => {
    const numOfProducts = parseInt(
        faker.random.numeric(1, {
            bannedDigits: ["0"]
        })
    );

    let products = [];

    for(let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct());
    }

    return {
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        sex: faker.name.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        id: faker.database.mongodbObjectId(),
        products,
        jobTitle: faker.name.jobTitle(),
        role: faker.helpers.arrayElement(['cliente','vendedor']),
        premium: faker.datatype.boolean()
    }
}

const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.random.numeric(1),
        id: faker.database.mongodbObjectId(),
        image: faker.image.image(),
        description: faker.commerce.productDescription(),
        code: faker.random.alphaNumeric(10)
    }
}

export {
    generateUser
}