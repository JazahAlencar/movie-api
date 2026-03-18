const Review = require('../models/Review');
const User = require('../models/user');
const Movie = require('../models/Movie');

class ReviewService {
  async getAllReviews() {
    return await Review.findAll({
      include: [User, Movie]
    });
  }

  async getReviewById(id) {
    const review = await Review.findByPk(id, {
      include: [User, Movie]
    });
    if (!review) throw new Error("Review não encontrada");
    return review;
  }

  async createReview(data) {
    return await Review.create(data);
  }

  async updateReview(id, data) {
    const review = await this.getReviewById(id);
    return await review.update(data);
  }

  async deleteReview(id) {
    const review = await this.getReviewById(id);
    await review.destroy();
  }
}

module.exports = new ReviewService();