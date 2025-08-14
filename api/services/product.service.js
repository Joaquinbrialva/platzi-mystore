const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');
const { Op } = require('sequelize');

class ProductsService {
	constructor() {}

	async create(data) {
		const newProduct = await models.Product.create(data);
		return newProduct;
	}

	async find(query) {
		const options = {
			include: ['category'],
			where: {},
		};
		const { limit, offset, price, price_min, price_max } = query;
		if (limit && offset) {
			options.limit = limit;
			options.offset = offset;
		}
		if (price) {
			options.where.price = price;
		}
		if (price_min && price_max) {
			options.where.price = {
				[Op.gte]: price_min,
				[Op.lte]: price_max,
			};
		} else if (price_min) {
			options.where.price = {
				[Op.gte]: price_min,
			};
		} else if (price_max) {
			options.where.price = {
				[Op.lte]: price_max,
			};
		}
		const products = await models.Product.findAll(options);
		return products;
	}

	async findOne(id) {
		const product = this.products.find((item) => item.id === id);
		if (!product) {
			throw boom.notFound('producto no encontrado');
		}
		if (product.isBlock) {
			throw boom.unauthorized('product is block');
		}
		return product;
	}

	async update(id, changes) {
		const index = this.products.findIndex((item) => item.id === id);
		if (index === -1) {
			throw boom.notFound('producto no encontrado');
		}
		const product = this.products[index];
		this.products[index] = {
			...product,
			...changes,
		};
		return this.products[index];
	}

	async delete(id) {
		const index = this.products.findIndex((item) => item.id === id);
		if (index === -1) {
			throw boom.notFound('product not found');
		}
		this.products.splice(index, 1);
		return { id };
	}
}

module.exports = ProductsService;
