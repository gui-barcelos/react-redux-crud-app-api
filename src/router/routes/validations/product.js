import Joi from 'joi';

export default {
  // POST /api/products
  createProduct: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number()
    }
  },

  // GET-PUT-DELETE /api/products/:productId
  getProduct: {
    params: {
      productId: Joi.string().required()
    }
  },

  // PUT /api/products/:products
  updateProduct: {
    body: {
      name: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number()
    }
  }
};