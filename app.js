//Clase productos

class Product {
    constructor (id, title, price, thumbnail) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}


//Clase contenedora

class Container {
    products = [];

    save(object){
        this.products.push({
            id: object.id,
            title: object.title,
            price: object.price,
            thumbnail : object.thumbnail
        })
    }

    getById(Number) {
        let productById;
        for (let i = 0; i < this.products.length; i++){
            if (this.products[i].id == Number){
                productById = this.products[i];
            }
        }
        return productById;
    }
    
    getAll(){
        return this.products
    }

    deleteById(Number) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id == Number) {
                this.products.splice(i, 1);
            }
        }
    }

    deleteAll(){
        while (this.products.length > 0) {
            this.products.pop();
            }
        }
}


//Creacion de productos

const productOne = new Product(1, "PC", 15000, "https://m.media-amazon.com/images/I/91LSF1iZUFL._AC_SY355_.jpg")
const productTwo = new Product(2, "Keyboard", 5000, "https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_SY450_.jpg")
const productThree = new Product(3, "Mouse", 4000, "https://m.media-amazon.com/images/I/81kFR77tdJL._AC_SY450_.jpg")


//Productos visualizados

console.log(productOne);
console.log(productTwo);
console.log(productThree);


//Save de objetos

const containerOne = new Container();

containerOne.save(productOne);
containerOne.save(productTwo);
containerOne.save(productThree);

//GetById

console.log(containerOne.getById(1))
console.log(containerOne.getById(2))
console.log(containerOne.getById(3))

//getAll

console.log(containerOne.getAll())

//deleteById

console.log(containerOne.deleteById(2))

//deleteAll

console.log(containerOne.deleteAll())