"use strict";
/* ZADATAK:
Napraviti projekat Shopping List:
Basic html+css
Input za ime
Dropdown tip proizvoda
Cena
Description(optional)
Create
Delete
Interface sa metodama
Item (id,name,price)
Food,Book etc (pages , calories, isVegetarian etc)
Iskoristiti Type,Interface,generic je plus
 */
var products = [];
class Product {
    constructor(id, name, type, price, description) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.description = description;
    }
    delete() {
        console.log("RADI DELETE DUGME IZ KLASE");
    }
}
var createButton = document.getElementById("createButton");
var counter = 1;
createButton === null || createButton === void 0 ? void 0 : createButton.addEventListener("click", function (e) {
    e.preventDefault();
    // VALIDATION
    //        DROPDOWN MENU (TYPES)
    var name = document.getElementById("name");
    /* if (name?.value == "") {
      alert("Please enter the product name");
      return;
    } */
    var price = document.getElementById("price");
    var type = document.getElementById("type");
    var valueId = type.selectedIndex;
    var valueText = type.options[valueId].text;
    /* if (valueId == 0) {
      alert("Please choose the type of product");
      return;
    } */
    var description = document.getElementById("description")
        .value;
    const product = new Product(counter, name.value, valueText, price.value, description);
    counter++;
    products.push(product);
    setTable(products);
});
/* DELETE */
var table = document.getElementById("table");
function setTable(products) {
    var counter = 1;
    table.innerHTML = "";
    products.forEach((product) => {
        table.innerHTML += `<tr>
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.type}</td>
    <td>${product.price}</td>
    <td>${product.description}</td>
    <td class='btn btn-danger' onClick='test(${product.id})'>DELETE</td>
    </tr>`;
    });
    counter++;
}
function test(id) {
    console.log(products);
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            const index = products.indexOf(products[i], 0);
            if (index > -1) {
                products.splice(index, 1);
            }
        }
    }
    setTable(products);
}
