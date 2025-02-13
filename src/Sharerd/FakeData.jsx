import { faker } from '@faker-js/faker';
function randomCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        type:faker.vehicle.type(),
        model: faker.vehicle.model(),
        price:faker.finance.amount({min:1000},{max:20000}),
        gearType:"automatic",
        // year: faker.random.number({min:1900, max:2022}),
        // color: faker.color.hexColor(),
        mileage: faker.number.int({min:0, max:30}),
        image:'https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?t=st=1739385931~exp=1739389531~hmac=132c8a35bb29bc9d50e76cc371cc68061c9ee9cf62b7010b1535660096a6fc6d&w=740',
    }
}
const carList =faker.helpers.multiple(randomCarList,{
    count:7
})
export default{
    carList
}