const userService = require('../services/userService');

class UserController {
  async getAll(req, res) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      if (error.message === "Usuário não encontrado") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newUser = await userService.createUser(data);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedUser = await userService.updateUser(id, data);
      return res.status(200).json(updatedUser);
    } catch (error) {
      if (error.message === "Usuário não encontrado") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await userService.deleteUser(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Usuário não encontrado") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();