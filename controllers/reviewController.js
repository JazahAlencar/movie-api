const reviewService = require('../services/reviewService');

class ReviewController {
  async getAll(req, res) {
    try {
      const reviews = await reviewService.getAllReviews();
      return res.status(200).json(reviews);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const review = await reviewService.getReviewById(id);
      return res.status(200).json(review);
    } catch (error) {
      if (error.message === "Review não encontrada") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;
      const newReview = await reviewService.createReview(data);
      return res.status(201).json(newReview);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedReview = await reviewService.updateReview(id, data);
      return res.status(200).json(updatedReview);
    } catch (error) {
      if (error.message === "Review não encontrada") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await reviewService.deleteReview(id);
      return res.status(204).send();
    } catch (error) {
      if (error.message === "Review não encontrada") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ReviewController();