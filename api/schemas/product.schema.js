const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const price = Joi.number().integer().min(10);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const price_min = Joi.number().integer();

const createProductSchema = Joi.object({
	name: name.required(),
	price: price.required(),
	description: description.required(),
	image: image.required(),
	categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
	name,
	price,
	description,
	image,
	categoryId,
});

const getProductSchema = Joi.object({
	id: id.required(),
});

const queryProductSchema = Joi.object({
	limit,
	offset,
	price,
	price_min,
	price_max: Joi.when('price_min', {
		is: Joi.number().integer(),
		then: Joi.required(),
	}),
});

module.exports = {
	createProductSchema,
	updateProductSchema,
	getProductSchema,
	queryProductSchema,
};
