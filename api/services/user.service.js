const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class UserService {
  constructor() {
  }

  async create(data) {
    const newUser = await models.User.create(data)
    return newUser;
  }

  async find() {
    const res = await models.User.findAll({
      include: ['customer']
    });
    return res;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes)
    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;