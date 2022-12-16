const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');



// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  const productData = await Product.findAll();
  return res.json(productData);
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', async (req, res) => {
  
  // find a single product by its `id`
  const productData = await Product.findByPk(req.params.id);
  return res.json(productData);
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', async (req, res) => {
  //  req.body should look like this...
  const productData = await Product.create(
    {
      product_name: req.body.product_name,
      price: req.body.price ,
      stock: req.body.stock,
      tagIds: req.body.id,
    }
    );
  return res.json(productData);
    
  
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const CategoryData = await Product.update(
    {
      product_name: req.body.product_name,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id
    },{
      where: {
        id: req.params.id}});

  return res.json(CategoryData)});


router.delete('/:id', async(req, res) => {
  // delete one product by its `id` value
  const productData = await Product.destroy({
    where: {id: req.params.id
      }})

  return res.json(productData);
});

module.exports = router;