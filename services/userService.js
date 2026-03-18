const User = require('../models/user');

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  }

  async createUser(data) {
    return await User.create(data);
  }

  async updateUser(id, data) {
    const user = await this.getUserById(id);
    return await user.update(data);
  }

  async deleteUser(id) {
    const user = await this.getUserById(id);
    await user.destroy();
  }
}

module.exports = new UserService();