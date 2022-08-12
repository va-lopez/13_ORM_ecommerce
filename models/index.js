// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//when we import models, it has a relationship method like
//"belongs to", amounts to "reference rows"
Product.belongsto(Category, {
  foreignKey:'category_id',
  //other options include onDelete:which means you can choose
  //what happens to the project. If "Cascade" then deletes, if "null" then it sets the foreign key to null. 
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: ProductTag,
  //you can add the "as: " to set an alias
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: ProductTag,
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
