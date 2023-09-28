import { faker } from '@faker-js/faker'

export function generateCartProductsData() {
  // hit api and get all cart products

  //   dummy data for testing
  const cartProductsData = [
    {
      id: 1,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.url(),
      StockQuantity: 10,
      companyName: faker.company.buzzVerb(),
      color: 'red',
      size: 'M'
    },
    {
      id: 2,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
      StockQuantity: 5,
      companyName: faker.company.buzzVerb(),
      color: 'blue',
      size: 'XL'
    },
    {
      id: 3,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
      StockQuantity: 8,
      companyName: faker.company.buzzVerb(),
      color: 'yellow',
      size: 'L'
    }
  ]

  return cartProductsData
}
