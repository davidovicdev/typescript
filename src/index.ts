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
var products: Product[] = [];
interface IProduct {
  id: number;
  name: string;
  type: string;
  price: string;
  description?: string;
  delete(): void;
}
class Product implements IProduct {
  id: number;
  name: string;
  type: string;
  price: string;
  description?: string | undefined;
  delete(): void {
    console.log("RADI");
  }
  constructor(
    id: number,
    name: string,
    type: string,
    price: string,
    description?: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.description = description;
  }
}

var createButton = document.getElementById("createButton");
var counter = 1;
createButton?.addEventListener("click", function (e) {
  e.preventDefault();
  // VALIDATION
  //        DROPDOWN MENU (TYPES)
  var name = document.getElementById("name") as HTMLInputElement;
  if (name?.value == "") {
    alert("Please enter the product name");
    return;
  }
  var price = document.getElementById("price") as HTMLInputElement;
  var type = document.getElementById("type") as HTMLSelectElement;
  var valueId = type.selectedIndex;
  var valueText = type.options[valueId].text;
  if (valueId == 0) {
    alert("Please choose the type of product");
    return;
  }
  var description = (document.getElementById("description") as HTMLInputElement)
    .value;

  const product = new Product(
    counter,
    name.value,
    valueText,
    price.value,
    description
  );
  counter++;
  products.push(product);
  setTable(products);
});

/* DELETE */
var table = document.getElementById("table") as HTMLTableElement;
function setTable(products: Product[]): void {
  var counter = 1;
  table.innerHTML = "";
  products.forEach((product) => {
    table.innerHTML += `<tr>
    <td>${product.id}</td>
    <td>${product.name}</td>
    <td>${product.type}</td>
    <td>${product.price}</td>
    <td>${product.description}</td>
    <td class='btn btn-danger' onClick='delete2(${product.id})'>X</td>
    </tr>`;
  });
  counter++;
}
function delete2(id: number) {
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
