const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const CategoryData = await Category.findAll();
  return res.json(CategoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const CategoryData = await Category.findByPk(req.params.id);
  return res.json(CategoryData);
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  const CategoryData = await Category.create(req.body);
  return res.json(CategoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const CategoryData = await Category.update(
    {
      id: req.body.id,
      category_name: req.body.category_name
    },{
      where: {
        id: req.params.id}});

  return res.json(CategoryData)});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const CategoryData = await Category.delete(
    {
      id: req.body.id,
      category_name: req.body.category_name},{
      where: {
        id: req.params.id,
      },});

  return res.json(CategoryData);});

module.exports = router;
