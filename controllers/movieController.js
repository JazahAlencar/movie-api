const movieService = require('../services/movieService');

class MovieController {
  async getAll(req, res) {
    try {
      const movies = await movieService.getAllMovies();
      return res.status(200).json(movies);
    } catch (error) {1
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const movie = await movieService.getMovieById(id);
      return res.status(200).json(movie);
    } catch (error) {
      if (error.message === "Filme não encontrado") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newMovie = await movieService.createMovie(data);
      return res.status(201).json(newMovie);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedMovie = await movieService.updateMovie(id, data);
      return res.status(200).json(updatedMovie);
    } catch (error) {
      if (error.message === "Filme não encontrado") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await movieService.deleteMovie(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Filme não encontrado") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MovieController();