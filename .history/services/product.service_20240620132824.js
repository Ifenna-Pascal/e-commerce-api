const productModel = require('../schema/product.schema')

class ProductService {
    async createProduct (product) {
        const product = new productModel(product);
        return await product.save();
    }

    async getProducts () {
        const products = await productModel.find().populate('categoryId');
        return products
    }
}