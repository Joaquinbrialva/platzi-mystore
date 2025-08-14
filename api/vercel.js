const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {
	logErrors,
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

// Importar servicios
const ProductsService = require('./services/product.service');
const UserService = require('./services/user.service');
const CustomerService = require('./services/customer.service');
const CategoryService = require('./services/category.service');
const OrderService = require('./services/order.service');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const whiteList = ['http://localhost:8080', 'http://127.0.0.1:8080'];
const options = {
	origin: (origin, cb) => {
		if (whiteList.includes(origin) || !origin) {
			cb(null, true);
		} else {
			cb(new Error('no permitido'));
		}
	},
};

app.use(cors(options));

// Instanciar servicios
const productsService = new ProductsService();
const userService = new UserService();
const customerService = new CustomerService();
const categoryService = new CategoryService();
const orderService = new OrderService();

// ===== PRODUCTOS =====
app.get('/api/v1/products', async (req, res) => {
	try {
		const products = await productsService.find(req.query);
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/v1/products/filter', (req, res) => {
	res.send('Yo soy un filter');
});

app.get('/api/v1/products/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const product = await productsService.findOne(id);
		res.json(product);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.post('/api/v1/products', async (req, res) => {
	try {
		const body = req.body;
		const newProduct = await productsService.create(body);
		res.status(201).json(newProduct);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.patch('/api/v1/products/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const product = await productsService.update(id, body);
		res.json(product);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.delete('/api/v1/products/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const rta = await productsService.delete(id);
		res.json(rta);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// ===== CATEGORÍAS =====
app.get('/api/v1/categories', async (req, res) => {
	try {
		const categories = await categoryService.find();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/v1/categories/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const category = await categoryService.findOne(id);
		res.json(category);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.post('/api/v1/categories', async (req, res) => {
	try {
		const body = req.body;
		const newCategory = await categoryService.create(body);
		res.status(201).json(newCategory);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.patch('/api/v1/categories/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const category = await categoryService.update(id, body);
		res.json(category);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.delete('/api/v1/categories/:id', async (req, res) => {
	try {
		const { id } = req.params;
		await categoryService.delete(id);
		res.status(201).json({ id });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// ===== USUARIOS =====
app.get('/api/v1/users', async (req, res) => {
	try {
		const users = await userService.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.get('/api/v1/users/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await userService.findOne(id);
		res.json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.post('/api/v1/users', async (req, res) => {
	try {
		const body = req.body;
		const newUser = await userService.create(body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.patch('/api/v1/users/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const user = await userService.update(id, body);
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.delete('/api/v1/users/:id', async (req, res) => {
	try {
		const { id } = req.params;
		await userService.delete(id);
		res.status(201).json({ id });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// ===== CLIENTES =====
app.get('/api/v1/customers', async (req, res) => {
	try {
		const customers = await customerService.find();
		res.json(customers);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/api/v1/customers', async (req, res) => {
	try {
		const body = req.body;
		const newCustomer = await customerService.create(body);
		res.status(201).json(newCustomer);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.patch('/api/v1/customers/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const customer = await customerService.update(id, body);
		res.status(201).json(customer);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.delete('/api/v1/customers/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await customerService.delete(id);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// ===== PEDIDOS =====
app.get('/api/v1/orders/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const order = await orderService.findOne(id);
		res.json(order);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.post('/api/v1/orders', async (req, res) => {
	try {
		const body = req.body;
		const newOrder = await orderService.create(body);
		res.status(201).json(newOrder);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/api/v1/orders/add-item', async (req, res) => {
	try {
		const body = req.body;
		const newItem = await orderService.addItem(body);
		res.status(201).json(newItem);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Ruta de prueba
app.get('/api', (req, res) => {
	res.send('Hola mi server en express');
});

// Middleware de manejo de errores
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Solo iniciar el servidor si no estamos en Vercel
if (process.env.NODE_ENV !== 'production') {
	app.listen(port, () => {
		console.log(`Running on port ${port}`);
	});
}

// Exportar para Vercel
module.exports = app;
