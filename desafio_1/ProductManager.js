class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    let product = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };
    let productValues = Object.values(product);
    let productsLength = this.products.length;
    let productCode = this.products.find((e) => e["code"] === code);

    if (!productValues.includes(undefined)) {
      if (productCode === undefined) {
        if (productsLength === 0) {
          product["id"] = 1;
        } else {
          product["id"] = this.products[productsLength - 1]["id"] + 1;
        }
        this.products.push(product);
      } else {
        console.log("El código ingresado esta repetido");
      }
    }else{
        console.log('Se omitió algun dato')
    }
  }
  getProducts() {
    console.log(this.products);
  }
  getProductById(id) {
    let product = this.products.find((e) => e["id"] === id);
    if (product === undefined) {
      console.log("Not Found");
    } else {
      console.log("El producto que corresponde al id ingresado es:", product);
    }
  }
}

const pcComponents = new ProductManager();

pcComponents.getProducts();

pcComponents.addProduct("producto prueba", "Este es un producto prueba",200, "Sin imagen", "abc123", 25);

pcComponents.getProducts();

pcComponents.addProduct("producto prueba", "Este es un producto prueba",200, "Sin imagen", "abc123", 25);

pcComponents.getProductById(1);
