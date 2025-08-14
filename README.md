# 🛍️ MyStore API

Una API REST completa para una tienda en línea desarrollada con Node.js, Express.js y PostgreSQL.

## 📋 Descripción

MyStore API es una aplicación backend robusta que proporciona endpoints para gestionar productos, categorías, usuarios, clientes y pedidos. La API está construida siguiendo las mejores prácticas de desarrollo, incluyendo validación de datos, manejo de errores, y una arquitectura modular y escalable.

## ✨ Características

- **Arquitectura RESTful** con Express.js
- **Base de datos PostgreSQL** con Sequelize ORM
- **Validación de datos** con Joi
- **Manejo de errores** robusto con Boom
- **Middleware de CORS** configurado
- **Logging** con Morgan
- **Migraciones** de base de datos con Sequelize CLI
- **Docker** para desarrollo local
- **Despliegue** en Railway con base de datos PostgreSQL incluida

## 🚀 Tecnologías Utilizadas

- **Backend**: Node.js 22.x, Express.js 5.x
- **Base de Datos**: PostgreSQL 13
- **ORM**: Sequelize 6.x
- **Validación**: Joi 17.x
- **Manejo de Errores**: @hapi/boom 10.x
- **Middleware**: CORS, Morgan
- **Herramientas**: ESLint, Prettier, Nodemon
- **Contenedores**: Docker & Docker Compose

## 📁 Estructura del Proyecto

```
platzi-mystore/
├── api/                    # Código principal de la API
│   ├── index.js           # Punto de entrada de la aplicación
│   ├── middlewares/       # Middlewares personalizados
│   ├── routes/            # Definición de rutas
│   ├── schemas/           # Esquemas de validación
│   └── services/          # Lógica de negocio
├── config/                # Configuraciones
├── db/                    # Base de datos
│   ├── migrations/        # Migraciones de Sequelize
│   ├── models/            # Modelos de datos
│   └── seeders/           # Datos de prueba
├── libs/                  # Librerías y utilidades
└── docker-compose.yml     # Configuración de Docker
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js 22.x o superior
- PostgreSQL 13 o superior (para desarrollo local)
- Docker y Docker Compose (opcional, para desarrollo local)

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd platzi-mystore
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno para desarrollo local**

   ```bash
   cp .env.example .env
   ```

   Editar el archivo `.env` con tus credenciales:

   ```env
   NODE_ENV=development
   PORT=3000
   DB_USER=tu_usuario_db
   DB_PASSWORD=tu_password_db
   DB_HOST=localhost
   DB_NAME=my_store
   DB_PORT=5432
   ```

4. **Configurar base de datos con Docker (recomendado para desarrollo)**

   ```bash
   docker-compose up -d postgres
   ```

5. **Ejecutar migraciones**

   ```bash
   npm run migrations:run
   ```

6. **Iniciar el servidor**

   ```bash
   # Desarrollo
   npm run dev

   # Producción
   npm start
   ```

### 🚀 Despliegue Rápido en Railway

Para desplegar en producción sin configurar base de datos local:

1. **Fork o clona este repositorio**
2. **Ve a [Railway](https://railway.app)**
3. **Conecta tu GitHub y selecciona el repositorio**
4. **Railway detectará automáticamente** la configuración
5. **Agrega un servicio PostgreSQL** desde Railway
6. **¡Listo!** Tu API estará desplegada con base de datos incluida

## 🐳 Docker

El proyecto incluye configuración completa de Docker para **desarrollo local**:

```bash
# Iniciar todos los servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

**Servicios disponibles:**

- **PostgreSQL**: Puerto 5432
- **PgAdmin**: Puerto 5050 (admin@mail.com / root)
- **MySQL**: Puerto 3306 (opcional)
- **phpMyAdmin**: Puerto 8080 (opcional)

> ⚠️ **Nota**: Las credenciales de Docker en `docker-compose.yml` son solo para desarrollo local. En producción, Railway proporciona una base de datos PostgreSQL segura y configurada automáticamente.

## 📚 Endpoints de la API

### Base URL

**Desarrollo local:**

```
http://localhost:3000/api/v1
```

**Producción (Railway):**

```
https://tu-app.up.railway.app/api/v1
```

### Productos

- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener producto por ID
- `POST /products` - Crear nuevo producto
- `PATCH /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto

### Categorías

- `GET /categories` - Obtener todas las categorías
- `GET /categories/:id` - Obtener categoría por ID
- `POST /categories` - Crear nueva categoría
- `PATCH /categories/:id` - Actualizar categoría
- `DELETE /categories/:id` - Eliminar categoría

### Usuarios

- `GET /users` - Obtener todos los usuarios
- `GET /users/:id` - Obtener usuario por ID
- `POST /users` - Crear nuevo usuario
- `PATCH /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Clientes

- `GET /customers` - Obtener todos los clientes
- `POST /customers` - Crear nuevo cliente
- `PATCH /customers/:id` - Actualizar cliente
- `DELETE /customers/:id` - Eliminar cliente

### Pedidos

- `GET /orders/:id` - Obtener pedido por ID
- `POST /orders` - Crear nuevo pedido
- `POST /orders/add-item` - Agregar item al pedido

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Iniciar servidor con nodemon

# Producción
npm start                # Iniciar servidor en producción

# Base de datos
npm run migrations:run   # Ejecutar migraciones
npm run migrations:revert # Revertir última migración
npm run migrations:delete # Revertir todas las migraciones

# Linting
npm run lint             # Ejecutar ESLint
```

## 📊 Modelos de Datos

### Usuario (User)

- `id`: Identificador único
- `email`: Email del usuario (único)
- `password`: Contraseña encriptada
- `role`: Rol del usuario (customer/admin)

### Cliente (Customer)

- `id`: Identificador único
- `name`: Nombre del cliente
- `lastName`: Apellido del cliente
- `phone`: Teléfono del cliente
- `userId`: Referencia al usuario

### Categoría (Category)

- `id`: Identificador único
- `name`: Nombre de la categoría (único)
- `image`: URL de la imagen

### Producto (Product)

- `id`: Identificador único
- `name`: Nombre del producto
- `description`: Descripción del producto
- `price`: Precio del producto
- `image`: URL de la imagen
- `categoryId`: Referencia a la categoría

### Pedido (Order)

- `id`: Identificador único
- `customerId`: Referencia al cliente
- `total`: Total calculado del pedido

## 🔒 Seguridad

- **CORS**: Configurado con lista blanca de orígenes permitidos
- **Validación**: Todos los endpoints validan datos de entrada con Joi
- **Manejo de Errores**: Errores HTTP apropiados con mensajes descriptivos
- **Logging**: Registro de todas las peticiones HTTP
- **Base de Datos**: Conexión SSL en producción (Railway)
- **Variables de Entorno**: Configuración segura para desarrollo y producción

## 🚀 Despliegue

### Railway

El proyecto está optimizado para despliegue en Railway, que proporciona una base de datos PostgreSQL incluida y despliegue automático desde GitHub.

#### Pasos para desplegar en Railway:

1. **Crear cuenta en [Railway](https://railway.app)**
2. **Conectar tu repositorio de GitHub**
3. **Seleccionar el repositorio** `platzi-mystore`
4. **Railway detectará automáticamente** que es una aplicación Node.js
5. **Agregar servicio PostgreSQL** desde Railway
6. **Configurar variables de entorno**:
   - `DATABASE_URL`: URL de conexión de PostgreSQL (se configura automáticamente)
   - `NODE_ENV=production`
   - `PORT`: Puerto asignado por Railway

#### Ejecutar migraciones en Railway:

Una vez desplegado, ejecuta las migraciones desde el terminal de Railway:

```bash
npx sequelize-cli db:migrate
```

### Variables de Entorno de Producción

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:password@host:port/database
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte del curso de Backend con Node.js de Platzi.

## 🙏 Agradecimientos

- **Platzi** por el excelente curso de Backend
- **Express.js** por el framework web
- **Sequelize** por el ORM robusto
- **PostgreSQL** por la base de datos confiable
- **Railway** por la plataforma de despliegue simple y efectiva

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
