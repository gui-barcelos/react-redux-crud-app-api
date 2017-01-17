import Product from '../models/product';

const load = (req, res, next, id) => {
    Product.findById(id)
        .exec()
        .then((product) => {
            req.product = product;

            next();
        });
};

const get = (req, res) => {
    return res.json(req.product);
};

const create = (req, res) => {
    let product = new Product();
    delete req.body._id;
    Object.assign(product, req.body);

    product.save()
        .then((newProduct) => {
            return res.json(newProduct);
        }).catch(error => {
            res.status(500);
        });
};

const update = (req, res) => {
    let product = {};
    Object.assign(req.product, req.body);

    req.product.save()
        .then((updatedProduct) => res.sendStatus(200));
};

const list = (req, res) => {
    const { limit = 50, skip = 0 } = req.query;
    Product.find()
        .skip(skip)
        .limit(limit)
        .exec()
        .then((products) => res.json(products));
};

const remove = (req, res) => {
    const product = req.product;
    product.remove()
        .then(() => res.sendStatus(204));
};

export default { load, get, create, update, list, remove };