const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "product.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(filecontent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
