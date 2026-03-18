const Movie = require('../models/Movie');

class MovieService {
  async getAllMovies() {
    return await Movie.findAll();
  }

  async getMovieById(id) {
    const movie = await Movie.findByPk(id);
    if (!movie) throw new Error("Filme não encontrado");
    return movie;
  }

  async createMovie(data) {
    return await Movie.create(data);
  }

  async updateMovie(id, data) {
    const movie = await this.getMovieById(id);
    return await movie.update(data);
  }

  async deleteMovie(id) {
    const movie = await this.getMovieById(id);
    await movie.destroy();
  }
}

module.exports = new MovieService();