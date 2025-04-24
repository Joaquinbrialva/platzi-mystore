const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      })
    }
  }

  create(product) {
    // lógica para crear un producto
    const newProduct = { id: faker.string.uuid(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    // lógica para listar productos
    return this.products;
  }

  findOne(id) {
    // lógica para buscar un producto específico
    return this.products.find(item => item.id === id);
  }

  update() {
    // lógica para actualizar un producto
  }

  delete() {
    // lógica para eliminar un producto
  }
}

module.exports = ProductsService;
