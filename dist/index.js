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
var deleteButtons = [];
var products = [];
class Product {
    constructor(name, type, price, description) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.description = description;
    }
    delete() {
        console.log("RADI DELETE DUGME IZ KLASE");
    }
}
var table = document.getElementById("table");
var createButton = document.getElementById("createButton");
createButton === null || createButton === void 0 ? void 0 : createButton.addEventListener("click", function (e) {
    e.preventDefault();
    // VALIDATION
    //        DROPDOWN MENU (TYPES)
    var name = document.getElementById("name");
    if ((name === null || name === void 0 ? void 0 : name.value) == "") {
        alert("Please enter the product name");
        return;
    }
    var price = document.getElementById("price");
    var type = document.getElementById("type");
    var valueId = type.selectedIndex;
    var valueText = type.options[valueId].text;
    if (valueId == 0) {
        alert("Please choose the type of product");
        return;
    }
    var description = document.getElementById("description")
        .value;
    const product = new Product(name.value, valueText, price.value, description);
    products.push(product);
    table === null || table === void 0 ? void 0 : table.innerHTML = "";
    // OUTPUT
    products.forEach((product) => {
        table === null || table === void 0 ? void 0 : table.innerHTML += `<tr>
    <td>${product.name}</td>
    <td>${product.type}</td>
    <td>${product.price}</td>
    <td>${product.description}</td>
    <td class='delete'></td>
    </tr>`;
    });
});
var deleteButton = document.getElementById("deleteButton");
deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener("click", function (e) {
    e.preventDefault();
    var deleteButtons = Array.from(document.getElementsByClassName("delete"));
    deleteButtons.forEach((db) => {
        db.innerHTML = "<button class='text-danger x'>X</button>";
    });
    var xs = Array.from(document.getElementsByClassName("x"));
    xs.forEach((x) => {
        x.addEventListener("click", function (e) {
            var _a;
            console.log("RADI");
            e.preventDefault();
            (_a = x.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement.remove();
        });
    });
});
